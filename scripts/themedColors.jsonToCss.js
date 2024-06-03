/* eslint-disable guard-for-in */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable n/no-sync */
/* eslint-disable import/unambiguous */
const fs = require('fs');
const path = require('path');

const lightThemePath = path.resolve(__dirname, '../src/figma/lightTheme.json');
const darkThemePath = path.resolve(__dirname, '../src/figma/darkTheme.json');
const lightThemeCSSPath = path.resolve(
  __dirname,
  '../src/css/light-theme-colors.css',
);
const darkThemeCSSPath = path.resolve(
  __dirname,
  '../src/css/dark-theme-colors.css',
);

const lightTheme = JSON.parse(fs.readFileSync(lightThemePath, 'utf8'));
const darkTheme = JSON.parse(fs.readFileSync(darkThemePath, 'utf8'));

function generateThemeCSS(theme, themeName) {
  let cssContent = `/*
 * ${themeName} Theme Colors
 * Use these css variables in your code.
 * This will ensure theme compatibility
 */

${
  themeName === 'Light' ? ":root, [data-theme='light']" : "[data-theme='dark']"
} {
`;

  for (const section in theme) {
    for (const key in theme[section]) {
      const variableName = `--color-${section}-${key.replace(/_/gu, '-')}`;
      const { value } = theme[section][key];
      const { description } = theme[section][key];
      const cssValue = value.startsWith('{')
        ? `var(--brand-colors-${value.slice(1, -1).replace('.', '-')})`
        : value;
      cssContent += `  /* ${description} */\n  ${variableName}: ${cssValue};\n`;
    }
  }

  cssContent += `}\n`;
  return cssContent;
}

fs.writeFileSync(
  lightThemeCSSPath,
  generateThemeCSS(lightTheme, 'Light'),
  'utf8',
);
fs.writeFileSync(darkThemeCSSPath, generateThemeCSS(darkTheme, 'Dark'), 'utf8');
console.log('Theme colors CSS files generated successfully.');
