const test = require('ava');
const {filter} = require('../src/utils/fp');

const isPositive = x => x > 0;
const isEven = x => x % 2 === 0;
const isString = x => typeof x === 'string';
const isLongString = x => typeof x === 'string' && x.length > 3;

test('filter: should return elements that pass predicate', t => {
  t.deepEqual(filter(isPositive)([1, -2, 3, -4, 5]), [1, 3, 5]);
  t.deepEqual(filter(isEven)([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
});

test('filter: should return empty array when no elements pass', t => {
  t.deepEqual(filter(isPositive)([-1, -2, -3]), []);
  t.deepEqual(filter(isString)([1, 2, 3]), []);
});

test('filter: should return all elements when all pass', t => {
  t.deepEqual(filter(isPositive)([1, 2, 3]), [1, 2, 3]);
  t.deepEqual(filter(isString)(['a', 'b', 'c']), ['a', 'b', 'c']);
});

test('filter: should return empty array for empty input', t => {
  t.deepEqual(filter(isPositive)([]), []);
});

test('filter: should handle non-array input', t => {
  t.deepEqual(filter(isPositive)(null), []);
  t.deepEqual(filter(isPositive)(undefined), []);
  t.deepEqual(filter(isPositive)('string'), []);
  t.deepEqual(filter(isPositive)({}), []);
});

test('filter: should be curried', t => {
  const filterPositive = filter(isPositive);

  t.is(typeof filterPositive, 'function');
  t.deepEqual(filterPositive([1, -2, 3]), [1, 3]);
});

test('filter: should work with complex predicates', t => {
  t.deepEqual(filter(isLongString)(['a', 'hello', 'hi', 'world']), ['hello', 'world']);
});
