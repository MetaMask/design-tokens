/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { fontFamilies } from './fontFamilies';

const designTokens = require('../../figma/tokens.json');

describe('Font Families', () => {
  it('js tokens for font family matches figma tokens', () => {
    expect(fontFamilies.euclidCircularB).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
  });
});
