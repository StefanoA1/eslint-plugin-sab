# Multi purpose ESLint plugin

[![npm](https://img.shields.io/npm/v/@stefanoa1/eslint-plugin-sab.svg)](https://www.npmjs.com/package/@stefanoa1/eslint-plugin-sab)
[![GitHub Actions](https://github.com/StefanoA1/eslint-plugin-sab/actions/workflows/main.yml/badge.svg)](https://github.com/StefanoA1/eslint-plugin-sab/actions)
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
    "plugin:@stefanoa1/sab/core",
    "plugin:@stefanoa1/sab/ava",
    "..."
  ],
  "plugins": [
    "@stefanoa1/sab"
  ]
}
```

Available rule sets are:
- [ava](./src/config/ava.js): when using AVA
- [core](./src/config/core.js): Shared ESLint rules
- [es20-xx](./src/config/es20-xx.js): when using ES2015+ syntax
- [lodash-fp](./src/config/lodash-fp.js): when using Lodash's FP flavor
- [prettier](./src/config/prettier.js): Disables all stylistic rules but adds source code auto-formatting.
- [react](./src/config/react.js): when using React
