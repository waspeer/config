/** @type {import('eslint').Linter.Config} */
const solidConfig = {
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      plugins: ['solid'],
      extends: [
        './typescript.js',
        'plugin:solid/typescript',
        'plugin:jsx-a11y/recommended',
        'prettier',
      ],
      rules: {
        'jsx-a11y/label-has-associated-control': 'off',
      },
    },
  ],
};

module.exports = solidConfig;
