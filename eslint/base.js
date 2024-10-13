import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import-x';
import ts from 'typescript-eslint';

export const baseConfig = ts.config(
  // Eslint recommended config
  js.configs.recommended,

  // Base config
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-useless-path-segments': 'error',
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    },
  },

  // Javascript
  ...[
    // ...
  ].map((config) => ({ ...config, files: ['*.{js,jsx,mjs}'] })),

  // Typescript
  ...[
    importPlugin.flatConfigs.typescript,
    ...ts.configs.recommended,
    ...ts.config({
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    }),
  ].map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts,astro}'],
  })),

  // Astro
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-recommended'],
);
