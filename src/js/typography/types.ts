interface TypeStyle {
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
