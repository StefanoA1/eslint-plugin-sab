const isArray = require('lodash/fp/isArray');
const mergeWith = require('lodash/fp/mergeWith');
const reduce = require('lodash/fp/reduce');
const union = require('lodash/fp/union');

const mergeArrayCustomizer = (objValue, srcValue) => {
  if (isArray(objValue)) return union(srcValue, objValue);
};

const combineConfigs = reduce(mergeWith(mergeArrayCustomizer), undefined);

module.exports = combineConfigs;
