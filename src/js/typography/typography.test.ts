/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { typography } from './typography';

const designTokens = require('../../figma/tokens.json');

describe('Typography Small Screen', () => {
  it('js tokens for sDisplayMD matches figma tokens sDisplayMD', () => {
    expect(typography.sDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sDisplayMD.fontWeight).toStrictEqual(700);
    expect(typography.sDisplayMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );

    expect(typography.sDisplayMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );

    expect(typography.sDisplayMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingLG matches figma tokens sHeadingLG', () => {
    expect(typography.sHeadingLG.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingLG.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingLG.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );

    expect(typography.sHeadingLG.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );

    expect(typography.sHeadingLG.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingMD matches figma tokens sHeadingMD', () => {
    expect(typography.sHeadingMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingMD.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );

    expect(typography.sHeadingMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.sHeadingMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for sHeadingSMRegular matches figma tokens sHeadingSMRegular', () => {
    expect(typography.sHeadingSMRegular.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.sHeadingSMRegular.fontWeight).toStrictEqual(700);
    expect(typography.sHeadingSMRegular.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );

    expect(typography.sHeadingSMRegular.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.sHeadingSMRegular.letterSpacing.toString()).toStrictEqual(
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
  it('js tokens for lDisplayMD matches figma tokens lDisplayMD', () => {
    expect(typography.lDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lDisplayMD.fontWeight).toStrictEqual(500);
    expect(typography.lDisplayMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[7].value,
    );

    expect(typography.lDisplayMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[0].value,
    );

    expect(typography.lDisplayMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingLG matches figma tokens lHeadingLG', () => {
    expect(typography.lHeadingLG.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingLG.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingLG.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );

    expect(typography.lHeadingLG.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );

    expect(typography.lHeadingLG.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingMD matches figma tokens lHeadingMD', () => {
    expect(typography.lHeadingMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingMD.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingMD.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );

    expect(typography.lHeadingMD.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );

    expect(typography.lHeadingMD.letterSpacing.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for lHeadingSMRegular matches figma tokens lHeadingSMRegular', () => {
    expect(typography.lHeadingSMRegular.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
    expect(typography.lHeadingSMRegular.fontWeight).toStrictEqual(700);
    expect(typography.lHeadingSMRegular.fontSize.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );

    expect(typography.lHeadingSMRegular.lineHeight.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );

    expect(typography.lHeadingSMRegular.letterSpacing.toString()).toStrictEqual(
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
