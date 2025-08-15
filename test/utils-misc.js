const test = require('ava');
const {isEmpty, isArray, pipe} = require('../src/utils/fp');

// Helper functions
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;
const addHello = x => 'Hello ' + x;
const addExclamation = x => x + '!';
const toUpper = x => x.toUpperCase();

// isEmpty tests
test('isEmpty: should return true for empty values', t => {
  t.true(isEmpty([]));
  t.true(isEmpty({}));
  t.true(isEmpty(''));
  t.true(isEmpty(null));
  t.true(isEmpty(undefined));
});

test('isEmpty: should return false for non-empty values', t => {
  t.false(isEmpty([1, 2, 3]));
  t.false(isEmpty({a: 1}));
  t.false(isEmpty('hello'));
  t.false(isEmpty(0));
  t.false(isEmpty(false));
});

// isArray tests
test('isArray: should return true for arrays', t => {
  t.true(isArray([]));
  t.true(isArray([1, 2, 3]));
  t.true(isArray(Array.from({length: 5})));
});

test('isArray: should return false for non-arrays', t => {
  t.false(isArray({}));
  t.false(isArray('string'));
  t.false(isArray(null));
  t.false(isArray(undefined));
  t.false(isArray(123));
  t.false(isArray(true));
});

// pipe tests
test('pipe: should compose functions left to right', t => {
  const composed = pipe(add1, multiply2, subtract3);

  // (5 + 1) * 2 - 3 = 12 - 3 = 9
  t.is(composed(5), 9);
});

test('pipe: should work with single function', t => {
  const piped = pipe(add1);

  t.is(piped(5), 6);
});

test('pipe: should work with no functions', t => {
  const piped = pipe();
  t.is(piped(5), 5);
});

test('pipe: should handle string operations', t => {
  const composed = pipe(addHello, addExclamation, toUpper);

  t.is(composed('World'), 'HELLO WORLD!');
});
