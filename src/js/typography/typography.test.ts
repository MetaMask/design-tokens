/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { typography } from './typography';

const designTokens = require('../../figma/tokens.json');

describe('Typography Small Screen', () => {
  it('js tokens for sDisplayMDBold matches figma tokens sDisplayMDBold', () => {
    expect(typography.sDisplayMDBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sDisplayMDBold.fontWeight).toStrictEqual(700);
    expect(typography.sDisplayMDBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );

    expect(typography.sDisplayMDBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );

    expect(typography.sDisplayMDBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingLGBold matches figma tokens sHeadingLGBold', () => {
    expect(typography.sHeadingLGBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingLGBold.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingLGBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );

    expect(typography.sHeadingLGBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );

    expect(typography.sHeadingLGBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingMDBold matches figma tokens sHeadingMDBold', () => {
    expect(typography.sHeadingMDBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingMDBold.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingMDBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );

    expect(typography.sHeadingMDBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.sHeadingMDBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingSMBold matches figma tokens sHeadingSMBold', () => {
    expect(typography.sHeadingSMBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingSMBold.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingSMBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );

    expect(typography.sHeadingSMBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.sHeadingSMBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingSM matches figma tokens sHeadingSM', () => {
    expect(typography.sHeadingSM.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingSM.fontWeight).toStrictEqual(400);
    expect(typography.sHeadingSM.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );

    expect(typography.sHeadingSM.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.sHeadingSM.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sBodyMDBold matches figma tokens sBodyMDBold', () => {
    expect(typography.sBodyMDBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sBodyMDBold.fontWeight).toStrictEqual(700);
    expect(typography.sBodyMDBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );

    expect(typography.sBodyMDBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );

    expect(typography.sBodyMDBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sBodyMD matches figma tokens sBodyMD', () => {
    expect(typography.sBodyMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sBodyMD.fontWeight).toStrictEqual(400);
    expect(typography.sBodyMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );

    expect(typography.sBodyMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );

    expect(typography.sBodyMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sBodySMBold matches figma tokens sBodySMBold', () => {
    expect(typography.sBodySMBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sBodySMBold.fontWeight).toStrictEqual(700);
    expect(typography.sBodySMBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[1].value,
    );

    expect(typography.sBodySMBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[5].value,
    );

    expect(typography.sBodySMBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sBodySM matches figma tokens sBodySM', () => {
    expect(typography.sBodySM.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sBodySM.fontWeight).toStrictEqual(400);
    expect(typography.sBodySM.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[1].value,
    );

    expect(typography.sBodySM.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[5].value,
    );

    expect(typography.sBodySM.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sBodyXS matches figma tokens sBodyXS', () => {
    expect(typography.sBodyXS.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sBodyXS.fontWeight).toStrictEqual(400);
    expect(typography.sBodyXS.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[0].value,
    );

    expect(typography.sBodyXS.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[6].value,
    );

    expect(typography.sBodyXS.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[1].value,
    );
  });
});

describe('Typography Large Screen', () => {
  it('js tokens for lDisplayMDMedium matches figma tokens lDisplayMDMedium', () => {
    expect(typography.lDisplayMDMedium.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lDisplayMDMedium.fontWeight).toStrictEqual(500);
    expect(typography.lDisplayMDMedium.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[7].value,
    );

    expect(typography.lDisplayMDMedium.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[0].value,
    );

    expect(typography.lDisplayMDMedium.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingLGBold matches figma tokens lHeadingLGBold', () => {
    expect(typography.lHeadingLGBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingLGBold.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingLGBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );

    expect(typography.lHeadingLGBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );

    expect(typography.lHeadingLGBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingMDBold matches figma tokens lHeadingMDBold', () => {
    expect(typography.lHeadingMDBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingMDBold.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingMDBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );

    expect(typography.lHeadingMDBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );

    expect(typography.lHeadingMDBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingSMBold matches figma tokens lHeadingSMBold', () => {
    expect(typography.lHeadingSMBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingSMBold.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingSMBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );

    expect(typography.lHeadingSMBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.lHeadingSMBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingSM matches figma tokens lHeadingSM', () => {
    expect(typography.lHeadingSM.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingSM.fontWeight).toStrictEqual(400);
    expect(typography.lHeadingSM.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );

    expect(typography.lHeadingSM.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.lHeadingSM.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lBodyMDBold matches figma tokens lBodyMDBold', () => {
    expect(typography.lBodyMDBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lBodyMDBold.fontWeight).toStrictEqual(700);
    expect(typography.lBodyMDBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );

    expect(typography.lBodyMDBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.lBodyMDBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lBodyMD matches figma tokens lBodyMD', () => {
    expect(typography.lBodyMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lBodyMD.fontWeight).toStrictEqual(400);
    expect(typography.lBodyMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );

    expect(typography.lBodyMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.lBodyMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lBodySMBold matches figma tokens lBodySMBold', () => {
    expect(typography.lBodySMBold.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lBodySMBold.fontWeight).toStrictEqual(700);
    expect(typography.lBodySMBold.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );

    expect(typography.lBodySMBold.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );

    expect(typography.lBodySMBold.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lBodySM matches figma tokens lBodySM', () => {
    expect(typography.lBodySM.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lBodySM.fontWeight).toStrictEqual(400);
    expect(typography.lBodySM.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );

    expect(typography.lBodySM.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );

    expect(typography.lBodySM.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lBodyXS matches figma tokens lBodyXS', () => {
    expect(typography.lBodyXS.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lBodyXS.fontWeight).toStrictEqual(400);
    expect(typography.lBodyXS.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[1].value,
    );

    expect(typography.lBodyXS.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[5].value,
    );

    expect(typography.lBodyXS.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[1].value,
    );
  });
});
