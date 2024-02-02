module.exports = {
  root: true,

  extends: ['@metamask/eslint-config', 'plugin:storybook/recommended'],
  plugins: ['eslint-plugin-no-hex-color'],
  rules: {
    'eslint-plugin-no-hex-color': 1,
  },
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
    'storybook-static/',
    '.yarn/',
    'docs/utils/getCSSVariablesFromStylesheet.ts',
  ],
};
