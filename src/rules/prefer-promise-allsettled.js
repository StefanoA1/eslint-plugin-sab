function isPromiseAll(node) {
  return (
    node.type === 'MemberExpression' &&
    node.object.type === 'Identifier' &&
    node.object.name === 'Promise' &&
    node.property.type === 'Identifier' &&
    node.property.name === 'all'
  );
}

function hasErrorHandling(node) {
  // Check if Promise.all is wrapped in try-catch
  let parent = node.parent;
  while (parent) {
    if (parent.type === 'TryStatement') {
      return true;
    }
    if (
      parent.type === 'Program' ||
      parent.type === 'FunctionDeclaration' ||
      parent.type === 'FunctionExpression' ||
      parent.type === 'ArrowFunctionExpression'
    ) {
      break;
    }
    parent = parent.parent;
  }

  // Check if it's chained with .catch()
  if (
    node.parent &&
    node.parent.type === 'MemberExpression' &&
    node.parent.property &&
    node.parent.property.name === 'catch'
  ) {
    return true;
  }

  return false;
}

function isInTestFile(context) {
  const filename = context.getFilename();
  if (!filename || filename === '<input>') {
    return false; // Default ESLint test filename
  }
  return (
    /\.(test|spec)\.(js|ts|jsx|tsx)$/.test(filename) ||
    /(^|\/)(?:test|tests|spec|specs)\//.test(filename) ||
    /__tests__\//.test(filename)
  );
}

function hasAllowComment(context, node) {
  const sourceCode = context.getSourceCode();
  const comments = sourceCode.getCommentsBefore(node);

  return comments.some(
    comment =>
      /eslint-disable.*prefer-promise-allsettled/.test(comment.value) ||
      /allow.*promise\.all/i.test(comment.value) ||
      /fail.*fast/i.test(comment.value)
  );
}

function create(context) {
  const options = context.options[0] || {};
  const allowInTests = options.allowInTests !== false; // default true
  const allowWithErrorHandling = options.allowWithErrorHandling !== false; // default true
  const allowWithComment = options.allowWithComment !== false; // default true

  return {
    CallExpression: node => {
      if (!isPromiseAll(node.callee)) {
        return;
      }

      // Skip if in test files and allowInTests is true
      if (allowInTests && isInTestFile(context)) {
        return;
      }

      // Skip if has error handling and allowWithErrorHandling is true
      if (allowWithErrorHandling && hasErrorHandling(node)) {
        return;
      }

      // Skip if has allow comment and allowWithComment is true
      if (allowWithComment && hasAllowComment(context, node)) {
        return;
      }

      context.report({
        node,
        message:
          'Consider using Promise.allSettled() instead of Promise.all() to handle partial failures gracefully. Use /* allow promise.all */ comment if fail-fast behavior is intentional.'
      });
    }
  };
}

const schema = [
  {
    type: 'object',
    properties: {
      allowInTests: {
        type: 'boolean',
        description: 'Allow Promise.all in test files'
      },
      allowWithErrorHandling: {
        type: 'boolean',
        description: 'Allow Promise.all when wrapped in try-catch or chained with .catch()'
      },
      allowWithComment: {
        type: 'boolean',
        description: 'Allow Promise.all when preceded by an allow comment'
      }
    },
    additionalProperties: false
  }
];

module.exports = {
  create,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer Promise.allSettled() over Promise.all() for better error handling',
      category: 'Best Practices',
      recommended: false
    },
    schema,
    messages: {
      preferAllSettled:
        'Consider using Promise.allSettled() instead of Promise.all() to handle partial failures gracefully. Use /* allow promise.all */ comment if fail-fast behavior is intentional.'
    }
  }
};
