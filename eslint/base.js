/** @type {import('eslint').Linter.Config} */
const baseConfig = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
};

module.exports = baseConfig;
