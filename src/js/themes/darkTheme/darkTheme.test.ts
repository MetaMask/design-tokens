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

  it('shadow tokens are exported from darkTheme by checking first shadow size object', () => {
    expect(darkTheme.shadows.size.xs).toStrictEqual({
      shadowColor: designTokens.dark.shadows.xs.value.color,
      shadowOffset: {
        width: Number(designTokens.dark.shadows.xs.value.x),
        height: Number(designTokens.dark.shadows.xs.value.y),
      },
      shadowOpacity: 1,
      shadowRadius: Number(designTokens.dark.shadows.xs.value.blur),
    });
  });
});
