import jsxA11y from 'eslint-plugin-jsx-a11y';
import solid from 'eslint-plugin-solid';
import ts from 'typescript-eslint';

export const solidConfig = ts.config({
  files: ['**/*.{tsx,jsx}'],
  plugins: {
    solid,
  },
  languageOptions: {
    sourceType: /** @type {import('eslint').Linter.Config['languageOptions']['sourceType']} */ (
      solid.configs['flat/recommended'].languageOptions.sourceType
    ),
    parserOptions: solid.configs['flat/recommended'].languageOptions.parserOptions,
  },
  rules: {
    ...solid.configs['flat/typescript'].rules,
    ...jsxA11y.configs.recommended.rules,
    'jsx-a11y/label-has-associated-control': 'off',
  },
});
