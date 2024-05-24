/* eslint-disable n/no-sync */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable import/unambiguous */
/* eslint-disable import/no-unresolved */
const fs = require('fs');
const path = require('path');

// Load JSON data
const jsonData = require('../src/figma/brandColors.json');

// Function to convert JSON to CSS variables
function jsonToCss(json) {
  let cssContent = ':root {\n';

  for (const [colorGroup, shades] of Object.entries(json)) {
    for (const [shade, details] of Object.entries(shades)) {
      const description = details.description
        ? `\n/* ${details.description} */`
        : '';
      cssContent += `${description}\n  --brand-colors-${colorGroup}-${shade}: ${details.value};\n`;
    }
  }

  cssContent += '}';
  return cssContent;
}

// Convert JSON to CSS
const cssOutput = jsonToCss(jsonData);

// Save CSS to a file
const outputPath = path.join(
  __dirname,
  '../src/css/generated-brand-colors.css',
);
fs.writeFileSync(outputPath, cssOutput, 'utf8');
console.log(`CSS variables generated at ${outputPath}`);
