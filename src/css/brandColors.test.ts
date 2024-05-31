/* eslint-disable n/no-sync */
/* eslint-disable jsdoc/require-jsdoc */
import path from 'path';

import { getCssColorVariables } from '../../utils';
import jsonData from '../figma/brandColors.json';

describe('CSS Variables', () => {
  const cssFilePath = path.join(__dirname, 'generated-brand-colors.css');
  const cssVariables = getCssColorVariables(cssFilePath, 'brand-colors');

  it('should match JSON values', () => {
    for (const [colorGroup, shades] of Object.entries(jsonData)) {
      for (const [shade, details] of Object.entries(shades)) {
        const variableName = `${colorGroup}-${shade}`;
        expect(cssVariables[variableName]).toBe(details.value);
      }
    }
  });
});
