const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const dataDir = path.join(baseDir, 'data');
const testsDir = path.join(dataDir, 'tests');

const manifestPath = path.join(dataDir, 'tests-manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('Error: tests-manifest.json not found!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const commonPath = path.join(dataDir, 'translations-common.json');
const commonTranslations = fs.existsSync(commonPath) ? JSON.parse(fs.readFileSync(commonPath, 'utf8')) : {};

const allTests = [];
const activeManifest = [];
const archivedManifest = [];

manifest.forEach(item => {
  if (item.archived) {
    archivedManifest.push(item);
    console.log(`📦 Archived (omitted from site bundle): ${item.title || item.id}`);
    return;
  }

  const filePath = path.join(baseDir, item.fileName);
  if (fs.existsSync(filePath)) {
    try {
      const testData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (testData.archived) {
        archivedManifest.push(item);
        console.log(`📦 Archived in file (omitted from site bundle): ${testData.title || item.id}`);
        return;
      }
      activeManifest.push(item);
      allTests.push(testData);
      console.log(`✓ Bundled: ${testData.title || item.id}`);
    } catch (e) {
      console.error(`✕ Failed to parse ${filePath}:`, e.message);
    }
  } else {
    console.warn(`! File not found for test: ${filePath}`);
  }
});

const bundleJsContent = `/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — AUTO-GENERATED TEST DATA BUNDLE
   Built automatically from data/tests/*.json
   Allows seamless offline & file:/// execution without CORS restrictions.
   ========================================================================== */

(function(root) {
  root.__B1_COMMON_TRANSLATIONS__ = ${JSON.stringify(commonTranslations, null, 2)};
  root.__B1_MANIFEST__ = ${JSON.stringify(activeManifest, null, 2)};
  root.__B1_ARCHIVED_MANIFEST__ = ${JSON.stringify(archivedManifest, null, 2)};
  root.__B1_BUNDLED_TESTS__ = ${JSON.stringify(allTests, null, 2)};
})(typeof window !== 'undefined' ? window : globalThis);
`;

fs.writeFileSync(path.join(dataDir, 'tests-bundle.js'), bundleJsContent, 'utf8');
console.log(`\n🎉 Successfully generated data/tests-bundle.js with ${allTests.length} active tests (${archivedManifest.length} archived)!`);
