const test = require('ava');
const {union, reduce, mergeWith} = require('../src/utils/fp');

// Helper functions
const add = (acc, val) => acc + val;
const multiply = (acc, val) => acc * val;
const sumValues = (acc, val) => acc + val;
const collectArgs = (acc, val, key, collection) => {
  acc.push({val, key, isArray: Array.isArray(collection)});
  return acc;
};
const arrayMerger = (objValue, srcValue) => {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return [...objValue, ...srcValue];
  }
  return undefined;
};

// union tests
test('union: should combine unique values from two arrays', t => {
  t.deepEqual(union([1, 2])([2, 3]), [1, 2, 3]);
  t.deepEqual(union(['a', 'b'])(['b', 'c']), ['a', 'b', 'c']);
});

test('union: should handle empty arrays', t => {
  t.deepEqual(union([])([1, 2]), [1, 2]);
  t.deepEqual(union([1, 2])([]), [1, 2]);
  t.deepEqual(union([])([]), []);
});

test('union: should handle non-array inputs', t => {
  t.deepEqual(union(null)([1, 2]), [1, 2]);
  t.deepEqual(union([1, 2])(null), [1, 2]);
  t.deepEqual(union(null)(null), []);
});

test('union: should preserve order (first array first)', t => {
  t.deepEqual(union([3, 1])([2, 1]), [3, 1, 2]);
});

test('union: should be curried', t => {
  const unionWith123 = union([1, 2, 3]);
  t.is(typeof unionWith123, 'function');
  t.deepEqual(unionWith123([3, 4, 5]), [1, 2, 3, 4, 5]);
});

// reduce tests
test('reduce: should reduce array to single value', t => {
  t.is(reduce(add)(0)([1, 2, 3, 4]), 10);
  t.is(reduce(multiply)(1)([2, 3, 4]), 24);
});

test('reduce: should work with empty arrays', t => {
  t.is(reduce(add)(10)([]), 10);
});

test('reduce: should reduce objects', t => {
  const obj = {a: 1, b: 2, c: 3};

  t.is(reduce(sumValues)(0)(obj), 6);
});

test('reduce: should provide correct arguments to iteratee', t => {
  const result = reduce(collectArgs)([])([10, 20]);

  t.is(result.length, 2);
  t.is(result[0].val, 10);
  t.is(result[0].key, 0);
  t.true(result[0].isArray);
});

test('reduce: should be curried', t => {
  const sum = reduce(add)(0);
  t.is(typeof sum, 'function');
  t.is(sum([1, 2, 3]), 6);
});

// mergeWith tests
test('mergeWith: should merge objects with custom function', t => {
  const obj1 = {a: [1], b: 2};
  const obj2 = {a: [3], c: 4};

  const result = mergeWith(arrayMerger)(obj1)(obj2);

  t.deepEqual(result.a, [1, 3]);
  t.is(result.b, 2);
  t.is(result.c, 4);
});

test('mergeWith: should do deep merge', t => {
  const obj1 = {
    user: {name: 'John', age: 30},
    settings: {theme: 'dark'}
  };
  const obj2 = {
    user: {email: 'john@example.com'},
    settings: {language: 'en'}
  };

  const result = mergeWith(() => undefined)(obj1)(obj2);

  t.is(result.user.name, 'John');
  t.is(result.user.age, 30);
  t.is(result.user.email, 'john@example.com');
  t.is(result.settings.theme, 'dark');
  t.is(result.settings.language, 'en');
});

test('mergeWith: should handle null/undefined objects', t => {
  const obj = {a: 1};

  t.deepEqual(mergeWith(() => undefined)(null)(obj), obj);
  t.deepEqual(mergeWith(() => undefined)(obj)(null), obj);
});

test('mergeWith: should be curried', t => {
  const mergeArrays = mergeWith(arrayMerger);
  t.is(typeof mergeArrays, 'function');

  const mergeWithObj1 = mergeArrays({a: [1]});
  t.is(typeof mergeWithObj1, 'function');

  const result = mergeWithObj1({a: [2]});
  t.deepEqual(result.a, [1, 2]);
});
