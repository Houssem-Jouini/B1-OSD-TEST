# B1-OSD-TEST — Project Architecture & Agent Guidelines

Interactive Goethe / ÖSD Zertifikat B1 Exam Simulator (Lesen & Hören) built as an offline-capable Vanilla JS / HTML5 PWA.

## Directory & File Map (Jump Directly Here)
- **Entry Pages (Root):**
  - `index.html` — Main B1 Exam Simulator SPA.
  - `fiche-b1.html` — Standalone full-page B1 Frequent Words & Interactive Study Sheet.
  - `sw.js` & `manifest.json` — PWA Service Worker (must remain in root) and Web App Manifest.
- **Styles (`css/`):**
  - `css/style.css` — All application styles, themes (light/sepia/dark), and responsive layouts.
- **Frontend Logic (`js/`):**
  - `js/script.js` — Core exam engine, timer, independent 100-point Lesen/Hören scoring, session persistence, and review UI.
  - `js/dataLoader.js` — Loads `data/tests-bundle.js`, merges custom/hidden exams from `localStorage`, and exposes `window.b1Data`.
  - `js/uiLocalization.js` — UI translations (`fr`, `de`, `en`). Note: Authentic German exam texts/questions must remain in German.
  - `js/examManager.js` — UI modal for adding, importing/exporting, and hiding exams.
  - `js/aiTutor.js` — AI Tutor integration (Gemini / Groq / Cloudflare Worker proxy).
  - `js/quickWord.js` — Click-to-translate word popover.
  - `js/vocabularyData.js` — B1 glossary data (`b1VocabData`).
  - `js/b1FrequentWords.js` — 205 frequent B1 words, 28 prepositional verbs, and interactive study modes for `fiche-b1.html`.
- **Exam Data (`data/`):**
  - `data/tests/modellsatz-*.json` — Individual modular exam files (source of truth for exams).
  - `data/tests-manifest.json` — Registry of active and archived exams.
  - `data/tests-bundle.js` — Auto-generated bundle loaded by `index.html` for offline/`file://` support. **Do not edit manually**; regenerate via `npm run build:data`.
  - `data/archive/legacy/` — Legacy monolithic files (`testsData.js`, `translationsData.js`, `explanationsData.js`, `ui-polish.css`). **Ignore these** during normal feature work and searches.
- **Audio (`audio/`):**
  - `audio/modellsatz-*-hoeren.mp3` — Listening module audio tracks.
  - `audio/timers/` — Timer reference notes (`Modellsatz-*-horen-timer.txt`).
- **Build & Verification Scripts (`scripts/`):**
  - `npm run build:data` (`node scripts/build-data.js`) — Rebuilds `data/tests-bundle.js` from `data/tests/*.json` and `data/tests-manifest.json`.
  - `npm test` (`node scripts/validate-tests.js`) — Validates all exam JSON schemas, IDs, answers, and explanations.
  - `node scripts/verify-memory-and-scoring.js` — Runs automated sandbox tests for scoring and multi-test memory persistence.

## Key Invariants & Workflows
1. **Modifying or Adding Exams:** Edit or add JSON files in `data/tests/`, update `data/tests-manifest.json` if adding/archiving a test, and always run `npm run build:data && npm test` afterwards so `data/tests-bundle.js` stays in sync.
2. **Adding New Static Assets:** When adding new JS/CSS/HTML files, update `STATIC_ASSETS` and bump `CACHE_NAME` in `sw.js`.
3. **Avoid Legacy Files:** Never read or edit `data/archive/legacy/*` unless specifically asked about legacy data extraction.
4. **Exam Translation & Advertisement Invariants (Crucial for DE/FR/AR & Ads):**
   When adding or editing exams (`data/tests/modellsatz-*.json`), the `translations` object must strictly follow the expected dictionary schema so the DE/FR/AR switchers and advertisements work without fallback errors:
   - **Article Bodies (`articles[].body` & `articles2[].body`):**
     Must be a dictionary mapping language codes to arrays of paragraph strings:
     ```json
     "body": {
       "ar": ["فقرة 1...", "فقرة 2..."],
       "fr": ["Paragraphe 1...", "Paragraphe 2..."]
     }
     ```
     *(Never use an array of objects `[{"ar": "...", "fr": "..."}]`)*
   - **Multiple-Choice Options (`questions[].options` & `questions2[].options`):**
     Must be a dictionary mapping language codes to arrays of 3 options:
     ```json
     "options": {
       "ar": ["خيار أ", "خيار ب", "خيار ج"],
       "fr": ["Option A", "Option B", "Option C"]
     }
     ```
   - **Teil 3 Advertisements (`ads` on Notice Board):**
     - The exam part `parts.find(p => p.id === 3)` must define `adsFormatted`: array of objects with `{ "code": "A", "title": "...", "text": "...", ... }`.
     - The translations `translations.parts["3"].ads` must map every ad letter code to `{ "ar": "...", "fr": "..." }`:
     ```json
     "ads": {
       "A": { "ar": "نص الإعلان بالعربية...", "fr": "Texte de l'annonce en français..." },
       "B": { "ar": "...", "fr": "..." }
     }
     ```
     - Questions in Teil 3 must provide both `text` and top-level language keys:
     ```json
     "13": {
       "ar": "...", "fr": "...",
       "text": { "ar": "...", "fr": "..." }
     }
     ```
   - **Teil 4 Reader Comments (`letters`):**
     Must map question IDs to `{ "who": "...", "text": { "ar": "...", "fr": "..." } }`.
   - **Teil 6 Hören Structure:**
     - `translations.parts["6"].teile`: Provide `title`, `desc`, and `context` (`ar` and `fr`) for parts 1 through 4.
     - `translations.parts["6"].questions`: Every question ID (`h1`–`h30`) must have `ar` and `fr` text, and MCQs/speakers must have `options: { "ar": [...], "fr": [...] }`.
   - **Translation Verification Script:**
     After creating or updating any test, run `node scripts/test-translations-ui.js` alongside `npm test` to verify that all 6 Teile render correctly in German, French, and Arabic.
