import { fixupPluginRules } from '@eslint/compat';
import react from '@eslint-react/eslint-plugin';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

export const reactConfig = ts.config(prettier, {
  files: ['**/*.{tsx,jsx}'],
  ...react.configs.recommended,
  plugins: {
    ...react.configs.recommended.plugins,
    'react-hooks': fixupPluginRules(reactHooks),
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
  },
  settings: {
    version: 'detect',
  },
});
