/** @type {import("prettier").Config} */
const config = {
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

export default config;
