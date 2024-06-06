import jsxA11y from 'eslint-plugin-jsx-a11y';
import ts from 'typescript-eslint';
import { reactConfig } from './react.js';
import { solidConfig } from './solid.js';

/** @type {(options: { solidDir: string; reactDir: string; }) => ReturnType<typeof import('typescript-eslint').default.config>}*/
export const solidReact = (options) =>
  ts.config(
    {
      files: ['**/*.{tsx,jsx}'],
      plugins: {
        'jsx-a11y': jsxA11y,
      },
      rules: {
        ...jsxA11y.configs.recommended.rules,
      },
    },
    ...solidConfig({ filesPrefix: options.solidDir, includeA11y: false }),
    ...reactConfig({ filesPrefix: options.reactDir, includeA11y: false }),
  );
