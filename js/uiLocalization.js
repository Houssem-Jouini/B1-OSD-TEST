/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — UI LOCALIZATION (DE / EN / FR)
   Localizes UI navigation, toolbars, bottom action bar, settings & modals.
   NOTE: Exam questions, reading passages, and exam exercises remain in German
   for authentic Goethe / ÖSD B1 examination preparation.
   ========================================================================== */

(function(window) {
  'use strict';

  const STORAGE_KEY = 'b1_ui_lang_v2';
  const DEFAULT_LANG = 'fr';
  const SUPPORTED_LANGS = ['fr', 'de', 'en'];

  const I18N = {
    de: {
      'brand.title': 'Goethe / ÖSD B1 Prüfungssimulation',
      'brand.sub': 'Modul Lesen & Modul Hören · Goethe / ÖSD B1',
      'nav.testLabel': 'Test:',
      'nav.testSelectTitle': 'Modellsatz auswählen',
      'nav.quickAddTitle': 'Prüfungen verwalten / Neu anlegen',
      'nav.examMgrBtn': 'Tests',
      'nav.examMgrTitle': 'Prüfungen verwalten, hinzufügen oder entfernen',
      'nav.tasksBtn': 'Aufgaben',
      'nav.tasksTitle': 'Prüfungsübersicht der Aufgaben anzeigen',
      'nav.vocabBtn': 'Wortschatz',
      'nav.vocabTitle': 'B1-Wortschatz-Helfer & Glossar',
      'nav.mistakesBtn': 'Fehlerheft',
      'nav.mistakesTitle': 'Mein persönliches Fehlerheft',
      'nav.aiTutorBtn': 'KI-Tutor',
      'nav.aiTutorTitle': 'KI-Tutor & B1-Sprachassistent',
      'nav.timerToggleTitle': 'Timer Pause/Play',
      'nav.fullscreenTitle': 'Vollbildmodus an/aus',
      'nav.themeTitle': 'Farbschema wechseln: Hell · Papier/Sepia · Dunkel',
      'nav.uiLangTitle': 'UI-Sprache wechseln (Deutsch / English / Français)',

      'candidate.label': 'Kandidat(in):',
      'candidate.placeholder': 'Name für Prüfungszertifikat',
      'highlighter.label': 'Textmarker:',
      'highlighter.yellow': 'Gelb',
      'highlighter.green': 'Grün',
      'highlighter.blue': 'Blau',
      'highlighter.eraser': 'Radierer',
      'highlighter.clear': 'Löschen',
      'highlighter.yellowTitle': 'Gelb markieren',
      'highlighter.greenTitle': 'Grün markieren',
      'highlighter.blueTitle': 'Blau markieren',
      'highlighter.eraserTitle': 'Markierung radieren',
      'highlighter.clearTitle': 'Alle Markierungen in diesem Teil entfernen',

      'vocabToggle.active': 'Wortschatz: AN',
      'vocabToggle.inactive': 'Wortschatz: AUS',
      'vocabToggle.title': 'B1-Wortschatz im Text hervorheben (An/Aus)',
      'fontSize.label': 'Schrift:',
      'fontSize.normal': 'Normal',
      'reader.trigger': '📖 Lesemodus',
      'reader.triggerTitle': 'Lesemodus öffnen: Text groß und blendfrei anzeigen mit weichem Fokus-Hintergrund',

      'session.resumeText': 'Gespeicherte Prüfungssitzung gefunden. Möchten Sie dort fortfahren, wo Sie aufgehört haben?',
      'session.btnResume': 'Fortsetzen',
      'session.btnRestart': 'Neu starten',

      'footer.prev': '← Zurück',
      'footer.next': 'Weiter →',
      'footer.submit': 'Test abgeben',
      'footer.submitLesen': 'Modul Lesen abgeben (100 P.)',
      'footer.submitHoren': 'Modul Hören abgeben (100 P.)',
      'footer.progressPattern': '{answered} von {total} Aufgaben gelöst',

      'matrix.title': 'Prüfungsübersicht ({total} Aufgaben)',
      'matrix.sub': 'Klicken Sie auf eine Aufgabe, um direkt dorthin zu springen.',
      'matrix.legendAnswered': 'Beantwortet',
      'matrix.legendUnanswered': 'Offen',
      'matrix.legendFlagged': 'Gemerkt (★)',
      'matrix.backBtn': 'Zurück zum Test',

      'aiSettings.title': '⚙️ KI-Tutor Einstellungen (100% Kostenlos)',
      'aiSettings.desc': 'Du kannst deinen eigenen kostenlosen API-Schlüssel hinterlegen. Er wird nur lokal in deinem Browser gespeichert.',
      'aiSettings.providerLabel': 'Bevorzugter Anbieter:',
      'aiSettings.providerGemini': 'Google Gemini 1.5 Flash (Empfohlen · Kostenlos)',
      'aiSettings.providerGroq': 'Groq Cloud · Llama 3.3 70B (Ultraschnell · Kostenlos)',
      'aiSettings.geminiKeyLabel': 'Google Gemini API Key:',
      'aiSettings.geminiHintPrefix': 'Gratis Schlüssel erstellen unter ',
      'aiSettings.groqKeyLabel': 'Groq API Key (Optional):',
      'aiSettings.groqHintPrefix': 'Gratis unter ',
      'aiSettings.proxyLabel': 'Eigener Cloudflare Proxy Endpoint (Optional):',
      'aiSettings.saveBtn': 'Speichern',
      'aiSettings.friendTitle': '🔗 Direkter Zugangslink für deine Freundin:',
      'aiSettings.friendDesc': 'Erzeuge einen Einladungs-Link. Sobald deine Freundin den Link auf ihrem Handy oder PC einmal öffnet, ist die KI bei ihr sofort ohne Passwörter oder Schlüssel freigeschaltet!',
      'aiSettings.friendBtn': 'Link für Freundin kopieren',

      'aiTutor.modalTitle': 'B1 KI-Tutor',
      'aiTutor.badgeFree': 'Kostenlos',
      'aiTutor.subtitle': 'Dein persönlicher B1-Prüfungscoach',
      'aiTutor.inputPlaceholder': 'Frage zur Aufgabe, Grammatik oder Vokabeln eingeben...',
      'aiTutor.sendTitle': 'Senden',
      'aiTutor.settingsTitle': 'API-Einstellungen / Anbieter konfigurieren',
      'aiTutor.pillWhy': '💡 Warum richtig?',
      'aiTutor.pillGrammar': '📐 Grammatik erklären',
      'aiTutor.pillKeywords': '🔍 Signalwörter zeigen',
      'aiTutor.pillSimilar': '🎯 Ähnliche Übung',

      'examMgr.title': 'Prüfungen verwalten & Neu anlegen',
      'examMgr.sub': 'Eigene Modellsätze hinzufügen, entfernen, als JSON exportieren oder mit KI erstellen.',
      'examMgr.tabList': '📚 Installierte Prüfungen',
      'examMgr.tabAdd': '➕ Neue Prüfung hinzufügen',
      'examMgr.tabAi': '🤖 KI-Prompt Vorlage',
      'examMgr.uploadTitle': 'JSON-Prüfungsdatei hochladen',
      'examMgr.uploadDesc': 'Wählen Sie eine gespeicherte .json Modellsatz-Datei von Ihrem Computer:',
      'examMgr.textareaLabel': 'Oder JSON-Code direkt hier einfügen:',
      'examMgr.validateBtn': 'Syntax & Format prüfen',
      'examMgr.saveBtn': 'Prüfung speichern & aktivieren',
      'examMgr.copyAiPromptBtn': 'Prompt für KI in Zwischenablage kopieren',
      'examMgr.doneBtn': 'Fertig',
      'examMgr.footerNote': 'Änderungen werden sofort im Browser gespeichert.',

      'vocab.title': 'B1-Wortschatz-Helfer & Vokabelliste',
      'vocab.sub': 'Wichtige B1-Wörter, Kollokationen und Erklärungen mit Audio-Aussprache.',
      'vocab.searchPlaceholder': 'Wort suchen (Deutsch, العربية, Français)...',
      'vocab.tabCurrent': 'Aktueller Teil',
      'vocab.tabAll': 'Alle Wörter',
      'vocab.tabSaved': 'Gemerkt (★)',
      'vocab.tabCards': '🗂️ Lernkarten',
      'vocab.closeBtn': 'Schließen',

      'mistakes.title': 'Mein persönliches Fehlerheft',
      'mistakes.sub': 'Wiederhole gezielt deine Fehler aus den Prüfungsteilen, bis du sie gemeistert hast.',
      'mistakes.tabDrill': '🎯 Fehler wiederholen (Drill)',
      'mistakes.tabList': '📋 Fehlerliste ansehen',
      'mistakes.clearBtn': 'Fehlerheft leeren',
      'mistakes.closeBtn': 'Zurück zum Test',

      'readerModal.title': 'Lesemodus & Fokusansicht',
      'readerModal.fontLabel': 'Schrift:',
      'readerModal.fontSerif': 'Buchstil',
      'readerModal.fontSans': 'Modern',
      'readerModal.hint': 'Punktierte Wörter antippen für Übersetzung & Audio-Aussprache · Esc zum Schließen',
      'readerModal.doneBtn': 'Zurück zu den Aufgaben',

      'results.copyBtn': 'Ergebnis kopieren',
      'results.printBtn': 'Drucken / PDF',
      'results.restartBtn': 'Test neu starten',
      'results.reviewTitle': 'Detaillierte Aufgabenübersicht',
      'results.filterAll': 'Alle',
      'results.filterIncorrect': 'Falsch',
      'results.filterCorrect': 'Richtig'
    },

    en: {
      'brand.title': 'Goethe / ÖSD B1 Exam Simulator',
      'brand.sub': 'Reading & Listening Modules · Goethe / ÖSD B1',
      'nav.testLabel': 'Test:',
      'nav.testSelectTitle': 'Select model exam',
      'nav.quickAddTitle': 'Manage / create new exams',
      'nav.examMgrBtn': 'Tests',
      'nav.examMgrTitle': 'Manage, add or remove exams',
      'nav.tasksBtn': 'Tasks',
      'nav.tasksTitle': 'Show exam question matrix overview',
      'nav.vocabBtn': 'Vocabulary',
      'nav.vocabTitle': 'B1 vocabulary helper & glossary',
      'nav.mistakesBtn': 'Mistakes',
      'nav.mistakesTitle': 'My personal mistake notebook',
      'nav.aiTutorBtn': 'AI Tutor',
      'nav.aiTutorTitle': 'AI Tutor & B1 language assistant',
      'nav.timerToggleTitle': 'Timer Pause/Play',
      'nav.fullscreenTitle': 'Fullscreen on/off',
      'nav.themeTitle': 'Switch color theme: Light · Paper/Sepia · Dark',
      'nav.uiLangTitle': 'Change UI language (German / English / French)',

      'candidate.label': 'Candidate:',
      'candidate.placeholder': 'Name for exam certificate',
      'highlighter.label': 'Highlighter:',
      'highlighter.yellow': 'Yellow',
      'highlighter.green': 'Green',
      'highlighter.blue': 'Blue',
      'highlighter.eraser': 'Eraser',
      'highlighter.clear': 'Clear',
      'highlighter.yellowTitle': 'Highlight yellow',
      'highlighter.greenTitle': 'Highlight green',
      'highlighter.blueTitle': 'Highlight blue',
      'highlighter.eraserTitle': 'Erase highlight',
      'highlighter.clearTitle': 'Clear all highlights in this part',

      'vocabToggle.active': 'Vocabulary: ON',
      'vocabToggle.inactive': 'Vocabulary: OFF',
      'vocabToggle.title': 'Highlight B1 vocabulary in text (On/Off)',
      'fontSize.label': 'Font:',
      'fontSize.normal': 'Normal',
      'reader.trigger': '📖 Reader Mode',
      'reader.triggerTitle': 'Open reader mode: Large, glare-free text view with soft focus background',

      'session.resumeText': 'Saved exam session found. Would you like to resume where you left off?',
      'session.btnResume': 'Resume',
      'session.btnRestart': 'Start New',

      'footer.prev': '← Back',
      'footer.next': 'Next →',
      'footer.submit': 'Submit Exam',
      'footer.submitLesen': 'Submit Reading (100 P.)',
      'footer.submitHoren': 'Submit Listening (100 P.)',
      'footer.progressPattern': '{answered} of {total} tasks solved',

      'matrix.title': 'Exam Overview ({total} Tasks)',
      'matrix.sub': 'Click on a task to jump directly to it.',
      'matrix.legendAnswered': 'Answered',
      'matrix.legendUnanswered': 'Open',
      'matrix.legendFlagged': 'Flagged (★)',
      'matrix.backBtn': 'Back to Test',

      'aiSettings.title': '⚙️ AI Tutor Settings (100% Free)',
      'aiSettings.desc': 'You can save your own free API key. It is only stored locally in your browser.',
      'aiSettings.providerLabel': 'Preferred Provider:',
      'aiSettings.providerGemini': 'Google Gemini 1.5 Flash (Recommended · Free)',
      'aiSettings.providerGroq': 'Groq Cloud · Llama 3.3 70B (Ultra-fast · Free)',
      'aiSettings.geminiKeyLabel': 'Google Gemini API Key:',
      'aiSettings.geminiHintPrefix': 'Get free key at ',
      'aiSettings.groqKeyLabel': 'Groq API Key (Optional):',
      'aiSettings.groqHintPrefix': 'Free at ',
      'aiSettings.proxyLabel': 'Custom Cloudflare Proxy Endpoint (Optional):',
      'aiSettings.saveBtn': 'Save',
      'aiSettings.friendTitle': '🔗 Direct access link for your friend:',
      'aiSettings.friendDesc': 'Generate an invite link. As soon as your friend opens the link on their phone or PC, AI is immediately activated without passwords or keys!',
      'aiSettings.friendBtn': 'Copy link for friend',

      'aiTutor.modalTitle': 'B1 AI Tutor',
      'aiTutor.badgeFree': 'Free',
      'aiTutor.subtitle': 'Your personal B1 exam coach',
      'aiTutor.inputPlaceholder': 'Ask a question about the task, grammar, or vocabulary...',
      'aiTutor.sendTitle': 'Send',
      'aiTutor.settingsTitle': 'API Settings / Configure providers',
      'aiTutor.pillWhy': '💡 Why is this correct?',
      'aiTutor.pillGrammar': '📐 Explain grammar',
      'aiTutor.pillKeywords': '🔍 Show keywords',
      'aiTutor.pillSimilar': '🎯 Similar exercise',

      'examMgr.title': 'Manage Exams & Create New',
      'examMgr.sub': 'Add or remove custom model tests, export as JSON, or generate with AI.',
      'examMgr.tabList': '📚 Installed Exams',
      'examMgr.tabAdd': '➕ Add New Exam',
      'examMgr.tabAi': '🤖 AI Prompt Template',
      'examMgr.uploadTitle': 'Upload JSON Exam File',
      'examMgr.uploadDesc': 'Choose a saved .json exam file from your computer:',
      'examMgr.textareaLabel': 'Or paste JSON code directly here:',
      'examMgr.validateBtn': 'Validate syntax & format',
      'examMgr.saveBtn': 'Save & activate exam',
      'examMgr.copyAiPromptBtn': 'Copy AI prompt to clipboard',
      'examMgr.doneBtn': 'Done',
      'examMgr.footerNote': 'Changes are saved immediately in your browser.',

      'vocab.title': 'B1 Vocabulary Helper & Word List',
      'vocab.sub': 'Important B1 words, collocations, and explanations with audio pronunciation.',
      'vocab.searchPlaceholder': 'Search word (German, Arabic, French)...',
      'vocab.tabCurrent': 'Current Part',
      'vocab.tabAll': 'All Words',
      'vocab.tabSaved': 'Saved (★)',
      'vocab.tabCards': '🗂️ Flashcards',
      'vocab.closeBtn': 'Close',

      'mistakes.title': 'My Personal Mistake Notebook',
      'mistakes.sub': 'Practice your mistakes from the exam sections until mastered.',
      'mistakes.tabDrill': '🎯 Practice Mistakes (Drill)',
      'mistakes.tabList': '📋 View Mistake List',
      'mistakes.clearBtn': 'Clear Mistakes',
      'mistakes.closeBtn': 'Back to Test',

      'readerModal.title': 'Reader Mode & Focus View',
      'readerModal.fontLabel': 'Font:',
      'readerModal.fontSerif': 'Book Style',
      'readerModal.fontSans': 'Modern',
      'readerModal.hint': 'Tap dotted words for translation & audio · Esc to close',
      'readerModal.doneBtn': 'Back to Tasks',

      'results.copyBtn': 'Copy Result',
      'results.printBtn': 'Print / PDF',
      'results.restartBtn': 'Restart Test',
      'results.reviewTitle': 'Detailed Task Overview',
      'results.filterAll': 'All',
      'results.filterIncorrect': 'Incorrect',
      'results.filterCorrect': 'Correct'
    },

    fr: {
      'brand.title': 'Simulation d\'examen Goethe / ÖSD B1',
      'brand.sub': 'Modules Lecture & Écoute · Goethe / ÖSD B1',
      'nav.testLabel': 'Test :',
      'nav.testSelectTitle': 'Sélectionner un modèle d\'examen',
      'nav.quickAddTitle': 'Gérer / créer de nouveaux examens',
      'nav.examMgrBtn': 'Tests',
      'nav.examMgrTitle': 'Gérer, ajouter ou supprimer des examens',
      'nav.tasksBtn': 'Tâches',
      'nav.tasksTitle': 'Afficher l\'aperçu des questions d\'examen',
      'nav.vocabBtn': 'Vocabulaire',
      'nav.vocabTitle': 'Aide-mémoire de vocabulaire B1 & glossaire',
      'nav.mistakesBtn': 'Erreurs',
      'nav.mistakesTitle': 'Mon cahier personnel d\'erreurs',
      'nav.aiTutorBtn': 'Tuteur IA',
      'nav.aiTutorTitle': 'Tuteur IA & assistant de langue B1',
      'nav.timerToggleTitle': 'Minuteur Pause/Reprendre',
      'nav.fullscreenTitle': 'Plein écran activé/désactivé',
      'nav.themeTitle': 'Changer de thème : Clair · Papier/Sépia · Sombre',
      'nav.uiLangTitle': 'Changer la langue de l\'interface (Deutsch / English / Français)',

      'candidate.label': 'Candidat(e) :',
      'candidate.placeholder': 'Nom pour le certificat d\'examen',
      'highlighter.label': 'Surligneur :',
      'highlighter.yellow': 'Jaune',
      'highlighter.green': 'Vert',
      'highlighter.blue': 'Bleu',
      'highlighter.eraser': 'Gomme',
      'highlighter.clear': 'Effacer',
      'highlighter.yellowTitle': 'Surligner en jaune',
      'highlighter.greenTitle': 'Surligner en vert',
      'highlighter.blueTitle': 'Surligner en bleu',
      'highlighter.eraserTitle': 'Gommer le surlignage',
      'highlighter.clearTitle': 'Effacer tous les surlignages de cette partie',

      'vocabToggle.active': 'Vocabulaire : ON',
      'vocabToggle.inactive': 'Vocabulaire : OFF',
      'vocabToggle.title': 'Mettre en évidence le vocabulaire B1 dans le texte (Activé/Désactivé)',
      'fontSize.label': 'Police :',
      'fontSize.normal': 'Normal',
      'reader.trigger': '📖 Mode Lecture',
      'reader.triggerTitle': 'Ouvrir le mode lecture : Affichage grand et net avec arrière-plan doux',

      'session.resumeText': 'Session d\'examen enregistrée trouvée. Voulez-vous reprendre là où vous vous êtes arrêté ?',
      'session.btnResume': 'Reprendre',
      'session.btnRestart': 'Recommencer',

      'footer.prev': '← Précédent',
      'footer.next': 'Suivant →',
      'footer.submit': 'Soumettre l\'examen',
      'footer.submitLesen': 'Soumettre la Lecture (100 P.)',
      'footer.submitHoren': 'Soumettre l\'Écoute (100 P.)',
      'footer.progressPattern': '{answered} sur {total} tâches résolues',

      'matrix.title': 'Aperçu de l\'examen ({total} tâches)',
      'matrix.sub': 'Cliquez sur une tâche pour y accéder directement.',
      'matrix.legendAnswered': 'Répondu',
      'matrix.legendUnanswered': 'Non répondu',
      'matrix.legendFlagged': 'Marqué (★)',
      'matrix.backBtn': 'Retour au test',

      'aiSettings.title': '⚙️ Paramètres du Tuteur IA (100% Gratuit)',
      'aiSettings.desc': 'Vous pouvez enregistrer votre propre clé API gratuite. Elle est stockée uniquement localement dans votre navigateur.',
      'aiSettings.providerLabel': 'Fournisseur préféré :',
      'aiSettings.providerGemini': 'Google Gemini 1.5 Flash (Recommandé · Gratuit)',
      'aiSettings.providerGroq': 'Groq Cloud · Llama 3.3 70B (Ultra-rapide · Gratuit)',
      'aiSettings.geminiKeyLabel': 'Clé API Google Gemini :',
      'aiSettings.geminiHintPrefix': 'Obtenir une clé gratuite sur ',
      'aiSettings.groqKeyLabel': 'Clé API Groq (Optionnel) :',
      'aiSettings.groqHintPrefix': 'Gratuit sur ',
      'aiSettings.proxyLabel': 'Point de terminaison Cloudflare Proxy (Optionnel) :',
      'aiSettings.saveBtn': 'Enregistrer',
      'aiSettings.friendTitle': '🔗 Lien d\'accès direct pour votre ami(e) :',
      'aiSettings.friendDesc': 'Générez un lien d\'invitation. Dès que votre ami(e) ouvre le lien sur son téléphone ou PC, l\'IA est immédiatement activée sans mot de passe ni clé !',
      'aiSettings.friendBtn': 'Copier le lien pour un(e) ami(e)',

      'aiTutor.modalTitle': 'Tuteur IA B1',
      'aiTutor.badgeFree': 'Gratuit',
      'aiTutor.subtitle': 'Votre coach personnel d\'examen B1',
      'aiTutor.inputPlaceholder': 'Posez une question sur la tâche, la grammaire ou le vocabulaire...',
      'aiTutor.sendTitle': 'Envoyer',
      'aiTutor.settingsTitle': 'Paramètres API / Configurer les fournisseurs',
      'aiTutor.pillWhy': '💡 Pourquoi est-ce correct ?',
      'aiTutor.pillGrammar': '📐 Expliquer la grammaire',
      'aiTutor.pillKeywords': '🔍 Mots-clés du texte',
      'aiTutor.pillSimilar': '🎯 Exercice similaire',

      'examMgr.title': 'Gérer les examens & Créer un nouveau',
      'examMgr.sub': 'Ajoutez ou supprimez vos propres séries d\'examens, exportez en JSON ou créez avec l\'IA.',
      'examMgr.tabList': '📚 Examens installés',
      'examMgr.tabAdd': '➕ Ajouter un examen',
      'examMgr.tabAi': '🤖 Modèle de prompt IA',
      'examMgr.uploadTitle': 'Téléverser un fichier d\'examen JSON',
      'examMgr.uploadDesc': 'Sélectionnez un fichier .json d\'examen depuis votre ordinateur :',
      'examMgr.textareaLabel': 'Ou collez le code JSON directement ici :',
      'examMgr.validateBtn': 'Vérifier la syntaxe et le format',
      'examMgr.saveBtn': 'Enregistrer & activer l\'examen',
      'examMgr.copyAiPromptBtn': 'Copier le prompt IA dans le presse-papiers',
      'examMgr.doneBtn': 'Terminé',
      'examMgr.footerNote': 'Les modifications sont enregistrées immédiatement dans votre navigateur.',

      'vocab.title': 'Aide-mémoire Vocabulaire B1 & Liste',
      'vocab.sub': 'Mots B1 importants, collocations et explications avec prononciation audio.',
      'vocab.searchPlaceholder': 'Rechercher un mot (allemand, arabe, français)...',
      'vocab.tabCurrent': 'Partie actuelle',
      'vocab.tabAll': 'Tous les mots',
      'vocab.tabSaved': 'Favoris (★)',
      'vocab.tabCards': '🗂️ Cartes mémoire',
      'vocab.closeBtn': 'Fermer',

      'mistakes.title': 'Mon Cahier Personnel d\'Erreurs',
      'mistakes.sub': 'Révisez vos erreurs des parties de l\'examen jusqu\'à leur maîtrise.',
      'mistakes.tabDrill': '🎯 Pratiquer les erreurs (Drill)',
      'mistakes.tabList': '📋 Voir la liste des erreurs',
      'mistakes.clearBtn': 'Vider le cahier',
      'mistakes.closeBtn': 'Retour au test',

      'readerModal.title': 'Mode Lecture & Vue Focus',
      'readerModal.fontLabel': 'Police :',
      'readerModal.fontSerif': 'Style Livre',
      'readerModal.fontSans': 'Moderne',
      'readerModal.hint': 'Touchez les mots soulignés pour traduction & audio · Échap pour fermer',
      'readerModal.doneBtn': 'Retour aux tâches',

      'results.copyBtn': 'Copier le résultat',
      'results.printBtn': 'Imprimer / PDF',
      'results.restartBtn': 'Recommencer le test',
      'results.reviewTitle': 'Aperçu détaillé des tâches',
      'results.filterAll': 'Tous',
      'results.filterIncorrect': 'Faux',
      'results.filterCorrect': 'Correct'
    }
  };

  const LANG_FLAGS = {
    de: '🇩🇪',
    en: '🇬🇧',
    fr: '🇫🇷'
  };

  const LANG_NAMES = {
    de: 'Deutsch',
    en: 'English',
    fr: 'Français'
  };

  let currentLang = DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      currentLang = stored;
    }
  } catch (e) {}

  function getLang() {
    return currentLang;
  }

  function t(key, fallback = '') {
    const lang = getLang();
    return (I18N[lang] && I18N[lang][key]) || (I18N[DEFAULT_LANG] && I18N[DEFAULT_LANG][key]) || fallback;
  }

  function getProgressText(answered, total) {
    const pattern = t('footer.progressPattern', '{answered} von {total} Aufgaben gelöst');
    return pattern.replace('{answered}', answered).replace('{total}', total);
  }

  function getMatrixBtnText(total) {
    const base = t('nav.tasksBtn', 'Aufgaben');
    return total !== undefined ? `${base} (${total})` : base;
  }

  function getVocabToggleText(enabled) {
    return enabled ? t('vocabToggle.active', 'Wortschatz: AN') : t('vocabToggle.inactive', 'Wortschatz: AUS');
  }

  function updateSelectorUI(lang) {
    const flagEl = document.getElementById('uiLangCurrentFlag');
    const codeEl = document.getElementById('uiLangCurrentCode');
    const btnEl = document.getElementById('uiLangBtn');

    if (flagEl) flagEl.textContent = LANG_FLAGS[lang] || '🌐';
    if (codeEl) codeEl.textContent = lang.toUpperCase();
    if (btnEl) btnEl.title = t('nav.uiLangTitle', 'UI-Sprache wechseln');

    // Update active checkmarks inside dropdown menu
    document.querySelectorAll('.ui-lang-item').forEach(item => {
      const itemLang = item.getAttribute('data-lang');
      const isSelected = itemLang === lang;
      item.classList.toggle('active', isSelected);
      const checkEl = item.querySelector('.ui-lang-item-check');
      if (checkEl) checkEl.textContent = isSelected ? '✓' : '';
    });
  }

  function applyDictionary(lang) {
    // 1. Header & Brand
    const brandTitle = document.getElementById('brandTitle');
    if (brandTitle) brandTitle.textContent = t('brand.title');

    const brandSub = document.getElementById('brandSub');
    if (brandSub) brandSub.textContent = t('brand.sub');

    const testSelectorLabel = document.querySelector('.test-selector-label');
    if (testSelectorLabel) testSelectorLabel.textContent = t('nav.testLabel');

    const modelTestSelect = document.getElementById('modelTestSelect');
    if (modelTestSelect) modelTestSelect.title = t('nav.testSelectTitle');

    const quickAddTestBtn = document.getElementById('quickAddTestBtn');
    if (quickAddTestBtn) quickAddTestBtn.title = t('nav.quickAddTitle');

    // Nav Action Buttons
    const examMgrBtn = document.getElementById('examMgrBtn');
    if (examMgrBtn) {
      examMgrBtn.title = t('nav.examMgrTitle');
      const span = examMgrBtn.querySelector('span');
      if (span) span.textContent = t('nav.examMgrBtn');
    }

    const matrixBtn = document.getElementById('matrixBtn');
    if (matrixBtn) {
      matrixBtn.title = t('nav.tasksTitle');
      const span = matrixBtn.querySelector('span');
      if (span) {
        // Extract total if present
        const match = span.textContent.match(/\((\d+)\)/);
        const total = match ? match[1] : undefined;
        span.textContent = getMatrixBtnText(total);
      }
    }

    const vocabModalBtn = document.getElementById('vocabModalBtn');
    if (vocabModalBtn) {
      vocabModalBtn.title = t('nav.vocabTitle');
      const span = vocabModalBtn.querySelector('span');
      if (span) span.textContent = t('nav.vocabBtn');
    }

    const mistakesModalBtn = document.getElementById('mistakesModalBtn');
    if (mistakesModalBtn) {
      mistakesModalBtn.title = t('nav.mistakesTitle');
      const spans = mistakesModalBtn.querySelectorAll('span');
      if (spans.length > 0 && !spans[0].classList.contains('nav-badge')) {
        spans[0].textContent = t('nav.mistakesBtn');
      }
    }

    const aiTutorNavBtn = document.getElementById('aiTutorNavBtn');
    if (aiTutorNavBtn) {
      aiTutorNavBtn.title = t('nav.aiTutorTitle');
      const spans = aiTutorNavBtn.querySelectorAll('span');
      spans.forEach(s => {
        if (!s.classList.contains('ai-sparkle-icon')) {
          s.textContent = t('nav.aiTutorBtn');
        }
      });
    }

    // Controls
    const timerToggle = document.getElementById('timerToggle');
    if (timerToggle) timerToggle.title = t('nav.timerToggleTitle');

    const fullscreenToggle = document.getElementById('fullscreenToggle');
    if (fullscreenToggle) fullscreenToggle.title = t('nav.fullscreenTitle');

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.title = t('nav.themeTitle');

    // 2. Candidate Banner & Highlighting
    const candidateLabel = document.querySelector('.candidate-input-wrap label');
    if (candidateLabel) candidateLabel.textContent = t('candidate.label');

    const friendNameInput = document.getElementById('friendName');
    if (friendNameInput) friendNameInput.placeholder = t('candidate.placeholder');

    const hlLabel = document.querySelector('.highlighter-toolbar .hl-label');
    if (hlLabel) {
      hlLabel.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11-6 6v3h3l6-6"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg> ${t('highlighter.label')}`;
    }

    function updateToolBtn(selector, titleKey, textKey, swatchClass) {
      const btn = document.querySelector(selector);
      if (btn) {
        btn.title = t(titleKey);
        btn.innerHTML = `<span class="swatch-circle ${swatchClass}"></span> ${t(textKey)}`;
      }
    }

    updateToolBtn('.hl-tool-btn[data-tool="yellow"]', 'highlighter.yellowTitle', 'highlighter.yellow', 'yellow');
    updateToolBtn('.hl-tool-btn[data-tool="green"]', 'highlighter.greenTitle', 'highlighter.green', 'green');
    updateToolBtn('.hl-tool-btn[data-tool="blue"]', 'highlighter.blueTitle', 'highlighter.blue', 'blue');
    updateToolBtn('.hl-tool-btn[data-tool="eraser"]', 'highlighter.eraserTitle', 'highlighter.eraser', 'eraser');

    const clearHlBtn = document.getElementById('clearTeilHighlights');
    if (clearHlBtn) {
      clearHlBtn.textContent = t('highlighter.clear');
      clearHlBtn.title = t('highlighter.clearTitle');
    }

    const vocabToggleBtn = document.getElementById('vocabToggleBtn');
    if (vocabToggleBtn) {
      vocabToggleBtn.title = t('vocabToggle.title');
      const isActive = vocabToggleBtn.classList.contains('active');
      const vocabLabel = document.getElementById('vocabToggleLabel');
      if (vocabLabel) vocabLabel.textContent = getVocabToggleText(isActive);
    }

    const fsLabel = document.querySelector('.font-size-controls .fs-label');
    if (fsLabel) fsLabel.textContent = t('fontSize.label');

    const fsNormalBtn = document.querySelector('.font-size-btn[data-size="15.5px"]');
    if (fsNormalBtn) fsNormalBtn.textContent = t('fontSize.normal');

    const readerBannerTrigger = document.getElementById('readerBannerTrigger');
    if (readerBannerTrigger) {
      readerBannerTrigger.title = t('reader.triggerTitle');
      const span = readerBannerTrigger.querySelector('span');
      if (span) span.textContent = t('reader.trigger');
    }

    // 3. Auto-save recovery banner
    const sessionResumeText = document.getElementById('sessionResumeText');
    if (sessionResumeText) sessionResumeText.textContent = t('session.resumeText');

    const btnResumeSession = document.getElementById('btnResumeSession');
    if (btnResumeSession) btnResumeSession.textContent = t('session.btnResume');

    const btnDismissResume = document.getElementById('btnDismissResume');
    if (btnDismissResume) btnDismissResume.textContent = t('session.btnRestart');

    // 4. Bottom action bar
    const prevTeilBtn = document.getElementById('prevTeilBtn');
    if (prevTeilBtn) prevTeilBtn.textContent = t('footer.prev');

    const nextTeilBtn = document.getElementById('nextTeilBtn');
    if (nextTeilBtn) nextTeilBtn.textContent = t('footer.next');

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      if (typeof window.getSubmitButtonLabel === 'function') {
        submitBtn.textContent = window.getSubmitButtonLabel();
      } else {
        submitBtn.textContent = t('footer.submit');
      }
    }
    if (typeof window.updateFooterButtons === 'function') {
      window.updateFooterButtons();
    }

    // 5. Question Matrix Modal
    const matrixTitle = document.getElementById('matrixTitle');
    if (matrixTitle) {
      const match = matrixTitle.textContent.match(/\d+/);
      const count = match ? match[0] : '30';
      matrixTitle.textContent = t('matrix.title').replace('{total}', count);
    }
    const matrixSub = document.querySelector('#matrixModal .modal-header p');
    if (matrixSub) matrixSub.textContent = t('matrix.sub');

    const matrixLegendItems = document.querySelectorAll('#matrixModal .legend-item');
    if (matrixLegendItems.length >= 3) {
      setLegendText(matrixLegendItems[0], t('matrix.legendAnswered'));
      setLegendText(matrixLegendItems[1], t('matrix.legendUnanswered'));
      setLegendText(matrixLegendItems[2], t('matrix.legendFlagged'));
    }

    const matrixConfirmClose = document.getElementById('matrixConfirmClose');
    if (matrixConfirmClose) matrixConfirmClose.textContent = t('matrix.backBtn');

    // 6. AI Tutor Modal & Settings Panel
    const aiModalTitle = document.getElementById('aiTutorModalTitle');
    if (aiModalTitle) aiModalTitle.textContent = t('aiTutor.modalTitle');

    const aiBadgeFree = document.querySelector('.ai-badge-free');
    if (aiBadgeFree) aiBadgeFree.textContent = t('aiTutor.badgeFree');

    const aiTutorSubtitle = document.getElementById('aiTutorSubtitle');
    if (aiTutorSubtitle) aiTutorSubtitle.textContent = t('aiTutor.subtitle');

    const aiSettingsTitle = document.querySelector('.ai-settings-title');
    if (aiSettingsTitle) aiSettingsTitle.textContent = t('aiSettings.title');

    const aiSettingsDesc = document.querySelector('.ai-settings-desc');
    if (aiSettingsDesc) aiSettingsDesc.textContent = t('aiSettings.desc');

    const aiProviderLabel = document.querySelector('label[for="aiProviderSelect"]');
    if (aiProviderLabel) aiProviderLabel.textContent = t('aiSettings.providerLabel');

    const optGemini = document.querySelector('#aiProviderSelect option[value="gemini"]');
    if (optGemini) optGemini.textContent = t('aiSettings.providerGemini');

    const optGroq = document.querySelector('#aiProviderSelect option[value="groq"]');
    if (optGroq) optGroq.textContent = t('aiSettings.providerGroq');

    const aiGeminiLabel = document.querySelector('label[for="aiKeyGeminiInput"]');
    if (aiGeminiLabel) aiGeminiLabel.textContent = t('aiSettings.geminiKeyLabel');

    const aiGroqLabel = document.querySelector('label[for="aiKeyGroqInput"]');
    if (aiGroqLabel) aiGroqLabel.textContent = t('aiSettings.groqKeyLabel');

    const aiProxyLabel = document.querySelector('label[for="aiProxyInput"]');
    if (aiProxyLabel) aiProxyLabel.textContent = t('aiSettings.proxyLabel');

    const aiSaveSettingsBtn = document.getElementById('aiSaveSettingsBtn');
    if (aiSaveSettingsBtn) aiSaveSettingsBtn.textContent = t('aiSettings.saveBtn');

    const aiFriendTitle = document.querySelector('#aiShareInviteBox div[style*="font-weight:700"]');
    if (aiFriendTitle) aiFriendTitle.textContent = t('aiSettings.friendTitle');

    const aiFriendDesc = document.querySelector('#aiShareInviteBox p');
    if (aiFriendDesc) aiFriendDesc.textContent = t('aiSettings.friendDesc');

    const aiCopyFriendLinkBtn = document.getElementById('aiCopyFriendLinkBtn');
    if (aiCopyFriendLinkBtn) {
      const span = aiCopyFriendLinkBtn.querySelectorAll('span');
      if (span.length > 1) span[1].textContent = t('aiSettings.friendBtn');
    }

    const aiTutorInput = document.getElementById('aiTutorInput');
    if (aiTutorInput) aiTutorInput.placeholder = t('aiTutor.inputPlaceholder');

    const aiTutorSendBtn = document.getElementById('aiTutorSendBtn');
    if (aiTutorSendBtn) aiTutorSendBtn.title = t('aiTutor.sendTitle');

    const aiTutorSettingsBtn = document.getElementById('aiTutorSettingsBtn');
    if (aiTutorSettingsBtn) aiTutorSettingsBtn.title = t('aiTutor.settingsTitle');

    // 7. Exam Manager Modal
    const examMgrTitle = document.getElementById('examMgrTitle');
    if (examMgrTitle) examMgrTitle.textContent = t('examMgr.title');

    const examMgrSub = document.querySelector('#examManagerModal .modal-header p');
    if (examMgrSub) examMgrSub.textContent = t('examMgr.sub');

    const tabListBtn = document.querySelector('.exam-mgr-tab-btn[data-tab="list"]');
    if (tabListBtn) tabListBtn.textContent = t('examMgr.tabList');

    const tabAddBtn = document.querySelector('.exam-mgr-tab-btn[data-tab="add"]');
    if (tabAddBtn) tabAddBtn.textContent = t('examMgr.tabAdd');

    const tabAiBtn = document.querySelector('.exam-mgr-tab-btn[data-tab="ai"]');
    if (tabAiBtn) tabAiBtn.textContent = t('examMgr.tabAi');

    const examUploadTitle = document.querySelector('#examMgrPane_add div[style*="font-weight:700"]');
    if (examUploadTitle) examUploadTitle.textContent = t('examMgr.uploadTitle');

    const examUploadDesc = document.querySelector('#examMgrPane_add p[style*="font-size:12px"]');
    if (examUploadDesc) examUploadDesc.textContent = t('examMgr.uploadDesc');

    const examTextareaLabel = document.querySelector('label[for="examJsonTextarea"]');
    if (examTextareaLabel) examTextareaLabel.textContent = t('examMgr.textareaLabel');

    const examValidateBtn = document.getElementById('examValidateBtn');
    if (examValidateBtn) examValidateBtn.textContent = t('examMgr.validateBtn');

    const examSaveBtn = document.getElementById('examSaveBtn');
    if (examSaveBtn) examSaveBtn.textContent = t('examMgr.saveBtn');

    const copyAiPromptBtn = document.getElementById('copyAiPromptBtn');
    if (copyAiPromptBtn) {
      const spans = copyAiPromptBtn.querySelectorAll('span');
      if (spans.length > 1) spans[1].textContent = t('examMgr.copyAiPromptBtn');
    }

    const examMgrConfirmClose = document.getElementById('examMgrConfirmClose');
    if (examMgrConfirmClose) examMgrConfirmClose.textContent = t('examMgr.doneBtn');

    const examFooterNote = document.querySelector('#examManagerModal .modal-footer div');
    if (examFooterNote) examFooterNote.textContent = t('examMgr.footerNote');

    // 8. Vocab Modal
    const vocabModalTitle = document.getElementById('vocabModalTitle');
    if (vocabModalTitle) vocabModalTitle.textContent = t('vocab.title');

    const vocabModalSub = document.querySelector('#vocabModal .modal-header p');
    if (vocabModalSub) vocabModalSub.textContent = t('vocab.sub');

    const vocabSearchInput = document.getElementById('vocabSearchInput');
    if (vocabSearchInput) vocabSearchInput.placeholder = t('vocab.searchPlaceholder');

    const vtabCurrent = document.querySelector('#vocabTabButtons button[data-vtab="current"]');
    if (vtabCurrent) vtabCurrent.textContent = t('vocab.tabCurrent');

    const vtabAll = document.querySelector('#vocabTabButtons button[data-vtab="all"]');
    if (vtabAll) vtabAll.textContent = t('vocab.tabAll');

    const vtabSaved = document.querySelector('#vocabTabButtons button[data-vtab="saved"]');
    if (vtabSaved) {
      const badge = vtabSaved.querySelector('#savedVocabCountBadge');
      const badgeCount = badge ? badge.textContent : '0';
      vtabSaved.innerHTML = `${t('vocab.tabSaved')} <span id="savedVocabCountBadge">${badgeCount}</span>`;
    }

    const vtabCards = document.querySelector('#vocabTabButtons button[data-vtab="flashcards"]');
    if (vtabCards) vtabCards.textContent = t('vocab.tabCards');

    const vocabConfirmClose = document.getElementById('vocabConfirmClose');
    if (vocabConfirmClose) vocabConfirmClose.textContent = t('vocab.closeBtn');

    // 9. Mistakes Modal
    const mistakesModalTitle = document.getElementById('mistakesModalTitle');
    if (mistakesModalTitle) mistakesModalTitle.textContent = t('mistakes.title');

    const mistakesModalSub = document.querySelector('#mistakesModal .modal-header p');
    if (mistakesModalSub) mistakesModalSub.textContent = t('mistakes.sub');

    const mtabDrill = document.querySelector('#mistakesTabButtons button[data-mtab="drill"]');
    if (mtabDrill) mtabDrill.textContent = t('mistakes.tabDrill');

    const mtabList = document.querySelector('#mistakesTabButtons button[data-mtab="list"]');
    if (mtabList) mtabList.textContent = t('mistakes.tabList');

    const clearAllMistakesBtn = document.getElementById('clearAllMistakesBtn');
    if (clearAllMistakesBtn) clearAllMistakesBtn.textContent = t('mistakes.clearBtn');

    const mistakesConfirmClose = document.getElementById('mistakesConfirmClose');
    if (mistakesConfirmClose) mistakesConfirmClose.textContent = t('mistakes.closeBtn');

    // 10. Focus Reader Modal
    const focusReaderHeading = document.getElementById('focusReaderHeading');
    if (focusReaderHeading) focusReaderHeading.textContent = t('readerModal.title');

    const rfontLabel = document.querySelector('.reader-control-pill .reader-ctrl-label');
    if (rfontLabel) rfontLabel.textContent = t('readerModal.fontLabel');

    const readerFontSerifBtn = document.getElementById('readerFontSerifBtn');
    if (readerFontSerifBtn) readerFontSerifBtn.textContent = t('readerModal.fontSerif');

    const readerFontSansBtn = document.getElementById('readerFontSansBtn');
    if (readerFontSansBtn) readerFontSansBtn.textContent = t('readerModal.fontSans');

    const focusReaderHintText = document.getElementById('focusReaderHintText');
    if (focusReaderHintText) {
      if (lang === 'de') {
        focusReaderHintText.innerHTML = 'Punktierte Wörter antippen für Übersetzung & Audio-Aussprache · <strong>Esc</strong> zum Schließen';
      } else if (lang === 'fr') {
        focusReaderHintText.innerHTML = 'Touchez les mots soulignés pour la traduction & l\'audio · <strong>Échap</strong> pour fermer';
      } else {
        focusReaderHintText.innerHTML = 'Tap dotted words for translation & audio pronunciation · <strong>Esc</strong> to close';
      }
    }

    const focusReaderDoneBtn = document.getElementById('focusReaderDoneBtn');
    if (focusReaderDoneBtn) focusReaderDoneBtn.textContent = t('readerModal.doneBtn');

    // 11. Results Screen
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> ${t('results.copyBtn')}`;
    }

    const printBtn = document.querySelector('#resultsScreen button[onclick="window.print()"]');
    if (printBtn) {
      printBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg> ${t('results.printBtn')}`;
    }

    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) restartBtn.textContent = t('results.restartBtn');

    const reviewHeaderH3 = document.querySelector('.review-header h3');
    if (reviewHeaderH3) reviewHeaderH3.textContent = t('results.reviewTitle');

    const filterAll = document.querySelector('#resultsScreen .filter-btn[data-filter="all"]');
    if (filterAll) {
      const match = filterAll.textContent.match(/\(\d+\)/);
      const count = match ? ` ${match[0]}` : '';
      filterAll.textContent = `${t('results.filterAll')}${count}`;
    }

    const filterInc = document.querySelector('#resultsScreen .filter-btn[data-filter="incorrect"]');
    if (filterInc) filterInc.textContent = t('results.filterIncorrect');

    const filterCor = document.querySelector('#resultsScreen .filter-btn[data-filter="correct"]');
    if (filterCor) filterCor.textContent = t('results.filterCorrect');
  }

  function setLegendText(container, text) {
    const indicator = container.querySelector('.legend-indicator');
    if (indicator) {
      const cls = indicator.className;
      container.innerHTML = `<span class="${cls}"></span> ${text}`;
    } else {
      container.textContent = text;
    }
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    updateSelectorUI(lang);
    applyDictionary(lang);

    // Call updateProgress from script.js if available
    if (typeof window.updateProgress === 'function') {
      window.updateProgress();
    }
    if (typeof window.updateVocabToggleBtnState === 'function') {
      window.updateVocabToggleBtnState();
    }

    window.dispatchEvent(new CustomEvent('b1:ui-lang-changed', { detail: { lang } }));
  }

  function init() {
    const currentLang = getLang();
    document.documentElement.lang = currentLang;

    // Language dropdown trigger
    const dropdown = document.getElementById('uiLangDropdown');
    const trigger = document.getElementById('uiLangBtn');
    const menu = document.getElementById('uiLangMenu');

    if (trigger && dropdown && menu) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');
        if (isOpen) {
          dropdown.classList.remove('open');
          menu.style.display = 'none';
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          dropdown.classList.add('open');
          menu.style.display = 'flex';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      // Item selection
      document.querySelectorAll('.ui-lang-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const selected = item.getAttribute('data-lang');
          if (selected) {
            setLanguage(selected);
          }
          dropdown.classList.remove('open');
          menu.style.display = 'none';
          trigger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
          menu.style.display = 'none';
          trigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdown.classList.contains('open')) {
          dropdown.classList.remove('open');
          menu.style.display = 'none';
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    updateSelectorUI(currentLang);
    applyDictionary(currentLang);
  }

  // Export public API
  window.uiLoc = {
    getLang,
    setLanguage,
    t,
    getProgressText,
    getMatrixBtnText,
    getVocabToggleText,
    applyCurrentLanguage: () => applyDictionary(getLang()),
    init,
    SUPPORTED_LANGS,
    LANG_NAMES,
    LANG_FLAGS
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window);
