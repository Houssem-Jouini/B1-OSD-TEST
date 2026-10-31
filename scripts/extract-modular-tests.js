const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.resolve(__dirname, '..');
const sandbox = {};
vm.createContext(sandbox);

function runFile(fileName) {
  let code = fs.readFileSync(path.join(baseDir, fileName), 'utf8');
  code = code.replace(/const (modelTests|translationsData|explanationsData|b1VocabData) =/, 'globalThis.$1 =');
  vm.runInContext(code, sandbox);
}

runFile('data/archive/legacy/testsData.js');
runFile('data/archive/legacy/translationsData.js');
runFile('data/archive/legacy/explanationsData.js');

const dataDir = path.join(baseDir, 'data');
const testsDir = path.join(dataDir, 'tests');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(testsDir)) fs.mkdirSync(testsDir, { recursive: true });

// 1. Save common translations
if (sandbox.translationsData && sandbox.translationsData.common) {
  fs.writeFileSync(
    path.join(dataDir, 'translations-common.json'),
    JSON.stringify(sandbox.translationsData.common, null, 2),
    'utf8'
  );
  console.log('✓ Exported data/translations-common.json');
}

// 2. Export each test as an independent modular file
const manifest = [];

sandbox.modelTests.forEach((test, idx) => {
  const testId = test.id;
  const tr = sandbox.translationsData[testId] || {};
  const exp = sandbox.explanationsData[testId] || {};

  // Standardize translations to always have { parts: { ... } }
  let standardizedTranslations = {};
  if (tr.parts) {
    standardizedTranslations = tr;
  } else if (Object.keys(tr).length > 0) {
    standardizedTranslations = { parts: tr };
  }

  // Count total questions in this test
  let totalQuestions = 0;
  test.parts.forEach(part => {
    if (Array.isArray(part.questions)) {
      totalQuestions += part.questions.length;
    }
    if (Array.isArray(part.teile)) {
      part.teile.forEach(t => {
        if (Array.isArray(t.questions)) totalQuestions += t.questions.length;
      });
    }
  });

  const modularTest = {
    ...test,
    translations: standardizedTranslations,
    explanations: exp
  };

  const fileName = `${testId}.json`;
  const filePath = path.join(testsDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(modularTest, null, 2), 'utf8');

  manifest.push({
    id: testId,
    title: test.title,
    badge: test.badge || `Test ${idx + 1}`,
    examTitle: test.examTitle,
    examSub: test.examSub,
    timeTotal: test.timeTotal || 65,
    partsCount: test.parts.length,
    questionsCount: totalQuestions,
    fileName: `data/tests/${fileName}`
  });

  console.log(`✓ Exported ${fileName} (${test.parts.length} parts, ${totalQuestions} questions, ${Object.keys(exp).length} explanations)`);
});

// 3. Write tests-manifest.json
fs.writeFileSync(
  path.join(dataDir, 'tests-manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8'
);
console.log('✓ Exported data/tests-manifest.json');

// 4. Create an Exam Template for new tests
const templateExam = {
  id: "modellsatz-custom-example",
  title: "Modellsatz 7 — Goethe / ÖSD B1 (Muster)",
  badge: "Modellsatz 7",
  examTitle: "Goethe / ÖSD B1 Prüfungssimulation",
  examSub: "Lesen (5 Teile) & Hören (4 Teile) · Modellsatz 7",
  timeTotal: 65,
  parts: [
    {
      id: 1,
      title: "Teil 1",
      time: 10,
      instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      articles: [
        {
          heading: "Blog-Titel hier...",
          sub: "Untertitel hier...",
          meta: "Montag, 12. Mai",
          body: [
            "Absatz 1 des Lesetextes...",
            "Absatz 2 des Lesetextes..."
          ],
          signature: "Bis bald, Name"
        }
      ],
      example: {
        text: "Beispielaussage hier...",
        answer: "falsch"
      },
      questions: [
        {
          id: 1,
          type: "tf",
          text: "Aussage 1 zu Aufgabe 1...",
          answer: "richtig"
        },
        {
          id: 2,
          type: "tf",
          text: "Aussage 2 zu Aufgabe 2...",
          answer: "falsch"
        }
      ]
    }
  ],
  translations: {
    parts: {
      "1": {
        instructions: {
          ar: "اقرأ النص والمهام من 1 إلى 6. اختر: هل العبارات صحيحة أم خاطئة؟",
          fr: "Lisez le texte et répondez aux questions 1 à 6. Choisissez : Vrai ou Faux ?"
        },
        questions: {
          "1": {
            text: {
              ar: "ترجمة السؤال الأول...",
              fr: "Traduction de la question 1..."
            }
          }
        }
      }
    }
  },
  explanations: {
    "1": {
      quote: "Zitat aus dem Text zur Begründung...",
      whyCorrect: {
        de: "Begründung, warum die Antwort richtig ist.",
        ar: "التعليل باللغة العربية لماذا الإجابة صحيحة.",
        fr: "Explication en français pourquoi la réponse est correcte."
      },
      whyIncorrect: {
        de: "Begründung, warum die anderen Optionen falsch sind.",
        ar: "التعليل لماذا الخيارات الأخرى خاطئة.",
        fr: "Explication pourquoi les autres choix sont faux."
      }
    }
  }
};

fs.writeFileSync(
  path.join(dataDir, 'exam-template.json'),
  JSON.stringify(templateExam, null, 2),
  'utf8'
);
console.log('✓ Exported data/exam-template.json');
