const test = require('ava');
const {all} = require('../src/utils/fp');

const isPositive = x => x > 0;
const isString = x => typeof x === 'string';

test('all: should return true when all elements pass predicate', t => {
  t.true(all(isPositive)([1, 2, 3, 4]));
  t.true(all(isPositive)([5]));
});

test('all: should return false when some elements fail predicate', t => {
  t.false(all(isPositive)([1, 2, -1, 4]));
  t.false(all(isPositive)([-1, -2, -3]));
});

test('all: should return true for empty array', t => {
  t.true(all(isPositive)([]));
});

test('all: should work with different predicate types', t => {
  t.true(all(isString)(['a', 'b', 'c']));
  t.false(all(isString)(['a', 1, 'c']));
});

test('all: should handle non-array input', t => {
  t.false(all(isPositive)(null));
  t.false(all(isPositive)(undefined));
  t.false(all(isPositive)('string'));
  t.false(all(isPositive)({}));
});

test('all: should be curried', t => {
  const allPositive = all(isPositive);

  t.is(typeof allPositive, 'function');
  t.true(allPositive([1, 2, 3]));
  t.false(allPositive([1, -1, 3]));
});
