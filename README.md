# Multi purpose ESLint plugin

[![npm](https://img.shields.io/npm/v/@stefanoa1/eslint-plugin-sab.svg)](https://www.npmjs.com/package/@stefanoa1/eslint-plugin-sab)
[![GitHub Actions](https://github.com/StefanoA1/eslint-plugin-stefanoa1/actions/workflows/main.yml/badge.svg)](https://github.com/StefanoA1/eslint-plugin-sab/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal ESLint rules and configs (testing config).

## Installation

```console
npm install --save-dev eslint @stefanoa1/eslint-plugin-sab
```

## Usage

This package provides multiple configuration for different purposes, that you can apply together in you project as needed. To use them, set the `extends` key of your `.eslintrc` file and add `@stefanoa1/stefanoa1` to your list of plugins.

```json
{
  "extends": [
    "plugin:@stefanoa1/stefanoa1/core",
    "plugin:@stefanoa1/stefanoa1/ava",
    "..."
  ],
  "plugins": [
    "@stefanoa1/stefanoa1"
  ]
}
```

Available rule sets are:
- [ava](./config/ava.js): when using AVA
- [core](./config/core.js): Shared ESLint rules
- [es20XX](./config/es20XX.js): when using ES2015+ syntax
- [flowtype](./config/flowtype.js): when using Flowtype
- [lodash-fp](./config/lodash-fp.js): when using Lodash's FP flavor
- [prettier](./config/prettier.js): Disables all stylistic rules but adds source code auto-formatting.
- [react](./config/react.js): when using React
