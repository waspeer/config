/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./base.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./typescript.js'],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['./javascript.js'],
    },

    {
      files: ['*.astro'],
      extends: ['./astro.js'],
    },
  ],
};

module.exports = config;
