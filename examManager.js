/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — EXAM MANAGER (PRÜFUNGS-VERWALTUNG)
   Interactive UI to add, remove, export, and manage B1 exams & AI generation.
   ========================================================================== */

(function() {
  'use strict';

  function initExamManager() {
    const modal = document.getElementById('examManagerModal');
    const openBtn = document.getElementById('examMgrBtn');
    const quickAddBtn = document.getElementById('quickAddTestBtn');
    const closeBtn = document.getElementById('examMgrCloseBtn');
    const confirmCloseBtn = document.getElementById('examMgrConfirmClose');

    if (!modal) return;

    function openModal(initialTab = 'list') {
      switchTab(initialTab);
      renderExamList();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', () => openModal('list'));
    if (quickAddBtn) quickAddBtn.addEventListener('click', () => openModal('add'));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Tab switching
    const tabBtns = modal.querySelectorAll('.exam-mgr-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    function switchTab(tabName) {
      tabBtns.forEach(b => {
        if (b.getAttribute('data-tab') === tabName) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      const panes = modal.querySelectorAll('.exam-mgr-tab-pane');
      panes.forEach(p => {
        if (p.id === `examMgrPane_${tabName}`) {
          p.style.display = 'block';
        } else {
          p.style.display = 'none';
        }
      });

      if (tabName === 'list') renderExamList();
    }

    /* ---------------- TAB 1: RENDER EXAM LIST ---------------- */
    function renderExamList() {
      const container = document.getElementById('examListCards');
      if (!container) return;

      const manifest = window.b1Data ? window.b1Data.getManifest() : [];
      if (manifest.length === 0) {
        container.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-muted);">Keine Tests verfügbar.</div>';
        return;
      }

      const lang = (window.uiLoc && typeof window.uiLoc.getLang === 'function') ? window.uiLoc.getLang() : 'de';
      const lblCustom = lang === 'fr' ? '★ Personnalisé' : (lang === 'en' ? '★ Custom' : '★ Benutzerdefiniert');
      const lblBuiltin = lang === 'fr' ? 'Intégré' : (lang === 'en' ? 'Built-in' : 'Integriert');
      const lblHidden = lang === 'fr' ? '(Masqué)' : (lang === 'en' ? '(Hidden)' : '(Ausgeblendet)');
      const lblParts = lang === 'fr' ? 'Parties' : (lang === 'en' ? 'Parts' : 'Teile');
      const lblStart = lang === 'fr' ? '▶ Démarrer' : (lang === 'en' ? '▶ Start' : '▶ Starten');
      const lblRestore = lang === 'fr' ? 'Restaurer' : (lang === 'en' ? 'Restore' : 'Wiederherstellen');
      const tipStart = lang === 'fr' ? 'Démarrer cet examen maintenant' : (lang === 'en' ? 'Start this exam now' : 'Diesen Test jetzt starten');
      const tipRestore = lang === 'fr' ? 'Réafficher ce test' : (lang === 'en' ? 'Restore this test' : 'Test wieder einblenden');
      const tipExport = lang === 'fr' ? 'Exporter en fichier JSON' : (lang === 'en' ? 'Export as JSON file' : 'Als JSON-Datei exportieren');

      container.innerHTML = manifest.map((item, idx) => {
        const isCustom = item.isCustom;
        const isHidden = item.isHidden;
        const tipDel = isCustom 
          ? (lang === 'fr' ? 'Supprimer définitivement l\'examen' : (lang === 'en' ? 'Permanently delete test' : 'Test unwiderruflich löschen'))
          : (lang === 'fr' ? 'Masquer l\'examen du menu' : (lang === 'en' ? 'Hide test from menu' : 'Test im Menü ausblenden'));

        return `
          <div class="exam-item-card ${isHidden ? 'exam-item-hidden' : ''}" style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border:1px solid var(--border); border-radius:10px; margin-bottom:10px; background:var(--card-bg, #fff);">
            <div style="flex:1; min-width:0; margin-right:12px;">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span class="badge ${isCustom ? 'badge-primary' : 'badge-neutral'}" style="font-size:11px; padding:2px 8px; border-radius:12px; font-weight:700;">
                  ${escapeHtml(item.badge || 'B1')}
                </span>
                <span style="font-size:11px; color:${isCustom ? '#10b981' : 'var(--text-muted)'}; font-weight:600;">
                  ${isCustom ? lblCustom : lblBuiltin}
                </span>
                ${isHidden ? `<span style="font-size:11px; color:#ef4444; font-weight:600;">${lblHidden}</span>` : ''}
              </div>
              <h4 style="font-size:14px; font-weight:700; margin:0 0 2px 0; color:var(--text-main); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${escapeHtml(item.title)}
              </h4>
              <p style="font-size:12px; color:var(--text-muted); margin:0;">
                ${item.partsCount} ${lblParts} · ${item.timeTotal} Min.
              </p>
            </div>
            <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
              ${!isHidden ? `
                <button type="button" class="btn btn-sm btn-primary exam-start-btn" data-id="${item.id}" title="${tipStart}">
                  ${lblStart}
                </button>
              ` : `
                <button type="button" class="btn btn-sm btn-outline exam-restore-btn" data-id="${item.id}" title="${tipRestore}">
                  ${lblRestore}
                </button>
              `}
              <button type="button" class="icon-btn exam-export-btn" data-id="${item.id}" title="${tipExport}" style="width:32px; height:32px; padding:0;">
                📥
              </button>
              <button type="button" class="icon-btn exam-delete-btn" data-id="${item.id}" title="${tipDel}" style="width:32px; height:32px; padding:0; color:#ef4444;">
                🗑️
              </button>
            </div>
          </div>
        `;
      }).join('');

      // Attach event listeners
      container.querySelectorAll('.exam-start-btn').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.getAttribute('data-id');
          closeModal();
          if (typeof window.loadModelTest === 'function') {
            window.loadModelTest(id);
          }
        });
      });

      container.querySelectorAll('.exam-export-btn').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.getAttribute('data-id');
          exportExamAsJsonFile(id);
        });
      });

      container.querySelectorAll('.exam-delete-btn').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.getAttribute('data-id');
          const isCustom = manifest.find(m => m.id === id)?.isCustom;
          const msg = isCustom 
            ? 'Möchten Sie diesen benutzerdefinierten Test wirklich dauerhaft löschen?' 
            : 'Möchten Sie diesen Test aus dem Auswahlmenü ausblenden? (Sie können ihn jederzeit wiederherstellen)';
          
          if (confirm(msg)) {
            if (window.b1Data && window.b1Data.removeTest(id)) {
              if (typeof window.initTestSelector === 'function') {
                window.initTestSelector();
              }
              renderExamList();
            }
          }
        });
      });

      container.querySelectorAll('.exam-restore-btn').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.getAttribute('data-id');
          if (window.b1Data && window.b1Data.restoreBuiltInTest(id)) {
            if (typeof window.initTestSelector === 'function') {
              window.initTestSelector();
            }
            renderExamList();
          }
        });
      });
    }

    function exportExamAsJsonFile(testId) {
      if (!window.b1Data) return;
      const jsonStr = window.b1Data.exportTestAsJson(testId);
      if (!jsonStr) return;

      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${testId}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    /* ---------------- TAB 2: ADD / IMPORT EXAM ---------------- */
    const fileInput = document.getElementById('examFileInput');
    const jsonTextarea = document.getElementById('examJsonTextarea');
    const validateBtn = document.getElementById('examValidateBtn');
    const saveBtn = document.getElementById('examSaveBtn');
    const statusBox = document.getElementById('examImportStatus');

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (jsonTextarea) {
            jsonTextarea.value = ev.target.result;
            runValidation();
          }
        };
        reader.readAsText(file);
      });
    }

    function runValidation() {
      if (!jsonTextarea || !statusBox) return false;
      const raw = jsonTextarea.value.trim();
      if (!raw) {
        statusBox.style.display = 'none';
        return false;
      }

      try {
        const parsed = JSON.parse(raw);
        const result = window.b1Data.validateTest(parsed);

        statusBox.style.display = 'block';
        if (result.valid) {
          statusBox.style.background = 'rgba(16, 185, 129, 0.1)';
          statusBox.style.borderColor = '#10b981';
          statusBox.style.color = '#065f46';
          let warningMsg = '';
          if (result.warnings.length > 0) {
            warningMsg = `<br><span style="font-size:11.5px; color:#d97706;">Hinweise: ${result.warnings.join('; ')}</span>`;
          }
          statusBox.innerHTML = `✓ <strong>Gültiges B1-Prüfungsformat:</strong> "${escapeHtml(parsed.title || parsed.id)}" (${parsed.parts.length} Teile).${warningMsg}`;
          return true;
        } else {
          statusBox.style.background = 'rgba(239, 68, 68, 0.1)';
          statusBox.style.borderColor = '#ef4444';
          statusBox.style.color = '#991b1b';
          statusBox.innerHTML = `✕ <strong>Fehler im Prüfungsformat:</strong><br>${result.errors.join('<br>')}`;
          return false;
        }
      } catch (err) {
        statusBox.style.display = 'block';
        statusBox.style.background = 'rgba(239, 68, 68, 0.1)';
        statusBox.style.borderColor = '#ef4444';
        statusBox.style.color = '#991b1b';
        statusBox.innerHTML = `✕ <strong>Ungültiges JSON-Format:</strong> ${escapeHtml(err.message)}`;
        return false;
      }
    }

    if (validateBtn) validateBtn.addEventListener('click', runValidation);

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        if (!jsonTextarea) return;
        const raw = jsonTextarea.value.trim();
        if (!raw) {
          alert('Bitte fügen Sie zuerst JSON-Daten ein oder laden Sie eine .json-Datei hoch.');
          return;
        }

        try {
          const parsed = JSON.parse(raw);
          const savedTest = window.b1Data.addCustomTest(parsed);

          // Update main dropdown
          if (typeof window.initTestSelector === 'function') {
            window.initTestSelector();
          }

          alert(`🎉 Test "${savedTest.title}" wurde erfolgreich hinzugefügt und ist jetzt verfügbar!`);
          jsonTextarea.value = '';
          if (statusBox) statusBox.style.display = 'none';

          if (confirm('Möchten Sie den neuen Test jetzt direkt starten?')) {
            closeModal();
            if (typeof window.loadModelTest === 'function') {
              window.loadModelTest(savedTest.id);
            }
          } else {
            switchTab('list');
          }
        } catch (err) {
          alert('Fehler beim Speichern:\n' + err.message);
        }
      });
    }

    /* ---------------- TAB 3: COPY AI PROMPT ---------------- */
    const copyPromptBtn = document.getElementById('copyAiPromptBtn');
    if (copyPromptBtn) {
      copyPromptBtn.addEventListener('click', () => {
        const promptTemplate = `Ich möchte eine neue Goethe/ÖSD B1 Prüfungssimulation zu meiner Web-App hinzufügen.
Bitte konvertiere den folgenden Prüfungstext und die dazugehörigen Aufgaben in ein valides JSON-Format, das exakt dem folgenden Schema entspricht.

---
[HIER PRÜFUNGSTEXT & AUFGABEN EINFÜGEN / ODER PDF-INHALT KOPIEREN]
---

SCHEMA:
{
  "id": "modellsatz-custom-X",
  "title": "Modellsatz X — Name der Prüfung",
  "badge": "Modellsatz X",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modellsatz X",
  "timeTotal": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      "articles": [
        {
          "heading": "Titel",
          "sub": "Untertitel",
          "body": ["Absatz 1...", "Absatz 2..."],
          "signature": "Autor"
        }
      ],
      "example": { "text": "Beispielaussage...", "answer": "falsch" },
      "questions": [
        { "id": 1, "type": "tf", "text": "Fragetext...", "answer": "richtig" },
        { "id": 2, "type": "tf", "text": "Fragetext...", "answer": "falsch" }
      ]
    }
  ],
  "translations": {
    "parts": {
      "1": {
        "instructions": { "ar": "ترجمة التعليمات بالعربية", "fr": "Traduction des instructions en français" },
        "questions": {
          "1": { "text": { "ar": "ترجمة السؤال 1", "fr": "Traduction de la question 1" } }
        }
      }
    }
  },
  "explanations": {
    "1": {
      "quote": "Belegzitat aus dem Text...",
      "whyCorrect": { "de": "Erklärung...", "ar": "الشرح بالعربية...", "fr": "Explication en français..." },
      "whyIncorrect": { "de": "Warum andere Optionen falsch sind...", "ar": "...", "fr": "..." }
    }
  }
}

Bitte antworte AUSSCHLIESSLICH mit dem vollständigen, validen JSON-Codeblock (keine Einleitung, kein Markdown-Nachwort).`;

        navigator.clipboard.writeText(promptTemplate).then(() => {
          const origText = copyPromptBtn.innerHTML;
          copyPromptBtn.innerHTML = '✓ Prompt in Zwischenablage kopiert!';
          copyPromptBtn.style.background = '#10b981';
          copyPromptBtn.style.color = '#fff';
          setTimeout(() => {
            copyPromptBtn.innerHTML = origText;
            copyPromptBtn.style.background = '';
            copyPromptBtn.style.color = '';
          }, 2500);
        }).catch(() => {
          alert('Kopieren fehlgeschlagen. Bitte markieren Sie den Prompt manuell.');
        });
      });
    }

    /* ---------------- VOCABULARY EXTENSION: ADD CUSTOM WORDS ---------------- */
    initVocabExtension();
  }

  function initVocabExtension() {
    const vocabControls = document.querySelector('.vocab-controls-row');
    if (!vocabControls) return;

    if (!document.getElementById('addVocabWordBtn')) {
      const addBtn = document.createElement('button');
      addBtn.id = 'addVocabWordBtn';
      addBtn.type = 'button';
      addBtn.className = 'filter-btn';
      addBtn.style.border = '1px dashed var(--primary, #3b82f6)';
      addBtn.style.color = 'var(--primary, #3b82f6)';
      addBtn.style.fontWeight = '600';
      addBtn.innerHTML = '+ Wort hinzufügen';

      const filterPills = vocabControls.querySelector('.filter-pills');
      if (filterPills) {
        filterPills.appendChild(addBtn);
      }

      addBtn.addEventListener('click', () => {
        const term = prompt('Deutsches B1-Wort / Begriff eingeben (z. B. "die Verhandlung"):');
        if (!term) return;

        const defDe = prompt('Deutsche Definition / Bedeutung:', '') || '';
        const defAr = prompt('الترجمة أو المعنى بالعربية (Arabisch):', '') || '';
        const defFr = prompt('Traduction en français (Französisch):', '') || '';
        const example = prompt('Beispielsatz im B1-Kontext:', '') || '';

        const newWord = {
          id: 'cv-' + Date.now(),
          term: term.trim(),
          display: term.trim(),
          pos: 'Benutzerdefiniert',
          teil: 1,
          level: 'B1',
          forms: [term.trim()],
          defDe: defDe.trim(),
          defAr: defAr.trim(),
          defFr: defFr.trim(),
          example: example.trim(),
          tip: 'Benutzerdefinierter B1-Wortschatz',
          isCustom: true
        };

        if (window.b1Data) {
          window.b1Data.addCustomVocab(newWord);
          alert(`✓ Wort "${newWord.term}" wurde zum B1-Wortschatz hinzugefügt!`);
          if (typeof window.renderVocabList === 'function') {
            window.renderVocabList();
          }
        }
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExamManager);
  } else {
    initExamManager();
  }
})();
