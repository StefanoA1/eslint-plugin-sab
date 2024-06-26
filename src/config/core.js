const DEPRECATED = 'off';

const EXTENSIONS = [
  '.js',
  '.cjs',
  '.mjs',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.node',
  '.yml',
  '.yaml'
];

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['fp', 'import', 'promise', 'unicorn', 'n', 'json'],
  rules: {
    'fp/no-arguments': 'off',
    'fp/no-class': 'error',
    'fp/no-delete': 'off',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'off',
    'fp/no-loops': 'off',
    'fp/no-mutating-assign': 'off',
    'fp/no-mutating-methods': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-throw': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'error',

    'promise/always-catch': 'off',
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/no-multiple-resolved': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'off',
    'promise/no-return-in-finally': 'off',
    'promise/no-return-wrap': 'off',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/valid-params': 'error',

    '@stefanoa1/sab/no-async-callback': 'error',
    '@stefanoa1/sab/no-dangerous-logs': 'error',
    '@stefanoa1/sab/no-overwriting-spread': 'error',
    '@stefanoa1/sab/jsx-no-logical-expression': 'error',
    '@stefanoa1/sab/no-promise-all': 'off',

    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'ignorePackages'
      }
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'error',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: true,
        allowObject: true
      }
    ],
    'import/no-commonjs': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', {'newlines-between': 'ignore'}],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    'import/dynamic-import-chunkname': 'error',
    'import/no-cycle': 'error',
    'import/no-named-export': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',

    'unicorn/better-regex': 'off', // too dangerous along even as 'warning' with autofixes
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': ['error', {case: 'kebabCase'}],
    'unicorn/import-index': 'error',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-negated-condition': 'error',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-dataset': 'off',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-replace-all': 'off', // still a TC39 draft when configured (May2020)
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/regex-shorthand': 'error',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/string-content': 'off', // would need specific use cases
    'unicorn/switch-case-braces': 'error',
    'unicorn/template-indent': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',

    'accessor-pairs': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'off',
    'brace-style': 'off',
    'callback-return': DEPRECATED,
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    complexity: ['off', 11],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    curly: 'off',
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'global-require': DEPRECATED,
    'getter-return': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent-legacy': 'off',
    indent: ['error', 2, {SwitchCase: 1}],
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        overrides: {
          catch: {after: true},
          do: {after: true},
          else: {after: true},
          for: {after: true},
          if: {after: true},
          switch: {after: true},
          try: {after: true},
          while: {after: true},
          default: {after: false}
        }
      }
    ],
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', {before: 'never', after: 'always'}],
    'lines-between-class-members': 'error',
    'logical-assignment-operators': ['error', 'never'],
    'max-depth': ['error', 4],
    'max-len': ['error', 120],
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off',
    'new-parens': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-buffer-constructor': DEPRECATED,
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-empty': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'off',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'off',
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-mixed-requires': DEPRECATED,
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'off',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'off',
    'no-new-require': DEPRECATED,
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-obj-calls': 'error',
    'no-object-constructor': 'error',
    'no-octal-escape': 'off',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': DEPRECATED,
    'no-plusplus': 'off',
    'no-process-env': DEPRECATED,
    'no-process-exit': DEPRECATED,
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': DEPRECATED,
    'no-restricted-properties': [
      'error',
      {
        object: 'Promise',
        property: 'longStackTraces'
      }
    ],
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: ['Promise', 'name', 'find']
      }
    ],
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': DEPRECATED,
    'no-tabs': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'off',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', 'avoid-escape'],
    radix: 'off',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    semi: ['error', 'always'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {words: false, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    strict: ['error', 'global'],
    'switch-colon-spacing': ['error', {after: true, before: false}],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    yoda: ['error', 'never', {exceptRange: true}],

    // new ones from eslint@5&6
    'max-classes-per-file': 'off',
    'max-lines-per-function': 'off',
    'no-async-promise-executor': 'error',
    'no-misleading-character-class': 'error',
    'no-useless-catch': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-object-spread': 'off',
    'require-atomic-updates': 'off', // broken with latest eslint
    'require-unicode-regexp': 'off',
    'default-param-last': 'error',
    'function-call-argument-newline': 'off',
    'no-import-assign': 'error',
    'prefer-regex-literals': 'error',
    'grouped-accessor-pairs': 'error',
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-setter-return': 'error',
    'prefer-exponentiation-operator': 'off',
    // new ones from eslint@7
    'default-case-last': 'error',
    'no-restricted-exports': 'off',
    'no-useless-backreference': 'error',
    'id-denylist': 'off', // could be use to disallow some specific identifiers (https://eslint.org/docs/rules/id-denylist)
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',

    'no-nonoctal-decimal-escape': 'error',
    'no-unsafe-optional-chaining': 'error',

    // node rules migrated from eslint core
    'n/callback-return': ['error', ['callback', 'cb', 'next']],
    'n/exports-style': ['error', 'module.exports'],
    'n/file-extension-in-import': ['error', 'always', {'.js': 'never', '.ts': 'never'}],
    'n/global-require': 'off',
    'n/handle-callback-err': 'off',
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'error',
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'off',
    'n/no-path-concat': 'off',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/no-unpublished-bin': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    'n/no-unsupported-features/node-builtins': 'error',
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-promises/dns': 'off',
    'n/prefer-promises/fs': 'off',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'off'
  },

  settings: {
    node: {
      tryExtensions: EXTENSIONS
    },
    'import/resolver': {
      node: {
        extensions: EXTENSIONS
      },
      typescript: true
    },
    'import/extensions': EXTENSIONS,
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'json/*': ['error', {allowComments: true}]
      }
    }
  ],
  reportUnusedDisableDirectives: true
};
