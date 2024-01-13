/** @type {import('eslint').Linter.Config} */
const reactConfig = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'react/jsx-boolean-value': 'error',
  },
  settings: {
    version: 'detect',
  },
};

module.exports = reactConfig;
