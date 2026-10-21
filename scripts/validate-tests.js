const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const dataDir = path.join(baseDir, 'data');
const testsDir = path.join(dataDir, 'tests');
const manifestPath = path.join(dataDir, 'tests-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ tests-manifest.json not found!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
let totalErrors = 0;
let totalWarnings = 0;

console.log(`\n🔍 Validating ${manifest.length} B1 tests in ${testsDir}...\n`);

manifest.forEach((item, idx) => {
  const filePath = path.join(baseDir, item.fileName);
  console.log(`------------------------------------------------------------`);
  const statusLabel = item.archived ? ' [ARCHIVED]' : ' [ACTIVE]';
  console.log(`[${idx + 1}/${manifest.length}] Checking${statusLabel}: ${item.id} (${item.title})`);

  if (!fs.existsSync(filePath)) {
    console.error(`  ❌ Error: File missing: ${item.fileName}`);
    totalErrors++;
    return;
  }

  let test;
  try {
    test = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`  ❌ Error: Invalid JSON in ${item.fileName}: ${err.message}`);
    totalErrors++;
    return;
  }

  // Validate core properties
  if (!test.id || typeof test.id !== 'string') {
    console.error(`  ❌ Missing or invalid 'id'`);
    totalErrors++;
  }
  if (!test.title || typeof test.title !== 'string') {
    console.error(`  ❌ Missing or invalid 'title'`);
    totalErrors++;
  }
  if (!Array.isArray(test.parts) || test.parts.length === 0) {
    console.error(`  ❌ 'parts' must be a non-empty array`);
    totalErrors++;
    return;
  }

  const qIds = new Set();
  let questionCount = 0;

  test.parts.forEach(part => {
    if (!part.id) {
      console.error(`  ❌ Part is missing 'id'`);
      totalErrors++;
    }

    const checkQuestion = (q, context) => {
      questionCount++;
      if (!q.id) {
        console.error(`  ❌ ${context}: Question missing 'id'`);
        totalErrors++;
      } else if (qIds.has(q.id)) {
        console.error(`  ❌ Duplicate question id '${q.id}' in ${context}`);
        totalErrors++;
      } else {
        qIds.add(q.id);
      }

      if (q.answer === undefined || q.answer === null || q.answer === '') {
        console.warn(`  ⚠️ Warning: Question ${q.id} has no 'answer' defined`);
        totalWarnings++;
      }
    };

    if (Array.isArray(part.questions)) {
      part.questions.forEach(q => checkQuestion(q, `Part ${part.id}`));
    }
    if (Array.isArray(part.teile)) {
      part.teile.forEach(t => {
        if (Array.isArray(t.questions)) {
          t.questions.forEach(q => checkQuestion(q, `Part ${part.id} / Teil ${t.id}`));
        }
      });
    }
  });

  // Validate explanations
  const expCount = test.explanations ? Object.keys(test.explanations).length : 0;
  if (expCount === 0) {
    console.warn(`  ⚠️ Notice: No custom explanations attached`);
    totalWarnings++;
  }

  console.log(`  ✓ Parts: ${test.parts.length} | Questions: ${questionCount} | Explanations: ${expCount}`);
});

console.log(`\n============================================================`);
const activeCount = manifest.filter(m => !m.archived).length;
const archivedCount = manifest.filter(m => m.archived).length;
if (totalErrors === 0) {
  console.log(`🎉 All tests are VALID! (${activeCount} active, ${archivedCount} archived, ${totalWarnings} warnings, 0 errors)\n`);
} else {
  console.error(`❌ Validation failed with ${totalErrors} error(s) and ${totalWarnings} warning(s)!\n`);
  process.exit(1);
}
