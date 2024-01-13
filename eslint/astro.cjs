/** @type {import('eslint').Linter.Config} */
const astroConfig = {
  extends: ['./typescript.cjs', 'plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
  parser: 'astro-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.astro'],
  },
};

module.exports = astroConfig;
