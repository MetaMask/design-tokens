/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { darkTheme } from './darkTheme';

const designTokens = require('../../../figma/tokens.json');

describe('dark Theme', () => {
  it('color tokens are exported from darkTheme by checking first color token', () => {
    expect(darkTheme.colors.background.default).toStrictEqual(
      designTokens.dark.colors.background.default.value,
    );
  });

  it('typography tokens are exported from darkTheme by checking first typography token', () => {
    expect(darkTheme.typography.sDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
  });
});
