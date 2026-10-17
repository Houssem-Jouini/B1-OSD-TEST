/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — DATA LOADER & TEST MANAGEMENT ENGINE
   Loads modular tests, manages custom user exams (add/remove), and
   maintains seamless backward-compatibility with script.js and aiTutor.js.
   ========================================================================== */

(function(root) {
  'use strict';

  const STORAGE_CUSTOM_EXAMS = 'b1_custom_exams_v1';
  const STORAGE_HIDDEN_EXAMS = 'b1_hidden_exams_v1';
  const STORAGE_CUSTOM_VOCAB = 'b1_custom_vocab_v1';

  // Master collections
  const masterTests = [];
  const translationsMap = {
    common: (root.__B1_COMMON_TRANSLATIONS__) || {}
  };
  const explanationsMap = {};

  /* ---------------- 1. LOAD BUILT-IN TESTS ---------------- */
  const bundled = root.__B1_BUNDLED_TESTS__ || [];
  bundled.forEach(t => {
    // Clone to prevent mutating bundle reference
    const testCopy = JSON.parse(JSON.stringify(t));
    testCopy.isBuiltIn = true;
    masterTests.push(testCopy);
  });

  /* ---------------- 2. LOAD CUSTOM EXAMS FROM LOCALSTORAGE ---------------- */
  function getCustomExams() {
    try {
      const raw = localStorage.getItem(STORAGE_CUSTOM_EXAMS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('[DataLoader] Failed to parse custom exams from storage:', e);
      return [];
    }
  }

  function getHiddenExamIds() {
    try {
      const raw = localStorage.getItem(STORAGE_HIDDEN_EXAMS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  const customExams = getCustomExams();
  customExams.forEach(ct => {
    ct.isBuiltIn = false;
    ct.isCustom = true;
    // Don't duplicate if already present
    const exists = masterTests.some(m => m.id === ct.id);
    if (!exists) {
      masterTests.push(ct);
    }
  });

  /* ---------------- 3. POPULATE COMPATIBILITY GLOBAL ARRAYS ---------------- */
  function syncGlobalData() {
    const hiddenIds = new Set(getHiddenExamIds());
    const visibleTests = masterTests.filter(t => !hiddenIds.has(t.id));

    // Ensure there is at least one test visible
    const finalTests = visibleTests.length > 0 ? visibleTests : masterTests;

    // Build translations & explanations mappings
    finalTests.forEach(test => {
      if (test.translations) {
        translationsMap[test.id] = test.translations;
      }
      if (test.explanations) {
        explanationsMap[test.id] = test.explanations;
      }
    });

    root.modelTests = finalTests;
    root.translationsData = translationsMap;
    root.explanationsData = explanationsMap;
  }

  syncGlobalData();

  /* ---------------- 4. EXPLANATION HELPER (FALLBACK AWARE) ---------------- */
  root.getExplanation = function(testId, questionId, lang) {
    const currentLang = (lang === 'ar' || lang === 'fr') ? lang : 'de';
    const testDict = explanationsMap[testId] || explanationsMap['modellsatz-1'] || {};
    const qExp = testDict ? testDict[String(questionId)] : null;

    if (qExp) {
      return {
        quote: qExp.quote || '',
        whyCorrect: qExp.whyCorrect?.[currentLang] || qExp.whyCorrect?.['de'] || '',
        whyIncorrect: qExp.whyIncorrect?.[currentLang] || qExp.whyIncorrect?.['de'] || ''
      };
    }

    // Graceful fallback for custom or unannotated questions
    if (currentLang === 'ar') {
      return {
        quote: '',
        whyCorrect: 'الإجابة المحددة هي الإجابة الصحيحة وفقًا لمعطيات النص وقواعد امتحان B1.',
        whyIncorrect: 'الخيارات الأخرى لا تتطابق مع المعلومات الدقيقة الواردة في النص أو تحتوي على معلومات مضللة.'
      };
    } else if (currentLang === 'fr') {
      return {
        quote: '',
        whyCorrect: 'Cette réponse est la solution exacte selon les critères de l\'examen B1.',
        whyIncorrect: 'Les autres propositions contiennent des éléments non vérifiés ou contredisent le texte.'
      };
    }

    return {
      quote: '',
      whyCorrect: 'Diese Lösung stimmt mit den Aussagen und Fakten im Prüfungstext überein.',
      whyIncorrect: 'Die alternativen Auswahlmöglichkeiten weichen vom Text ab oder enthalten typische Prüfungsfallen.'
    };
  };

  /* ---------------- 5. VALIDATOR UTILITY ---------------- */
  function validateTestObject(test) {
    const errors = [];
    const warnings = [];

    if (!test || typeof test !== 'object') {
      return { valid: false, errors: ['Der Modellsatz muss ein gültiges JSON-Objekt sein.'] };
    }
    if (!test.id || typeof test.id !== 'string') {
      errors.push("Fehlendes Pflichtfeld 'id' (z. B. 'modellsatz-7').");
    }
    if (!test.title || typeof test.title !== 'string') {
      errors.push("Fehlendes Pflichtfeld 'title' (z. B. 'Modellsatz 7 — Prüfungstraining').");
    }
    if (!Array.isArray(test.parts) || test.parts.length === 0) {
      errors.push("Fehlendes oder leeres Array 'parts'. Mindestens ein Teil wird benötigt.");
    } else {
      test.parts.forEach(p => {
        if (!p.id) errors.push("Ein Prüfungsteil hat keine 'id'.");
        if (!p.instructions) warnings.push(`Teil ${p.id} hat keine 'instructions'.`);
        const qList = p.questions || (p.teile ? p.teile.flatMap(t => t.questions || []) : []);
        if (qList.length === 0) {
          warnings.push(`Teil ${p.id} enthält keine Fragen.`);
        } else {
          qList.forEach(q => {
            if (!q.id) errors.push(`Eine Frage in Teil ${p.id} hat keine 'id'.`);
            if (q.answer === undefined || q.answer === null || q.answer === '') {
              warnings.push(`Frage ${q.id} in Teil ${p.id} hat keinen Lösungsschlüssel ('answer').`);
            }
          });
        }
      });
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };
  }

  /* ---------------- 6. B1 DATA MANAGER API ---------------- */
  root.b1Data = {
    getAllMasterTests: () => masterTests,

    getManifest: () => {
      const hiddenIds = new Set(getHiddenExamIds());
      return masterTests.map(t => ({
        id: t.id,
        title: t.title,
        badge: t.badge || 'B1',
        examTitle: t.examTitle || t.title,
        examSub: t.examSub || '',
        timeTotal: t.timeTotal || 65,
        partsCount: Array.isArray(t.parts) ? t.parts.length : 0,
        isCustom: !!t.isCustom,
        isHidden: hiddenIds.has(t.id)
      }));
    },

    validateTest: validateTestObject,

    addCustomTest: function(testObj) {
      const validation = validateTestObject(testObj);
      if (!validation.valid) {
        throw new Error('Validierungsfehler:\n' + validation.errors.join('\n'));
      }

      // Check duplicate id with built-in tests
      const isBuiltIn = bundled.some(b => b.id === testObj.id);
      if (isBuiltIn) {
        testObj.id = testObj.id + '-custom-' + Date.now();
      }

      testObj.isCustom = true;
      testObj.isBuiltIn = false;

      // Save to localStorage
      const currentCustom = getCustomExams().filter(c => c.id !== testObj.id);
      currentCustom.push(testObj);
      localStorage.setItem(STORAGE_CUSTOM_EXAMS, JSON.stringify(currentCustom));

      // Update in-memory master tests
      const mIdx = masterTests.findIndex(m => m.id === testObj.id);
      if (mIdx !== -1) {
        masterTests[mIdx] = testObj;
      } else {
        masterTests.push(testObj);
      }

      // Unhide if was hidden
      const hidden = getHiddenExamIds().filter(id => id !== testObj.id);
      localStorage.setItem(STORAGE_HIDDEN_EXAMS, JSON.stringify(hidden));

      syncGlobalData();
      return testObj;
    },

    removeTest: function(testId) {
      const test = masterTests.find(t => t.id === testId);
      if (!test) return false;

      if (test.isCustom) {
        // Completely remove custom test from storage and memory
        const currentCustom = getCustomExams().filter(c => c.id !== testId);
        localStorage.setItem(STORAGE_CUSTOM_EXAMS, JSON.stringify(currentCustom));

        const mIdx = masterTests.findIndex(t => t.id === testId);
        if (mIdx !== -1) masterTests.splice(mIdx, 1);
      } else {
        // Built-in test: mark as hidden
        const hidden = getHiddenExamIds();
        if (!hidden.includes(testId)) {
          hidden.push(testId);
          localStorage.setItem(STORAGE_HIDDEN_EXAMS, JSON.stringify(hidden));
        }
      }

      syncGlobalData();
      return true;
    },

    restoreBuiltInTest: function(testId) {
      const hidden = getHiddenExamIds().filter(id => id !== testId);
      localStorage.setItem(STORAGE_HIDDEN_EXAMS, JSON.stringify(hidden));
      syncGlobalData();
      return true;
    },

    exportTestAsJson: function(testId) {
      const test = masterTests.find(t => t.id === testId);
      if (!test) return null;
      // Clean clone without internal flags
      const cleanTest = JSON.parse(JSON.stringify(test));
      delete cleanTest.isBuiltIn;
      delete cleanTest.isCustom;
      return JSON.stringify(cleanTest, null, 2);
    },

    /* ---- Custom Vocabulary Management ---- */
    getCustomVocab: function() {
      try {
        const raw = localStorage.getItem(STORAGE_CUSTOM_VOCAB);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    addCustomVocab: function(word) {
      if (!word || !word.term) throw new Error('Wort muss einen Begriff enthalten.');
      if (!word.id) word.id = 'cv-' + Date.now();
      word.isCustom = true;

      const list = this.getCustomVocab().filter(w => w.id !== word.id);
      list.unshift(word);
      localStorage.setItem(STORAGE_CUSTOM_VOCAB, JSON.stringify(list));

      if (Array.isArray(root.b1VocabData)) {
        root.b1VocabData.unshift(word);
      }
      return word;
    },

    removeCustomVocab: function(wordId) {
      const list = this.getCustomVocab().filter(w => w.id !== wordId);
      localStorage.setItem(STORAGE_CUSTOM_VOCAB, JSON.stringify(list));

      if (Array.isArray(root.b1VocabData)) {
        const idx = root.b1VocabData.findIndex(w => w.id === wordId);
        if (idx !== -1) root.b1VocabData.splice(idx, 1);
      }
      return true;
    }
  };

  /* ---------------- 7. MERGE CUSTOM VOCAB AT STARTUP ---------------- */
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('DOMContentLoaded', () => {
      if (Array.isArray(root.b1VocabData)) {
        const customWords = root.b1Data.getCustomVocab();
        customWords.forEach(cw => {
          if (!root.b1VocabData.some(w => w.id === cw.id)) {
            root.b1VocabData.unshift(cw);
          }
        });
      }
    });
  }

})(typeof window !== 'undefined' ? window : globalThis);
