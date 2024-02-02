module.exports = {
  root: true,

  extends: ['@metamask/eslint-config', 'plugin:storybook/recommended'],
  plugins: [
    // ... other plugins
    'no-hex-color', // Plugin name as defined in package.json
  ],
  rules: {
    // ... other rules
    'no-hex-color/no-hex-color': 'warn', // Enable your custom rule
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
