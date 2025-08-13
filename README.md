# Multi purpose ESLint plugin

[![npm](https://img.shields.io/npm/v/@stefanoa1/eslint-plugin-sab.svg)](https://www.npmjs.com/package/@stefanoa1/eslint-plugin-sab)
[![GitHub Actions](https://github.com/StefanoA1/eslint-plugin-sab/actions/workflows/main.yml/badge.svg)](https://github.com/StefanoA1/eslint-plugin-sab/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal ESLint rules and configs (testing config).

## Installation

```console
npm install --save-dev eslint @stefanoa1/eslint-plugin-sab
```

It supports node >= v20 (by default, this repo runs on v24).

## Usage

This package provides multiple configurations for different purposes, that you can apply together in your project as needed.
To use them, set each needed extension on the `extends` key of your `.eslintrc` file (if you only need ava, set ava only) and add `@stefanoa1/stefanoa1` to your list of plugins.

```json
{
  "extends": [
    "plugin:@stefanoa1/sab/core",
    "plugin:@stefanoa1/sab/ava",
    "plugin:@stefanoa1/sab/es20-xx",
    "plugin:@stefanoa1/sab/lodash-fp",
    "plugin:@stefanoa1/sab/prettier",
    "plugin:@stefanoa1/sab/react",
    "..."
  ],
  "plugins": [
    "@stefanoa1/sab"
  ]
}
```

To overwrite rules (check the rule sets on [the github repo](https://github.com/StefanoA1/eslint-plugin-sab/tree/main/src/rules)):
```json
{
  "rules": [
    "@stefanoa1/sab/no-overwriting-spread": "off",
    "n/no-missing-import": "off",
    "..."
  ]
}
```

Available rule sets are (code is minified on node_modules, checkout the repo or go
to the project Github page to check the rules):
- [ava](./src/config/ava.js): when using AVA
- [core](./src/config/core.js): Shared ESLint rules
- [es20-xx](./src/config/es20-xx.js): when using ES2015+ syntax
- [lodash-fp](./src/config/lodash-fp.js): when using Lodash's FP flavor
- [prettier](./src/config/prettier.js): Disables all stylistic rules but adds source code auto-formatting.
- [react](./src/config/react.js): when using React

## PR conventions

When creating a PR, use a title like:
```
 release: patch - fix bug #123
 release: minor - add new feature #456
 release: major - breaking changes #789.
```
The `release: ${VERSION}` part of the title is used by Github Actions to detect to which version to bump.
