const test = require('ava');
const {findIndex, findLastIndex} = require('../src/utils/fp');

const isEven = x => x % 2 === 0;
const isString = x => typeof x === 'string';

test('findIndex: should find first matching element by function predicate', t => {
  t.is(findIndex(isEven)([1, 3, 4, 6, 8]), 2);
  t.is(findIndex(isString)([1, 2, 'hello', 'world']), 2);
});

test('findIndex: should return -1 when no match found', t => {
  t.is(findIndex(isEven)([1, 3, 5]), -1);
  t.is(findIndex(isString)([1, 2, 3]), -1);
});

test('findIndex: should find first match by object predicate', t => {
  const array = [
    {type: 'Property', name: 'a'},
    {type: 'Method', name: 'b'},
    {type: 'Property', name: 'c'}
  ];

  t.is(findIndex({type: 'Property'})(array), 0);
  t.is(findIndex({type: 'Method'})(array), 1);
  t.is(findIndex({name: 'c'})(array), 2);
});

test('findIndex: should return -1 for object predicate with no match', t => {
  const array = [{type: 'Property'}, {type: 'Method'}];
  t.is(findIndex({type: 'Class'})(array), -1);
  t.is(findIndex({name: 'missing'})(array), -1);
});

test('findIndex: should handle non-array input', t => {
  t.is(findIndex(isEven)(null), -1);
  t.is(findIndex(isEven)(undefined), -1);
  t.is(findIndex(isEven)('string'), -1);
  t.is(findIndex(isEven)({}), -1);
});

test('findIndex: should be curried', t => {
  const findEven = findIndex(isEven);
  t.is(typeof findEven, 'function');
  t.is(findEven([1, 3, 4, 6]), 2);
});

test('findLastIndex: should find last matching element by function predicate', t => {
  t.is(findLastIndex(isEven)([1, 3, 4, 6, 8]), 4);
  t.is(findLastIndex(isString)([1, 'hello', 2, 'world']), 3);
});

test('findLastIndex: should return -1 when no match found', t => {
  t.is(findLastIndex(isEven)([1, 3, 5]), -1);
  t.is(findLastIndex(isString)([1, 2, 3]), -1);
});

test('findLastIndex: should find last match by object predicate', t => {
  const array = [
    {type: 'Property', name: 'a'},
    {type: 'Method', name: 'b'},
    {type: 'Property', name: 'c'}
  ];

  t.is(findLastIndex({type: 'Property'})(array), 2);
  t.is(findLastIndex({type: 'Method'})(array), 1);
});

test('findLastIndex: should handle non-array input', t => {
  t.is(findLastIndex(isEven)(null), -1);
  t.is(findLastIndex(isEven)(undefined), -1);
  t.is(findLastIndex(isEven)('string'), -1);
  t.is(findLastIndex(isEven)({}), -1);
});

test('findLastIndex: should be curried', t => {
  const findLastEven = findLastIndex(isEven);
  t.is(typeof findLastEven, 'function');
  t.is(findLastEven([2, 1, 3, 4]), 3);
});
