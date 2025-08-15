/**
 * Regular (non-curried) utility functions that will be auto-curried
 * to match fp behavior.
 */

/**
 * Checks if all elements in array pass the predicate test.
 */
function every(predicate, array) {
  if (!Array.isArray(array)) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

/**
 * Creates array of elements passing predicate test.
 */
function filter(predicate, array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

/**
 * Checks if value is empty.
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}

/**
 * Creates a function pipeline.
 */
function pipe(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

/**
 * Finds first element index matching predicate.
 * Supports functions, objects, and property names.
 */
function findIndex(predicate, array) {
  if (!Array.isArray(array)) {
    return -1;
  }

  // Handle object matching
  if (typeof predicate === 'object' && predicate !== null) {
    const keys = Object.keys(predicate);
    for (const [index, item] of array.entries()) {
      let matches = true;
      for (const key of keys) {
        if (item[key] !== predicate[key]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        return index;
      }
    }
    return -1;
  }

  // Handle function predicate
  if (typeof predicate === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
  }

  return -1;
}

/**
 * Finds last element index matching predicate.
 */
function findLastIndex(predicate, array) {
  if (!Array.isArray(array)) {
    return -1;
  }

  // Handle object matching
  if (typeof predicate === 'object' && predicate !== null) {
    const keys = Object.keys(predicate);
    for (let i = array.length - 1; i >= 0; i--) {
      let matches = true;
      for (const key of keys) {
        if (array[i][key] !== predicate[key]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        return i;
      }
    }
    return -1;
  }

  // Handle function predicate
  if (typeof predicate === 'function') {
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
  }

  return -1;
}

/**
 * Checks if value is an array.
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Creates array of unique values from both arrays.
 */
function union(array1, array2) {
  const arr1 = Array.isArray(array1) ? array1 : [];
  const arr2 = Array.isArray(array2) ? array2 : [];

  const seen = new Set();
  const result = [];

  // Add items from first array
  for (const item of arr1) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  // Add unique items from second array
  for (const item of arr2) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

/**
 * Reduces collection to single value.
 */
function reduce(iteratee, accumulator, collection) {
  let result = accumulator;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else if (collection && typeof collection === 'object') {
    const keys = Object.keys(collection);
    for (const key of keys) {
      result = iteratee(result, collection[key], key, collection);
    }
  }

  return result;
}

/**
 * Merges objects with custom merge function.
 * Performs deep merging like mergeWith.
 */
function mergeWith(customizer, object, source) {
  const obj = object || {};
  if (!source) return obj;

  const result = {...obj};

  function deepMerge(objValue, srcValue, key) {
    // Call customizer first
    const customResult = customizer(objValue, srcValue, key);

    if (customResult !== undefined) {
      return customResult;
    }

    // If no custom result, handle deep merging
    if (
      objValue &&
      srcValue &&
      typeof objValue === 'object' &&
      typeof srcValue === 'object' &&
      !Array.isArray(objValue) &&
      !Array.isArray(srcValue)
    ) {
      // Deep merge objects
      const merged = {...objValue};
      for (const subKey in srcValue) {
        if (Object.prototype.hasOwnProperty.call(srcValue, subKey)) {
          merged[subKey] = deepMerge(merged[subKey], srcValue[subKey], subKey);
        }
      }
      return merged;
    }

    // Default: srcValue overwrites objValue
    return srcValue;
  }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = deepMerge(result[key], source[key], key);
    }
  }

  return result;
}

module.exports = {
  every,
  filter,
  isEmpty,
  pipe,
  findIndex,
  findLastIndex,
  isArray,
  union,
  reduce,
  mergeWith
};
