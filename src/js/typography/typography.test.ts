/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { typography } from './typography';

const designTokens = require('../../figma/tokens.json');

/**
 * Trim string between 2 characters.
 *
 * @param str - The string to be trimmed.
 * @param firstChar - The first character to start from '$'.
 * @param lastChar - The last character to stop at '.'.
 * @returns A string from characters between firstChar and lastChar.
 */
function trimStringBetweenCharacters(
  str: string,
  firstChar = '$',
  lastChar = '.',
) {
  return str.substring(str.indexOf(firstChar) + 1, str.lastIndexOf(lastChar));
}

/**
 * Trim string after character. Default character is '.'.
 *
 * @param str - The string to be trimmed.
 * @param char - The first character to start from '.'.
 * @returns A string from characters after the `char`.
 */
function trimStringAfterCharacter(str: string, char = '.') {
  return str.split(char).pop();
}

/**
 * Creates a new figma token object by creating object keys from a string.
 *
 * @param str - The object path as a string to be trimmed into object keys.
 * @param obj - Global figma token object.
 * @returns New object formed from object keys created from provided string.
 */
function createNewFigmaTokenObject(str: string, obj: any) {
  const firstString = trimStringBetweenCharacters(str);
  const secondString = trimStringAfterCharacter(str);
  return obj[`${firstString}`][`${secondString}`];
}

describe('Typography', () => {
  describe('Typography Small Screen', () => {
    it('js tokens for sDisplayMD matches figma tokens sDisplayMD', () => {
      expect(typography.sDisplayMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Display-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sDisplayMD.fontWeight).toStrictEqual('700');

      expect(typography.sDisplayMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Display-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sDisplayMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Display-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sDisplayMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Display-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sHeadingLG matches figma tokens sHeadingLG', () => {
      expect(typography.sHeadingLG.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Heading-LG'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sHeadingLG.fontWeight).toStrictEqual('700');

      expect(typography.sHeadingLG.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-LG'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingLG.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-LG'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingLG.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-LG'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sHeadingMD matches figma tokens sHeadingMD', () => {
      expect(typography.sHeadingMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Heading-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sHeadingMD.fontWeight).toStrictEqual('700');

      expect(typography.sHeadingMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sHeadingSMRegular matches figma tokens sHeadingSMRegular', () => {
      expect(typography.sHeadingSMRegular.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Heading-SM-Regular'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sHeadingSMRegular.fontWeight).toStrictEqual('400');

      expect(typography.sHeadingSMRegular.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM-Regular'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingSMRegular.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM-Regular'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingSMRegular.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM-Regular'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sHeadingSM matches figma tokens sHeadingSM', () => {
      expect(typography.sHeadingSM.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Heading-SM'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sHeadingSM.fontWeight).toStrictEqual('700');

      expect(typography.sHeadingSM.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingSM.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sHeadingSM.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodyLGMedium matches figma tokens sBodyLGMedium', () => {
      expect(typography.sBodyLGMedium.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-LG-Medium'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodyLGMedium.fontWeight).toStrictEqual('500');

      expect(typography.sBodyLGMedium.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-LG-Medium'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyLGMedium.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-LG-Medium'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyLGMedium.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Heading-SM-Regular'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodyMDBold matches figma tokens sBodyMDBold', () => {
      expect(typography.sBodyMDBold.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-MD-Bold'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodyMDBold.fontWeight).toStrictEqual('700');

      expect(typography.sBodyMDBold.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD-Bold'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyMDBold.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD-Bold'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyMDBold.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD-Bold'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodyMD matches figma tokens sBodyMD', () => {
      expect(typography.sBodyMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodyMD.fontWeight).toStrictEqual('400');

      expect(typography.sBodyMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodySMBold matches figma tokens sBodySMBold', () => {
      expect(typography.sBodySMBold.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-SM-Bold'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodySMBold.fontWeight).toStrictEqual('700');

      expect(typography.sBodySMBold.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM-Bold'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodySMBold.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM-Bold'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodySMBold.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM-Bold'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodySM matches figma tokens sBodySM', () => {
      expect(typography.sBodySM.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-SM'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodySM.fontWeight).toStrictEqual('400');

      expect(typography.sBodySM.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodySM.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodySM.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-SM'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for sBodyXS matches figma tokens sBodyXS', () => {
      expect(typography.sBodyXS.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['S-Body-XS'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.sBodyXS.fontWeight).toStrictEqual('400');

      expect(typography.sBodyXS.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-XS'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyXS.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-XS'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.sBodyXS.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['S-Body-XS'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });
  });

  describe('Typography Large Screen', () => {
    it('js tokens for lDisplayMD matches figma tokens lDisplayMD', () => {
      expect(typography.lDisplayMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Display-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lDisplayMD.fontWeight).toStrictEqual('500');

      expect(typography.lDisplayMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Display-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lDisplayMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Display-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lDisplayMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Display-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lHeadingLG matches figma tokens lHeadingLG', () => {
      expect(typography.lHeadingLG.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Heading-LG'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lHeadingLG.fontWeight).toStrictEqual('700');

      expect(typography.lHeadingLG.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-LG'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingLG.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-LG'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingLG.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-LG'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lHeadingMD matches figma tokens lHeadingMD', () => {
      expect(typography.lHeadingMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Heading-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lHeadingMD.fontWeight).toStrictEqual('700');

      expect(typography.lHeadingMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lHeadingSMRegular matches figma tokens lHeadingSMRegular', () => {
      expect(typography.lHeadingSMRegular.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Heading-SM-Regular'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lHeadingSMRegular.fontWeight).toStrictEqual('400');

      expect(typography.lHeadingSMRegular.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM-Regular'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingSMRegular.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM-Regular'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingSMRegular.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM-Regular'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lHeadingSM matches figma tokens lHeadingSM', () => {
      expect(typography.lHeadingSM.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Heading-SM'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lHeadingSM.fontWeight).toStrictEqual('700');

      expect(typography.lHeadingSM.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingSM.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lHeadingSM.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Heading-SM'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodyLGMedium matches figma tokens lBodyLGMedium', () => {
      expect(typography.lBodyLGMedium.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-LG-Medium'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodyLGMedium.fontWeight).toStrictEqual('500');

      expect(typography.lBodyLGMedium.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-LG-Medium'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyLGMedium.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-LG-Medium'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyLGMedium.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-LG-Medium'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodyMDBold matches figma tokens lBodyMDBold', () => {
      expect(typography.lBodyMDBold.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-MD-Bold'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodyMDBold.fontWeight).toStrictEqual('700');

      expect(typography.lBodyMDBold.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD-Bold'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyMDBold.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD-Bold'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyMDBold.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD-Bold'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodyMD matches figma tokens lBodyMD', () => {
      expect(typography.lBodyMD.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-MD'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodyMD.fontWeight).toStrictEqual('400');

      expect(typography.lBodyMD.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyMD.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyMD.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-MD'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodySMBold matches figma tokens lBodySMBold', () => {
      expect(typography.lBodySMBold.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-SM-Bold'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodySMBold.fontWeight).toStrictEqual('700');

      expect(typography.lBodySMBold.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM-Bold'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodySMBold.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM-Bold'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodySMBold.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM-Bold'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodySM matches figma tokens lBodySM', () => {
      expect(typography.lBodySM.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-SM'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodySM.fontWeight).toStrictEqual('400');

      expect(typography.lBodySM.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodySM.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodySM.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-SM'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });

    it('js tokens for lBodyXS matches figma tokens lBodyXS', () => {
      expect(typography.lBodyXS.fontFamily).toStrictEqual(
        createNewFigmaTokenObject(
          designTokens.global['L-Body-XS'].value.fontFamily,
          designTokens.global,
        ).value,
      );
      expect(typography.lBodyXS.fontWeight).toStrictEqual('400');

      expect(typography.lBodyXS.fontSize).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-XS'].value.fontSize,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyXS.lineHeight).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-XS'].value.lineHeight,
            designTokens.global,
          ).value,
        ),
      );

      expect(typography.lBodyXS.letterSpacing).toStrictEqual(
        Number(
          createNewFigmaTokenObject(
            designTokens.global['L-Body-XS'].value.letterSpacing,
            designTokens.global,
          ).value,
        ),
      );
    });
  });
});
