/** @type {import('eslint').Linter.Config} */
const typescriptConfig = {
  extends: ['./base.cjs'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./typescript.cjs'],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['./javascript.cjs'],
    },

    {
      files: ['*.astro'],
      extends: ['./astro.cjs'],
    },
  ],
};

module.exports = typescriptConfig;
