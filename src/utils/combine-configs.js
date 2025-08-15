const isArray = require('./is-array');
const mergeWith = require('./merge-with');
const reduce = require('./reduce');
const union = require('./union');

const mergeArrayCustomizer = (objValue, srcValue) => {
  if (isArray(objValue) && isArray(srcValue)) {
    return union(objValue)(srcValue);
  }
  // For non-arrays, return undefined to use default merge behavior
  return undefined;
};

const combineConfigs = reduce(mergeWith(mergeArrayCustomizer))(undefined);

module.exports = combineConfigs;
