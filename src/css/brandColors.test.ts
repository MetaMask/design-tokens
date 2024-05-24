/* eslint-disable n/no-sync */
/* eslint-disable jsdoc/require-jsdoc */
import fs from 'fs';
import path from 'path';

import jsonData from '../figma/brandColors.json';

// Function to load the generated CSS file
function loadCssVariables(filePath: string): { [key: string]: string } {
  const cssContent = fs.readFileSync(filePath, 'utf8');
  const regex = /--brand-colors-([\w-]+):\s*(#\w+);/gu;
  const variables: { [key: string]: string } = {};
  let match;

  while ((match = regex.exec(cssContent)) !== null) {
    if (match[1] && match[2]) {
      variables[match[1]] = match[2];
    }
  }

  return variables;
}

describe('CSS Variables', () => {
  const cssFilePath = path.join(__dirname, 'generated-brand-colors.css');
  const cssVariables = loadCssVariables(cssFilePath);

  it('should match JSON values', () => {
    for (const [colorGroup, shades] of Object.entries(jsonData)) {
      for (const [shade, details] of Object.entries(shades)) {
        const variableName = `${colorGroup}-${shade}`;
        expect(cssVariables[variableName]).toBe(details.value);
      }
    }
  });
});
