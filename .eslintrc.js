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
      extends: ['@metamask/eslint-config-jest'],
    },
  ],
  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    'storybook-static/',
    'docs/', // TODO: Remove this line once we have merged updating node version and fix linting issues
  ],
};
