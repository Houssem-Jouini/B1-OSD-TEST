/**
 * B1-OSD-TEST — QUICK WORD LOOKUP & INSTANT RETENTION WIDGET
 * 
 * Sticky floating left-side widget that allows candidates during an exam to:
 * 1. Type any unknown German word.
 * 2. Instantly translate it to French & Arabic with German definition and example.
 * 3. Add it to personal vocabulary & flashcards for later revision.
 */

(function() {
  'use strict';

  // AI Configuration Storage Keys (reusing existing AI settings)
  const STORAGE_KEY_GEMINI = 'b1_gemini_api_key';
  const STORAGE_KEY_GROQ = 'b1_groq_api_key';
  const STORAGE_KEY_PROXY = 'b1_ai_proxy_endpoint';
  const STORAGE_KEY_PROVIDER = 'b1_ai_selected_provider';
  const DEFAULT_PROXY_ENDPOINT = 'https://b1-ai-tutor.jhoussem856.workers.dev';

  // Widget State & Cache Storage Keys
  const STORAGE_KEY_COLLAPSED = 'b1_quickword_collapsed';
  const STORAGE_KEY_CACHE = 'b1_quickword_cache_v1';
  const STORAGE_KEY_RECENT = 'b1_quickword_recent_v1';

  let currentResult = null;
  let isTranslating = false;

  /* ---------------- STORAGE SANITIZATION ---------------- */

  function sanitizeStorage() {
    try {
      const rawCache = localStorage.getItem(STORAGE_KEY_CACHE);
      if (rawCache) {
        const cache = JSON.parse(rawCache);
        let changed = false;
        for (const k of Object.keys(cache)) {
          const item = cache[k];
          if (
            !item ||
            item.defAr === 'انظر الشرح في الأعلى' ||
            item.defFr === 'Voir explication ci-dessus' ||
            (item.term && item.term.includes('Hallo!'))
          ) {
            delete cache[k];
            changed = true;
          }
        }
        if (changed) {
          localStorage.setItem(STORAGE_KEY_CACHE, JSON.stringify(cache));
        }
      }

      const rawRecent = localStorage.getItem(STORAGE_KEY_RECENT);
      if (rawRecent) {
        const recent = JSON.parse(rawRecent);
        if (Array.isArray(recent)) {
          const cleaned = recent.filter(w => typeof w === 'string' && !w.includes('Hallo!') && w.length < 35);
          if (cleaned.length !== recent.length) {
            localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(cleaned));
          }
        }
      }
    } catch (e) {}
  }
  sanitizeStorage();

  /* ---------------- CACHE & RECENT HELPERS ---------------- */

  function getLookupCache() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CACHE);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveToLookupCache(term, data) {
    if (!term || !data) return;
    try {
      const cache = getLookupCache();
      cache[term.toLowerCase().trim()] = data;
      // Cap cache size to 60 items
      const keys = Object.keys(cache);
      if (keys.length > 60) {
        delete cache[keys[0]];
      }
      localStorage.setItem(STORAGE_KEY_CACHE, JSON.stringify(cache));
    } catch (e) {}
  }

  function getRecentWords() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_RECENT);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list.filter(w => typeof w === 'string' && !w.includes('Hallo!') && w.length < 35) : [];
    } catch (e) {
      return [];
    }
  }

  function addRecentWord(term) {
    if (!term) return;
    try {
      const clean = term.trim();
      if (clean.includes('Hallo!') || clean.length > 35) return;
      let list = getRecentWords().filter(w => w.toLowerCase() !== clean.toLowerCase());
      list.unshift(clean);
      if (list.length > 5) list = list.slice(0, 5);
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(list));
      renderRecentChips();
    } catch (e) {}
  }

  /* ---------------- AI TRANSLATION SERVICES ---------------- */

  async function translateWord(germanWord) {
    const cleanWord = germanWord.trim();
    if (!cleanWord) throw new Error('Bitte gib ein deutsches Wort ein.');

    // 1. Check local B1 vocabulary first (Instant zero-latency match)
    if (typeof window.findVocabByTerm === 'function') {
      const localMatch = window.findVocabByTerm(cleanWord);
      if (localMatch) {
        return {
          ...localMatch,
          isLocalMatch: true
        };
      }
    }

    // 2. Check local offline translation cache (skip corrupted items)
    const cache = getLookupCache();
    const cachedItem = cache[cleanWord.toLowerCase()];
    if (cachedItem && cachedItem.defAr && cachedItem.defAr !== 'انظر الشرح في الأعلى') {
      return cachedItem;
    }

    // 3. AI Translation call
    const provider = localStorage.getItem(STORAGE_KEY_PROVIDER) || 'gemini';
    const geminiKey = localStorage.getItem(STORAGE_KEY_GEMINI) || '';
    const groqKey = localStorage.getItem(STORAGE_KEY_GROQ) || '';
    const proxyUrl = localStorage.getItem(STORAGE_KEY_PROXY) || DEFAULT_PROXY_ENDPOINT;

    let result = null;

    if (geminiKey && (provider === 'gemini' || !proxyUrl)) {
      result = await callGeminiTranslate(geminiKey, cleanWord);
    } else if (groqKey && provider === 'groq') {
      result = await callGroqTranslate(groqKey, cleanWord);
    } else {
      // Use Cloudflare proxy
      result = await callProxyTranslate(proxyUrl, cleanWord);
    }

    if (!result) {
      throw new Error('Keine Übersetzung erhalten.');
    }

    // Determine normalized clean term
    const resolvedTerm = (result.term && result.term.length < 40 && !result.term.includes('Hallo!')) ? result.term.trim() : cleanWord;

    // Normalize result structure
    const normalized = {
      term: resolvedTerm,
      display: result.display || (result.article ? `${result.article} ${resolvedTerm}` : resolvedTerm),
      pos: result.pos || 'Wort',
      article: result.article || null,
      forms: Array.isArray(result.forms) && result.forms.length > 0 ? result.forms : [resolvedTerm],
      defDe: result.defDe || 'Keine deutsche Definition verfügbar.',
      defAr: result.defAr || '',
      defFr: result.defFr || '',
      example: result.example || '',
      tip: result.tip || 'B1 Prüfungsrelevanz',
      level: 'B1',
      teil: 0,
      isValidGerman: result.isValidGerman !== false
    };

    if (!normalized.defAr || normalized.defAr === 'انظر الشرح في الأعلى') {
      throw new Error('Die KI konnte keine saubere Übersetzung liefern. Bitte versuche es erneut.');
    }

    saveToLookupCache(cleanWord, normalized);
    return normalized;
  }

  function parseAiJsonResponse(rawText, fallbackTerm) {
    if (!rawText) return null;
    if (typeof rawText === 'object' && rawText !== null) {
      if (rawText.term && rawText.defAr && rawText.defFr) return rawText;
      if (rawText.reply) return parseAiJsonResponse(rawText.reply, fallbackTerm);
    }

    let cleaned = String(rawText).trim();

    // Strip markdown code fences if present
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    }

    let parsed = null;
    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      // Try to extract JSON object via regex
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          parsed = JSON.parse(match[0]);
        } catch (e2) {}
      }
    }

    if (parsed && typeof parsed === 'object') {
      if (typeof parsed.reply === 'string') {
        const nested = parseAiJsonResponse(parsed.reply, fallbackTerm);
        if (nested && nested.defAr) return nested;
      }
      if (parsed.term || parsed.defAr || parsed.defFr || parsed.defDe) {
        if (!parsed.term || parsed.term.length > 40 || parsed.term.includes('Hallo!')) {
          parsed.term = fallbackTerm || 'Wort';
        }
        return parsed;
      }
    }

    throw new Error('Ungültiges Antwortformat der KI erhalten.');
  }

  async function callProxyTranslate(proxyUrl, word) {
    const systemPrompt = "Du bist ein striktes zweisprachiges Fachwörterbuch Deutsch -> Arabisch & Französisch für B1-Zertifikatsprüfungen. Antworte AUSSCHLIESSLICH im JSON-Format ohne Markdown und ohne Begleittext.";
    const userPrompt = `Übersetze und erkläre das folgende deutsche Wort für einen B1-Prüfungskandidaten: "${word}"

Antworte AUSSCHLIESSLICH als gültiges JSON-Objekt mit genau dieser Struktur (kein Begleittext, kein Markdown):
{
  "term": "${word}",
  "display": "Wort mit Artikel falls Nomen (z.B. der/die/das ${word} (Nomen) oder ${word} (Verb))",
  "pos": "Nomen | Verb | Adjektiv | Adverb | Redewendung",
  "article": "der | die | das | null",
  "forms": ["Grundform", "weitere Formen"],
  "defDe": "Kurze, klare deutsche Definition auf B1-Niveau (1 einfacher Satz)",
  "defAr": "ترجمة عربية دقيقة ومباشرة وواضحة جدا",
  "defFr": "Traduction française claire, précise et directe",
  "example": "Ein authentischer deutscher B1-Beispielsatz",
  "tip": "B1-Prüfungstipp oder Synonym",
  "isValidGerman": true
}`;

    const res = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mode: 'translate',
        systemPrompt: systemPrompt,
        prompt: userPrompt
      })
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || `Proxy-Fehler: HTTP ${res.status}`);
    }

    return parseAiJsonResponse(data, word);
  }

  async function callGeminiTranslate(apiKey, word) {
    const promptText = `Übersetze und erkläre das folgende deutsche Wort für einen B1-Prüfungskandidaten: "${word}"

Gib die Antwort AUSSCHLIESSLICH als gültiges JSON-Objekt mit genau dieser Struktur zurück (kein Begleittext, kein Markdown):
{
  "term": "${word}",
  "display": "Wort mit Artikel falls Nomen (z.B. der/die/das ${word} (Nomen) oder ${word} (Verb))",
  "pos": "Nomen | Verb | Adjektiv | Adverb | Redewendung",
  "article": "der | die | das | null",
  "forms": ["Grundform", "weitere Formen"],
  "defDe": "Kurze, klare Definition auf Deutsch (B1)",
  "defAr": "ترجمة عربية دقيقة ومباشرة",
  "defFr": "Traduction française claire et précise",
  "example": "Ein B1-Beispielsatz auf Deutsch",
  "tip": "B1-Prüfungstipp oder Synonym",
  "isValidGerman": true
}`;

    const payload = {
      system_instruction: {
        parts: [{ text: "Du bist ein präzises Fachwörterbuch Deutsch-Arabisch-Französisch. Antworte AUSSCHLIESSLICH mit reinem JSON." }]
      },
      contents: [{ role: 'user', parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 1000,
        responseMimeType: "application/json"
      }
    };

    const models = ['gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.8-flash'];
    let lastError = null;

    for (const model of models) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return parseAiJsonResponse(data.candidates[0].content.parts[0].text, word);
      } else {
        lastError = data?.error?.message || `HTTP ${res.status}`;
      }
    }

    throw new Error(`Gemini-Fehler: ${lastError || 'Keine Antwort erhalten.'}`);
  }

  async function callGroqTranslate(apiKey, word) {
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
    const promptText = `Übersetze das deutsche Wort "${word}" für B1-Niveau ins Arabische und Französische.
Antworte AUSSCHLIESSLICH als valides JSON-Objekt mit Schlüsseln: term, display, pos, article, forms, defDe, defAr, defFr, example, tip, isValidGerman.`;

    const payload = {
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: 'Du bist ein Sprachlexikon Deutsch-Arabisch-Französisch. Antworte AUSSCHLIESSLICH mit JSON.' },
        { role: 'user', content: promptText }
      ],
      temperature: 0.1,
      max_tokens: 800,
      response_format: { type: 'json_object' }
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Groq-Fehler: HTTP ${res.status}`);
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    return parseAiJsonResponse(content, word);
  }

  /* ---------------- UI CREATION & DOM INJECTION ---------------- */

  function createWidgetElements() {
    if (document.getElementById('b1QuickWordWrap')) return;

    const wrap = document.createElement('aside');
    wrap.id = 'b1QuickWordWrap';
    wrap.className = 'b1-qw-wrap';
    wrap.setAttribute('aria-label', 'Schnell-Wortschatz & Übersetzer');

    wrap.innerHTML = `
      <!-- Sticky Sidebar Handle (Left Edge) -->
      <button type="button" class="b1-qw-handle" id="b1QwHandle" title="Schnell-Wortschatz & Übersetzer öffnen (Wort nachschlagen & merken)" aria-expanded="false" aria-controls="b1QwPanel">
        <span class="b1-qw-handle-icon">📖</span>
        <span class="b1-qw-handle-text">Wort?</span>
        <span class="b1-qw-handle-badge" id="b1QwHandleBadge" style="display:none;">✓</span>
      </button>

      <!-- Expandable Pop-up Panel -->
      <section class="b1-qw-panel" id="b1QwPanel" style="display:none;" role="region" aria-label="Wort nachschlagen & merken">
        <header class="b1-qw-header">
          <div class="b1-qw-header-title-wrap">
            <span class="b1-qw-header-icon">⚡</span>
            <div>
              <div class="b1-qw-header-title">Schnell-Wortschatz</div>
              <div class="b1-qw-header-sub">Wort eingeben → AR & FR → Lernkarten</div>
            </div>
          </div>
          <div class="b1-qw-header-actions">
            <button type="button" class="b1-qw-icon-btn" id="b1QwVocabModalLink" title="Kompletten Wortschatz & Lernkarten öffnen">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </button>
            <button type="button" class="b1-qw-icon-btn b1-qw-close-btn" id="b1QwCloseBtn" title="Schließen (Esc)">✕</button>
          </div>
        </header>

        <div class="b1-qw-body">
          <!-- Search / Input Form -->
          <form class="b1-qw-form" id="b1QwForm" onsubmit="return false;">
            <div class="b1-qw-input-box">
              <input type="text" id="b1QwInput" class="b1-qw-input" placeholder="Deutsches Wort (z. B. verhandeln)..." autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false">
              <button type="button" class="b1-qw-clear-btn" id="b1QwClearBtn" title="Eingabe löschen" style="display:none;">✕</button>
              <button type="submit" class="b1-qw-submit-btn" id="b1QwSubmitBtn" title="Übersetzen">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
            </div>
          </form>

          <!-- Recent Words Quick Chips -->
          <div class="b1-qw-recent-row" id="b1QwRecentRow" style="display:none;">
            <span class="b1-qw-recent-label">Zuletzt:</span>
            <div class="b1-qw-recent-chips" id="b1QwRecentChips"></div>
          </div>

          <!-- Loading State -->
          <div class="b1-qw-loading" id="b1QwLoading" style="display:none;">
            <div class="b1-qw-spinner"></div>
            <div class="b1-qw-loading-text">KI übersetzt nach Französisch & Arabisch...</div>
          </div>

          <!-- Error State -->
          <div class="b1-qw-error" id="b1QwError" style="display:none;">
            <span class="b1-qw-error-icon">⚠️</span>
            <div id="b1QwErrorMsg">Fehler beim Übersetzen.</div>
            <button type="button" class="btn btn-outline btn-xs" id="b1QwManualAddBtn" style="margin-top:6px;">Wort manuell eintragen</button>
          </div>

          <!-- Result Card Area -->
          <div class="b1-qw-result-wrap" id="b1QwResultWrap" style="display:none;">
            <!-- Notice if already in local vocab -->
            <div class="b1-qw-local-banner" id="b1QwLocalBanner" style="display:none;">
              ℹ️ Bereits im B1-Wortschatz vorhanden!
            </div>

            <div class="b1-qw-card">
              <div class="b1-qw-card-top">
                <div>
                  <div class="b1-qw-term-title" id="b1QwTermTitle"></div>
                  <div class="b1-qw-meta-row">
                    <span class="b1-qw-level-badge">B1</span>
                    <span class="b1-qw-pos-badge" id="b1QwPosBadge"></span>
                    <span class="b1-qw-custom-badge" id="b1QwCustomBadge" style="display:none;">Eigenes Wort</span>
                  </div>
                </div>
                <button type="button" class="b1-qw-audio-btn" id="b1QwAudioBtn" title="Deutsche Aussprache anhören">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </button>
              </div>

              <!-- Translations Grid -->
              <div class="b1-qw-trans-grid">
                <div class="b1-qw-trans-card b1-qw-trans-ar">
                  <div class="b1-qw-trans-lang-tag">AR 🇸🇦</div>
                  <div class="b1-qw-trans-text" id="b1QwTransAr" dir="rtl"></div>
                </div>
                <div class="b1-qw-trans-card b1-qw-trans-fr">
                  <div class="b1-qw-trans-lang-tag">FR 🇫🇷</div>
                  <div class="b1-qw-trans-text" id="b1QwTransFr"></div>
                </div>
              </div>

              <!-- German Definition -->
              <div class="b1-qw-def-block">
                <div class="b1-qw-block-label">Definition:</div>
                <div class="b1-qw-def-text" id="b1QwDefDe"></div>
              </div>

              <!-- German Example -->
              <div class="b1-qw-example-block" id="b1QwExampleBlock">
                <div class="b1-qw-block-label">Beispiel:</div>
                <div class="b1-qw-example-text" id="b1QwExampleText"></div>
              </div>

              <!-- Action: Save to Vocabulary & Flashcards -->
              <div class="b1-qw-action-row">
                <button type="button" class="btn btn-primary b1-qw-save-btn" id="b1QwSaveBtn">
                  <span>＋ In Wortschatz & Lernkarten speichern</span>
                </button>
              </div>

              <div class="b1-qw-flashcard-link-wrap" id="b1QwFlashcardLinkWrap" style="display:none;">
                <a href="javascript:void(0)" class="b1-qw-flashcard-link" id="b1QwFlashcardLink">
                  🗂️ Direkt in Lernkarten üben &gt;
                </a>
              </div>
            </div>
          </div>

          <!-- Manual Entry Mini-Form (Fallback) -->
          <div class="b1-qw-manual-form" id="b1QwManualForm" style="display:none;">
            <div class="b1-qw-block-label" style="font-weight:700; margin-bottom:8px;">Eigenes Wort manuell speichern:</div>
            <input type="text" id="b1QwManualTerm" class="b1-qw-manual-input" placeholder="Wort (z.B. der Bescheid)">
            <input type="text" id="b1QwManualAr" class="b1-qw-manual-input" placeholder="Arabische Übersetzung" dir="rtl">
            <input type="text" id="b1QwManualFr" class="b1-qw-manual-input" placeholder="Französische Übersetzung">
            <input type="text" id="b1QwManualDef" class="b1-qw-manual-input" placeholder="Deutsche Erklärung / Beispielsatz">
            <div style="display:flex; gap:6px; margin-top:8px;">
              <button type="button" class="btn btn-primary btn-sm" id="b1QwManualSaveBtn" style="flex:1;">Speichern</button>
              <button type="button" class="btn btn-outline btn-sm" id="b1QwManualCancelBtn">Abbrechen</button>
            </div>
          </div>

        </div>
      </section>
    `;

    document.body.appendChild(wrap);
    bindWidgetEvents();
    renderRecentChips();

    // Check saved collapsed state
    const savedCollapsed = localStorage.getItem(STORAGE_KEY_COLLAPSED);
    if (savedCollapsed === 'false') {
      openWidget();
    }
  }

  function bindWidgetEvents() {
    const handle = document.getElementById('b1QwHandle');
    const panel = document.getElementById('b1QwPanel');
    const closeBtn = document.getElementById('b1QwCloseBtn');
    const form = document.getElementById('b1QwForm');
    const input = document.getElementById('b1QwInput');
    const clearBtn = document.getElementById('b1QwClearBtn');
    const audioBtn = document.getElementById('b1QwAudioBtn');
    const saveBtn = document.getElementById('b1QwSaveBtn');
    const vocabModalLink = document.getElementById('b1QwVocabModalLink');
    const flashcardLink = document.getElementById('b1QwFlashcardLink');

    // Handle toggle
    if (handle) {
      handle.addEventListener('click', toggleWidget);
    }

    // Close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeWidget);
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel && panel.style.display !== 'none') {
        closeWidget();
      }
    });

    // Input typing listener
    if (input) {
      input.addEventListener('input', () => {
        if (clearBtn) {
          clearBtn.style.display = input.value.trim().length > 0 ? 'block' : 'none';
        }
      });
    }

    // Clear button
    if (clearBtn && input) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        input.focus();
      });
    }

    // Form submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSearch();
      });
    }

    // Audio pronounce button
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (currentResult && currentResult.term) {
          if (typeof window.speakGermanWord === 'function') {
            window.speakGermanWord(currentResult.term);
          }
        }
      });
    }

    // Save to vocabulary button
    if (saveBtn) {
      saveBtn.addEventListener('click', handleSaveCurrentWord);
    }

    // Link to full vocabulary modal
    if (vocabModalLink) {
      vocabModalLink.addEventListener('click', () => {
        if (typeof window.openVocabModal === 'function') {
          window.openVocabModal('current');
        }
      });
    }

    // Link directly to flashcards
    if (flashcardLink) {
      flashcardLink.addEventListener('click', () => {
        if (typeof window.openVocabModal === 'function') {
          window.openVocabModal('flashcards');
        }
      });
    }

    // Manual fallback form triggers
    const manualAddBtn = document.getElementById('b1QwManualAddBtn');
    const manualForm = document.getElementById('b1QwManualForm');
    const manualCancelBtn = document.getElementById('b1QwManualCancelBtn');
    const manualSaveBtn = document.getElementById('b1QwManualSaveBtn');

    if (manualAddBtn && manualForm) {
      manualAddBtn.addEventListener('click', () => {
        manualForm.style.display = 'block';
        const manualTerm = document.getElementById('b1QwManualTerm');
        if (manualTerm && input) manualTerm.value = input.value.trim();
        const err = document.getElementById('b1QwError');
        if (err) err.style.display = 'none';
      });
    }

    if (manualCancelBtn && manualForm) {
      manualCancelBtn.addEventListener('click', () => {
        manualForm.style.display = 'none';
      });
    }

    if (manualSaveBtn) {
      manualSaveBtn.addEventListener('click', handleManualSave);
    }
  }

  function toggleWidget() {
    const panel = document.getElementById('b1QwPanel');
    if (!panel) return;
    if (panel.style.display === 'none' || !panel.style.display) {
      openWidget();
    } else {
      closeWidget();
    }
  }

  function openWidget() {
    const panel = document.getElementById('b1QwPanel');
    const handle = document.getElementById('b1QwHandle');
    const input = document.getElementById('b1QwInput');
    if (panel) {
      panel.style.display = 'flex';
      localStorage.setItem(STORAGE_KEY_COLLAPSED, 'false');
    }
    if (handle) {
      handle.setAttribute('aria-expanded', 'true');
      handle.classList.add('active');
    }
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }

  function closeWidget() {
    const panel = document.getElementById('b1QwPanel');
    const handle = document.getElementById('b1QwHandle');
    if (panel) {
      panel.style.display = 'none';
      localStorage.setItem(STORAGE_KEY_COLLAPSED, 'true');
    }
    if (handle) {
      handle.setAttribute('aria-expanded', 'false');
      handle.classList.remove('active');
    }
  }

  /* ---------------- SEARCH & TRANSLATION HANDLERS ---------------- */

  async function handleSearch(wordOverride) {
    const input = document.getElementById('b1QwInput');
    const word = wordOverride || (input ? input.value.trim() : '');
    if (!word || isTranslating) return;

    if (input && !wordOverride) {
      input.value = word;
    }

    const loading = document.getElementById('b1QwLoading');
    const errorEl = document.getElementById('b1QwError');
    const errorMsg = document.getElementById('b1QwErrorMsg');
    const resultWrap = document.getElementById('b1QwResultWrap');
    const manualForm = document.getElementById('b1QwManualForm');

    if (errorEl) errorEl.style.display = 'none';
    if (manualForm) manualForm.style.display = 'none';
    if (resultWrap) resultWrap.style.display = 'none';
    if (loading) loading.style.display = 'flex';

    isTranslating = true;

    try {
      const data = await translateWord(word);
      currentResult = data;
      renderResult(data);
      addRecentWord(data.term || word);
    } catch (err) {
      if (errorEl) {
        errorEl.style.display = 'flex';
        if (errorMsg) errorMsg.textContent = err.message || 'Übersetzung fehlgeschlagen.';
      }
    } finally {
      isTranslating = false;
      if (loading) loading.style.display = 'none';
    }
  }

  function renderResult(data) {
    const resultWrap = document.getElementById('b1QwResultWrap');
    if (!resultWrap) return;

    const termTitle = document.getElementById('b1QwTermTitle');
    const posBadge = document.getElementById('b1QwPosBadge');
    const customBadge = document.getElementById('b1QwCustomBadge');
    const localBanner = document.getElementById('b1QwLocalBanner');
    const transAr = document.getElementById('b1QwTransAr');
    const transFr = document.getElementById('b1QwTransFr');
    const defDe = document.getElementById('b1QwDefDe');
    const exampleBlock = document.getElementById('b1QwExampleBlock');
    const exampleText = document.getElementById('b1QwExampleText');
    const saveBtn = document.getElementById('b1QwSaveBtn');
    const flashcardLinkWrap = document.getElementById('b1QwFlashcardLinkWrap');

    // Term & POS
    if (termTitle) {
      termTitle.textContent = data.display || data.term;
    }
    if (posBadge) {
      posBadge.textContent = data.pos || 'Wort';
    }
    if (customBadge) {
      customBadge.style.display = data.isCustom ? 'inline-block' : 'none';
    }

    // Local match notice
    if (localBanner) {
      localBanner.style.display = data.isLocalMatch ? 'block' : 'none';
    }

    // Translations
    if (transAr) transAr.textContent = data.defAr || '—';
    if (transFr) transFr.textContent = data.defFr || '—';

    // Definition & Example
    if (defDe) defDe.textContent = data.defDe || '—';
    if (exampleBlock && exampleText) {
      if (data.example) {
        exampleBlock.style.display = 'block';
        exampleText.textContent = `„${data.example}“`;
      } else {
        exampleBlock.style.display = 'none';
      }
    }

    // Check if already saved in personal retention / flashcards
    const isAlreadySaved = typeof window.isVocabSaved === 'function' && data.id && window.isVocabSaved(data.id);
    const isAlreadyCustom = data.id && (typeof window.getCustomVocab === 'function') && window.getCustomVocab().some(w => w.id === data.id || w.term.toLowerCase() === data.term.toLowerCase());

    updateSaveButtonState(isAlreadySaved || isAlreadyCustom);

    resultWrap.style.display = 'block';
  }

  function updateSaveButtonState(isSaved) {
    const saveBtn = document.getElementById('b1QwSaveBtn');
    const flashcardLinkWrap = document.getElementById('b1QwFlashcardLinkWrap');

    if (!saveBtn) return;

    if (isSaved) {
      saveBtn.className = 'btn btn-success b1-qw-save-btn saved';
      saveBtn.innerHTML = '<span>✓ In Wortschatz & Lernkarten gespeichert</span>';
      if (flashcardLinkWrap) flashcardLinkWrap.style.display = 'block';
    } else {
      saveBtn.className = 'btn btn-primary b1-qw-save-btn';
      saveBtn.innerHTML = '<span>＋ In Wortschatz & Lernkarten speichern</span>';
      if (flashcardLinkWrap) flashcardLinkWrap.style.display = 'none';
    }
  }

  function handleSaveCurrentWord() {
    if (!currentResult) return;

    try {
      let savedEntry;

      // If it's already an existing built-in vocab item, star it
      if (currentResult.isLocalMatch && currentResult.id) {
        if (typeof window.saveVocabId === 'function') {
          window.saveVocabId(currentResult.id);
        }
        savedEntry = currentResult;
      } else {
        // Add as custom vocabulary item
        if (typeof window.addCustomVocab === 'function') {
          savedEntry = window.addCustomVocab({
            term: currentResult.term,
            display: currentResult.display || currentResult.term,
            pos: currentResult.pos || 'Nomen',
            defDe: currentResult.defDe,
            defAr: currentResult.defAr,
            defFr: currentResult.defFr,
            example: currentResult.example,
            tip: currentResult.tip || 'Eigenes B1-Wort',
            forms: currentResult.forms,
            level: 'B1',
            teil: 0
          });
        }
      }

      currentResult.id = savedEntry ? savedEntry.id : currentResult.id;
      updateSaveButtonState(true);

      // Show handle badge feedback
      const badge = document.getElementById('b1QwHandleBadge');
      if (badge) {
        badge.style.display = 'flex';
        setTimeout(() => { badge.style.display = 'none'; }, 2500);
      }

      // Update recent words
      addRecentWord(currentResult.term);

    } catch (e) {
      alert('Fehler beim Speichern: ' + (e.message || e));
    }
  }

  function handleManualSave() {
    const termInput = document.getElementById('b1QwManualTerm');
    const arInput = document.getElementById('b1QwManualAr');
    const frInput = document.getElementById('b1QwManualFr');
    const defInput = document.getElementById('b1QwManualDef');

    const term = termInput ? termInput.value.trim() : '';
    if (!term) {
      alert('Bitte mindestens ein deutsches Wort eingeben.');
      return;
    }

    try {
      if (typeof window.addCustomVocab === 'function') {
        const saved = window.addCustomVocab({
          term: term,
          display: term,
          pos: 'Wort',
          defDe: defInput ? defInput.value.trim() || term : term,
          defAr: arInput ? arInput.value.trim() : '',
          defFr: frInput ? frInput.value.trim() : '',
          example: '',
          tip: 'Manuell hinzugefügt',
          forms: [term],
          level: 'B1',
          teil: 0
        });

        currentResult = saved;
        renderResult(saved);
        addRecentWord(term);

        const manualForm = document.getElementById('b1QwManualForm');
        if (manualForm) manualForm.style.display = 'none';
      }
    } catch (e) {
      alert('Fehler beim manuellen Speichern: ' + e.message);
    }
  }

  function renderRecentChips() {
    const container = document.getElementById('b1QwRecentChips');
    const row = document.getElementById('b1QwRecentRow');
    if (!container || !row) return;

    const list = getRecentWords();
    if (list.length === 0) {
      row.style.display = 'none';
      return;
    }

    row.style.display = 'flex';
    container.innerHTML = list.map(w => `
      <button type="button" class="b1-qw-chip" onclick="window.quickLookupWord('${w.replace(/'/g, "\\'")}')">
        ${w}
      </button>
    `).join('');
  }

  /* ---------------- PUBLIC API EXPOSURE ---------------- */

  window.openQuickWordWidget = openWidget;
  window.closeQuickWordWidget = closeWidget;
  window.toggleQuickWordWidget = toggleWidget;
  window.quickLookupWord = function(word) {
    openWidget();
    handleSearch(word);
  };

  // Auto-init once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidgetElements);
  } else {
    createWidgetElements();
  }

})();
