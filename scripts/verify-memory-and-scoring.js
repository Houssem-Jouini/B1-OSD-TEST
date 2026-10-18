// Automated verification script for B1 Memory & 100-Point Independent Evaluation
const fs = require('fs');
const path = require('path');

// Mock localStorage
const localStorageStore = {};
global.localStorage = {
  getItem: (k) => (localStorageStore[k] !== undefined ? localStorageStore[k] : null),
  setItem: (k, v) => { localStorageStore[k] = String(v); },
  removeItem: (k) => { delete localStorageStore[k]; },
  clear: () => { Object.keys(localStorageStore).forEach(k => delete localStorageStore[k]); }
};

// Mock minimal DOM
function makeMockElement(id = '', tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    value: '',
    textContent: '',
    innerHTML: '',
    style: {
      setProperty: (p, v) => {}
    },
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
    getAttribute() { return null; },
    scrollIntoView() {}
  };
}

const elements = {};
['modelTestSelect', 'brandBadge', 'brandTitle', 'brandSub', 'resultsScreen', 
 'tabsWrapper', 'testAreaContainer', 'footerBar', 'candidateBanner', 
 'prevTeilBtn', 'nextTeilBtn', 'submitBtn', 'scoreCircle', 'resTotalPts', 
 'resTotalPct', 'statusTag', 'candidateCongrats', 'teilScoresGrid', 
 'resModuleBadge', 'btnBackToExam', 'btnSwitchModule', 'copyBtn', 
 'restartBtn', 'progressFill', 'progressTxt', 'friendName', 'sessionResumeBanner',
 'reviewItemsList', 'timerDisplay', 'testGrid', 'passagePanel', 'questionsPanel', 'tabs'].forEach(id => {
  elements[id] = makeMockElement(id);
});

global.document = {
  getElementById: (id) => elements[id] || (elements[id] = makeMockElement(id)),
  querySelector: (sel) => makeMockElement(),
  querySelectorAll: (sel) => [],
  addEventListener: () => {},
  createElement: (tag) => makeMockElement('', tag),
  body: makeMockElement('body'),
  documentElement: {
    setAttribute: () => {},
    removeAttribute: () => {}
  }
};

global.window = {
  localStorage: global.localStorage,
  addEventListener: () => {},
  scrollTo: () => {},
  innerWidth: 1024,
  matchMedia: () => ({ matches: false })
};

// Load test data
const mod1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tests/modellsatz-1.json'), 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tests/modellsatz-2.json'), 'utf8'));
const mod3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tests/modellsatz-3.json'), 'utf8'));

global.modelTests = [mod1, mod2, mod3];
global.currentTestIndex = 0;
global.currentTest = mod1;
global.testData = mod1.parts;
global.userAnswers = {};
global.flaggedQuestions = new Set();
global.revealedTeils = new Set();
global.activeTeil = 1;
global.timeLeft = 3900;
global.timerRunning = false;
global.teilTimers = {};
global.questionsLang = 'fr';
global.passageLang = 'de';
global.reviewFilter = 'all';

// Load script.js content into environment
const scriptCode = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');

// Execute script within context
const vm = require('vm');
const context = vm.createContext({
  ...global,
  console,
  setTimeout: () => {},
  setInterval: () => 123,
  clearInterval: () => {}
});

vm.runInContext(scriptCode, context);

console.log('✓ script.js loaded into sandbox successfully.');

// Test 1: Submit button visibility
console.log('\n--- Testing Submit Button Visibility ---');
[1, 2, 3, 4, 5, 6].forEach(teilId => {
  context.activeTeil = teilId;
  const shouldShow = context.shouldShowSubmitButton(teilId);
  const label = context.getSubmitButtonLabel(teilId);
  console.log(`Teil ${teilId}: shouldShow=${shouldShow}, label="${label}"`);
  if (teilId < 5 && shouldShow) {
    throw new Error(`FAIL: Submit button should NOT show on Teil ${teilId}`);
  }
  if (teilId === 5 && !shouldShow) {
    throw new Error(`FAIL: Submit button MUST show on Teil 5`);
  }
  if (teilId === 6 && !shouldShow) {
    throw new Error(`FAIL: Submit button MUST show on Teil 6 (Hören)`);
  }
});
console.log('✓ Submit button appears only on Teil 5 and Hören.');

// Test 2: Multi-Test Answer Persistence
console.log('\n--- Testing Multi-Test Persistent Memory ---');
const userAns = context.window.userAnswers;
context.loadModelTest(0); // Modellsatz 1
userAns[1] = 0;
userAns[2] = 1;
userAns[27] = 'a'; // Teil 5
context.saveSession();

console.log('Answers saved for Modellsatz 1:', userAns);

// Switch to Modellsatz 2
context.loadModelTest(1); // Modellsatz 2
console.log('Loaded Modellsatz 2, userAnswers count:', Object.keys(userAns).length);
if (Object.keys(userAns).length !== 0) {
  throw new Error('FAIL: Fresh test should have empty answers');
}

userAns[1] = 2;
userAns[3] = 0;
context.saveSession();

// Switch back to Modellsatz 1
context.loadModelTest(0);
console.log('Switched back to Modellsatz 1, userAnswers:', userAns);
if (userAns[1] !== 0 || userAns[2] !== 1 || userAns[27] !== 'a') {
  throw new Error('FAIL: Modellsatz 1 answers were not preserved across test switches!');
}
console.log('✓ Modellsatz 1 answers perfectly restored!');

// Test 3: Independent 100-Point Scoring for Lesen (Teil 5)
console.log('\n--- Testing Independent 100-Point Scoring for Lesen ---');
context.activeTeil = 5;
// Answer all 30 Lesen questions: make 24 correct, 6 wrong -> 24/30 = 80% = 80 / 100 P.
const lesenParts = context.getActiveModuleParts(5);
let qCount = 0;
lesenParts.forEach(t => {
  context.allQuestionsOf(t).forEach(q => {
    qCount++;
    if (qCount <= 24) {
      userAns[q.id] = q.answer; // correct
    } else {
      userAns[q.id] = 'WRONG_ANSWER';
    }
  });
});

context.showResults('lesen');
const lesenPts = elements.resTotalPts.textContent;
const lesenPct = elements.resTotalPct.textContent;
const lesenBadge = elements.resModuleBadge.textContent;
const status = elements.statusTag.textContent;

console.log('Lesen Results:');
console.log('  Badge:', lesenBadge);
console.log('  Points:', lesenPts);
console.log('  Ratio:', lesenPct);
console.log('  Status:', status);

if (!lesenPts.includes('80 / 100 P.')) {
  throw new Error(`FAIL: Expected 80 / 100 P., got ${lesenPts}`);
}
if (!status.includes('BESTANDEN')) {
  throw new Error(`FAIL: 80 points should be BESTANDEN`);
}
console.log('✓ Lesen scored independently out of 100 points (80 / 100 P.).');

// Test 4: Check persistent passed exam record
const passedStore = context.getPassedExamsStore();
console.log('\n--- Testing Passed Exams Store ---');
console.log('Passed store content:', JSON.stringify(passedStore, null, 2));
if (!passedStore[context.currentTest.id] || !passedStore[context.currentTest.id].lesen) {
  throw new Error('FAIL: Passed exam record for Lesen was not saved in localStorage!');
}
if (passedStore[context.currentTest.id].lesen.points !== 80 || !passedStore[context.currentTest.id].lesen.passed) {
  throw new Error('FAIL: Passed record points or passed flag mismatch!');
}
console.log('✓ Passed exam recorded in persistent memory successfully!');

// Test 5: Independent 100-Point Scoring for Hören
console.log('\n--- Testing Independent 100-Point Scoring for Hören ---');
context.activeTeil = 6;
const horenParts = context.getActiveModuleParts(6);
let hCount = 0;
horenParts.forEach(t => {
  context.allQuestionsOf(t).forEach(q => {
    hCount++;
    if (hCount <= 18) {
      userAns[q.id] = q.answer; // 18/30 = 60% = 60 / 100 P.
    } else {
      userAns[q.id] = 'WRONG_ANSWER';
    }
  });
});

context.showResults('horen');
const horenPts = elements.resTotalPts.textContent;
const horenBadge = elements.resModuleBadge.textContent;
const horenStatus = elements.statusTag.textContent;

console.log('Hören Results:');
console.log('  Badge:', horenBadge);
console.log('  Points:', horenPts);
console.log('  Status:', horenStatus);

if (!horenPts.includes('60 / 100 P.')) {
  throw new Error(`FAIL: Expected 60 / 100 P. for Hören, got ${horenPts}`);
}
const updatedPassedStore = context.getPassedExamsStore();
console.log('Updated passed store for test:', JSON.stringify(updatedPassedStore[context.currentTest.id], null, 2));
if (!updatedPassedStore[context.currentTest.id].horen || updatedPassedStore[context.currentTest.id].horen.points !== 60) {
  throw new Error('FAIL: Hören passed record was not saved correctly!');
}
console.log('✓ Hören scored independently out of 100 points and saved.');

console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! EVERYTHING WORKS AS SPECIFIED!');
