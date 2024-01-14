/** @type {import('eslint').Linter.Config} */
const javascriptConfig = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};

module.exports = javascriptConfig;
