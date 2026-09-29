/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — INTELLIGENTER KI-TUTOR (AI TUTOR)
   Interaktiver B1-Sprachassistent für Fragen, Grammatikerklärungen & Fehleranalyse.
   Unterstützt kostenlose Google Gemini API, Groq Cloud API & Proxy-Endpunkte.
   ========================================================================== */

(function() {
  'use strict';

  // Storage Keys
  const STORAGE_KEY_GEMINI = 'b1_gemini_api_key';
  const STORAGE_KEY_GROQ = 'b1_groq_api_key';
  const STORAGE_KEY_PROXY = 'b1_ai_proxy_endpoint';
  const STORAGE_KEY_PROVIDER = 'b1_ai_selected_provider'; // 'gemini' | 'groq' | 'proxy'

  let activeQuestionContext = null;
  let isGenerating = false;
  let chatHistory = [];

  // System Prompt for B1 Language Pedagogy
  const SYSTEM_PROMPT = `Du bist der offizielle Antigravity KI-Tutor für die Goethe-Zertifikat B1 und ÖSD B1 Prüfungssimulation.
Deine Aufgabe ist es, Deutschlernenden auf dem Niveau B1 geduldig, motivierend und didaktisch präzise Prüfungsaufgaben und Sprachregeln zu erklären.

Richtlinien:
1. Didaktisch & verständlich: Verwende klares, natürliches Deutsch auf Niveau B1/B2 (außer der Nutzer bittet um Arabisch oder Französisch).
2. Mehrsprachigkeit: Wenn der Benutzer auf Arabisch oder Französisch schreibt oder eine Erklärung in diesen Sprachen wünscht, antworte zweisprachig (Deutsch + Arabisch bzw. Deutsch + Französisch).
3. Textbelege & Signalwörter: Erkläre exakt, welche Wörter oder Sätze im Text zur richtigen Lösung führen und warum die anderen Optionen falsche Ablenker (Distraktoren) sind.
4. Grammatische Tiefe: Erkläre relevante Grammatikphänomene (Konnektoren wie weil/obwohl/deshalb, Passiv, Konjunktiv II, Präpositionen mit Dativ/Akkusativ) kurz und anwendbar.
5. Struktur & Kürze: Verwende saubere Formatierungen mit Aufzählungspunkten und Fettdruck. Halte Erklärungen prägnant und übersichtlich (unter 220 Wörtern).`;

  /* ---------------- CONTEXT HELPER ---------------- */
  function extractQuestionContext(qid) {
    if (!qid) return null;
    const test = (typeof currentTest !== 'undefined' && currentTest) || (typeof modelTests !== 'undefined' && modelTests[0]);
    if (!test || !test.parts) return null;

    let foundPart = null;
    let foundQ = null;

    for (const part of test.parts) {
      if (part.questions) {
        const q = part.questions.find(x => String(x.id) === String(qid));
        if (q) {
          foundPart = part;
          foundQ = q;
          break;
        }
      }
      if (part.letters) {
        const l = part.letters.find(x => String(x.id) === String(qid));
        if (l) {
          foundPart = part;
          foundQ = l;
          break;
        }
      }
    }

    if (!foundQ) return null;

    const userAns = (typeof userAnswers !== 'undefined' && userAnswers[qid]) !== undefined ? userAnswers[qid] : 'Keine Antwort eingegeben';
    const explanation = typeof getExplanation === 'function' ? getExplanation(test.id, qid, typeof questionsLang !== 'undefined' ? questionsLang : 'de') : null;

    return {
      qid: String(qid),
      testTitle: test.title || test.badge || 'Modelltest B1',
      partTitle: foundPart ? (foundPart.title || `Teil ${foundPart.id}`) : 'Prüfungsteil',
      questionText: foundQ.text || '',
      options: foundQ.options || null,
      correctAnswer: foundQ.answer,
      userAnswer: userAns,
      quote: explanation?.quote || '',
      whyCorrect: explanation?.whyCorrect || '',
      whyIncorrect: explanation?.whyIncorrect || ''
    };
  }

  /* ---------------- API CALL METHODS ---------------- */
  async function callGeminiApi(apiKey, userPrompt, context) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    let contextText = '';
    if (context) {
      contextText = `
[AKTUELLE PRÜFUNGSAUFGABE]:
- Prüfung: ${context.testTitle} (${context.partTitle})
- Aufgabe-ID: ${context.qid}
- Aufgabenstellung: "${context.questionText}"
${context.options ? `- Auswahlmöglichkeiten: ${JSON.stringify(context.options)}` : ''}
- Richtige Lösung laut Prüfungsschlüssel: "${context.correctAnswer}"
- Antwort des Schülers: "${context.userAnswer}"
${context.quote ? `- Textbeleg / Zitat aus dem Prüfungstext: „${context.quote}“` : ''}
${context.whyCorrect ? `- Didaktische Erklärung (Richtig): ${context.whyCorrect}` : ''}
${context.whyIncorrect ? `- Didaktische Erklärung (Falsche Optionen): ${context.whyIncorrect}` : ''}
`;
    }

    const payload = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: `${contextText}\n\n[FRAGE DES SCHÜLERS AN DEN KI-TUTOR]:\n${userPrompt}` }]
        }
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 900
      }
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const msg = errJson?.error?.message || `HTTP ${res.status}: ${res.statusText}`;
      throw new Error(`Google Gemini Fehler: ${msg}`);
    }

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Keine Antwort erhalten.';
  }

  async function callGroqApi(apiKey, userPrompt, context) {
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

    let contextText = '';
    if (context) {
      contextText = `
[AKTUELLE PRÜFUNGSAUFGABE]:
- Prüfung: ${context.testTitle} (${context.partTitle})
- Aufgabe-ID: ${context.qid}
- Frage: "${context.questionText}"
${context.options ? `- Optionen: ${JSON.stringify(context.options)}` : ''}
- Richtige Antwort: "${context.correctAnswer}"
- Schüler-Antwort: "${context.userAnswer}"
${context.quote ? `- Textzitat: „${context.quote}“` : ''}
`;
    }

    const payload = {
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `${contextText}\n\n[FRAGE DES SCHÜLERS]:\n${userPrompt}` }
      ],
      temperature: 0.4,
      max_tokens: 900
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
      const errJson = await res.json().catch(() => ({}));
      const msg = errJson?.error?.message || `HTTP ${res.status}: ${res.statusText}`;
      throw new Error(`Groq Fehler: ${msg}`);
    }

    const data = await res.json();
    return data?.choices?.[0]?.message?.content || 'Keine Antwort erhalten.';
  }

  async function callCustomProxy(proxyUrl, userPrompt, context) {
    const payload = {
      prompt: userPrompt,
      context: context,
      systemPrompt: SYSTEM_PROMPT
    };

    const res = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`Proxy Fehler: HTTP ${res.status}`);
    }

    const data = await res.json();
    return data.reply || data.text || data.message || JSON.stringify(data);
  }

  /* ---------------- SIMPLE MARKDOWN TO HTML ---------------- */
  function formatMarkdown(text) {
    if (!text) return '';
    let esc = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    esc = esc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic *text*
    esc = esc.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code `code`
    esc = esc.replace(/`([^`]+)`/g, '<code class="ai-inline-code">$1</code>');
    // Line breaks
    esc = esc.replace(/\n\n/g, '<div style="margin-bottom:8px;"></div>');
    esc = esc.replace(/\n/g, '<br>');

    return esc;
  }

  /* ---------------- UI CONTROLLER ---------------- */
  window.openAiTutorModal = function(qid) {
    const modal = document.getElementById('aiTutorModal');
    if (!modal) return;

    activeQuestionContext = qid ? extractQuestionContext(qid) : null;
    const contextCard = document.getElementById('aiTutorContextCard');
    const subtitleEl = document.getElementById('aiTutorSubtitle');
    const pillsWrap = document.getElementById('aiTutorPillsWrap');

    if (activeQuestionContext) {
      if (subtitleEl) {
        subtitleEl.textContent = `Aufgabe ${activeQuestionContext.qid} · ${activeQuestionContext.testTitle} (${activeQuestionContext.partTitle})`;
      }
      if (contextCard) {
        contextCard.style.display = 'block';
        contextCard.innerHTML = `
          <div class="ai-context-qtitle">
            <span class="ai-badge-num">#${activeQuestionContext.qid}</span>
            <span>${activeQuestionContext.questionText}</span>
          </div>
          ${activeQuestionContext.quote ? `<div class="ai-context-quote">📍 Zitat: „${activeQuestionContext.quote}“</div>` : ''}
          <div class="ai-context-answers-row">
            <span class="ai-pill-correct">✓ Richtig: <strong>${activeQuestionContext.correctAnswer}</strong></span>
            <span class="ai-pill-user">Deine Antwort: <strong>${activeQuestionContext.userAnswer}</strong></span>
          </div>
        `;
      }
      if (pillsWrap) {
        pillsWrap.style.display = 'flex';
      }
    } else {
      if (subtitleEl) subtitleEl.textContent = 'Allgemeiner B1-Deutsch-Sprachassistent';
      if (contextCard) contextCard.style.display = 'none';
      if (pillsWrap) pillsWrap.style.display = 'none';
    }

    // Reset Chat if empty
    const chatContainer = document.getElementById('aiTutorChatHistory');
    if (chatContainer && chatContainer.children.length === 0) {
      appendGreetingMessage();
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Auto-focus input
    setTimeout(() => {
      const input = document.getElementById('aiTutorInput');
      if (input) input.focus();
    }, 150);
  };

  window.closeAiTutorModal = function() {
    const modal = document.getElementById('aiTutorModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  function appendGreetingMessage() {
    const chatContainer = document.getElementById('aiTutorChatHistory');
    if (!chatContainer) return;

    let greeting = 'Hallo! 👋 Ich bin dein **B1-Prüfungstutor**.\n\nIch helfe dir, diese Aufgabe, schwierige Grammatikregeln oder Vokabeln zu verstehen. Klicke einfach auf einen der Vorschläge oben oder tippe deine Frage!';
    if (typeof questionsLang !== 'undefined' && questionsLang === 'ar') {
      greeting = 'أهلاً بك! 👋 أنا **معلمك الذكي لامتحان B1**.\n\nيمكنني شرح سبب الإجابة، توضيح القواعد النحوية، أو الترجمة إلى العربية. اختر أحد الاقتراحات السريعة أو اكتب سؤالك هنا!';
    } else if (typeof questionsLang !== 'undefined' && questionsLang === 'fr') {
      greeting = 'Bonjour ! 👋 Je suis ton **Tuteur IA pour l\'examen B1**.\n\nJe suis là pour t\'expliquer les règles de grammaire, les pièges du texte ou la raison de ton erreur. Pose-moi ta question !';
    }

    appendChatMessage(greeting, 'ai');
  }

  function appendChatMessage(text, role) {
    const chatContainer = document.getElementById('aiTutorChatHistory');
    if (!chatContainer) return;

    const msgEl = document.createElement('div');
    msgEl.className = `ai-chat-bubble ai-bubble-${role}`;

    const isRtl = /[\u0600-\u06FF]/.test(text);
    if (isRtl) msgEl.setAttribute('dir', 'rtl');

    const formatted = formatMarkdown(text);
    msgEl.innerHTML = `
      <div class="ai-bubble-avatar">${role === 'ai' ? '✨' : '👤'}</div>
      <div class="ai-bubble-content">${formatted}</div>
    `;

    chatContainer.appendChild(msgEl);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function appendLoadingBubble() {
    const chatContainer = document.getElementById('aiTutorChatHistory');
    if (!chatContainer) return null;

    const loader = document.createElement('div');
    loader.className = 'ai-chat-bubble ai-bubble-ai ai-bubble-loading';
    loader.id = 'aiTutorLoader';
    loader.innerHTML = `
      <div class="ai-bubble-avatar">✨</div>
      <div class="ai-loading-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chatContainer.appendChild(loader);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return loader;
  }

  function removeLoadingBubble() {
    const loader = document.getElementById('aiTutorLoader');
    if (loader) loader.remove();
  }

  /* ---------------- SEND HANDLER ---------------- */
  window.sendAiTutorMessage = async function(customPrompt) {
    if (isGenerating) return;

    const input = document.getElementById('aiTutorInput');
    const prompt = (customPrompt || (input ? input.value : '')).trim();
    if (!prompt) return;

    if (input && !customPrompt) {
      input.value = '';
    }

    appendChatMessage(prompt, 'user');

    // Check credentials
    const geminiKey = localStorage.getItem(STORAGE_KEY_GEMINI) || '';
    const groqKey = localStorage.getItem(STORAGE_KEY_GROQ) || '';
    const proxyUrl = localStorage.getItem(STORAGE_KEY_PROXY) || '';
    const provider = localStorage.getItem(STORAGE_KEY_PROVIDER) || 'gemini';

    // If no API key is configured yet, provide built-in pedagogical answer or setup invite!
    if (!geminiKey && !groqKey && !proxyUrl) {
      isGenerating = true;
      appendLoadingBubble();

      setTimeout(() => {
        removeLoadingBubble();
        isGenerating = false;

        let response = '';
        if (activeQuestionContext) {
          response = `Hier ist die didaktische Erklärung zu Aufgabe **#${activeQuestionContext.qid}**:\n\n` +
            `✓ **Warum richtig?**\n${activeQuestionContext.whyCorrect || 'Diese Option stimmt exakt mit den Aussagen im Text überein.'}\n\n` +
            `✗ **Warum sind andere Optionen falsch?**\n${activeQuestionContext.whyIncorrect || 'Die anderen Optionen enthalten typische Prüfungs-Ablenker.'}\n\n` +
            `💡 *Möchtest du interaktiv live mit der KI chatten? Klicke oben auf **⚙️ API-Key einrichten**, um deinen kostenlosen Google Gemini-Schlüssel einzutragen (dauerhaft 100% kostenlos)!*`;
        } else {
          response = `Um live und unbegrenzt mit dem KI-Tutor zu chatten, hinterlege bitte kurz deinen **kostenlosen Google Gemini oder Groq API-Schlüssel** über das Zahnrad-Symbol **⚙️** oben rechts.\n\nDas Einrichten dauert nur 30 Sekunden und ist dauerhaft gratis!`;
        }

        appendChatMessage(response, 'ai');
      }, 700);
      return;
    }

    // Call live API
    isGenerating = true;
    appendLoadingBubble();

    try {
      let reply = '';
      if (proxyUrl) {
        reply = await callCustomProxy(proxyUrl, prompt, activeQuestionContext);
      } else if (provider === 'groq' && groqKey) {
        reply = await callGroqApi(groqKey, prompt, activeQuestionContext);
      } else if (geminiKey) {
        reply = await callGeminiApi(geminiKey, prompt, activeQuestionContext);
      } else if (groqKey) {
        reply = await callGroqApi(groqKey, prompt, activeQuestionContext);
      } else {
        throw new Error('Kein gültiger API-Schlüssel gefunden. Bitte unter ⚙️ überprüfen.');
      }

      removeLoadingBubble();
      appendChatMessage(reply, 'ai');
    } catch (err) {
      removeLoadingBubble();
      console.error('AI Tutor Error:', err);
      appendChatMessage(`⚠️ **Fehler beim Abrufen der KI-Antwort:**\n${err.message}\n\nBitte überprüfe deinen API-Schlüssel unter ⚙️ Einstellungen.`, 'ai');
    } finally {
      isGenerating = false;
    }
  };

  /* ---------------- SETTINGS MODAL TOGGLE ---------------- */
  window.toggleAiTutorSettings = function() {
    const panel = document.getElementById('aiTutorSettingsPanel');
    if (!panel) return;
    const isVisible = panel.style.display !== 'none';
    panel.style.display = isVisible ? 'none' : 'block';

    if (!isVisible) {
      // Load current keys into inputs
      const geminiIn = document.getElementById('aiKeyGeminiInput');
      const groqIn = document.getElementById('aiKeyGroqInput');
      const proxyIn = document.getElementById('aiProxyInput');
      const provSel = document.getElementById('aiProviderSelect');

      if (geminiIn) geminiIn.value = localStorage.getItem(STORAGE_KEY_GEMINI) || '';
      if (groqIn) groqIn.value = localStorage.getItem(STORAGE_KEY_GROQ) || '';
      if (proxyIn) proxyIn.value = localStorage.getItem(STORAGE_KEY_PROXY) || '';
      if (provSel) provSel.value = localStorage.getItem(STORAGE_KEY_PROVIDER) || 'gemini';
    }
  };

  window.saveAiTutorSettings = function() {
    const geminiIn = document.getElementById('aiKeyGeminiInput');
    const groqIn = document.getElementById('aiKeyGroqInput');
    const proxyIn = document.getElementById('aiProxyInput');
    const provSel = document.getElementById('aiProviderSelect');

    if (geminiIn) localStorage.setItem(STORAGE_KEY_GEMINI, geminiIn.value.trim());
    if (groqIn) localStorage.setItem(STORAGE_KEY_GROQ, groqIn.value.trim());
    if (proxyIn) localStorage.setItem(STORAGE_KEY_PROXY, proxyIn.value.trim());
    if (provSel) localStorage.setItem(STORAGE_KEY_PROVIDER, provSel.value);

    const statusEl = document.getElementById('aiSettingsSaveStatus');
    if (statusEl) {
      statusEl.textContent = '✓ Gespeichert!';
      statusEl.style.display = 'inline';
      setTimeout(() => {
        statusEl.style.display = 'none';
        window.toggleAiTutorSettings();
      }, 1200);
    }
  };

  /* ---------------- QUICK PROMPT PILLS ---------------- */
  window.sendAiQuickPrompt = function(type) {
    if (!activeQuestionContext) {
      window.sendAiTutorMessage('Erkläre mir bitte eine wichtige Grammatikregel für das B1-Zertifikat mit Beispielen.');
      return;
    }

    let prompt = '';
    switch (type) {
      case 'grammar':
        prompt = `Erkläre mir bitte die Grammatik hinter dieser Frage (#${activeQuestionContext.qid}) auf einfache Weise mit Beispielen.`;
        break;
      case 'ar':
        prompt = `اشرح لي سبب صحة هذه الإجابة (${activeQuestionContext.correctAnswer}) والخطأ في الخيارات الأخرى باللغة العربية مع توضيح المعنى.`;
        break;
      case 'fr':
        prompt = `Explique-moi en français pourquoi la réponse correcte est "${activeQuestionContext.correctAnswer}" et pourquoi les autres options sont fausses.`;
        break;
      case 'keywords':
        prompt = `Welche konkreten Signalwörter und Ausdrücke im Text haben die richtige Antwort "${activeQuestionContext.correctAnswer}" verraten?`;
        break;
      case 'similar':
        prompt = `Erstelle mir bitte eine ähnliche B1-Übungsaufgabe auf Deutsch basierend auf derselben Grammatik oder Textlogik zum Üben.`;
        break;
      default:
        prompt = `Warum ist bei Aufgabe #${activeQuestionContext.qid} die Lösung "${activeQuestionContext.correctAnswer}" richtig?`;
    }

    window.sendAiTutorMessage(prompt);
  };

  /* ---------------- EVENT LISTENERS ON LOAD ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    // Top Nav Button
    const navBtn = document.getElementById('aiTutorNavBtn');
    if (navBtn) {
      navBtn.addEventListener('click', () => {
        window.openAiTutorModal(null);
      });
    }

    // Modal Close Buttons
    const closeBtn = document.getElementById('aiTutorCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', window.closeAiTutorModal);

    const confirmClose = document.getElementById('aiTutorConfirmClose');
    if (confirmClose) confirmClose.addEventListener('click', window.closeAiTutorModal);

    // Overlay click to close
    const overlay = document.getElementById('aiTutorModal');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) window.closeAiTutorModal();
      });
    }

    // Input Enter Key
    const input = document.getElementById('aiTutorInput');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          window.sendAiTutorMessage();
        }
      });
    }

    // Send Button
    const sendBtn = document.getElementById('aiTutorSendBtn');
    if (sendBtn) {
      sendBtn.addEventListener('click', () => window.sendAiTutorMessage());
    }

    // Settings Toggle & Save
    const settingsToggle = document.getElementById('aiTutorSettingsBtn');
    if (settingsToggle) settingsToggle.addEventListener('click', window.toggleAiTutorSettings);

    const saveSettingsBtn = document.getElementById('aiSaveSettingsBtn');
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', window.saveAiTutorSettings);
  });

})();
