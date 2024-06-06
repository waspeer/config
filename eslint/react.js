import { fixupPluginRules } from '@eslint/compat';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';
import { filesPrefix } from './util.js';

export const reactConfig = (options = { filesPrefix: '', includeA11y: true }) =>
  ts.config(prettier, {
    files: [filesPrefix('**/*.{tsx,jsx}', options.filesPrefix)],
    plugins: {
      react: react,
      'react-hooks': fixupPluginRules(reactHooks),
      ...(options.includeA11y ? { 'jsx-a11y': jsxA11y } : {}),
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      ...reactJsxRuntime.languageOptions,
    },
    rules: {
      ...reactRecommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactJsxRuntime.rules,
      'react/jsx-boolean-value': 'error',
      ...(options.includeA11y ? jsxA11y.configs.recommended.rules : {}),
    },
    settings: {
      version: 'detect',
    },
  });
