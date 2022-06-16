/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { lightTheme } from './lightTheme';

const designTokens = require('../../../figma/tokens.json');

describe('Light Theme', () => {
  it('color tokens are exported from lightTheme by checking first color token', () => {
    expect(lightTheme.colors.background.default).toStrictEqual(
      designTokens.light.colors.background.default.value,
    );
  });

  it('typography tokens are exported from lightTheme by checking first typography token', () => {
    expect(lightTheme.typography.sDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
  });
});
