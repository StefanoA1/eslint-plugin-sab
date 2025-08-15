/**
 * Functional programming (FP) versions of utility functions.
 * These are auto-curried versions of the base functions to match fp behavior.
 */

const {autoFp} = require('./curry');
const base = require('./base-functions');

// Auto-curry all the functions
const all = autoFp(base.every, 2);
const filter = autoFp(base.filter, 2);
const isEmpty = base.isEmpty; // Single arg, no curry needed
const pipe = base.pipe; // Variadic, handled specially
const findIndex = autoFp(base.findIndex, 2);
const findLastIndex = autoFp(base.findLastIndex, 2);
const isArray = base.isArray; // Single arg, no curry needed
const union = autoFp(base.union, 2);
const reduce = autoFp(base.reduce, 3);
const mergeWith = autoFp(base.mergeWith, 3);

module.exports = {
  all,
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
