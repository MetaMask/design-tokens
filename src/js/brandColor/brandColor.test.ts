/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { brandColor } from './brandColor';

const designTokens = require('../../figma/brandColorBrandEvolution.json');

describe('Brand Color', () => {
  Object.entries(brandColor).forEach(([key, value]) => {
    const colorFamily = key.replace(/\d+.*$/u, ''); // Extracts 'grey' from 'grey000'
    const shadeMatch = key.match(/\d+/gu); // Extracts ['000'] from 'grey000'
    if (!shadeMatch?.[0]) {
      console.error(`No shade key found for ${key}`);
      return; // Skip if no numeric key is found
    }
    const shadeKey = shadeMatch[0]; // Ensures there's a valid shade key

    describe(`${colorFamily.toUpperCase()} ${shadeKey}`, () => {
      it(`js tokens for ${key} matches figma brandColorBrandEvolution ${colorFamily}${shadeKey}`, () => {
        const tokenValue = designTokens[colorFamily][shadeKey]?.value ?? '';
        expect(value.toLowerCase()).toStrictEqual(tokenValue.toLowerCase());
      });
    });
  });
});
