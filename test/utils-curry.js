const test = require('ava');
const {curry, autoFp} = require('../src/utils/curry');

// Helper functions for testing
const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;
const singleArg = x => x * 2;

test('curry: should curry a two-argument function', t => {
  const curriedAdd = curry(add);

  // Should be curried
  t.is(typeof curriedAdd(5), 'function');
  t.is(curriedAdd(5)(3), 8);

  // Should also work with all arguments at once
  t.is(curriedAdd(5, 3), 8);
});

test('curry: should curry a three-argument function', t => {
  const curriedAddThree = curry(addThree);

  // Partial application
  t.is(typeof curriedAddThree(1), 'function');
  t.is(typeof curriedAddThree(1)(2), 'function');
  t.is(curriedAddThree(1)(2)(3), 6);

  // Mixed application
  t.is(curriedAddThree(1, 2)(3), 6);
  t.is(curriedAddThree(1)(2, 3), 6);
  t.is(curriedAddThree(1, 2, 3), 6);
});

test('curry: should handle explicit arity', t => {
  const curriedWithArity = curry(add, 3);

  t.is(typeof curriedWithArity(1), 'function');
  t.is(typeof curriedWithArity(1)(2), 'function');
  t.is(curriedWithArity(1)(2)(3), 3); // add(1, 2) = 3, third arg ignored
});

test('autoFp: should curry multi-argument functions', t => {
  const fpAdd = autoFp(add);
  const fpAddThree = autoFp(addThree);

  t.is(typeof fpAdd(5), 'function');
  t.is(fpAdd(5)(3), 8);

  t.is(typeof fpAddThree(1), 'function');
  t.is(fpAddThree(1)(2)(3), 6);
});

test('autoFp: should not curry single-argument functions', t => {
  const fpSingle = autoFp(singleArg);

  // Should work directly, not return a function
  t.is(fpSingle(5), 10);
  t.is(typeof fpSingle(5), 'number');
});

test('autoFp: should handle explicit arity', t => {
  const fpWithArity = autoFp(add, 1);

  // Should not curry since arity is 1, returns original function
  t.is(fpWithArity, add);
  t.is(fpWithArity(5, 3), 8); // Works as normal add function
});

test('curry: should preserve context', t => {
  const obj = {
    value: 10,
    add(a, b) {
      return this.value + a + b;
    }
  };

  const curriedMethod = curry(obj.add.bind(obj));
  t.is(curriedMethod(5)(3), 18); // 10 + 5 + 3
});
