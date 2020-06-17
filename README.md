# ecma-version-validator-webpack-plugin
[![npm version](https://badge.fury.io/js/rollup-plugin-ecma-version-validator.svg)](https://badge.fury.io/js/rollup-plugin-ecma-version-validator)
[![](https://github.com/koba04/rollup-plugin-ecma-version-validator/workflows/test/badge.svg)](https://github.com/koba04/rollup-plugin-ecma-version-validator/actions?workflow=test)
[![](https://github.com/koba04/rollup-plugin-ecma-version-validator/workflows/lint/badge.svg)](https://github.com/koba04/rollup-plugin-ecma-version-validator/actions?workflow=lint)

A rollup plugin to verify ECMAScript version for bundle files.

This plugin is intended to verify that bundle files don't include unsupported syntaxes, so I encourage to enable this only on a production build.

## Install

```
% npm install --save-dev rollup-ecma-version-validator
```

## How to use

Add a `ECMAVersionValidatorPlugin` instance into a `plugins` field in `rollup.config.js`

- `rollup.config.js`

```js
import ecmaVersionValidator from "../lib/index";

export default {
  input: "index.js",
  plugins: [ecmaVersionValidator({ /* options */ })],
};
```

## Options

### ecmaVersion

- This is a target ECMAScript version you expect. See the avaiable versions in the [Acorn's documentation](https://github.com/acornjs/acorn/tree/master/acorn#interface). The default version is `5`(ES5).

## LICENCE

- [LICENSE](./LICENSE)