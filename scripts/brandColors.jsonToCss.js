/* eslint-disable guard-for-in */
/* eslint-disable n/no-sync */
/* eslint-disable import/unambiguous */
const fs = require('fs');
const path = require('path');

const brandColorsPath = path.resolve(
  __dirname,
  '../src/figma/brandColors.json',
);
const brandColorsCSSPath = path.resolve(
  __dirname,
  '../src/css/brand-colors.css',
);

const brandColors = JSON.parse(fs.readFileSync(brandColorsPath, 'utf8'));

let cssContent = `/**
 * Brand Colors
 * Do not use "--brand-colors" in your code
 * Instead use the "--color-" variables to ensure
 * theme compatible styles
 */

:root {
`;

for (const color in brandColors) {
  if (color !== 'white' && color !== 'black') {
    cssContent += `  /* ${color.charAt(0).toUpperCase() + color.slice(1)} */\n`;
    for (const shade in brandColors[color]) {
      const variableName = `--brand-colors-${color}-${color}${shade.padStart(
        3,
        '0',
      )}`;
      const colorValue = brandColors[color][shade].value;
      cssContent += `  ${variableName}: ${colorValue};\n`;
    }
  } else {
    const variableName = `--brand-colors-${color}`;
    const colorValue = brandColors[color].value;
    cssContent += `  ${variableName}: ${colorValue};\n`;
  }
}

cssContent += `}\n`;

fs.writeFileSync(brandColorsCSSPath, cssContent, 'utf8');
console.log('Brand colors CSS file generated successfully.');
