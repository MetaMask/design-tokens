/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { readFileSync } from 'fs';
import { resolve } from 'path';

const brandColorsPath = resolve(__dirname, '../figma/brandColors.json');
const brandColorsCSSPath = resolve(__dirname, 'brand-colors.css');

const brandColors = JSON.parse(readFileSync(brandColorsPath, 'utf8'));
const brandColorsCSS = readFileSync(brandColorsCSSPath, 'utf8');

describe('Brand Colors CSS', () => {
  for (const color in brandColors) {
    if (color !== 'white' && color !== 'black') {
      for (const shade in brandColors[color]) {
        const variableName = `--brand-colors-${color}-${color}${shade}`;
        const colorValue = brandColors[color][shade].value;
        it(`should have the correct value for ${variableName}`, () => {
          expect(brandColorsCSS).toContain(`${variableName}: ${colorValue};`);
        });
      }
    } else {
      const variableName = `--brand-colors-${color}`;
      const colorValue = brandColors[color].value;
      it(`should have the correct value for ${variableName}`, () => {
        expect(brandColorsCSS).toContain(`${variableName}: ${colorValue};`);
      });
    }
  }
});
