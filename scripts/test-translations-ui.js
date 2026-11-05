// Automated verification script for Translations UI (Modellsatz 15 / Modelltest 9)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const localStorageStore = {};
const localStorage = {
  getItem: (k) => (localStorageStore[k] !== undefined ? localStorageStore[k] : null),
  setItem: (k, v) => { localStorageStore[k] = String(v); },
  removeItem: (k) => { delete localStorageStore[k]; },
  clear: () => {}
};

function makeMockElement(id = '', tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    value: '',
    textContent: '',
    innerHTML: '',
    style: { setProperty: () => {} },
    classList: {
      _classes: new Set(),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c, v) { if (v === undefined) v = !this._classes.has(c); if (v) this._classes.add(c); else this._classes.delete(c); }
    },
    dataset: {},
    children: [],
    appendChild(c) { this.children.push(c); },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener() {},
    setAttribute() {},
    removeAttribute() {},
    getAttribute() { return null; },
    scrollIntoView() {}
  };
}

const elements = {};
[
  'modelTestSelect', 'brandBadge', 'brandTitle', 'brandSub', 'resultsScreen',
  'timerBadge', 'btnSubmitTest', 'passagePanel', 'questionsPanel', 'friendName', 'horenAudioDeck'
].forEach(id => {
  elements[id] = makeMockElement(id);
});

const sandbox = {
  console,
  localStorage,
  navigator: { onLine: true },
  setTimeout: () => {},
  setInterval: () => 123,
  clearInterval: () => {},
  addEventListener: () => {},
  scrollTo: () => {},
  elements,
  document: {
    documentElement: makeMockElement('html'),
    body: makeMockElement('body'),
    createElement: (tag) => makeMockElement('', tag),
    getElementById: (id) => elements[id] || makeMockElement(id),
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {}
  }
};
sandbox.window = sandbox;

vm.createContext(sandbox);

const testsBundle = fs.readFileSync(path.join(__dirname, '../data/tests-bundle.js'), 'utf8');
vm.runInContext(testsBundle, sandbox);

const dataLoader = fs.readFileSync(path.join(__dirname, '../js/dataLoader.js'), 'utf8');
vm.runInContext(dataLoader, sandbox);

const scriptCode = fs.readFileSync(path.join(__dirname, '../js/script.js'), 'utf8');
vm.runInContext(scriptCode, sandbox);

const testRunnerCode = `
console.log("Active model tests count:", modelTests.length);

function testExam(examId) {
  loadModelTest(examId);
  console.log("\\nTesting exam:", currentTest.id, "—", currentTest.title);
  for (let part = 1; part <= 6; part++) {
    switchTeil(part);
    for (const lang of ["de", "fr", "ar"]) {
      passageLang = lang;
      questionsLang = lang;
      renderCurrentTeil();
      const pHtml = document.getElementById("passagePanel").innerHTML;
      const qHtml = document.getElementById("questionsPanel").innerHTML;
      if (part <= 5 && (!pHtml || pHtml.length < 100)) {
        throw new Error("Passage HTML unexpectedly empty or too short in Teil " + part + " (" + lang + ")");
      }
      if ((part === 1 || part === 2 || part === 5) && !pHtml.includes('class="reading-text"')) {
        throw new Error("Teil " + part + " (" + lang + ") is missing reading-text container in passage!");
      }
      if (!qHtml || qHtml.length < 100) {
        throw new Error("Questions HTML unexpectedly empty or too short in Teil " + part + " (" + lang + ")");
      }
      if (part === 1 && (!qHtml.includes("Richtig") && !qHtml.includes("صحيح") && !qHtml.includes("Vrai"))) {
        throw new Error("Teil 1 True/False options missing in questions HTML!");
      }
      if (part === 6) {
        if (!qHtml.includes('data-qid="h1"') || !qHtml.includes('data-qid="h30"')) {
          throw new Error("Teil 6 listening questions missing from questionsPanel HTML!");
        }
      }
      console.log("  ✓ Teil " + part + " [" + lang.toUpperCase() + "] UI rendered successfully (passage: " + pHtml.length + " chars, questions: " + qHtml.length + " chars)!");
    }
  }
}

testExam("modellsatz-15");
testExam("modellsatz-16");
testExam("modellsatz-17");
testExam("modellsatz-18");
testExam("modellsatz-19");
testExam("modellsatz-20");
testExam("modellsatz-21");
testExam("modellsatz-22");
testExam("modellsatz-23");
testExam("modellsatz-24");
testExam("modellsatz-25");
console.log("\\n🎉 ALL 6 TEILE FULLY TESTED AND VERIFIED IN GERMAN, FRENCH AND ARABIC!");
`;

vm.runInContext(testRunnerCode, sandbox);
