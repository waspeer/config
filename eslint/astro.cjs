/** @type {import('eslint').Linter.Config} */
const astroConfig = {
  extends: ['./typescript.cjs', 'plugin:jsx-a11y/recommended', 'plugin:astro/recommended'],
  parser: 'astro-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.astro'],
  },
};

module.exports = astroConfig;
