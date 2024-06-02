import { fixupPluginRules } from '@eslint/compat';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

export const reactConfig = ts.config(prettier, {
  files: ['**/*.tsx', '**/*.jsx'],
  plugins: {
    react: react,
    'react-hooks': fixupPluginRules(reactHooks),
    'jsx-a11y': jsxA11y,
  },
  languageOptions: {
    ...reactRecommended.languageOptions,
    ...reactJsxRuntime.languageOptions,
  },
  rules: {
    ...reactRecommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...reactJsxRuntime.rules,
    ...jsxA11y.configs.recommended.rules,
    'react/jsx-boolean-value': 'error',
  },
  settings: {
    version: 'detect',
  },
});
