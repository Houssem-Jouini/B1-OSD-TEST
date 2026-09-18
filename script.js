/* ==========================================================================
   B1 LESEN PRÜFUNGSSIMULATION — APPLIKATIONSLOGIK & ENGINE
   Unterstützt mehrere Modellsätze mit nahtloser Umschaltung,
   Zeitsteuerung, Punkteauswertung und detaillierter Fehleranalyse.
   ========================================================================== */

/* ---------------- GLOBAL STATE ---------------- */
let currentTestIndex = 0;
let currentTest = modelTests[currentTestIndex];
let testData = currentTest.parts;

let activeTeil = 1;
const userAnswers = {};
const flaggedQuestions = new Set();
let reviewFilter = 'all';

/* ---------------- TIMER STATE ---------------- */
let timeLeft = (currentTest.timeTotal || 65) * 60;
let timerInterval = null;
let timerRunning = true;

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- TIMER FUNCTIONS ---------------- */
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerRunning && timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    }
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
});

/* ---------------- THEME & FONT SIZE ---------------- */
const themeToggleBtn = document.getElementById('themeToggle');
let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDark) document.documentElement.setAttribute('data-theme', 'dark');

themeToggleBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
});

document.querySelectorAll('.font-size-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    document.documentElement.style.setProperty('--text-size', e.target.dataset.size);
  });
});

/* ---------------- HELPER QUESTION ACCESSORS ---------------- */
function allQuestionsOf(t) {
  let qs = [];
  if (t.questions) qs = qs.concat(t.questions);
  if (t.questions2) qs = qs.concat(t.questions2);
  if (t.letters) qs = qs.concat(t.letters.map(l => ({ id: l.id, type: 'letter', text: l.who, answer: l.answer })));
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
      activeTeil = t.id;
      renderCurrentTeil();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    tabsContainer.appendChild(btn);
  });
}

/* ---------------- RENDER READING PASSAGE (LEFT PANEL) ---------------- */
function renderPassage(t) {
  const passagePanel = document.getElementById('passagePanel');
  if (!passagePanel) return;

  let html = `
    <div class="panel-header">
      <div class="panel-title">${t.title} — Text</div>
      <div class="panel-meta-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Zeit: ${t.time} Min.
      </div>
    </div>
    <div class="instruction-box">${t.instructions}</div>
  `;

  // Standard articles or blog posts
  if (t.articles) {
    t.articles.forEach(a => {
      html += `<div class="reading-text">`;
      if (a.meta) html += `<div class="article-meta-date">${a.meta}</div>`;
      if (a.heading) html += `<h3>${a.heading}</h3>`;
      if (a.sub) html += `<div class="article-sub">${a.sub}</div>`;

      // Body paragraphs
      if (Array.isArray(a.body)) {
        a.body.forEach(p => html += `<p>${p}</p>`);
      }

      // Sections (e.g. structured rules / notices)
      if (Array.isArray(a.sections)) {
        a.sections.forEach(sec => {
          html += `<div style="margin-top:14px; margin-bottom:10px;">`;
          if (sec.title) html += `<h4 style="font-size:15px; font-weight:700; color:var(--text-main); margin-bottom:6px;">${sec.title}</h4>`;
          if (sec.items) {
            html += `<ul style="padding-left:18px; line-height:1.55; font-size:14px; color:var(--text-main);">`;
            sec.items.forEach(it => html += `<li style="margin-bottom:4px;">${it}</li>`);
            html += `</ul>`;
          }
          html += `</div>`;
        });
      }

      if (a.signature) html += `<p style="font-weight:700; margin-top:14px; color:var(--text-main);">${a.signature}</p>`;
      if (a.footerNote) html += `<div style="font-size:12px; color:var(--text-muted); margin-top:8px;">${a.footerNote}</div>`;
      if (a.source) html += `<div class="article-source">${a.source}</div>`;
      html += `</div>`;
    });
  }

  // Teil 3: Authentic Book-Styled Ads Board
  if (t.adsFormatted) {
    html += `<div class="ads-board">`;
    t.adsFormatted.forEach(ad => {
      html += `
        <div class="ad-wrapper ${ad.tagPos === 'left' ? 'tag-left' : 'tag-right'}">
          <div class="ad-letter-tag">${ad.code}</div>
          ${ad.hasPin ? '<div class="pushpin"></div>' : ''}
          <div class="book-ad ${ad.cardClass || ''}">
            ${ad.html}
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  // Second article batch (Teil 2)
  if (t.articles2) {
    if (t.instructions2) {
      html += `<div class="instruction-box" style="margin-top:28px;">${t.instructions2}</div>`;
    }
    t.articles2.forEach(a => {
      html += `<div class="reading-text">`;
      if (a.heading) html += `<h3>${a.heading}</h3>`;
      if (a.sub) html += `<div class="article-sub">${a.sub}</div>`;
      if (Array.isArray(a.body)) {
        a.body.forEach(p => html += `<p>${p}</p>`);
      }
      if (a.source) html += `<div class="article-source">${a.source}</div>`;
      html += `</div>`;
    });
  }

  passagePanel.innerHTML = html;
}

/* ---------------- RENDER QUESTIONS (RIGHT PANEL) ---------------- */
function renderQuestions(t) {
  const questionsPanel = document.getElementById('questionsPanel');
  if (!questionsPanel) return;

  const qs = allQuestionsOf(t);
  const answeredCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;

  let html = `
    <div class="panel-header">
      <div class="panel-title">Aufgaben</div>
      <div class="progress-text">${answeredCount} von ${qs.length} beantwortet</div>
    </div>
  `;

  // Example pill
  if (t.example) {
    if (t.example.options) {
      const exLetter = ['a', 'b', 'c'][t.example.answer];
      html += `<div class="example-pill"><strong>Beispiel:</strong> ${t.example.text} → <strong>${exLetter}) ${t.example.options[t.example.answer]}</strong></div>`;
    } else if (t.example.who) {
      html += `<div class="example-pill"><strong>Beispiel (${t.example.who}):</strong> „${t.example.text}“ → <strong>${String(t.example.answer).toUpperCase()}</strong></div>`;
    } else if (t.id === 3) {
      html += `<div class="example-pill"><strong>Beispiel:</strong> ${t.example.text} → Anzeige: <strong>${t.example.answer}</strong></div>`;
    } else {
      html += `<div class="example-pill"><strong>Beispiel:</strong> ${t.example.text} → <strong>${String(t.example.answer).toUpperCase()}</strong></div>`;
    }
  }

  html += `<div class="question-list">`;

  // Questions (Teile 1, 2, 5)
  if (t.questions && t.id !== 3) {
    t.questions.forEach(q => {
      html += renderSingleQuestionCard(q);
    });
  }

  // Teil 2 second batch
  if (t.questions2) {
    t.questions2.forEach(q => {
      html += renderSingleQuestionCard(q);
    });
  }

  // Teil 3 Match questions
  if (t.id === 3 && t.adsFormatted) {
    const codes = t.adsFormatted.map(a => a.code);
    t.questions.forEach(q => {
      const val = userAnswers[q.id] || '';
      const isAnswered = val !== '';
      const isFlagged = flaggedQuestions.has(q.id);

      let selectOpts = `<option value="">– Anzeige wählen –</option>`;
      codes.forEach(c => {
        selectOpts += `<option value="${c}" ${val === c ? 'selected' : ''}>Anzeige ${c}</option>`;
      });
      selectOpts += `<option value="X" ${val === 'X' ? 'selected' : ''}>X (Keine Anzeige passt)</option>`;

      html += `
        <div class="question-card ${isAnswered ? 'answered' : ''}">
          <div class="question-header">
            <span class="q-number">${q.id}</span>
            <div class="q-title">${q.text}</div>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})" title="Frage vormerken">★</button>
          </div>
          <div class="match-select-wrap">
            <label style="font-size:13.5px; font-weight:700; color:var(--text-muted);">Passende Anzeige:</label>
            <select class="match-select ${isAnswered ? 'filled' : ''}" data-qid="${q.id}">
              ${selectOpts}
            </select>
          </div>
        </div>
      `;
    });
  }

  // Teil 4 Letters / Opinion Cards (fallback if in multi-column mode)
  if (t.letters) {
    t.letters.forEach(l => {
      const val = userAnswers[l.id];
      const isAnswered = val !== undefined;
      const isFlagged = flaggedQuestions.has(l.id);

      html += `
        <div class="question-card ${isAnswered ? 'answered' : ''}">
          <div class="question-header">
            <span class="q-number">${l.id}</span>
            <div class="q-title" style="color:var(--primary-text); font-weight:700;">${l.who}</div>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${l.id})" title="Frage vormerken">★</button>
          </div>
          <div class="letter-body">„${l.text}“</div>
          <div class="options-group inline">
            <label class="option-label ${val === 'ja' ? 'selected' : ''}">
              <input type="radio" name="q${l.id}" value="ja" ${val === 'ja' ? 'checked' : ''}>
              <span class="custom-radio"></span> Ja
            </label>
            <label class="option-label ${val === 'nein' ? 'selected' : ''}">
              <input type="radio" name="q${l.id}" value="nein" ${val === 'nein' ? 'checked' : ''}>
              <span class="custom-radio"></span> Nein
            </label>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  questionsPanel.innerHTML = html;

  // Bind radio events
  questionsPanel.querySelectorAll('input[type=radio]').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const qid = parseInt(e.target.name.replace('q', ''), 10);
      let v = e.target.value;
      userAnswers[qid] = (v === 'richtig' || v === 'falsch' || v === 'ja' || v === 'nein') ? v : parseInt(v, 10);
      renderTabs();
      renderQuestions(t);
      updateProgress();
    });
  });

  // Bind match select events
  questionsPanel.querySelectorAll('select.match-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const qid = parseInt(e.target.dataset.qid, 10);
      userAnswers[qid] = e.target.value;
      renderTabs();
      renderQuestions(t);
      updateProgress();
    });
  });
}

/* ---------------- RENDER TEIL 4 (FULL-WIDTH COMFORTABLE VIEW) ---------------- */
function renderTeil4(t) {
  const questionsPanel = document.getElementById('questionsPanel');
  if (!questionsPanel) return;

  const qs = allQuestionsOf(t);
  const answeredCount = qs.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length;

  let html = `
    <div class="panel-header">
      <div class="panel-title">${t.title} — Meinungen erkennen</div>
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="panel-meta-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Zeit: ${t.time} Min.
        </div>
        <div class="progress-text">${answeredCount} von ${qs.length} beantwortet</div>
      </div>
    </div>
    <div class="instruction-box">${t.instructions}</div>
  `;

  // Example pill
  if (t.example) {
    html += `
      <div class="example-pill">
        <strong>Beispiel (${t.example.who || '0'}):</strong> „${t.example.text}“ → <strong>${String(t.example.answer).toUpperCase()}</strong>
      </div>
    `;
  }

  html += `<div class="letters-list">`;

  if (t.letters) {
    t.letters.forEach(l => {
      const val = userAnswers[l.id];
      const isAnswered = val !== undefined;
      const isFlagged = flaggedQuestions.has(l.id);
      const initial = l.who ? l.who.trim().charAt(0).toUpperCase() : 'L';

      html += `
        <div class="letter-card ${isAnswered ? 'answered' : ''}">
          <div class="letter-card-header">
            <div class="author-info-wrap">
              <div class="q-number">${l.id}</div>
              <div class="author-avatar">${initial}</div>
              <div class="author-name">${l.who}</div>
            </div>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${l.id})" title="Aufgabe vormerken">★</button>
          </div>
          <div class="letter-body">„${l.text}“</div>
          <div class="letter-action-row">
            <div class="letter-prompt">Stimmt die Person der Fragestellung / Aussage zu?</div>
            <div class="options-group inline" style="margin-top:0;">
              <label class="option-label ${val === 'ja' ? 'selected' : ''}">
                <input type="radio" name="q${l.id}" value="ja" ${val === 'ja' ? 'checked' : ''}>
                <span class="custom-radio"></span> Ja
              </label>
              <label class="option-label ${val === 'nein' ? 'selected' : ''}">
                <input type="radio" name="q${l.id}" value="nein" ${val === 'nein' ? 'checked' : ''}>
                <span class="custom-radio"></span> Nein
              </label>
            </div>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  questionsPanel.innerHTML = html;

  // Bind radio events for Teil 4
  questionsPanel.querySelectorAll('input[type=radio]').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const qid = parseInt(e.target.name.replace('q', ''), 10);
      userAnswers[qid] = e.target.value;
      renderTabs();
      renderTeil4(t);
      updateProgress();
    });
  });
}

function renderSingleQuestionCard(q) {
  const val = userAnswers[q.id];
  const isAnswered = val !== undefined;
  const isFlagged = flaggedQuestions.has(q.id);

  let optsHtml = '';
  if (q.type === 'tf') {
    optsHtml = `
      <div class="options-group inline">
        <label class="option-label ${val === 'richtig' ? 'selected' : ''}">
          <input type="radio" name="q${q.id}" value="richtig" ${val === 'richtig' ? 'checked' : ''}>
          <span class="custom-radio"></span> Richtig
        </label>
        <label class="option-label ${val === 'falsch' ? 'selected' : ''}">
          <input type="radio" name="q${q.id}" value="falsch" ${val === 'falsch' ? 'checked' : ''}>
          <span class="custom-radio"></span> Falsch
        </label>
      </div>
    `;
  } else if (q.type === 'mcq') {
    const letters = ['a', 'b', 'c'];
    optsHtml = `<div class="options-group">`;
    q.options.forEach((opt, idx) => {
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
    <div class="question-card ${isAnswered ? 'answered' : ''}">
      <div class="question-header">
        <span class="q-number">${q.id}</span>
        <div class="q-title">${q.text}</div>
        <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})" title="Frage vormerken">★</button>
      </div>
      ${optsHtml}
    </div>
  `;
}

window.toggleFlag = function(qid) {
  if (flaggedQuestions.has(qid)) flaggedQuestions.delete(qid);
  else flaggedQuestions.add(qid);
  renderCurrentTeil();
};

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

  if (prevBtn) prevBtn.disabled = activeTeil === 1;

  const isLastTeil = activeTeil === testData.length;
  if (nextBtn) nextBtn.style.display = isLastTeil ? 'none' : '';
  if (submitBtn) submitBtn.style.display = isLastTeil ? '' : 'none';
}

document.getElementById('prevTeilBtn').addEventListener('click', () => {
  if (activeTeil > 1) {
    activeTeil--;
    renderCurrentTeil();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.getElementById('nextTeilBtn').addEventListener('click', () => {
  if (activeTeil < testData.length) {
    activeTeil++;
    renderCurrentTeil();
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

  if (t.id === 4 || t.letters) {
    // Teil 4: Comfortable, full-width unified layout without empty left passage panel
    if (testGrid) testGrid.classList.add('single-column-grid');
    if (passagePanel) passagePanel.style.display = 'none';
    renderTeil4(t);
  } else {
    // Teile 1, 2, 3, 5: Standard 2-column split reading / questions layout
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
  showResults();
});

function showResults() {
  timerRunning = false;
  document.getElementById('tabsWrapper').style.display = 'none';
  document.getElementById('testAreaContainer').style.display = 'none';
  document.getElementById('footerBar').style.display = 'none';
  document.getElementById('candidateBanner').style.display = 'none';

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
    card.innerHTML = `
      <div class="title">${t.title}</div>
      <div class="val">${teilCorrect} <span style="font-size:14px; font-weight:500; color:var(--text-muted);">/ ${qs.length}</span></div>
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

  const name = document.getElementById('friendName').value.trim();
  document.getElementById('candidateCongrats').textContent = name
    ? `Auswertung für ${name} · ${isPassed ? 'Herzlichen Glückwunsch zu diesem B1-Ergebnis!' : 'Gute Übung – wiederholen Sie die Abschnitte mit Fehlern noch einmal.'}`
    : `B1 Modul Lesen Übungsergebnis · ${isPassed ? 'Bestanden!' : 'Noch nicht bestanden.'}`;

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
        <div class="review-qtitle">${q.id}. ${q.text} <span style="font-size:11px; font-weight:600; color:var(--text-muted); margin-left:6px;">(${q.teilTitle})</span></div>
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
  if (q.kind === 'mcq') {
    const letters = ['a', 'b', 'c'];
    const idx = typeof val === 'number' ? val : parseInt(val, 10);
    return `${letters[idx]}) ${q.options ? q.options[idx] : ''}`;
  }
  if (q.kind === 'letter') return val === 'ja' ? 'Ja' : 'Nein';
  if (val === 'richtig') return 'Richtig';
  if (val === 'falsch') return 'Falsch';
  if (q.kind === 'match') return val === 'X' ? 'X (Keine Anzeige passt)' : `Anzeige ${val}`;
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
    lines.push(`${q.id}. ${q.isCorrect ? '[✓]' : '[✗]'} Antwort: ${userDisplay}${!q.isCorrect ? ` (Korrekt: ${correctDisplay})` : ''}`);
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
  loadModelTest(currentTestIndex);
});

/* ---------------- INITIALIZATION ---------------- */
initTestSelector();
loadModelTest(0);
