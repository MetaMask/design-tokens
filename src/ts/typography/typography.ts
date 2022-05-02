import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
} from '.';

export interface TypeStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}

export interface ThemeTypography {
  sDisplayMD: TypeStyle;
  sHeadingLG: TypeStyle;
  sHeadingMD: TypeStyle;
  sHeadingSM: TypeStyle;
  sBodyMD: TypeStyle;
  sBodySM: TypeStyle;
  sBodyXS: TypeStyle;
  lDisplayMD: TypeStyle;
  lHeadingLG: TypeStyle;
  lHeadingMD: TypeStyle;
  lHeadingSM: TypeStyle;
  lBodyMD: TypeStyle;
  lBodySM: TypeStyle;
  lBodyXS: TypeStyle;
}

/* eslint-enable jsdoc/check-property-names, jsdoc/tag-lines */
export const typography: ThemeTypography = {
  sDisplayMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize7,
    lineHeight: lineHeights.lineHeight6,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingLG: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize6,
    lineHeight: lineHeights.lineHeight5,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingSM: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodySM: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyXS: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize1,
    lineHeight: lineHeights.lineHeight1,
    letterSpacing: letterSpacing.letterSpacing1,
  },
  lDisplayMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize8,
    lineHeight: lineHeights.lineHeight7,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingLG: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize7,
    lineHeight: lineHeights.lineHeight6,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize6,
    lineHeight: lineHeights.lineHeight5,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingSM: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyMD: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodySM: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyXS: {
    fontFamily: fontFamilies.euclidCircularB,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing1,
  },
};
