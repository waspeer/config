import type { Linter } from 'eslint';

export const configs: {
  base: Linter.FlatConfig[];
  solid: Linter.FlatConfig[];
  react: Linter.FlatConfig[];
  solidReact: (options: { solidDir: string; reactDir: string }) => Linter.FlatConfig[];
};
