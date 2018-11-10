const execSync = require('child_process').execSync;
const path = require('path');
const klawSync = require('klaw-sync');
const assert = require('power-assert');

const fixtureDir = path.join(__dirname, '..', 'fixtures');
const fixtures = klawSync(fixtureDir, {nodir: true}).
  map(file => file.path).
  filter(path => path.endsWith('.js'));

describe('index.js', function() {
  fixtures.forEach(fixture => {
    const ruleName = path.basename(path.resolve(fixture, '..'));
    it(ruleName, function() {
      assert.throws(() => {
        execSync(`npx eslint --format json ${fixture}`).toString();
      }, (e) => {
        eslintError = JSON.parse(e.output[1].toString())[0];
        return eslintError.messages.some(m => m.ruleId === ruleName);
      }, `A voilotion of the ${ruleName} rule has not been detected.`);
    });
  });
});

