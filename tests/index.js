const execSync = require('child_process').execSync;
const path = require('path');
const klawSync = require('klaw-sync');
const assert = require('power-assert');

const languages = [
  'javascript',
  'flow',
];

function getFixtures(language) {
  const fixtureDir = path.join(__dirname, '..', 'fixtures', language);
  return klawSync(fixtureDir, {nodir: true}).
    map(file => file.path).
    filter(path => path.endsWith('.js'));
}

describe('index.js', function() {
  languages.forEach(language => {
    describe(language, function() {
      getFixtures(language).forEach(fixture => {
        const ruleName = path.basename(path.resolve(fixture, '..'));
        it(ruleName, function() {
          assert.throws(() => {
            execSync(`npx eslint --config ./eslintrcs/${language}.js --format json ${fixture}`).toString();
          }, (e) => {
            eslintError = JSON.parse(e.output[1].toString())[0];
            return eslintError.messages.some(m => m.ruleId === ruleName);
          }, `A voilotion of the ${ruleName} rule has not been detected.`);
        });
      });
    });
  });
});

