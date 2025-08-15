const test = require('ava');

// Import individual utility files to ensure 100% coverage
const all = require('../src/utils/all');
const filter = require('../src/utils/filter');
const isEmpty = require('../src/utils/is-empty');
const pipe = require('../src/utils/pipe');

// Basic test predicates and functions
const isPositive = x => x > 0;
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const add10 = x => x + 10;

test('individual exports: all.js should export working function', t => {
  t.is(typeof all, 'function');
  t.true(all(isPositive)([1, 2, 3]));
  t.false(all(isPositive)([1, -1, 3]));
});

test('individual exports: filter.js should export working function', t => {
  t.is(typeof filter, 'function');
  t.deepEqual(filter(isEven)([1, 2, 3, 4]), [2, 4]);
  t.deepEqual(filter(isPositive)([-1, 2, -3, 4]), [2, 4]);
});

test('individual exports: is-empty.js should export working function', t => {
  t.is(typeof isEmpty, 'function');
  t.true(isEmpty([]));
  t.true(isEmpty({}));
  t.false(isEmpty([1, 2]));
  t.false(isEmpty({a: 1}));
});

test('individual exports: pipe.js should export working function', t => {
  t.is(typeof pipe, 'function');
  const addThenDouble = pipe(add10, double);
  t.is(addThenDouble(5), 30); // (5 + 10) * 2 = 30

  const singleFunction = pipe(double);
  t.is(singleFunction(3), 6);
});

test('individual exports: currying behavior should match fp.js exports', t => {
  // Verify that individual exports maintain currying behavior
  const allPositive = all(isPositive);
  const filterEven = filter(isEven);

  t.is(typeof allPositive, 'function');
  t.is(typeof filterEven, 'function');

  t.true(allPositive([1, 2, 3]));
  t.deepEqual(filterEven([1, 2, 3, 4]), [2, 4]);
});
