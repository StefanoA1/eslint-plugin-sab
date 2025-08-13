const test = require('ava');
const avaRuleTester = require('eslint-ava-rule-tester');
const rule = require('../src/rules/prefer-promise-allsettled');

const ruleTester = avaRuleTester(test, {
  parserOptions: {
    ecmaVersion: 2017
  }
});

const message =
  'Consider using Promise.allSettled() instead of Promise.all() to handle partial failures gracefully. Use /* allow promise.all */ comment if fail-fast behavior is intentional.';

const errors = [{message}];

ruleTester.run('prefer-promise-allsettled', rule, {
  valid: [
    // Basic valid cases
    'Promise.resolve()',
    'Promise.reject()',
    'Promise.race()',
    'Promise.allSettled()',
    'foo.promise()',

    // Non-Promise.all calls
    'Promise.allSettled([])',
    'someObject.all([])',

    // Promise.all with error handling (try-catch)
    `async function test() {
      try {
        await Promise.all([]);
      } catch (error) {
        console.log(error);
      }
    }`,

    // Promise.all with .catch()
    'Promise.all([]).catch(err => console.log(err))',

    // Promise.all with allow comment
    `/* allow promise.all */
    Promise.all([])`,

    // Promise.all with fail fast comment
    `/* fail fast behavior needed */
    Promise.all([])`,

    // Promise.all with eslint disable comment
    `/* eslint-disable prefer-promise-allsettled */
    Promise.all([])`,

    // Test for allowInTests option (would be valid in test files by default)
    {
      code: 'Promise.all([])',
      filename: 'toto.test.js'
    },
    {
      code: 'Promise.all([])',
      filename: 'src/__tests__/component.test.js'
    },
    {
      code: 'Promise.all([])',
      filename: 'tests/integration.js'
    },
    {
      code: 'Promise.all([])',
      filename: 'toto.spec.ts'
    },
    {
      code: 'Promise.all([])',
      filename: 'src/__tests__/component.test.ts'
    },
    {
      code: 'Promise.all([])',
      filename: 'tests/integration.ts'
    },
    {
      code: 'Promise.all([])',
      filename: 'toto.test.ts'
    },

    // Complex try-catch scenarios
    `async function test() {
      try {
        const results = await Promise.all([fetch('/api1'), fetch('/api2')]);
        return results;
      } catch (error) {
        return handleError(error);
      }
    }`,

    // Nested error handling
    `function fetchData() {
      return Promise.all([api1(), api2()])
        .catch(error => {
          logger.error(error);
          throw error;
        });
    }`
  ],

  invalid: [
    // Basic Promise.all usage
    {
      code: 'Promise.all([])',
      errors
    },
    {
      code: 'async function foo() { return Promise.all([]); }',
      errors
    },
    {
      code: 'async function foo() { await Promise.all([]); }',
      errors
    },

    // Promise.all without proper error handling
    {
      code: 'Promise.all([]).then(results => console.log(results))',
      errors
    },

    // Promise.all in non-test files
    {
      code: 'Promise.all([])',
      filename: 'src/utils.js',
      errors
    },

    // Promise.all with allowInTests disabled
    {
      code: 'Promise.all([])',
      filename: 'test.spec.js',
      options: [{allowInTests: false}],
      errors
    },

    // Promise.all with allowWithErrorHandling disabled
    {
      code: `async function test() {
        try {
          await Promise.all([]);
        } catch (error) {
          console.log(error);
        }
      }`,
      options: [{allowWithErrorHandling: false}],
      errors
    },

    // Promise.all with allowWithComment disabled
    {
      code: `/* allow promise.all */
      Promise.all([])`,
      options: [{allowWithComment: false}],
      errors
    },

    // Complex scenarios that should still warn
    {
      code: `const data = Promise.all([
        fetch('/api1'),
        fetch('/api2'),
        fetch('/api3')
      ]).then(responses => responses.map(r => r.json()))`,
      errors
    },

    // Nested Promise.all without error handling
    {
      code: `async function processData() {
        const batch1 = await Promise.all([task1(), task2()]);
        const batch2 = await Promise.all([task3(), task4()]);
        return [batch1, batch2];
      }`,
      errors: [{message}, {message}]
    }
  ]
});
