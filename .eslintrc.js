module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: [ 'prettier' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "no-underscore-dangle": 0,
    "function-paren-newline": ["error", "multiline"],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-shadow": "off",
    "consistent-return": ["error", { "treatUndefinedAsUnspecified": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "no-unused-expressions": "error",
  },
};
