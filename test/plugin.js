const test = require('ava');
const bundledPlugin = require('../index');

test('index should contain combineConfigs function', t => {
  t.is(typeof bundledPlugin.combineConfigs, 'function');
});

test('index should contain all configurations', t => {
  t.deepEqual(
    Object.keys(bundledPlugin.configs).sort(),
    ['ava', 'core', 'es20-xx', 'lodash-fp', 'prettier', 'react', 'css-modules'].sort()
  );
});

test('index should contain all rules', t => {
  t.deepEqual(
    Object.keys(bundledPlugin.rules).sort(),
    [
      'no-async-callback',
      'no-dangerous-logs',
      'no-overwriting-spread',
      'prefer-promise-allsettled'
    ].sort()
  );
});
