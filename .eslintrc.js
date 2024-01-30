module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
    },

    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@metamask/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts', '*.test.js'],
      extends: [
        '@metamask/eslint-config-jest',
        '@metamask/eslint-config-nodejs',
      ],
    },
  ],

  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    '.yarn/',
    'storybook-static',
    'docs/', // TODO: Remove this line once node version upgrade PR is merged https://github.com/MetaMask/design-tokens/pull/600
  ],
};
