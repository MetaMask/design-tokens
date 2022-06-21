import { ThemeTypography } from '../typography';

interface ShadowShape {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
}

interface ShadowSizes {
  xs: ShadowShape;
  sm: ShadowShape;
  md: ShadowShape;
  lg: ShadowShape;
}

export interface ThemeShadows {
  size: ShadowSizes;
}

export interface ThemeColors {
  background: {
    /**
     * {string} background.default - For default neutral backgrounds
     */
    default: string;
    /**
     * {string} background.alternative - For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)
     */
    alternative: string;
  };
  text: {
    /**
     * {string} text.default - For general text that takes main priority in the information hierarchy
     */
    default: string;
    /**
     * {string} text.alternative - For a weaker contrast option for neutral text
     */
    alternative: string;
    /**
     * {string} text.muted - For inactive or lowest priority text. (Example: placeholder)
     */
    muted: string;
  };
  icon: {
    /**
     * {string} icon.default - For default neutral icons
     */
    default: string;
    /**
     * {string} icon.alternative - For a weaker contrast option for neutral icons
     */
    alternative: string;
    /**
     * {string} icon.muted - For inactive or lowest priority icons
     */
    muted: string;
  };
  border: {
    /**
     * {string} border.default - For default neutral borders with visible contrast. (Example: text inputs)
     */
    default: string;
    /**
     * {string} border.muted - For a weaker contrast option for neutral borders.
     */
    muted: string;
  };
  overlay: {
    /**
     * {string} overlay.default - For shading layers behind modality screens
     */
    default: string;
    /**
     * {string} overlay.alternative - For a stronger shading layer option behind modality screens
     */
    inverse: string;
    /**
     * {string} overlay.inverse - [Deprecated] Should be used for elements over an overlay
     */
    alternative: string;
  };
  shadow: {
    /**
     * {string} shadow.default - For neutral shadows
     */
    default: string;
  };
  primary: {
    /**
     * {string} primary.default - For primary user action related elements
     */
    default: string;
    /**
     * {string} primary.alternative - For the \"pressed\" state of interactive primary elements
     */
    alternative: string;
    /**
     * {string} primary.muted - For lowest contrast background used in primary elements
     */
    muted: string;
    /**
     * {string} primary.inverse - For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)disabled state
     */
    inverse: string;
    /**
     * {string} primary.disabled - [Deprecated] Should be used for
     */
    disabled: string;
    /**
     * {string} primary.shadow - For primary button hover
     */
    shadow: string;
  };
  secondary: {
    /**
     * {string} secondary.default - [Deprecated] Should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox
     */
    default: string;
    /**
     * {string} secondary.alternative - [Deprecated] Should be used as an alternative to secondary.default for things such as hover states
     */
    alternative: string;
    /**
     * {string} secondary.muted - [Deprecated] It’s a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination
     */
    muted: string;
    /**
     * {string} secondary.inverse - [Deprecated] Should be used only as the foreground element on top of primary/default and primary/alternative. It is intended to be the most contrasting color to primary/default. It should meet all AA and AAA accessibility standards such as the text or icon of a primary button
     */
    inverse: string;
    /**
     * {string} secondary.disabled - [Deprecated] Should be used for all disabled secondary action components
     */
    disabled: string;
  };
  error: {
    /**
     * {string} error.default - For high-level alert danger/critical elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} error.alternative - For the \"pressed\" state of interactive danger/critical elements
     */
    alternative: string;
    /**
     * {string} error.muted - For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)
     */
    muted: string;
    /**
     * {string} error.inverse - For elements used on top of error/default (Example: label of danger/critical button)
     */
    inverse: string;
    /**
     * {string} error.disabled - [Deprecated] Should be used for disabled state
     */
    disabled: string;
    /**
     * {string} error.shadow - For error danger/critical button hover
     */
    shadow: string;
  };
  warning: {
    /**
     * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
     */
    default: string;
    /**
     * {string} warning.alternative - [Deprecated] Should be used as an alternative to warning/default for things like hover or pressed states
     */
    alternative: string;
    /**
     * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
     */
    muted: string;
    /**
     * {string} warning.inverse - For elements used on top of warning/default. Used for text, icon or border
     */
    inverse: string;
    /**
     * {string} warning.disabled - [Deprecated] Should be used for disabled state
     */
    disabled: string;
  };
  success: {
    /**
     * {string} success.default - For positive & good semantic elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} success.alternative - [Deprecated] Should be used as an alternative to success/default for things like hover or pressed states
     */
    alternative: string;
    /**
     * {string} success.muted - For lowest contrast background used in success semantic. (Example: notification background)
     */
    muted: string;
    /**
     * {string} success.inverse -  For elements used on top of success/default. Used for text, icon or border
     */
    inverse: string;
    /**
     * {string} success.disabled - [Deprecated] Should be used for disabled state
     */
    disabled: string;
  };
  info: {
    /**
     * {string} info.default - For informational semantic elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} info.alternative - [Deprecated] Should be used as an alternative to info/default for things like hover or pressed states
     */
    alternative: string;
    /**
     * {string} info.muted - For lowest contrast background used in informational semantic. (Example: notification background)
     */
    muted: string;
    /**
     * {string} info.inverse - SFor elements used on top of info/default. Used for text, icon or border
     */
    inverse: string;
    /**
     * {string} info.disabled - [Deprecated] Should be used for disabled state
     */
    disabled: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  shadows: ThemeShadows;
}
