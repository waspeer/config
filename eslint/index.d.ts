import type { Linter } from 'eslint';

export const configs: {
  base: Linter.Config[];
  solid: Linter.Config[];
  react: Linter.Config[];
};

export function prefixFiles(configs: Linter.Config[], suffix: string): Linter.Config[];
