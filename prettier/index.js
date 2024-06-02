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
