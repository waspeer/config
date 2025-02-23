import { createRequire } from 'node:module';
import { createMerger } from 'smob';

const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */
export const config = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-css-order'),
    require.resolve('prettier-plugin-packagejson'),
  ],
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
