const execSync = require('child_process').execSync;
const path = require('path');
const klawSync = require('klaw-sync');
const assert = require('power-assert');

function getFixtures(lang) {
  const fixtureDir = path.join(__dirname, '..', 'fixtures', lang);
  return klawSync(fixtureDir, {nodir: true}).
    map(file => file.path).
    filter(path => path.endsWith('.js'));
}

describe('index.js', function() {
  describe('javascript', function() {
    getFixtures('javascript').forEach(fixture => {
      const ruleName = path.basename(path.resolve(fixture, '..'));
      it(ruleName, function() {
        assert.throws(() => {
          execSync(`npx eslint --config ./eslintrcs/.eslintrc.base.js  --format json ${fixture}`).toString();
        }, (e) => {
          eslintError = JSON.parse(e.output[1].toString())[0];
          return eslintError.messages.some(m => m.ruleId === ruleName);
        }, `A voilotion of the ${ruleName} rule has not been detected.`);
      });
    });
  });
});

