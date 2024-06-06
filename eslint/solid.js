import jsxA11y from 'eslint-plugin-jsx-a11y';
import solid from 'eslint-plugin-solid';
import ts from 'typescript-eslint';
import { filesPrefix } from './util.js';

export const solidConfig = (options = { filesPrefix: '', includeA11y: true }) =>
  ts.config({
    files: [filesPrefix('**/*.{tsx,jsx}', options.filesPrefix)],
    plugins: {
      solid,
      ...(options.includeA11y ? { 'jsx-a11y': jsxA11y } : {}),
    },
    languageOptions: {
      sourceType:
        /** @type {import('eslint').Linter.FlatConfig['languageOptions']['sourceType']} */ (
          solid.configs['flat/recommended'].languageOptions.sourceType
        ),
      parserOptions: solid.configs['flat/recommended'].languageOptions.parserOptions,
    },
    rules: {
      ...solid.configs['flat/typescript'].rules,
      ...(options.includeA11y
        ? {
            ...jsxA11y.configs.recommended.rules,
            'jsx-a11y/label-has-associated-control': 'off',
          }
        : {}),
    },
  });
