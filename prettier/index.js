import { createMerger } from 'smob';

/** @type {import("prettier").Config} */
export const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-css-order', 'prettier-plugin-packagejson'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  arrowParens: 'always',
  endOfLine: 'auto',
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
};

const merge = createMerger({
  arrayDistinct: true,
  clone: true,
});

/** @type {(partialConfig: import('type-fest').PartialDeep<import("prettier").Config>) => import("prettier").Config} */
export function customConfig(partialConfig) {
  return merge(partialConfig, config);
}
