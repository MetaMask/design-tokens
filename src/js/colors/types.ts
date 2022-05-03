interface ThemeColors {
  background: {
    default: string;
    alternative: string;
  };
  text: {
    default: string;
    alternative: string;
    muted: string;
  };
  icon: {
    default: string;
    muted: string;
  };
  border: {
    default: string;
    muted: string;
  };
  overlay: {
    default: string;
    inverse: string;
    alternative: string;
  };
  primary: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  secondary: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  error: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  warning: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  success: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
  info: {
    default: string;
    alternative: string;
    muted: string;
    inverse: string;
    disabled: string;
  };
}

export interface Colors {
  light: ThemeColors;
  dark: ThemeColors;
}
