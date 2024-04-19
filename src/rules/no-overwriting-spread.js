const findIndex = require('lodash/fp/findIndex');
const findLastIndex = require('lodash/fp/findLastIndex');

const makeReport = (context, propertiesFieldKey, regularProperty, spreadProperty) => node => {
  const firstIndexOfProperty = findIndex({type: regularProperty}, node[propertiesFieldKey]);
  const lastIndexOfSpreadProperty = findLastIndex({type: spreadProperty}, node[propertiesFieldKey]);

  if (
    firstIndexOfProperty !== -1 &&
    lastIndexOfSpreadProperty !== -1 &&
    firstIndexOfProperty < lastIndexOfSpreadProperty
  ) {
    context.report({
      node,
      message: 'Set individual properties after the spread properties'
    });
  }
};

function create(context) {
  return {
    JSXOpeningElement: makeReport(context, 'attributes', 'JSXAttribute', 'JSXSpreadAttribute'),
    ObjectExpression: makeReport(context, 'properties', 'Property', 'SpreadElement')
  };
}

module.exports = {
  create,
  meta: {}
};
