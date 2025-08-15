/**
 * A simple curry utility that converts regular functions to curried functions
 * matching fp behavior.
 */

/**
 * Curries a function with the specified arity.
 * @param {Function} fn - The function to curry
 * @param {number} arity - The number of arguments the function expects
 * @returns {Function} - The curried function
 */
function curry(fn, arity = fn.length) {
  return function curried(...args) {
    if (args.length >= arity) {
      return Reflect.apply(fn, this, args);
    }

    return function (...nextArgs) {
      return Reflect.apply(curried, this, [...args, ...nextArgs]);
    };
  };
}

/**
 * Auto-curry a function based on fp patterns.
 * Handles the most common patterns we need.
 */
function autoFp(fn, expectedArity) {
  // If arity is not specified, use function length
  const arity = expectedArity === undefined ? fn.length : expectedArity;

  // For single argument functions, return as-is
  if (arity <= 1) {
    return fn;
  }

  // For multi-argument functions, curry them
  return curry(fn, arity);
}

module.exports = {curry, autoFp};
