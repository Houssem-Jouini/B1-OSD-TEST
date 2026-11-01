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
loadModelTest("modellsatz-15");
console.log("Current test selected:", currentTest.id, "—", currentTest.title);

for (let part = 1; part <= 6; part++) {
  switchTeil(part);
  for (const lang of ["fr", "ar"]) {
    passageLang = lang;
    questionsLang = lang;
    renderCurrentTeil();
    
    const pHtml = elements.passagePanel.innerHTML;
    const qHtml = elements.questionsPanel.innerHTML;
    
    if (part === 1) {
      if (lang === "fr") {
        if (!pHtml.includes("La frénésie")) throw new Error("Teil 1 FR passage missing text");
        if (!qHtml.includes("comportement d'achat compulsif")) throw new Error("Teil 1 FR question missing text");
      } else {
        if (!pHtml.includes("حمى الشراء")) throw new Error("Teil 1 AR passage missing text");
        if (!qHtml.includes("السلوك الشرائي القهري")) throw new Error("Teil 1 AR question missing text");
      }
    } else if (part === 2) {
      if (lang === "fr") {
        if (!pHtml.includes("journaux de rue")) throw new Error("Teil 2 FR passage 1 missing text");
        if (!pHtml.includes("grenouille météo")) throw new Error("Teil 2 FR passage 2 missing text");
        if (!qHtml.includes("Ces journaux existent")) throw new Error("Teil 2 FR question 7 missing text");
        if (!qHtml.includes("Pour les téléphones mobiles")) throw new Error("Teil 2 FR question 10 missing text");
      } else {
        if (!pHtml.includes("صحيفة شوارع")) throw new Error("Teil 2 AR passage 1 missing text");
        if (!pHtml.includes("ضفدع الطقس")) throw new Error("Teil 2 AR passage 2 missing text");
        if (!qHtml.includes("توجد هذه الصحف")) throw new Error("Teil 2 AR question 7 missing text");
        if (!qHtml.includes("توجد للهواتف المحمولة")) throw new Error("Teil 2 AR question 10 missing text");
      }
    } else if (part === 3) {
      if (lang === "fr") {
        if (!pHtml.includes("Grande offre sportive sur Internet")) throw new Error("Teil 3 FR ad A missing text");
        if (!qHtml.includes("Winkler")) throw new Error("Teil 3 FR question missing text");
      } else {
        if (!pHtml.includes("عرض رياضي ضخم على الإنترنت")) throw new Error("Teil 3 AR ad A missing text");
        if (!qHtml.includes("فينكلر")) throw new Error("Teil 3 AR question missing text");
      }
    } else if (part === 4) {
      if (lang === "fr") {
        if (!qHtml.includes("production de masse")) throw new Error("Teil 4 FR letter 20 missing text");
      } else {
        if (!qHtml.includes("إنتاج اللحوم الضخم")) throw new Error("Teil 4 AR letter 20 missing text");
      }
    } else if (part === 5) {
      if (lang === "fr") {
        if (!pHtml.includes("notice")) throw new Error("Teil 5 FR passage missing text");
        if (!qHtml.includes("notice d'emballage")) throw new Error("Teil 5 FR question missing text");
      } else {
        if (!pHtml.includes("نشرة طبية")) throw new Error("Teil 5 AR passage missing text");
        if (!qHtml.includes("النشرة الطبية")) throw new Error("Teil 5 AR question missing text");
      }
    } else if (part === 6) {
      if (lang === "fr") {
        if (!qHtml.includes("AIRSQUAWK001")) throw new Error("Teil 6 FR question missing text");
        if (!qHtml.includes("présentatrice")) throw new Error("Teil 6 FR speaker missing text");
      } else {
        if (!qHtml.includes("AIRSQUAWK001")) throw new Error("Teil 6 AR question missing text");
        if (!qHtml.includes("المذيعة")) throw new Error("Teil 6 AR speaker missing text");
      }
    }
    console.log("  ✓ Teil " + part + " [" + lang.toUpperCase() + "] UI rendered successfully!");
  }
}
console.log("\\n🎉 ALL 6 TEILE FULLY TESTED AND VERIFIED IN FRENCH AND ARABIC!");
`;

vm.runInContext(testRunnerCode, sandbox);
