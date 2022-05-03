/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { fontFamilies } from './fontFamilies';

const designTokens = require('../../figma/tokens.json');

describe('Font Families', () => {
  it('matches figma font family', () => {
    expect(fontFamilies.euclidCircularB).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
  });
});
