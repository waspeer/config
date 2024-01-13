/** @type {import('eslint').Linter.Config} */
const typescriptConfig = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};

module.exports = typescriptConfig;
