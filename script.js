/* ==========================================================================
   B1 LESEN PRÜFUNGSSIMULATION — APPLIKATIONSLOGIK & ENGINE
   Unterstützt mehrere Modellsätze mit nahtloser Umschaltung,
   Zeitsteuerung, Textmarker-Werkzeugen, interaktiver Aufgabenübersicht,
   Punkteauswertung, automatischer Sitzungsspeicherung und
   unabhängiger Mehrsprachigkeit (Deutsch, Arabisch, Französisch).
   ========================================================================== */

/* ---------------- GLOBAL STATE ---------------- */
let currentTestIndex = 0;
let currentTest = modelTests[currentTestIndex];
let testData = currentTest.parts;

let activeTeil = 1;
const userAnswers = {};
const flaggedQuestions = new Set();
let reviewFilter = 'all';

/* ---------------- MULTILINGUAL STATE ---------------- */
let passageLang = localStorage.getItem('b1_passage_lang') || 'de'; // 'de' | 'ar' | 'fr'
let questionsLang = localStorage.getItem('b1_questions_lang') || 'de'; // 'de' | 'ar' | 'fr'

/* ---------------- TIMER STATE ---------------- */
let timeLeft = (currentTest.timeTotal || 65) * 60;
let timerInterval = null;
let timerRunning = true;
const teilTimers = {}; // { [partId]: { total, remaining, running, started, expiredNotified } }

/* ---------------- HIGHLIGHTER STATE ---------------- */
let activeHighlightTool = 'yellow'; // 'yellow' | 'green' | 'blue' | 'eraser'

/* ---------------- LOCALSTORAGE KEYS ---------------- */
const SESSION_STORAGE_KEY = 'b1_osd_exam_session_v1';
const THEME_STORAGE_KEY = 'b1_exam_theme_pref';

/* ---------------- EMAILJS INTEGRATION ---------------- */
const EMAILJS_SERVICE_ID = "service_553g6eb";
const EMAILJS_TEMPLATE_ID = "template_b1q3byg";
const EMAILJS_PUBLIC_KEY = "vWILUi2Y4Wx1pKGoB";

// Cache to prevent duplicate emails for unchanged Teil snapshots:
// Key: `${testId}_teil_${partId}`, Value: stringified JSON of answers
const sentTeileSnapshots = new Map();
let emailToastTimer = null;

function initEmailService() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
    console.log('[EmailJS] Initialized with Service:', EMAILJS_SERVICE_ID);
  } else {
    console.warn('[EmailJS] SDK not loaded yet.');
  }
}

function showEmailSentToast(msg, isAlert = false) {
  const toast = document.getElementById('emailToast');
  const toastMsg = document.getElementById('emailToastMsg');
  const icon = toast?.querySelector('.email-toast-icon');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  if (icon) {
    icon.textContent = isAlert ? '⏰' : '✓';
    icon.style.background = isAlert ? '#ef4444' : '#10b981';
  }
  if (isAlert) {
    toast.style.borderLeftColor = '#ef4444';
  } else {
    toast.style.borderLeftColor = 'var(--success, #10b981)';
  }

  toast.style.display = 'flex';
  void toast.offsetWidth;
  toast.classList.add('show');

  if (emailToastTimer) clearTimeout(emailToastTimer);
  emailToastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (!toast.classList.contains('show')) {
        toast.style.display = 'none';
      }
    }, 300);
  }, isAlert ? 5000 : 3500);
}

function formatTeilAnswersSummary(t, qs) {
  let lines = [];
  qs.forEach(q => {
    const userVal = userAnswers[q.id];
    const hasAnswered = userVal !== undefined && userVal !== '';
    const isCorrect = hasAnswered && String(userVal).toLowerCase() === String(q.answer).toLowerCase();
    const userDisplay = formatAnswerDisplay(q, userVal);
    const correctDisplay = formatAnswerDisplay(q, q.answer);

    const statusMark = !hasAnswered ? '[– Unbeantwortet]' : (isCorrect ? '[✓ Richtig]' : '[✗ Falsch]');

    lines.push(`• Aufgabe ${q.id}: ${statusMark}`);
    lines.push(`   Kandidat: ${userDisplay}`);
    if (!isCorrect) {
      lines.push(`   Lösung:   ${correctDisplay}`);
    }
    if (q.text) {
      const cleanText = q.text.replace(/\s+/g, ' ').trim();
      lines.push(`   Text:     ${cleanText}`);
    }
    lines.push('');
  });
  return lines.join('\n');
}

function sendTeilResultsEmail(teilId) {
  if (typeof emailjs === 'undefined') {
    console.warn('[EmailJS] Library not available, skipping email send.');
    return;
  }

  const t = testData.find(x => x.id === teilId);
  if (!t) return;

  const qs = allQuestionsOf(t);
  if (!qs || qs.length === 0) return;

  // Check how many questions were answered in this Teil
  const answeredList = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '');
  if (answeredList.length === 0) {
    // No questions answered yet; don't send empty email
    return;
  }

  // Create answers snapshot to avoid duplicate dispatches for identical answers
  const answersSnapshot = JSON.stringify(qs.map(q => ({ id: q.id, ans: userAnswers[q.id] ?? null })));
  const cacheKey = `${currentTest.id || currentTestIndex}_teil_${teilId}`;
  if (sentTeileSnapshots.get(cacheKey) === answersSnapshot) {
    return;
  }

  // Calculate score for this Teil
  let teilCorrect = 0;
  qs.forEach(q => {
    const userVal = userAnswers[q.id];
    if (userVal !== undefined && String(userVal).toLowerCase() === String(q.answer).toLowerCase()) {
      teilCorrect++;
    }
  });

  const pct = Math.round((teilCorrect / qs.length) * 100);
  const rawName = document.getElementById('friendName')?.value?.trim();
  const candidateName = rawName || 'Sirin';

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  const timeLeftStr = `${minutes}:${seconds} Min.`;

  const now = new Date();
  const timestampStr = `${now.toLocaleDateString('de-DE')} um ${now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`;

  const summary = formatTeilAnswersSummary(t, qs);

  const templateParams = {
    candidate_name: candidateName,
    name: candidateName,
    email: 'houssemjouini3@gmail.com',
    test_title: currentTest.title,
    teil_title: t.title,
    teil_score: `${teilCorrect} / ${qs.length} (${pct}%)`,
    time_left: timeLeftStr,
    timestamp: timestampStr,
    answers_summary: summary
  };

  // Mark as sent before/during async call to avoid race conditions
  sentTeileSnapshots.set(cacheKey, answersSnapshot);

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then((response) => {
      console.log(`[EmailJS] Successfully sent results for ${t.title} (${response.status}: ${response.text})`);
      showEmailSentToast(`${t.title}: Antworten übermittelt`);
    })
    .catch((error) => {
      console.error(`[EmailJS] Failed to send email for ${t.title}:`, error);
      // Remove from cache on error so retry is possible
      sentTeileSnapshots.delete(cacheKey);
    });
}

/* ---------------- TRANSLATION HELPERS ---------------- */
function getTrPart(testId, partId, lang) {
  if (lang === 'de' || typeof translationsData === 'undefined') return null;
  return translationsData?.[testId]?.parts?.[String(partId)] || null;
}

function renderLangSwitcherHtml(target, currentLang) {
  return `
    <div class="lang-switch-group" data-target="${target}">
      <button class="lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de" title="Deutsch (LTR)">🇩🇪 DE</button>
      <button class="lang-btn ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr" title="Français (LTR)">🇫🇷 FR</button>
      <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" data-lang="ar" title="العربية (RTL)">🇸🇦 AR</button>
    </div>
  `;
}

/* ---------------- INITIALIZE TEST SELECTOR ---------------- */
function initTestSelector() {
  const select = document.getElementById('modelTestSelect');
  if (!select) return;
  
  select.innerHTML = '';
  modelTests.forEach((t, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = t.title;
    if (idx === currentTestIndex) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener('change', (e) => {
    const newIdx = parseInt(e.target.value, 10);
    if (newIdx !== currentTestIndex) {
      const answeredCount = Object.values(userAnswers).filter(v => v !== undefined && v !== '').length;
      if (answeredCount > 0) {
        if (!confirm('Wenn Sie den Test wechseln, werden Ihre bisherigen Antworten für den aktuellen Test zurückgesetzt. Fortfahren?')) {
          select.value = currentTestIndex;
          return;
        }
      }
      localStorage.removeItem(SESSION_STORAGE_KEY);
      loadModelTest(newIdx);
    }
  });
}

/* ---------------- LOAD / SWITCH MODEL TEST ---------------- */
function loadModelTest(index) {
  currentTestIndex = index;
  currentTest = modelTests[currentTestIndex];
  testData = currentTest.parts;

  // Clear answers & flags
  Object.keys(userAnswers).forEach(k => delete userAnswers[k]);
  flaggedQuestions.clear();
  sentTeileSnapshots.clear();
  Object.keys(teilTimers).forEach(k => delete teilTimers[k]);
  activeTeil = 1;

  // Reset timer
  timeLeft = (currentTest.timeTotal || 65) * 60;
  timerRunning = true;
  updateTimerDisplay();

  // Update header text & badge
  const brandBadge = document.getElementById('brandBadge');
  const brandTitle = document.getElementById('brandTitle');
  const brandSub = document.getElementById('brandSub');
  
  if (brandBadge) brandBadge.textContent = currentTest.badge || 'B1';
  if (brandTitle) brandTitle.textContent = currentTest.examTitle || 'Goethe / ÖSD B1 Prüfungssimulation';
  if (brandSub) brandSub.textContent = currentTest.examSub || `Modul Lesen · 5 Teile · ${currentTest.timeTotal || 65} Minuten`;

  // Ensure test area is shown
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('tabsWrapper').style.display = 'block';
  document.getElementById('testAreaContainer').style.display = 'block';
  document.getElementById('footerBar').style.display = 'block';
  document.getElementById('candidateBanner').style.display = 'flex';

  renderCurrentTeil();
  startTimer();
  saveSession();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- TIMER FUNCTIONS ---------------- */
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerRunning && timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft % 10 === 0) saveSession();
    }
    updateTeilTimersTick();
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  const timerDisplay = document.getElementById('timerDisplay');
  const timerBox = document.getElementById('timerBox');
  if (timerDisplay) {
    timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  if (timerBox) {
    if (timeLeft <= 300) {
      timerBox.classList.add('warning');
    } else {
      timerBox.classList.remove('warning');
    }
  }
}

document.getElementById('timerToggle').addEventListener('click', () => {
  timerRunning = !timerRunning;
  const icon = document.getElementById('timerIcon');
  if (timerRunning) {
    icon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  } else {
    icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  }
  updateActiveTeilTimerDom();
});

/* ---------------- TEIL-SPECIFIC COUNTDOWN TIMER ---------------- */
function getTeilTimerState(teilId, defaultMinutes) {
  if (!teilTimers[teilId]) {
    teilTimers[teilId] = {
      total: (defaultMinutes || 10) * 60,
      remaining: (defaultMinutes || 10) * 60,
      running: false,
      started: false,
      expiredNotified: false
    };
  }
  return teilTimers[teilId];
}

function toggleTeilTimer(teilId, defaultMinutes) {
  const timer = getTeilTimerState(teilId, defaultMinutes);
  if (!timer.started) {
    timer.started = true;
    timer.running = true;
  } else if (timer.remaining <= 0) {
    timer.remaining = timer.total;
    timer.running = true;
    timer.expiredNotified = false;
  } else {
    timer.running = !timer.running;
  }

  updateActiveTeilTimerDom();
  saveSession();
}

function resetTeilTimer(teilId, defaultMinutes) {
  const timer = getTeilTimerState(teilId, defaultMinutes);
  timer.started = false;
  timer.running = false;
  timer.remaining = timer.total;
  timer.expiredNotified = false;
  updateActiveTeilTimerDom();
  saveSession();
}

function updateTeilTimersTick() {
  if (!timerRunning) return;

  let anyTicked = false;
  Object.keys(teilTimers).forEach(idStr => {
    const id = parseInt(idStr, 10);
    const tTimer = teilTimers[id];
    if (tTimer && tTimer.running) {
      anyTicked = true;
      if (tTimer.remaining > 0) {
        tTimer.remaining--;
        if (tTimer.remaining === 0 && !tTimer.expiredNotified) {
          tTimer.expiredNotified = true;
          handleTeilTimerExpired(id);
        }
      }
    }
  });

  if (anyTicked || isTeilTimerActiveOnScreen()) {
    updateActiveTeilTimerDom();
  }
}

function isTeilTimerActiveOnScreen() {
  const timer = teilTimers[activeTeil];
  return Boolean(timer && timer.started);
}

function playTimerChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(784, now);
    gain1.gain.setValueAtTime(0.25, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1046.5, now + 0.2);
    gain2.gain.setValueAtTime(0.28, now + 0.2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.2);
    osc2.stop(now + 0.7);
  } catch (e) {}
}

function handleTeilTimerExpired(teilId) {
  playTimerChime();
  const t = testData.find(x => x.id === teilId);
  const title = t ? t.title : `Teil ${teilId}`;
  const time = t ? t.time : 10;

  const activeLang = activeTeil === 4 ? questionsLang : passageLang;
  let msg;
  if (activeLang === 'ar') {
    msg = `⏰ انتهى الوقت الموصى به لـ ${title} (${time} دقيقة)!`;
  } else if (activeLang === 'fr') {
    msg = `⏰ Le temps recommandé pour ${title} (${time} min.) est écoulé !`;
  } else {
    msg = `⏰ Die empfohlene Zeit für ${title} (${time} Min.) ist abgelaufen!`;
  }
  showEmailSentToast(msg, true);
}

function renderTeilTimerBadgeHtml(t, lang) {
  const timer = getTeilTimerState(t.id, t.time);
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';

  let timeUnit = isAr ? 'دقيقة' : (isFr ? 'min.' : 'Min.');
  let timeStr = `${t.time} ${timeUnit} ▶`;
  let btnClass = 'panel-meta-badge teil-timer-btn';
  let titleTooltip = isAr ? 'انقر لبدء مؤقت هذا الجزء' : (isFr ? 'Cliquer pour démarrer le minuteur de cette partie' : 'Klicken, um den Teil-Timer zu starten');
  let iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  if (timer.started) {
    const mins = Math.floor(Math.abs(timer.remaining) / 60);
    const secs = Math.abs(timer.remaining) % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timer.remaining <= 0) {
      btnClass += ' expired';
      const expiredText = isAr ? 'انتهى الوقت!' : (isFr ? 'Temps écoulé !' : 'Zeit um!');
      timeStr = `00:00 (${expiredText})`;
      titleTooltip = isAr ? 'انتهى الوقت الموصى به لهذا الجزء' : (isFr ? 'Temps recommandé écoulé' : 'Empfohlene Zeit für diesen Teil ist abgelaufen');
      iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else if (timer.running && timerRunning) {
      btnClass += ' running';
      timeStr = formatted;
      titleTooltip = isAr ? 'قيد التشغيل · انقر للإيقاف المؤقت' : (isFr ? 'En cours · Cliquer pour mettre en pause' : 'Timer läuft · Klicken zum Pausieren');
      iconSvg = `<svg class="spin-slow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    } else {
      btnClass += ' paused';
      const pausedText = isAr ? 'مؤقت' : (isFr ? 'Pause' : 'Pause');
      timeStr = `${formatted} (${pausedText})`;
      titleTooltip = isAr ? 'متوقف مؤقتاً · انقر للمتابعة' : (isFr ? 'En pause · Cliquer pour reprendre' : 'Pausiert · Klicken zum Fortsetzen');
      iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`;
    }
  }

  const resetBtnHtml = timer.started ? `
    <span class="teil-timer-reset" onclick="event.stopPropagation(); resetTeilTimer(${t.id}, ${t.time});" title="${isAr ? 'إعادة ضبط' : (isFr ? 'Réinitialiser' : 'Zurücksetzen')}">
      ↺
    </span>
  ` : '';

  return `
    <button type="button" class="${btnClass}" id="teilTimerBtn" onclick="toggleTeilTimer(${t.id}, ${t.time})" title="${titleTooltip}">
      ${iconSvg}
      <span class="teil-timer-text">${timeStr}</span>
      ${resetBtnHtml}
    </button>
  `;
}

function updateActiveTeilTimerDom() {
  const btn = document.getElementById('teilTimerBtn');
  if (!btn) return;
  const t = testData.find(x => x.id === activeTeil);
  if (!t) return;
  const lang = activeTeil === 4 ? questionsLang : passageLang;

  const timer = getTeilTimerState(t.id, t.time);
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';

  let timeUnit = isAr ? 'دقيقة' : (isFr ? 'min.' : 'Min.');
  let timeStr = `${t.time} ${timeUnit} ▶`;
  let titleTooltip = isAr ? 'انقر لبدء مؤقت هذا الجزء' : (isFr ? 'Cliquer pour démarrer le minuteur de cette partie' : 'Klicken, um den Teil-Timer zu starten');
  let iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  btn.className = 'panel-meta-badge teil-timer-btn';

  if (timer.started) {
    const mins = Math.floor(Math.abs(timer.remaining) / 60);
    const secs = Math.abs(timer.remaining) % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timer.remaining <= 0) {
      btn.classList.add('expired');
      const expiredText = isAr ? 'انتهى الوقت!' : (isFr ? 'Temps écoulé !' : 'Zeit um!');
      timeStr = `00:00 (${expiredText})`;
      titleTooltip = isAr ? 'انتهى الوقت الموصى به لهذا الجزء' : (isFr ? 'Temps recommandé écoulé' : 'Empfohlene Zeit für diesen Teil ist abgelaufen');
      iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else if (timer.running && timerRunning) {
      btn.classList.add('running');
      timeStr = formatted;
      titleTooltip = isAr ? 'قيد التشغيل · انقر للإيقاف المؤقت' : (isFr ? 'En cours · Cliquer pour mettre en pause' : 'Timer läuft · Klicken zum Pausieren');
      iconSvg = `<svg class="spin-slow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    } else {
      btn.classList.add('paused');
      const pausedText = isAr ? 'مؤقت' : (isFr ? 'Pause' : 'Pause');
      timeStr = `${formatted} (${pausedText})`;
      titleTooltip = isAr ? 'متوقف مؤقتاً · انقر للمتابعة' : (isFr ? 'En pause · Cliquer pour reprendre' : 'Pausiert · Klicken zum Fortsetzen');
      iconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`;
    }
  }

  const resetBtnHtml = timer.started ? `
    <span class="teil-timer-reset" onclick="event.stopPropagation(); resetTeilTimer(${t.id}, ${t.time});" title="${isAr ? 'إعادة ضبط' : (isFr ? 'Réinitialiser' : 'Zurücksetzen')}">
      ↺
    </span>
  ` : '';

  btn.setAttribute('title', titleTooltip);
  btn.innerHTML = `${iconSvg}<span class="teil-timer-text">${timeStr}</span>${resetBtnHtml}`;
}

/* ---------------- THEME CYCLING (LIGHT -> SEPIA -> DARK) ---------------- */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      let next = 'light';
      if (cur === 'light') next = 'sepia';
      else if (cur === 'sepia') next = 'dark';
      else next = 'light';
      applyTheme(next);
      localStorage.setItem(THEME_STORAGE_KEY, next);
    });
  }
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  const btn = document.getElementById('themeToggle');
  if (!icon) return;

  if (theme === 'sepia') {
    icon.innerHTML = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>';
    if (btn) btn.title = 'Farbschema: Sepia / Warmes Papier (Klicken für Dunkelmodus)';
  } else if (theme === 'dark') {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    if (btn) btn.title = 'Farbschema: Dunkel (Klicken für Hellmodus)';
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    if (btn) btn.title = 'Farbschema: Hell (Klicken für Sepia / Warmes Papier)';
  }
}

/* ---------------- FULLSCREEN TOGGLE ---------------- */
function initFullscreen() {
  const fsBtn = document.getElementById('fullscreenToggle');
  if (!fsBtn) return;

  fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      fsBtn.classList.add('active');
      fsBtn.title = 'Vollbild beenden';
    } else {
      fsBtn.classList.remove('active');
      fsBtn.title = 'Vollbildmodus an/aus';
    }
  });
}

/* ---------------- FONT SIZE CONTROLS ---------------- */
function initFontSizeControls() {
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      document.documentElement.style.setProperty('--text-size', target.dataset.size);
      localStorage.setItem('b1_exam_font_size', target.dataset.size);
    });
  });

  const savedSize = localStorage.getItem('b1_exam_font_size');
  if (savedSize) {
    document.documentElement.style.setProperty('--text-size', savedSize);
    document.querySelectorAll('.font-size-btn').forEach(b => {
      if (b.dataset.size === savedSize) b.classList.add('active');
      else b.classList.remove('active');
    });
  }
}

/* ---------------- TEXT HIGHLIGHTER ENGINE ---------------- */
function initHighlighter() {
  document.querySelectorAll('.hl-tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.hl-tool-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      activeHighlightTool = target.dataset.tool;
    });
  });

  const clearBtn = document.getElementById('clearTeilHighlights');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const passagePanel = document.getElementById('passagePanel');
      if (!passagePanel) return;
      const marks = passagePanel.querySelectorAll('mark.hl-yellow, mark.hl-green, mark.hl-blue, .hl-yellow, .hl-green, .hl-blue');
      if (marks.length === 0) return;
      if (confirm('Möchten Sie alle Textmarkierungen in diesem Lesetext entfernen?')) {
        marks.forEach(m => {
          const parent = m.parentNode;
          while (m.firstChild) parent.insertBefore(m.firstChild, m);
          parent.removeChild(m);
        });
      }
    });
  }

  document.addEventListener('mouseup', handlePassageSelection);
}

function handlePassageSelection() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;

  const passagePanel = document.getElementById('passagePanel');
  if (!passagePanel) return;

  const range = selection.getRangeAt(0);
  if (!passagePanel.contains(range.commonAncestorContainer)) return;

  const selectedText = selection.toString().trim();
  if (!selectedText) return;

  if (activeHighlightTool === 'eraser') {
    const marks = passagePanel.querySelectorAll('mark.hl-yellow, mark.hl-green, mark.hl-blue');
    marks.forEach(m => {
      if (selection.containsNode(m, true)) {
        const parent = m.parentNode;
        while (m.firstChild) parent.insertBefore(m.firstChild, m);
        parent.removeChild(m);
      }
    });
    selection.removeAllRanges();
    return;
  }

  try {
    const mark = document.createElement('mark');
    mark.className = `hl-${activeHighlightTool}`;
    mark.title = 'Klicken zum Ändern oder Radieren';
    mark.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (activeHighlightTool === 'eraser') {
        const parent = mark.parentNode;
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
      } else {
        mark.className = `hl-${activeHighlightTool}`;
      }
    });
    range.surroundContents(mark);
    selection.removeAllRanges();
  } catch (err) {
    // Gracefully ignore cross-boundary selections
  }
}

/* ---------------- HELPER QUESTION ACCESSORS ---------------- */
function allQuestionsOf(t) {
  let qs = [];
  if (t.questions) qs = qs.concat(t.questions);
  if (t.questions2) qs = qs.concat(t.questions2);
  if (t.letters) qs = qs.concat(t.letters.map(l => ({ id: l.id, type: 'letter', kind: 'letter', text: l.who ? `Kommentar von ${l.who}` : (l.text || ''), answer: l.answer })));
  return qs;
}

function getTotalQuestionsCount() {
  return testData.reduce((acc, t) => acc + allQuestionsOf(t).length, 0);
}

/* ---------------- TABS RENDERING ---------------- */
function renderTabs() {
  const tabsContainer = document.getElementById('tabs');
  if (!tabsContainer) return;
  tabsContainer.innerHTML = '';

  testData.forEach(t => {
    const qs = allQuestionsOf(t);
    const answeredCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;
    const isCompleted = answeredCount === qs.length;

    const btn = document.createElement('button');
    btn.className = `tab-btn ${t.id === activeTeil ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    btn.innerHTML = `
      <span>${t.title}</span>
      <span class="tab-badge">${answeredCount}/${qs.length}</span>
    `;
    btn.onclick = () => {
      if (t.id !== activeTeil) {
        sendTeilResultsEmail(activeTeil);
      }
      activeTeil = t.id;
      renderCurrentTeil();
      saveSession();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    tabsContainer.appendChild(btn);
  });
}

/* ---------------- RENDER READING PASSAGE (LEFT PANEL) ---------------- */
function renderPassage(t) {
  const passagePanel = document.getElementById('passagePanel');
  if (!passagePanel) return;

  const trPart = getTrPart(currentTest.id, t.id, passageLang);
  const isAr = passageLang === 'ar';

  if (isAr) {
    passagePanel.classList.add('lang-ar');
    passagePanel.setAttribute('dir', 'rtl');
    passagePanel.setAttribute('lang', 'ar');
  } else {
    passagePanel.classList.remove('lang-ar');
    passagePanel.setAttribute('dir', 'ltr');
    passagePanel.setAttribute('lang', passageLang);
  }

  const timeUnit = isAr ? 'دقيقة' : (passageLang === 'fr' ? 'min.' : 'Min.');
  const textLabel = isAr ? 'النص' : (passageLang === 'fr' ? 'Texte' : 'Text');
  const instructionsText = trPart?.instructions?.[passageLang] || t.instructions;

  let html = `
    <div class="panel-header">
      <div class="panel-title-wrap">
        <div class="panel-title">${t.title} — ${textLabel}</div>
        ${renderLangSwitcherHtml('passage', passageLang)}
      </div>
      ${renderTeilTimerBadgeHtml(t, passageLang)}
    </div>
    <div class="instruction-box">${instructionsText}</div>
  `;

  // Standard articles or blog posts
  if (t.articles) {
    t.articles.forEach((a, aIdx) => {
      const trArt = trPart?.articles?.[aIdx];
      const heading = trArt?.heading?.[passageLang] || a.heading;
      const sub = trArt?.sub?.[passageLang] || a.sub;
      const meta = trArt?.meta?.[passageLang] || a.meta;
      const bodyParas = trArt?.body?.[passageLang] || a.body;
      const signature = trArt?.signature?.[passageLang] || a.signature;
      const source = trArt?.source?.[passageLang] || a.source;

      html += `<div class="reading-text">`;
      if (meta) html += `<div class="article-meta-date">${meta}</div>`;
      if (heading) html += `<h3>${heading}</h3>`;
      if (sub) html += `<div class="article-sub">${sub}</div>`;

      // Body paragraphs
      if (Array.isArray(bodyParas)) {
        bodyParas.forEach(p => html += `<p>${p}</p>`);
      }

      // Sections (e.g. structured rules / notices in Teil 5)
      if (Array.isArray(a.sections)) {
        a.sections.forEach((sec, sIdx) => {
          const trSec = trArt?.sections?.[sIdx];
          const secTitle = trSec?.title?.[passageLang] || sec.title;
          const secItems = trSec?.items?.[passageLang] || sec.items;

          html += `<div style="margin-top:14px; margin-bottom:10px;">`;
          if (secTitle) html += `<h4 style="font-size:15px; font-weight:700; color:var(--text-main); margin-bottom:6px;">${secTitle}</h4>`;
          if (secItems) {
            html += `<ul style="line-height:1.55; font-size:14px; color:var(--text-main);">`;
            secItems.forEach(it => html += `<li style="margin-bottom:4px;">${it}</li>`);
            html += `</ul>`;
          }
          html += `</div>`;
        });
      }

      if (signature) html += `<p style="font-weight:700; margin-top:14px; color:var(--text-main);">${signature}</p>`;
      if (a.footerNote) html += `<div style="font-size:12px; color:var(--text-muted); margin-top:8px;">${a.footerNote}</div>`;
      if (source) html += `<div class="article-source">${source}</div>`;
      html += `</div>`;
    });
  }

  // Teil 3: Authentic Book-Styled Ads Board with Live Assignment Tracker & Translations
  if (t.adsFormatted) {
    const assignedMap = getTeil3Assignments(t);
    const assignedLabel = isAr ? 'في رقم' : (passageLang === 'fr' ? 'Dans n°' : 'In Nr.');

    html += `<div class="ads-board">`;
    t.adsFormatted.forEach(ad => {
      const assignedQid = assignedMap[ad.code];
      const isAssigned = !!assignedQid;
      const trAdText = trPart?.ads?.[ad.code]?.[passageLang];

      let adContent = ad.html;
      if (trAdText) {
        adContent = `<div class="ad-headline" style="font-size:14px; font-weight:700; margin-bottom:6px;">${isAr ? `إعلان ${ad.code}` : `Annonce ${ad.code}`}</div><div style="font-size:13.5px; line-height:1.5;">${trAdText}</div>`;
      }

      html += `
        <div class="ad-wrapper ${ad.tagPos === 'left' ? 'tag-left' : 'tag-right'} ${isAssigned ? 'ad-assigned' : ''}" id="ad-card-${ad.code}">
          <div class="ad-letter-tag">${ad.code}</div>
          ${ad.hasPin ? '<div class="pushpin"></div>' : ''}
          ${isAssigned ? `<div class="ad-assigned-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> ${assignedLabel} ${assignedQid}</div>` : ''}
          <div class="book-ad ${ad.cardClass || ''}">
            ${adContent}
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  // Second article batch (Teil 2)
  if (t.articles2) {
    const instr2 = trPart?.instructions2?.[passageLang] || t.instructions2;
    if (instr2) {
      html += `<div class="instruction-box" style="margin-top:28px;">${instr2}</div>`;
    }
    t.articles2.forEach((a, aIdx) => {
      const trArt2 = trPart?.articles2?.[aIdx];
      const heading = trArt2?.heading?.[passageLang] || a.heading;
      const sub = trArt2?.sub?.[passageLang] || a.sub;
      const bodyParas = trArt2?.body?.[passageLang] || a.body;
      const source = trArt2?.source?.[passageLang] || a.source;

      html += `<div class="reading-text">`;
      if (heading) html += `<h3>${heading}</h3>`;
      if (sub) html += `<div class="article-sub">${sub}</div>`;
      if (Array.isArray(bodyParas)) {
        bodyParas.forEach(p => html += `<p>${p}</p>`);
      }
      if (source) html += `<div class="article-source">${source}</div>`;
      html += `</div>`;
    });
  }

  passagePanel.innerHTML = html;

  // Bind passage language switcher buttons
  passagePanel.querySelectorAll('.lang-switch-group button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      passageLang = btn.dataset.lang;
      localStorage.setItem('b1_passage_lang', passageLang);
      renderPassage(t);
    });
  });
}

/* ---------------- TEIL 3 ASSIGNMENTS HELPER ---------------- */
function getTeil3Assignments(t) {
  const map = {};
  if (t.questions) {
    t.questions.forEach(q => {
      const val = userAnswers[q.id];
      if (val && val !== 'X') {
        map[val] = q.id;
      }
    });
  }
  return map;
}

/* ---------------- RENDER QUESTIONS (RIGHT PANEL) ---------------- */
function renderQuestions(t) {
  const questionsPanel = document.getElementById('questionsPanel');
  if (!questionsPanel) return;

  const trPart = getTrPart(currentTest.id, t.id, questionsLang);
  const isAr = questionsLang === 'ar';

  if (isAr) {
    questionsPanel.classList.add('lang-ar');
    questionsPanel.setAttribute('dir', 'rtl');
    questionsPanel.setAttribute('lang', 'ar');
  } else {
    questionsPanel.classList.remove('lang-ar');
    questionsPanel.setAttribute('dir', 'ltr');
    questionsPanel.setAttribute('lang', questionsLang);
  }

  const qs = allQuestionsOf(t);
  const answeredCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;

  const aufgabenTitle = isAr ? 'الأسئلة' : (questionsLang === 'fr' ? 'Questions' : 'Aufgaben');
  const answeredText = isAr ? `${answeredCount} من ${qs.length} مجاب عليها` : (questionsLang === 'fr' ? `${answeredCount} sur ${qs.length} répondues` : `${answeredCount} von ${qs.length} beantwortet`);
  const exampleLabel = isAr ? 'مثال' : (questionsLang === 'fr' ? 'Exemple' : 'Beispiel');

  let html = `
    <div class="panel-header">
      <div class="panel-title-wrap">
        <div class="panel-title">${aufgabenTitle}</div>
        ${renderLangSwitcherHtml('questions', questionsLang)}
      </div>
      <div class="progress-text">${answeredText}</div>
    </div>
  `;

  // Example pill
  if (t.example) {
    const trEx = trPart?.example;
    const exText = trEx?.[questionsLang]?.text || trEx?.text?.[questionsLang] || t.example.text;
    if (t.example.options) {
      const exOpts = trEx?.[questionsLang]?.options || t.example.options;
      const exLetter = ['a', 'b', 'c'][t.example.answer];
      html += `<div class="example-pill"><strong>${exampleLabel}:</strong> ${exText} → <strong>${exLetter}) ${exOpts[t.example.answer]}</strong></div>`;
    } else if (t.example.who) {
      const whoLabel = trEx?.who || t.example.who;
      html += `<div class="example-pill"><strong>${exampleLabel} (${whoLabel}):</strong> „${exText}“ → <strong>${String(t.example.answer).toUpperCase()}</strong></div>`;
    } else if (t.id === 3) {
      html += `<div class="example-pill"><strong>${exampleLabel}:</strong> ${exText} → ${isAr ? 'الإعلان' : (questionsLang === 'fr' ? 'Annonce' : 'Anzeige')}: <strong>${t.example.answer}</strong></div>`;
    } else {
      const ansLabel = isAr ? (t.example.answer === 'richtig' ? 'صحيح' : 'خطأ') : (questionsLang === 'fr' ? (t.example.answer === 'richtig' ? 'VRAI' : 'FAUX') : String(t.example.answer).toUpperCase());
      html += `<div class="example-pill"><strong>${exampleLabel}:</strong> ${exText} → <strong>${ansLabel}</strong></div>`;
    }
  }

  html += `<div class="question-list">`;

  // Questions (Teile 1, 2, 5)
  if (t.questions && t.id !== 3) {
    t.questions.forEach(q => {
      html += renderSingleQuestionCard(q, trPart);
    });
  }

  // Teil 2 second batch
  if (t.questions2) {
    t.questions2.forEach(q => {
      html += renderSingleQuestionCard(q, trPart, true);
    });
  }

  // Teil 3 Match questions with assigned ad indicators & translations
  if (t.id === 3 && t.adsFormatted) {
    const codes = t.adsFormatted.map(a => a.code);
    const assignedMap = getTeil3Assignments(t);
    const selectPrompt = isAr ? '– اختر الإعلان –' : (questionsLang === 'fr' ? '– Choisir une annonce –' : '– Anzeige wählen –');
    const adWord = isAr ? 'إعلان' : (questionsLang === 'fr' ? 'Annonce' : 'Anzeige');
    const noAdFits = isAr ? 'X (لا يوجد إعلان مناسب)' : (questionsLang === 'fr' ? 'X (Aucune annonce ne convient)' : 'X (Keine Anzeige passt)');
    const alreadyIn = isAr ? 'مستخدم في رقم' : (questionsLang === 'fr' ? 'déjà dans n°' : 'bereits in Nr.');
    const matchLabel = isAr ? 'الإعلان المناسب:' : (questionsLang === 'fr' ? 'Annonce correspondante :' : 'Passende Anzeige:');

    t.questions.forEach(q => {
      const val = userAnswers[q.id] || '';
      const isAnswered = val !== '';
      const isFlagged = flaggedQuestions.has(q.id);
      const qText = trPart?.questions?.[String(q.id)]?.[questionsLang] || q.text;

      let selectOpts = `<option value="">${selectPrompt}</option>`;
      codes.forEach(c => {
        const assignedTo = assignedMap[c];
        let label = `${adWord} ${c}`;
        if (assignedTo && assignedTo !== q.id) {
          label += ` (${alreadyIn} ${assignedTo})`;
        }
        selectOpts += `<option value="${c}" ${val === c ? 'selected' : ''}>${label}</option>`;
      });
      selectOpts += `<option value="X" ${val === 'X' ? 'selected' : ''}>${noAdFits}</option>`;

      html += `
        <div class="question-card ${isAnswered ? 'answered' : ''}" id="question-card-${q.id}" data-qid="${q.id}">
          <div class="question-header">
            <span class="q-number">${q.id}</span>
            <div class="q-title">${qText}</div>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})" title="Frage vormerken">★</button>
          </div>
          <div class="match-select-wrap">
            <label style="font-size:13.5px; font-weight:700; color:var(--text-muted);">${matchLabel}</label>
            <select class="match-select ${isAnswered ? 'filled' : ''}" data-qid="${q.id}">
              ${selectOpts}
            </select>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  questionsPanel.innerHTML = html;

  // Bind questions language switcher buttons
  questionsPanel.querySelectorAll('.lang-switch-group button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      questionsLang = btn.dataset.lang;
      localStorage.setItem('b1_questions_lang', questionsLang);
      renderQuestions(t);
    });
  });

  // Bind radio events
  questionsPanel.querySelectorAll('input[type=radio]').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const qid = parseInt(e.target.name.replace('q', ''), 10);
      let v = e.target.value;
      userAnswers[qid] = (v === 'richtig' || v === 'falsch' || v === 'ja' || v === 'nein') ? v : parseInt(v, 10);
      renderTabs();
      renderQuestions(t);
      updateProgress();
      saveSession();
    });
  });

  // Bind match select events
  questionsPanel.querySelectorAll('select.match-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const qid = parseInt(e.target.dataset.qid, 10);
      userAnswers[qid] = e.target.value;
      renderTabs();
      renderPassage(t);
      renderQuestions(t);
      updateProgress();
      saveSession();
    });
  });
}

/* ---------------- RENDER TEIL 4 (FULL-WIDTH COMFORTABLE VIEW) ---------------- */
function renderTeil4(t) {
  const questionsPanel = document.getElementById('questionsPanel');
  if (!questionsPanel) return;

  const trPart = getTrPart(currentTest.id, t.id, questionsLang);
  const isAr = questionsLang === 'ar';

  if (isAr) {
    questionsPanel.classList.add('lang-ar');
    questionsPanel.setAttribute('dir', 'rtl');
    questionsPanel.setAttribute('lang', 'ar');
  } else {
    questionsPanel.classList.remove('lang-ar');
    questionsPanel.setAttribute('dir', 'ltr');
    questionsPanel.setAttribute('lang', questionsLang);
  }

  const qs = allQuestionsOf(t);
  const answeredCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;

  const partTitle = isAr ? 'الجزء 4 — معرفة الآراء والمواقف' : (questionsLang === 'fr' ? 'Partie 4 — Identifier les opinions' : `${t.title} — Meinungen erkennen`);
  const answeredText = isAr ? `${answeredCount} من ${qs.length} مجاب عليها` : (questionsLang === 'fr' ? `${answeredCount} sur ${qs.length} répondues` : `${answeredCount} von ${qs.length} beantwortet`);
  const timeUnit = isAr ? 'دقيقة' : (questionsLang === 'fr' ? 'min.' : 'Min.');

  const promptBadge = isAr ? 'السؤال الرئيسي للجزء 4' : (questionsLang === 'fr' ? 'Question directrice' : 'Leitfrage für Teil 4');
  const promptText = trPart?.instructions?.[questionsLang] || t.instructions;
  const promptSub = isAr
    ? 'اختر لكل شخص: <strong>نعم</strong> = يؤيد الفكرة المطروحة · <strong>لا</strong> = يرفضها أو يمتلك رأيًا مغايرًا.'
    : (questionsLang === 'fr'
      ? 'Choisissez pour chaque personne : <strong>Oui</strong> = est d\'accord · <strong>Non</strong> = refuse / a un avis différent.'
      : 'Wählen Sie für jeden Kommentar: <strong>Ja</strong> = stimmt der Fragestellung zu · <strong>Nein</strong> = lehnt sie ab / hat eine andere Meinung.');

  const agreePrompt = isAr ? 'هل يؤيد هذا الشخص السؤال المطروح؟' : (questionsLang === 'fr' ? 'Cette personne est-elle d\'accord ?' : 'Stimmt diese Person der Leitfrage zu?');
  const yesLabel = isAr ? 'نعم' : (questionsLang === 'fr' ? 'Oui' : 'Ja');
  const noLabel = isAr ? 'لا' : (questionsLang === 'fr' ? 'Non' : 'Nein');
  const exampleLabel = isAr ? 'مثال' : (questionsLang === 'fr' ? 'Exemple' : 'Beispiel');

  let html = `
    <div class="panel-header">
      <div class="panel-title-wrap">
        <div class="panel-title">${partTitle}</div>
        ${renderLangSwitcherHtml('questions', questionsLang)}
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        ${renderTeilTimerBadgeHtml(t, questionsLang)}
        <div class="progress-text">${answeredText}</div>
      </div>
    </div>
    
    <!-- Pinned Leitfrage for Teil 4 -->
    <div class="teil4-sticky-prompt">
      <div class="teil4-prompt-badge">${promptBadge}</div>
      <div class="teil4-prompt-text">${promptText}</div>
      <div class="teil4-prompt-sub">${promptSub}</div>
    </div>
  `;

  // Example pill
  if (t.example) {
    const trEx = trPart?.example;
    const exWho = trEx?.who || t.example.who;
    const exText = trEx?.text?.[questionsLang] || t.example.text;
    const ansText = isAr ? (t.example.answer === 'ja' ? 'نعم' : 'لا') : (questionsLang === 'fr' ? (t.example.answer === 'ja' ? 'OUI' : 'NON') : String(t.example.answer).toUpperCase());
    html += `
      <div class="example-pill">
        <strong>${exampleLabel} (${exWho}):</strong> „${exText}“ → <strong>${ansText}</strong>
      </div>
    `;
  }

  html += `<div class="letters-list">`;

  if (t.letters) {
    t.letters.forEach(l => {
      const val = userAnswers[l.id];
      const isAnswered = val !== undefined;
      const isFlagged = flaggedQuestions.has(l.id);

      const trLetter = trPart?.letters?.[String(l.id)];
      const authorName = trLetter?.who || l.who;
      const letterText = trLetter?.text?.[questionsLang] || l.text;
      const initial = authorName ? authorName.trim().charAt(0).toUpperCase() : 'L';

      html += `
        <div class="letter-card ${isAnswered ? 'answered' : ''}" id="question-card-${l.id}" data-qid="${l.id}">
          <div class="letter-card-header">
            <div class="author-info-wrap">
              <div class="q-number">${l.id}</div>
              <div class="author-avatar">${initial}</div>
              <div class="author-name">${authorName}</div>
            </div>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${l.id})" title="Aufgabe vormerken">★</button>
          </div>
          <div class="letter-body">„${letterText}“</div>
          <div class="letter-action-row">
            <div class="letter-prompt">${agreePrompt}</div>
            <div class="options-group inline" style="margin-top:0;">
              <label class="option-label ${val === 'ja' ? 'selected' : ''}">
                <input type="radio" name="q${l.id}" value="ja" ${val === 'ja' ? 'checked' : ''}>
                <span class="custom-radio"></span> ${yesLabel}
              </label>
              <label class="option-label ${val === 'nein' ? 'selected' : ''}">
                <input type="radio" name="q${l.id}" value="nein" ${val === 'nein' ? 'checked' : ''}>
                <span class="custom-radio"></span> ${noLabel}
              </label>
            </div>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  questionsPanel.innerHTML = html;

  // Bind language switcher for Teil 4
  questionsPanel.querySelectorAll('.lang-switch-group button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      questionsLang = btn.dataset.lang;
      localStorage.setItem('b1_questions_lang', questionsLang);
      renderTeil4(t);
    });
  });

  // Bind radio events for Teil 4
  questionsPanel.querySelectorAll('input[type=radio]').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const qid = parseInt(e.target.name.replace('q', ''), 10);
      userAnswers[qid] = e.target.value;
      renderTabs();
      renderTeil4(t);
      updateProgress();
      saveSession();
    });
  });
}

function renderSingleQuestionCard(q, trPart, isBatch2 = false) {
  const val = userAnswers[q.id];
  const isAnswered = val !== undefined;
  const isFlagged = flaggedQuestions.has(q.id);
  const isAr = questionsLang === 'ar';

  const trQ = isBatch2 ? trPart?.questions2?.[String(q.id)] : trPart?.questions?.[String(q.id)];
  const qText = trQ?.text?.[questionsLang] || trQ?.[questionsLang] || q.text;
  const optionsArr = trQ?.options?.[questionsLang] || q.options;

  const trueLabel = isAr ? 'صحيح' : (questionsLang === 'fr' ? 'Vrai' : 'Richtig');
  const falseLabel = isAr ? 'خطأ' : (questionsLang === 'fr' ? 'Faux' : 'Falsch');

  let optsHtml = '';
  if (q.type === 'tf') {
    optsHtml = `
      <div class="options-group inline">
        <label class="option-label ${val === 'richtig' ? 'selected' : ''}">
          <input type="radio" name="q${q.id}" value="richtig" ${val === 'richtig' ? 'checked' : ''}>
          <span class="custom-radio"></span> ${trueLabel}
        </label>
        <label class="option-label ${val === 'falsch' ? 'selected' : ''}">
          <input type="radio" name="q${q.id}" value="falsch" ${val === 'falsch' ? 'checked' : ''}>
          <span class="custom-radio"></span> ${falseLabel}
        </label>
      </div>
    `;
  } else if (q.type === 'mcq') {
    const letters = ['a', 'b', 'c'];
    optsHtml = `<div class="options-group">`;
    optionsArr.forEach((opt, idx) => {
      const isSel = val === idx;
      optsHtml += `
        <label class="option-label ${isSel ? 'selected' : ''}">
          <input type="radio" name="q${q.id}" value="${idx}" ${isSel ? 'checked' : ''}>
          <span class="custom-radio"></span>
          <span><strong>${letters[idx]})</strong> ${opt}</span>
        </label>
      `;
    });
    optsHtml += `</div>`;
  }

  return `
    <div class="question-card ${isAnswered ? 'answered' : ''}" id="question-card-${q.id}" data-qid="${q.id}">
      <div class="question-header">
        <span class="q-number">${q.id}</span>
        <div class="q-title">${qText}</div>
        <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})" title="Frage vormerken">★</button>
      </div>
      ${optsHtml}
    </div>
  `;
}

window.toggleFlag = function(qid) {
  if (flaggedQuestions.has(qid)) flaggedQuestions.delete(qid);
  else flaggedQuestions.add(qid);
  const t = testData.find(x => x.id === activeTeil);
  if (t && t.isHoren) {
    const card = document.getElementById(`question-card-${qid}`);
    if (card) {
      const btn = card.querySelector('.flag-btn');
      if (btn) btn.classList.toggle('flagged', flaggedQuestions.has(qid));
    }
  } else {
    renderCurrentTeil();
  }
  saveSession();
};

/* ---------------- HÖREN (LISTENING) ENGINE & SINGLE-PAGE RENDERER ---------------- */
function formatAudioTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

window.seekHorenAudio = function(seconds) {
  const audio = document.getElementById('horenAudioElement');
  if (audio) {
    audio.currentTime = seconds;
    audio.play().catch(() => {});
    updateChapterActiveState(seconds);
  }
};

function updateChapterActiveState(currentTime) {
  const chapterTimes = [
    { time: 1230, idx: 5 }, // 20:30 Teil 4
    { time: 917, idx: 4 },  // 15:17 Teil 3
    { time: 652, idx: 3 },  // 10:52 Teil 2
    { time: 122, idx: 2 },  // 02:02 Teil 1
    { time: 40, idx: 1 },   // 00:40 Beispiel
    { time: 0, idx: 0 }     // 00:00 Einleitung
  ];
  const matched = chapterTimes.find(ch => currentTime >= ch.time);
  const activeIdx = matched ? matched.idx : 0;

  document.querySelectorAll('.horen-ch-btn').forEach((btn, idx) => {
    if (idx === activeIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initHorenAudioDeck() {
  const audio = document.getElementById('horenAudioElement');
  if (!audio) return;

  const playBtn = document.getElementById('horenPlayPauseBtn');
  const iconPlay = playBtn ? playBtn.querySelector('.icon-play') : null;
  const iconPause = playBtn ? playBtn.querySelector('.icon-pause') : null;
  const back10Btn = document.getElementById('horenBack10');
  const fwd10Btn = document.getElementById('horenFwd10');
  const scrubber = document.getElementById('horenScrubber');
  const currentTimeEl = document.getElementById('horenCurrentTime');
  const durationEl = document.getElementById('horenDuration');
  const muteBtn = document.getElementById('horenMuteBtn');
  const volSlider = document.getElementById('horenVolumeSlider');
  const fileInput = document.getElementById('horenAudioFile');
  const statusDot = document.getElementById('horenStatusDot');
  const statusText = document.getElementById('horenStatusText');
  const speedBtns = document.querySelectorAll('.horen-speed-btn');

  let isSeeking = false;

  function updatePlayButtonUI() {
    if (!playBtn || !iconPlay || !iconPause) return;
    if (audio.paused) {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      playBtn.setAttribute('title', 'Wiedergabe starten');
      if (statusDot && statusDot.classList.contains('playing')) {
        statusDot.classList.remove('playing');
        statusDot.classList.add('ready');
      }
    } else {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
      playBtn.setAttribute('title', 'Pause');
      if (statusDot) {
        statusDot.classList.remove('ready');
        statusDot.classList.add('playing');
      }
    }
  }

  // Play / Pause toggle
  if (playBtn) {
    playBtn.onclick = () => {
      if (audio.paused) {
        audio.play().catch(err => {
          console.warn('Playback notice:', err);
          if (statusText) statusText.textContent = 'MP3 nicht gefunden. Bitte MP3-Datei wählen oder in audio/ ablegen.';
        });
      } else {
        audio.pause();
      }
      updatePlayButtonUI();
    };
  }

  // -10s / +10s
  if (back10Btn) {
    back10Btn.onclick = () => {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    };
  }
  if (fwd10Btn) {
    fwd10Btn.onclick = () => {
      const maxTime = audio.duration || 99999;
      audio.currentTime = Math.min(maxTime, audio.currentTime + 10);
    };
  }

  // Scrubber events
  if (scrubber) {
    scrubber.addEventListener('input', () => {
      isSeeking = true;
      if (audio.duration) {
        const previewTime = (parseFloat(scrubber.value) / 100) * audio.duration;
        if (currentTimeEl) currentTimeEl.textContent = formatAudioTime(previewTime);
      }
    });

    scrubber.addEventListener('change', () => {
      if (audio.duration) {
        audio.currentTime = (parseFloat(scrubber.value) / 100) * audio.duration;
      }
      isSeeking = false;
    });
  }

  // Timeupdate
  audio.ontimeupdate = () => {
    if (!isSeeking) {
      if (currentTimeEl) currentTimeEl.textContent = formatAudioTime(audio.currentTime);
      if (scrubber && audio.duration) {
        scrubber.value = (audio.currentTime / audio.duration) * 100;
      }
      updateChapterActiveState(audio.currentTime);
    }
  };

  // Loaded metadata
  audio.onloadedmetadata = () => {
    if (durationEl && audio.duration) {
      durationEl.textContent = formatAudioTime(audio.duration);
    }
    if (statusDot) {
      statusDot.className = 'horen-status-dot ready';
    }
    if (statusText && !audio.src.startsWith('blob:')) {
      statusText.textContent = 'Bereit: audio/hoeren.mp3';
    }
  };

  // Can play
  audio.oncanplay = () => {
    if (statusDot && !statusDot.classList.contains('playing')) {
      statusDot.className = 'horen-status-dot ready';
    }
  };

  // Audio Play / Pause events
  audio.onplay = () => updatePlayButtonUI();
  audio.onpause = () => updatePlayButtonUI();
  audio.onended = () => {
    updatePlayButtonUI();
    if (currentTimeEl) currentTimeEl.textContent = '00:00';
    if (scrubber) scrubber.value = 0;
  };

  // Volume slider
  if (volSlider) {
    volSlider.value = audio.volume;
    volSlider.oninput = () => {
      audio.volume = parseFloat(volSlider.value);
      audio.muted = false;
      if (muteBtn) muteBtn.style.opacity = '1';
    };
  }

  // Mute button
  if (muteBtn) {
    muteBtn.onclick = () => {
      audio.muted = !audio.muted;
      muteBtn.style.opacity = audio.muted ? '0.4' : '1';
    };
  }

  // Speed buttons
  speedBtns.forEach(btn => {
    btn.onclick = () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      audio.playbackRate = parseFloat(btn.dataset.speed || '1.0');
    };
  });

  // Local File Picker
  if (fileInput) {
    fileInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const objUrl = URL.createObjectURL(file);
        audio.src = objUrl;
        audio.load();
        if (statusText) statusText.textContent = `Eigene Datei geladen: ${file.name}`;
        if (statusDot) statusDot.className = 'horen-status-dot ready';
        audio.play().catch(() => {});
      }
    };
  }

  // Error handler
  audio.onerror = () => {
    if (statusText && !audio.src.startsWith('blob:')) {
      statusText.textContent = 'Hinweis: MP3 im Ordner audio/ ablegen oder oben auswählen.';
    }
    if (statusDot && !audio.src.startsWith('blob:')) {
      statusDot.className = 'horen-status-dot';
    }
  };
}

window.selectHorenAnswer = function(qid, val) {
  userAnswers[qid] = val;
  const card = document.getElementById(`question-card-${qid}`);
  if (card) {
    card.classList.add('answered');
    card.querySelectorAll('.tf-btn, .option-pill, .speaker-btn').forEach(btn => {
      if (btn.dataset.val === String(val)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  renderTabs();
  updateProgress();
  saveSession();
};

function renderHorenQuestionCard(q) {
  const val = userAnswers[q.id];
  const isAnswered = val !== undefined && val !== '';
  const isFlagged = flaggedQuestions.has(q.id);
  const isAr = questionsLang === 'ar';
  const trPart = getTrPart(currentTest.id, 6, questionsLang);
  const trQ = trPart?.questions?.[q.id];

  const qText = trQ?.text?.[questionsLang] || trQ?.[questionsLang] || q.text;
  const rawOpts = trQ?.options?.[questionsLang] || q.options;

  let optionsHtml = '';

  if (q.type === 'tf') {
    const isRichtig = String(val).toLowerCase() === 'richtig';
    const isFalsch = String(val).toLowerCase() === 'falsch';
    const trueLabel = isAr ? 'صحيح' : (questionsLang === 'fr' ? 'Vrai' : 'Richtig');
    const falseLabel = isAr ? 'خطأ' : (questionsLang === 'fr' ? 'Faux' : 'Falsch');
    optionsHtml = `
      <div class="tf-options-group">
        <button type="button" class="tf-btn ${isRichtig ? 'active' : ''}" data-val="richtig" onclick="selectHorenAnswer('${q.id}', 'richtig')">
          <span class="radio-dot"></span> ${trueLabel}
        </button>
        <button type="button" class="tf-btn ${isFalsch ? 'active' : ''}" data-val="falsch" onclick="selectHorenAnswer('${q.id}', 'falsch')">
          <span class="radio-dot"></span> ${falseLabel}
        </button>
      </div>
    `;
  } else if (q.type === 'mcq') {
    const letters = ['a', 'b', 'c'];
    const idxVal = typeof val === 'number' ? val : (val !== undefined && val !== '' ? parseInt(val, 10) : null);
    optionsHtml = `
      <div class="mcq-options-group">
        ${rawOpts.map((opt, i) => {
          const isSelected = idxVal === i;
          return `
            <button type="button" class="option-pill ${isSelected ? 'active' : ''}" data-val="${i}" onclick="selectHorenAnswer('${q.id}', ${i})">
              <span class="option-letter">${letters[i]}</span>
              <span class="option-text">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  } else if (q.type === 'speaker') {
    const letters = ['a', 'b', 'c'];
    const idxVal = typeof val === 'number' ? val : (val !== undefined && val !== '' ? parseInt(val, 10) : null);
    let speakerNames = q.options;
    if (isAr) {
      speakerNames = ['منسق الحوار (Moderator)', 'دانا شنايدر (Dana Schneider)', 'فلوريان بادر (Florian Bader)'];
    } else if (questionsLang === 'fr') {
      speakerNames = ['Le modérateur', 'Dana Schneider', 'Florian Bader'];
    }
    optionsHtml = `
      <div class="speaker-options-group">
        ${speakerNames.map((spk, i) => {
          const isSelected = idxVal === i;
          return `
            <button type="button" class="speaker-btn ${isSelected ? 'active' : ''}" data-val="${i}" onclick="selectHorenAnswer('${q.id}', ${i})">
              <span class="speaker-code-badge">${letters[i]}</span>
              <span class="speaker-name">${spk}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  return `
    <div class="question-card horen-q-card ${isAnswered ? 'answered' : ''}" id="question-card-${q.id}" data-qid="${q.id}">
      <div class="question-header">
        <span class="q-number">${q.num}</span>
        <div class="q-title">${qText}</div>
        <button type="button" class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${q.id}')" title="Aufgabe vormerken">★</button>
      </div>
      <div class="q-card-body">
        ${optionsHtml}
      </div>
    </div>
  `;
}

function renderHoren(t) {
  const panel = document.getElementById('questionsPanel');
  if (!panel) return;

  const isAr = questionsLang === 'ar';
  const trPart = getTrPart(currentTest.id, t.id, questionsLang);
  const instructionsText = trPart?.instructions?.[questionsLang] || t.instructions;

  if (isAr) {
    panel.classList.add('lang-ar');
    panel.setAttribute('dir', 'rtl');
    panel.setAttribute('lang', 'ar');
  } else {
    panel.classList.remove('lang-ar');
    panel.setAttribute('dir', 'ltr');
    panel.setAttribute('lang', questionsLang);
  }

  const badgeText = isAr ? '🎧 قسم الاستماع · 40 دقيقة' : (questionsLang === 'fr' ? '🎧 MODULE COMPRÉHENSION ORALE · 40 MINUTES' : '🎧 MODUL HÖREN · 40 MINUTEN');
  const mainTitleText = isAr ? 'شهادة جوته / ÖSD B1 — فهم المسموع' : (questionsLang === 'fr' ? 'Goethe / ÖSD Certificat B1 — Compréhension orale' : 'Goethe / ÖSD Zertifikat B1 — Hörverstehen');

  const t1Title = trPart?.teile?.['1']?.title?.[questionsLang] || 'Fünf kurze Texte · Aufgaben 1 bis 10';
  const t1Desc = trPart?.teile?.['1']?.desc?.[questionsLang] || 'Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.';

  const t2Title = trPart?.teile?.['2']?.title?.[questionsLang] || 'Führung durch das Münchner Stadtmuseum · Aufgaben 11 bis 15';
  const t2Desc = trPart?.teile?.['2']?.desc?.[questionsLang] || 'Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.';
  const t2Sit = isAr ? 'أنت تشارك في جولة إرشادية داخل متحف مدينة ميونخ.' : (questionsLang === 'fr' ? 'Vous participez à une visite guidée du musée de la ville de Munich.' : 'Sie nehmen an einer Führung durch das Münchner Stadtmuseum teil.');

  const t3Title = trPart?.teile?.['3']?.title?.[questionsLang] || 'Gespräch über ein Fest · Aufgaben 16 bis 22';
  const t3Desc = trPart?.teile?.['3']?.desc?.[questionsLang] || 'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.';
  const t3Sit = isAr ? 'أنت في موقف للحافلات وتستمع إلى رجل وامرأة يتحدثان عن حفل.' : (questionsLang === 'fr' ? 'Vous êtes à un arrêt de bus et entendez un homme et une femme parler d\'une fête.' : 'Sie sind an einer Bushaltestelle und hören, wie sich ein Mann und eine Frau über ein Fest unterhalten.');

  const t4Title = trPart?.teile?.['4']?.title?.[questionsLang] || 'Radiodiskussion: Sollen kleine Kinder in die Kinderkrippe gehen? · Aufgaben 23 bis 30';
  const t4Desc = trPart?.teile?.['4']?.desc?.[questionsLang] || 'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.';
  const t4Sit = isAr
    ? 'برنامج «نقاش المساء»: يناقش منسق الحوار مع الوالدين دانا شنايدر وفلوريان بادر حول موضوع: هل ينبغي للأطفال الصغار الذهاب إلى دار الحضانة؟'
    : (questionsLang === 'fr'
      ? 'Émission « Discussion du soir » : Le modérateur débat avec les parents Dana Schneider et Florian Bader sur le thème : Les jeunes enfants devraient-ils aller en crèche ?'
      : 'Der Moderator diskutiert mit den Eltern Dana Schneider und Florian Bader zum Thema: Sollen kleine Kinder in die Kinderkrippe gehen?');

  const exampleBadge = isAr ? 'مثال' : (questionsLang === 'fr' ? 'Exemple' : 'Beispiel');
  const richtigLabel = isAr ? 'صحيح' : (questionsLang === 'fr' ? 'Vrai' : 'Richtig');
  const falschLabel = isAr ? 'خطأ ✓' : (questionsLang === 'fr' ? 'Faux ✓' : 'Falsch ✓');
  const ex1Text = isAr ? 'يقترح فرانك على يان السفر إلى صقلية بالطائرة.' : (questionsLang === 'fr' ? 'Frank propose à Jan de prendre l\'avion pour la Sicile.' : 'Frank schlägt Jan vor, nach Sizilien zu fliegen.');
  const ex2Text = isAr ? 'أين يفضل يان قضاء المبيت؟' : (questionsLang === 'fr' ? 'Où Jan préfère-t-il passer la nuit ?' : 'Wo möchte Frank am liebsten übernachten?');
  const ex2OptA = isAr ? 'عند الأقارب' : (questionsLang === 'fr' ? 'chez des proches' : 'bei Verwandten');
  const ex2OptB = isAr ? 'في الفندق' : (questionsLang === 'fr' ? 'à l\'hôtel' : 'im Hotel');
  const ex2OptC = isAr ? 'في الخيمة ✓' : (questionsLang === 'fr' ? 'sous la tente ✓' : 'im Zelt ✓');

  const ex0Text = isAr ? 'بالنسبة للأطفال الصغار، فإن السنوات الثلاث الأولى مهمة جداً.' : (questionsLang === 'fr' ? 'Pour les jeunes enfants, les trois premières années sont très importantes.' : 'Für kleine Kinder sind die ersten drei Jahre sehr wichtig.');
  const spkMod = isAr ? 'منسق الحوار' : (questionsLang === 'fr' ? 'Le modérateur' : 'Moderator');
  const spkDana = isAr ? 'دانا شنايدر ✓' : (questionsLang === 'fr' ? 'Dana Schneider ✓' : 'Dana Schneider ✓');
  const spkFlorian = isAr ? 'فلوريان بادر' : (questionsLang === 'fr' ? 'Florian Bader' : 'Florian Bader');

  let html = `
    <!-- Top Audio Player Card (Sticky / Top of Page) -->
    <div class="horen-sticky-header">
      <div class="horen-header-top">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
          <div>
            <div class="horen-badge">${badgeText}</div>
            <h2 class="horen-main-title">${mainTitleText}</h2>
            <p class="horen-instructions">${instructionsText}</p>
          </div>
          ${renderLangSwitcherHtml('questions', questionsLang)}
        </div>
      </div>

      <!-- Dedicated HTML5 Audio Deck (Strictly LTR for universal timeline scrubbing) -->
      <div class="horen-audio-deck" id="horenAudioDeck" dir="ltr">
        <div class="horen-deck-top">
          <div class="horen-deck-status">
            <span class="horen-status-dot" id="horenStatusDot"></span>
            <span class="horen-status-text" id="horenStatusText">Audioquelle: audio/hoeren.mp3</span>
          </div>
          <div class="horen-file-select-wrap">
            <label for="horenAudioFile" class="horen-file-btn" title="MP3-Datei von Ihrem Computer auswählen">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <span>MP3 vom PC wählen</span>
            </label>
            <input type="file" id="horenAudioFile" accept="audio/*" style="display:none;">
          </div>
        </div>

        <div class="horen-deck-controls">
          <button type="button" class="horen-skip-btn" id="horenBack10" title="10 Sekunden zurück">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            <span>-10s</span>
          </button>
          <button type="button" class="horen-play-btn" id="horenPlayPauseBtn" title="Wiedergabe starten">
            <svg class="icon-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            <svg class="icon-pause" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="display:none;"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          </button>
          <button type="button" class="horen-skip-btn" id="horenFwd10" title="10 Sekunden vor">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span>+10s</span>
          </button>

          <div class="horen-scrubber-wrap">
            <div class="horen-time-badge" id="horenCurrentTime">00:00</div>
            <input type="range" class="horen-scrubber" id="horenScrubber" min="0" max="100" value="0" step="0.1" title="Fortschritt">
            <div class="horen-time-badge horen-time-duration" id="horenDuration">--:--</div>
          </div>

          <div class="horen-deck-extra">
            <button type="button" class="horen-icon-tool" id="horenMuteBtn" title="Ton an / aus">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <input type="range" class="horen-vol-slider" id="horenVolumeSlider" min="0" max="1" step="0.05" value="1" title="Lautstärke">

            <div class="horen-speed-group">
              <button type="button" class="horen-speed-btn" data-speed="0.8">0.8x</button>
              <button type="button" class="horen-speed-btn active" data-speed="1.0">1.0x</button>
              <button type="button" class="horen-speed-btn" data-speed="1.2">1.2x</button>
            </div>
          </div>
        </div>

        <div class="horen-jump-strip">
          <span class="horen-jump-label">Kapitel:</span>
          <button type="button" class="horen-ch-btn active" onclick="seekHorenAudio(0)">00:00 Einleitung</button>
          <button type="button" class="horen-ch-btn" onclick="seekHorenAudio(40)">00:40 Beispiel</button>
          <button type="button" class="horen-ch-btn" onclick="seekHorenAudio(122)">02:02 Teil 1 (Texte 1–5)</button>
          <button type="button" class="horen-ch-btn" onclick="seekHorenAudio(652)">10:52 Teil 2 (Museum)</button>
          <button type="button" class="horen-ch-btn" onclick="seekHorenAudio(917)">15:17 Teil 3 (Bushaltestelle)</button>
          <button type="button" class="horen-ch-btn" onclick="seekHorenAudio(1230)">20:30 Teil 4 (Kinderkrippe)</button>
        </div>

        <div class="horen-deck-tip">
          💡 <strong>Lokale MP3:</strong> Sie können Ihre Audiodatei als <code>audio/hoeren.mp3</code> im Projektordner ablegen (wird automatisch geladen) oder oben auf <em>„MP3 vom PC wählen“</em> klicken.
        </div>

        <audio id="horenAudioElement" preload="metadata">
          <source src="audio/hoeren.mp3" type="audio/mpeg">
          <source src="audio/modellsatz-1-hoeren.mp3" type="audio/mpeg">
          <source src="audio/hoeren.m4a" type="audio/mp4">
          <source src="audio/hoeren.wav" type="audio/wav">
          <source src="audio/audio.mp3" type="audio/mpeg">
        </audio>
      </div>
    </div>

    <!-- All 4 Teile Below Audio in One Page -->
    <div class="horen-teils-container">
      <!-- Teil 1 -->
      <section class="horen-teil-section" id="horen-teil-1">
        <div class="horen-teil-header">
          <div class="horen-teil-pill">${isAr ? 'الجزء 1' : (questionsLang === 'fr' ? 'Partie 1' : 'Teil 1')}</div>
          <div class="horen-teil-header-text">
            <h3 class="horen-teil-title">${t1Title}</h3>
            <p class="horen-teil-desc">${t1Desc}</p>
          </div>
        </div>

        <!-- Teil 1 Example Box -->
        <div class="example-box horen-example">
          <div class="example-badge">${exampleBadge} (01 & 02)</div>
          <div class="horen-ex-item">
            <div class="horen-ex-q"><strong>01</strong> ${ex1Text}</div>
            <div class="horen-ex-options">
              <span class="ex-option-pill">${richtigLabel}</span>
              <span class="ex-option-pill selected">${falschLabel}</span>
            </div>
          </div>
          <div class="horen-ex-item" style="margin-top:10px;">
            <div class="horen-ex-q"><strong>02</strong> ${ex2Text}</div>
            <div class="horen-ex-options">
              <span class="ex-option-pill">a) ${ex2OptA}</span>
              <span class="ex-option-pill">b) ${ex2OptB}</span>
              <span class="ex-option-pill selected">c) ${ex2OptC}</span>
            </div>
          </div>
        </div>

        <!-- Teil 1: 5 Texts -->
        ${[1, 2, 3, 4, 5].map(textNum => {
          const qsForText = t.questions.filter(q => q.teilPart === 1 && q.textNum === textNum);
          const labelText = isAr ? `النص ${textNum}` : (questionsLang === 'fr' ? `Texte ${textNum}` : `Text ${textNum}`);
          return `
            <div class="horen-text-group">
              <div class="horen-text-label">${labelText}</div>
              <div class="horen-text-cards">
                ${qsForText.map(q => renderHorenQuestionCard(q)).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </section>

      <!-- Teil 2 -->
      <section class="horen-teil-section" id="horen-teil-2">
        <div class="horen-teil-header">
          <div class="horen-teil-pill">${isAr ? 'الجزء 2' : (questionsLang === 'fr' ? 'Partie 2' : 'Teil 2')}</div>
          <div class="horen-teil-header-text">
            <h3 class="horen-teil-title">${t2Title}</h3>
            <p class="horen-teil-desc">${t2Desc}</p>
          </div>
        </div>

        <div class="horen-context-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span><strong>${isAr ? 'الموقف والسياق:' : (questionsLang === 'fr' ? 'Situation :' : 'Situation:')}</strong> ${t2Sit}</span>
        </div>

        <div class="horen-questions-list">
          ${t.questions.filter(q => q.teilPart === 2).map(q => renderHorenQuestionCard(q)).join('')}
        </div>
      </section>

      <!-- Teil 3 -->
      <section class="horen-teil-section" id="horen-teil-3">
        <div class="horen-teil-header">
          <div class="horen-teil-pill">${isAr ? 'الجزء 3' : (questionsLang === 'fr' ? 'Partie 3' : 'Teil 3')}</div>
          <div class="horen-teil-header-text">
            <h3 class="horen-teil-title">${t3Title}</h3>
            <p class="horen-teil-desc">${t3Desc}</p>
          </div>
        </div>

        <div class="horen-context-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span><strong>${isAr ? 'الموقف والسياق:' : (questionsLang === 'fr' ? 'Situation :' : 'Situation:')}</strong> ${t3Sit}</span>
        </div>

        <div class="horen-questions-list">
          ${t.questions.filter(q => q.teilPart === 3).map(q => renderHorenQuestionCard(q)).join('')}
        </div>
      </section>

      <!-- Teil 4 -->
      <section class="horen-teil-section" id="horen-teil-4">
        <div class="horen-teil-header">
          <div class="horen-teil-pill">${isAr ? 'الجزء 4' : (questionsLang === 'fr' ? 'Partie 4' : 'Teil 4')}</div>
          <div class="horen-teil-header-text">
            <h3 class="horen-teil-title">${t4Title}</h3>
            <p class="horen-teil-desc">${t4Desc}</p>
          </div>
        </div>

        <div class="horen-context-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>
          <span><strong>${isAr ? 'برنامج إذاعي:' : (questionsLang === 'fr' ? 'Émission radiophonique :' : 'Sendung „Diskussion am Abend“:')}</strong> ${t4Sit}</span>
        </div>

        <div class="horen-speakers-legend">
          <div class="speaker-legend-pill"><span class="speaker-code">a</span> ${spkMod}</div>
          <div class="speaker-legend-pill"><span class="speaker-code">b</span> ${spkDana}</div>
          <div class="speaker-legend-pill"><span class="speaker-code">c</span> ${spkFlorian}</div>
        </div>

        <div class="example-box horen-example" style="margin-top:14px;">
          <div class="example-badge">${exampleBadge} (0)</div>
          <div class="horen-ex-item">
            <div class="horen-ex-q"><strong>0</strong> ${ex0Text}</div>
            <div class="horen-ex-options">
              <span class="ex-option-pill">a) ${spkMod}</span>
              <span class="ex-option-pill selected">b) ${spkDana}</span>
              <span class="ex-option-pill">c) ${spkFlorian}</span>
            </div>
          </div>
        </div>

        <div class="horen-questions-list" style="margin-top:18px;">
          ${t.questions.filter(q => q.teilPart === 4).map(q => renderHorenQuestionCard(q)).join('')}
        </div>
      </section>
    </div>
  `;

  panel.innerHTML = html;
  initHorenAudioDeck();

  panel.querySelectorAll('.lang-switch-group button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      questionsLang = btn.dataset.lang;
      localStorage.setItem('b1_questions_lang', questionsLang);
      renderCurrentTeil();
    });
  });
}

/* ---------------- QUESTION MATRIX MODAL (1–30 OVERVIEW) ---------------- */
function initMatrixModal() {
  const matrixBtn = document.getElementById('matrixBtn');
  const closeBtn = document.getElementById('matrixCloseBtn');
  const confirmBtn = document.getElementById('matrixConfirmClose');
  const modal = document.getElementById('matrixModal');

  if (matrixBtn) matrixBtn.addEventListener('click', openMatrixModal);
  if (closeBtn) closeBtn.addEventListener('click', closeMatrixModal);
  if (confirmBtn) confirmBtn.addEventListener('click', closeMatrixModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeMatrixModal();
    });
  }
}

function openMatrixModal() {
  const modal = document.getElementById('matrixModal');
  if (!modal) return;
  renderMatrixGrid();
  modal.style.display = 'flex';
}

function closeMatrixModal() {
  const modal = document.getElementById('matrixModal');
  if (modal) modal.style.display = 'none';
}

function renderMatrixGrid() {
  const gridContainer = document.getElementById('matrixGrid');
  const statsText = document.getElementById('matrixStatsText');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  let totalAnswered = 0;
  let totalCount = 0;

  testData.forEach(t => {
    const qs = allQuestionsOf(t);
    const teilAnsCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;
    totalAnswered += teilAnsCount;
    totalCount += qs.length;

    const section = document.createElement('div');
    section.className = 'matrix-part-section';
    section.innerHTML = `
      <div class="matrix-part-header">
        <div class="matrix-part-title">${t.title}</div>
        <div class="matrix-part-count">${teilAnsCount} von ${qs.length} gelöst</div>
      </div>
      <div class="matrix-items-grid" id="matrix-grid-teil-${t.id}"></div>
    `;

    const itemsGrid = section.querySelector(`#matrix-grid-teil-${t.id}`);
    qs.forEach(q => {
      const isAns = userAnswers[q.id] !== undefined && userAnswers[q.id] !== '';
      const isFlg = flaggedQuestions.has(q.id);

      const qBtn = document.createElement('button');
      qBtn.className = `matrix-q-btn ${isAns ? 'answered' : ''} ${isFlg ? 'flagged' : ''} ${t.id === activeTeil ? 'active-current' : ''}`;
      qBtn.textContent = q.num || q.id;
      qBtn.title = `Aufgabe ${q.num || q.id} (${isAns ? 'Beantwortet' : 'Offen'}${isFlg ? ', Gemerkt ★' : ''})`;

      qBtn.onclick = () => {
        closeMatrixModal();
        jumpToQuestion(t.id, q.id);
      };

      itemsGrid.appendChild(qBtn);
    });

    gridContainer.appendChild(section);
  });

  const modalTitle = document.getElementById('matrixTitle');
  if (modalTitle) {
    modalTitle.textContent = `Prüfungsübersicht (${totalCount} Aufgaben)`;
  }

  if (statsText) {
    statsText.textContent = `${totalAnswered} von ${totalCount} Aufgaben gelöst`;
  }
}

function jumpToQuestion(teilId, qid) {
  if (activeTeil !== teilId) {
    sendTeilResultsEmail(activeTeil);
    activeTeil = teilId;
    renderCurrentTeil();
  }
  setTimeout(() => {
    const el = document.getElementById(`question-card-${qid}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight-jump');
      setTimeout(() => el.classList.remove('highlight-jump'), 1300);
    }
  }, 80);
}

/* ---------------- NAVIGATION & PROGRESS ---------------- */
function updateProgress() {
  const total = getTotalQuestionsCount();
  const answered = Object.values(userAnswers).filter(v => v !== undefined && v !== '').length;
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  const progressTxt = document.getElementById('progressTxt');
  const progressFill = document.getElementById('progressFill');
  const prevBtn = document.getElementById('prevTeilBtn');
  const nextBtn = document.getElementById('nextTeilBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (progressTxt) progressTxt.textContent = `${answered} von ${total} Aufgaben gelöst`;
  if (progressFill) progressFill.style.width = `${pct}%`;

  const matrixBtn = document.getElementById('matrixBtn');
  if (matrixBtn) {
    const span = matrixBtn.querySelector('span');
    if (span) span.textContent = `Aufgaben (${total})`;
  }

  if (prevBtn) prevBtn.disabled = activeTeil === 1;

  const isLastTeil = activeTeil === testData.length;
  if (nextBtn) nextBtn.style.display = isLastTeil ? 'none' : '';
  if (submitBtn) submitBtn.style.display = isLastTeil ? '' : 'none';
}

document.getElementById('prevTeilBtn').addEventListener('click', () => {
  if (activeTeil > 1) {
    sendTeilResultsEmail(activeTeil);
    activeTeil--;
    renderCurrentTeil();
    saveSession();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.getElementById('nextTeilBtn').addEventListener('click', () => {
  sendTeilResultsEmail(activeTeil);
  if (activeTeil < testData.length) {
    activeTeil++;
    renderCurrentTeil();
    saveSession();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById('submitBtn').click();
  }
});

function renderCurrentTeil() {
  renderTabs();
  const t = testData.find(x => x.id === activeTeil);
  const testGrid = document.getElementById('testGrid');
  const passagePanel = document.getElementById('passagePanel');

  if (!t) return;

  if (t.isHoren) {
    if (testGrid) testGrid.classList.add('single-column-grid');
    if (passagePanel) {
      passagePanel.style.display = 'none';
      passagePanel.innerHTML = '';
    }
    renderHoren(t);
  } else if (t.id === 4 || t.letters) {
    if (testGrid) testGrid.classList.add('single-column-grid');
    if (passagePanel) {
      passagePanel.style.display = 'none';
      passagePanel.innerHTML = '';
    }
    renderTeil4(t);
  } else {
    if (testGrid) testGrid.classList.remove('single-column-grid');
    if (passagePanel) passagePanel.style.display = 'block';
    renderPassage(t);
    renderQuestions(t);
  }
  updateProgress();
}

/* ---------------- SCORING & RESULTS ---------------- */
document.getElementById('submitBtn').addEventListener('click', () => {
  const total = getTotalQuestionsCount();
  const answered = Object.values(userAnswers).filter(v => v !== undefined && v !== '').length;

  if (answered < total) {
    const unans = total - answered;
    if (!confirm(`Sie haben noch ${unans} unbeantwortete Aufgabe(n). Möchten Sie den Test wirklich abgeben?`)) {
      return;
    }
  }
  // Transmit results for any answered Teil that hasn't been sent yet
  testData.forEach(t => sendTeilResultsEmail(t.id));
  showResults();
});

function showResults() {
  timerRunning = false;
  localStorage.removeItem(SESSION_STORAGE_KEY);

  document.getElementById('tabsWrapper').style.display = 'none';
  document.getElementById('testAreaContainer').style.display = 'none';
  document.getElementById('footerBar').style.display = 'none';
  document.getElementById('candidateBanner').style.display = 'none';
  const resumeBanner = document.getElementById('sessionResumeBanner');
  if (resumeBanner) resumeBanner.style.display = 'none';

  const resultsScreen = document.getElementById('resultsScreen');
  resultsScreen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  let totalCorrect = 0;
  const totalCount = getTotalQuestionsCount();
  const teilScoresGrid = document.getElementById('teilScoresGrid');
  teilScoresGrid.innerHTML = '';

  const flatQuestions = [];

  testData.forEach(t => {
    let qs = [];
    if (t.questions) qs = qs.concat(t.questions.map(q => ({ ...q, kind: q.type, teilTitle: t.title })));
    if (t.questions2) qs = qs.concat(t.questions2.map(q => ({ ...q, kind: q.type, teilTitle: t.title })));
    if (t.letters) qs = qs.concat(t.letters.map(l => ({ id: l.id, text: `Kommentar von ${l.who}`, answer: l.answer, kind: 'letter', teilTitle: t.title })));

    let teilCorrect = 0;
    qs.forEach(q => {
      const userVal = userAnswers[q.id];
      const isCorrect = userVal !== undefined && String(userVal).toLowerCase() === String(q.answer).toLowerCase();
      if (isCorrect) teilCorrect++;
      flatQuestions.push({ ...q, userVal, isCorrect });
    });

    totalCorrect += teilCorrect;

    const card = document.createElement('div');
    card.className = 'teil-score-card';
    let breakdownHtml = '';
    if (t.isHoren) {
      const t1 = qs.filter(q => q.teilPart === 1);
      const t2 = qs.filter(q => q.teilPart === 2);
      const t3 = qs.filter(q => q.teilPart === 3);
      const t4 = qs.filter(q => q.teilPart === 4);
      const c1 = t1.filter(q => q.isCorrect).length;
      const c2 = t2.filter(q => q.isCorrect).length;
      const c3 = t3.filter(q => q.isCorrect).length;
      const c4 = t4.filter(q => q.isCorrect).length;
      breakdownHtml = `
        <div style="font-size:11.5px; color:var(--text-muted); margin-top:5px; line-height:1.4;">
          Teil 1: ${c1}/${t1.length} · Teil 2: ${c2}/${t2.length}<br>
          Teil 3: ${c3}/${t3.length} · Teil 4: ${c4}/${t4.length}
        </div>
      `;
    }
    card.innerHTML = `
      <div class="title">${t.title}</div>
      <div class="val">${teilCorrect} <span style="font-size:14px; font-weight:500; color:var(--text-muted);">/ ${qs.length}</span></div>
      ${breakdownHtml}
    `;
    teilScoresGrid.appendChild(card);
  });

  const pct = totalCount > 0 ? Math.round((totalCorrect / totalCount) * 100) : 0;
  const isPassed = pct >= 60;

  const scoreCircle = document.getElementById('scoreCircle');
  scoreCircle.style.setProperty('--score-pct', pct);
  scoreCircle.style.setProperty('--score-color', isPassed ? 'var(--success)' : 'var(--danger)');

  document.getElementById('resTotalPts').textContent = `${totalCorrect}/${totalCount}`;
  document.getElementById('resTotalPct').textContent = `${pct}%`;

  const statusTag = document.getElementById('statusTag');
  statusTag.textContent = isPassed ? 'BESTANDEN (≥ 60%)' : 'NICHT BESTANDEN (< 60%)';
  statusTag.className = `status-tag ${isPassed ? 'pass' : 'fail'}`;

  const name = document.getElementById('friendName')?.value?.trim() || 'Sirin';
  document.getElementById('candidateCongrats').textContent =
    `Auswertung für ${name} · ${isPassed ? 'Herzlichen Glückwunsch zu diesem B1-Ergebnis!' : 'Gute Übung – wiederholen Sie die Abschnitte mit Fehlern noch einmal.'}`;

  window._allReviewQuestions = flatQuestions;
  window._copySummary = generateTextSummary(name, totalCorrect, totalCount, pct, isPassed, flatQuestions);
  renderReviewList(flatQuestions);
}

function renderReviewList(questions) {
  const container = document.getElementById('reviewItemsList');
  if (!container) return;
  container.innerHTML = '';

  const filtered = questions.filter(q => {
    if (reviewFilter === 'correct') return q.isCorrect;
    if (reviewFilter === 'incorrect') return !q.isCorrect;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:24px; color:var(--text-muted);">Keine Aufgaben in dieser Kategorie.</div>`;
    return;
  }

  filtered.forEach(q => {
    const item = document.createElement('div');
    item.className = `review-item ${q.isCorrect ? 'correct' : 'incorrect'}`;

    const userDisplay = formatAnswerDisplay(q, q.userVal);
    const correctDisplay = formatAnswerDisplay(q, q.answer);

    item.innerHTML = `
      <div class="review-badge">${q.isCorrect ? '✓' : '✗'}</div>
      <div class="review-content">
        <div class="review-qtitle">${q.num ? `Aufgabe ${q.num}: ` : `${q.id}. `}${q.text} <span style="font-size:11px; font-weight:600; color:var(--text-muted); margin-left:6px;">(${q.teilTitle}${q.teilPart ? ` · Teil ${q.teilPart}` : ''})</span></div>
        <div class="review-answers">
          Ihre Antwort: <span class="${q.isCorrect ? 'ans-correct' : 'ans-wrong'}">${userDisplay}</span>
          ${!q.isCorrect ? ` &nbsp;·&nbsp; Richtige Lösung: <span class="ans-correct">${correctDisplay}</span>` : ''}
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function formatAnswerDisplay(q, val) {
  if (val === undefined || val === '') return '– (Keine Antwort)';
  const kind = q.kind || q.type;
  if (kind === 'mcq' || kind === 'speaker') {
    const letters = ['a', 'b', 'c'];
    const idx = typeof val === 'number' ? val : parseInt(val, 10);
    const letter = !isNaN(idx) && letters[idx] !== undefined ? letters[idx] : val;
    const optText = !isNaN(idx) && q.options && q.options[idx] !== undefined ? q.options[idx] : '';
    return optText ? `${letter}) ${optText}` : `${letter}`;
  }
  if (kind === 'letter') {
    if (String(val).toLowerCase() === 'ja') return 'Ja';
    if (String(val).toLowerCase() === 'nein') return 'Nein';
    return val;
  }
  if (kind === 'tf' || String(val).toLowerCase() === 'richtig' || String(val).toLowerCase() === 'falsch') {
    if (String(val).toLowerCase() === 'richtig') return 'Richtig';
    if (String(val).toLowerCase() === 'falsch') return 'Falsch';
  }
  if (kind === 'match') {
    return String(val).toUpperCase() === 'X' ? 'X (Keine Anzeige passt)' : `Anzeige ${val}`;
  }
  return val;
}

function generateTextSummary(name, score, total, pct, pass, questions) {
  let lines = [
    `=== ${currentTest.title.toUpperCase()} ===`,
    name ? `Kandidat(in): ${name}` : '',
    `Ergebnis: ${score} / ${total} Punkte (${pct}%)`,
    `Status: ${pass ? 'BESTANDEN' : 'NICHT BESTANDEN'}`,
    `Datum: ${new Date().toLocaleDateString('de-DE')}`,
    `--------------------------------------`
  ].filter(Boolean);

  questions.forEach(q => {
    const userDisplay = formatAnswerDisplay(q, q.userVal);
    const correctDisplay = formatAnswerDisplay(q, q.answer);
    const qNumStr = q.num ? `Aufgabe ${q.num}:` : `${q.id}.`;
    lines.push(`${qNumStr} ${q.isCorrect ? '[✓]' : '[✗]'} Antwort: ${userDisplay}${!q.isCorrect ? ` (Korrekt: ${correctDisplay})` : ''} [${q.teilTitle || ''}]`);
  });

  return lines.join('\n');
}

// Review filters click
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    reviewFilter = e.target.dataset.filter;
    renderReviewList(window._allReviewQuestions || []);
  });
});

// Copy result
document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(window._copySummary || '').then(() => {
    alert('Das detaillierte Prüfungsergebnis wurde in die Zwischenablage kopiert!');
  });
});

// Restart test
document.getElementById('restartBtn').addEventListener('click', () => {
  if (!confirm('Möchten Sie den Test wirklich zurücksetzen? Alle Ihre Antworten werden gelöscht.')) return;
  localStorage.removeItem(SESSION_STORAGE_KEY);
  loadModelTest(currentTestIndex);
});

/* ---------------- AUTO-SAVE & SESSION PERSISTENCE ---------------- */
function saveSession() {
  if (document.getElementById('resultsScreen')?.style.display === 'block') {
    return;
  }
  const sessionData = {
    testIndex: currentTestIndex,
    activeTeil,
    timeLeft,
    teilTimers,
    answers: userAnswers,
    flagged: Array.from(flaggedQuestions),
    candidateName: document.getElementById('friendName')?.value || 'Sirin',
    savedAt: Date.now()
  };
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
  } catch (e) {}
}

function checkSavedSession() {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    const ansCount = data.answers ? Object.values(data.answers).filter(v => v !== undefined && v !== '').length : 0;
    
    if (ansCount > 0 || (data.timeLeft && data.timeLeft < (modelTests[data.testIndex || 0]?.timeTotal || 65) * 60 - 30)) {
      const banner = document.getElementById('sessionResumeBanner');
      const text = document.getElementById('sessionResumeText');
      if (banner) {
        const testName = modelTests[data.testIndex || 0]?.title || 'Modellsatz';
        if (text) text.textContent = `Gespeicherte Sitzung für „${testName}“ (${ansCount} gelöste Aufgaben) gefunden.`;
        banner.style.display = 'block';

        document.getElementById('btnResumeSession').onclick = () => {
          resumeSession(data);
          banner.style.display = 'none';
        };
        document.getElementById('btnDismissResume').onclick = () => {
          localStorage.removeItem(SESSION_STORAGE_KEY);
          banner.style.display = 'none';
        };
      }
    }
  } catch (e) {}
}

function resumeSession(data) {
  if (data.testIndex !== undefined && data.testIndex !== currentTestIndex) {
    currentTestIndex = data.testIndex;
    currentTest = modelTests[currentTestIndex];
    testData = currentTest.parts;
    const sel = document.getElementById('modelTestSelect');
    if (sel) sel.value = currentTestIndex;
  }

  // Restore answers
  Object.keys(userAnswers).forEach(k => delete userAnswers[k]);
  if (data.answers) {
    Object.assign(userAnswers, data.answers);
  }

  // Restore flags
  flaggedQuestions.clear();
  if (data.flagged && Array.isArray(data.flagged)) {
    data.flagged.forEach(qid => flaggedQuestions.add(qid));
  }

  // Restore Teil timers
  if (data.teilTimers) {
    Object.keys(teilTimers).forEach(k => delete teilTimers[k]);
    Object.assign(teilTimers, data.teilTimers);
  }

  // Restore time
  if (data.timeLeft) timeLeft = data.timeLeft;

  // Restore candidate name
  const inp = document.getElementById('friendName');
  if (inp) {
    if (data.candidateName && data.candidateName.trim()) {
      inp.value = data.candidateName;
    } else {
      const saved = localStorage.getItem('b1_candidate_name');
      inp.value = (saved && saved.trim()) ? saved : 'Sirin';
    }
  }

  // Restore active Teil
  if (data.activeTeil) activeTeil = data.activeTeil;

  updateTimerDisplay();
  renderCurrentTeil();
  updateProgress();
  startTimer();
}

/* ---------------- KEYBOARD SHORTCUTS ---------------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'Escape') {
      closeMatrixModal();
    }
    if (e.altKey && (e.key === 'n' || e.key === 'N')) {
      e.preventDefault();
      document.getElementById('nextTeilBtn')?.click();
    }
    if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      document.getElementById('prevTeilBtn')?.click();
    }
  });

  // Candidate name initialization and persistence (defaults to Sirin)
  const nameInp = document.getElementById('friendName');
  if (nameInp) {
    const savedName = localStorage.getItem('b1_candidate_name');
    nameInp.value = (savedName && savedName.trim()) ? savedName : 'Sirin';
    nameInp.addEventListener('input', () => {
      localStorage.setItem('b1_candidate_name', nameInp.value);
      saveSession();
    });
  }
}

/* ---------------- INITIALIZATION ---------------- */
initEmailService();
initTheme();
initFullscreen();
initFontSizeControls();
initHighlighter();
initMatrixModal();
initKeyboardShortcuts();
initTestSelector();
loadModelTest(0);
checkSavedSession();
