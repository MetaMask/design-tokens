export interface ThemeColors {
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

/* eslint-disable jsdoc/check-property-names, jsdoc/tag-lines */
/**
 * MetaMask's Design System Colors
 *
 * NOTE - This documentation doesn't reflect the actual structure of the colors object. We are only documenting the common properties between light and dark themes.
 *
 * @property {string} background.default - Should be used as the default background color for any neutral type components
 * @property {string} background.alternative - Should be used as an alternative background for any neutral type components that require some slight contrast to background.default
 *
 * @property {string} text.default - Should be used for all general text that takes main priority in the information hierarchy
 * @property {string} text.alternative - Should be used for all general text that takes less priority in the information hierarchy than text.default
 * @property {string} text.muted - Should be used for all low priority text: placeholder and inactive text. It will also not meet AAA or AA accessibility standards
 *
 * @property {string} icon.default - Should be used for all icons used as CTAs that are not a primary action on background.default or background.alternative
 * @property {string} icon.muted - Should be used for all low priority icon used on background.default or background.alternative. These could also include placeholder or inactive icons. It will also not meet AAA or AA accessibility standards
 *
 * @property {string} border.default - Should be used for for the stroke of components that require higher contrast borders such as inputs in default state
 * @property {string} border.muted - Should be lower contrast components such as dividers
 *
 * @property {string} overlay.default - Should be used as the default background color for overlay screens
 * @property {string} overlay.alternative - Should be used overlay background that require stronger contrast
 * @property {string} overlay.inverse - Should be used for elements over an overlay
 *
 * @property {string} primary.default - Should be used as the default primary
 * @property {string} primary.alternative - Should be used as an alternative to primary/default for things like hover or pressed states
 * @property {string} primary.muted - Should be used for inactive states
 * @property {string} primary.disabled - Should be used for disabled state
 * @property {string} primary.inverse - Should be used only as the foreground element on top of primary/default and primary/alternative
 *
 * @property {string} secondary.default - Should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox
 * @property {string} secondary.alternative - Should be used as an alternative to secondary.default for things such as hover states
 * @property {string} secondary.muted - It’s a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination
 * @property {string} secondary.disabled - Should be used for all disabled secondary action components
 * @property {string} secondary.inverse - Should be used only as the foreground element on top of primary/default and primary/alternative. It is intended to be the most contrasting color to primary/default. It should meet all AA and AAA accessibility standards such as the text or icon of a primary button
 *
 * @property {string} error.default - Should be used for all error or critical action components such as buttons, icons or messages
 * @property {string} error.alternative - Should be used as an alternative to error/default for things like hover or pressed states
 * @property {string} error.muted - Should be used as background of error messages
 * @property {string} error.disabled - Should be used for disabled state
 * @property {string} error.inverse - Should be used only as the foreground element on top of error/default and error/alternative
 *
 * @property {string} warning.default - Should be used for all warning components such as buttons or icons. It should generally NOT be used for text as it will not be readable or contrast well against background/default
 * @property {string} warning.alternative - Should be used as an alternative to warning/default for things like hover or pressed states
 * @property {string} warning.muted - Should be used for background of warning messages
 * @property {string} warning.disabled - Should be used for disabled state
 * @property {string} warning.inverse - Should be used only as the foreground element on top of warning/default and warning/alternative
 *
 * @property {string} success.default - Should be used for all success state component colors such as buttons, icons or messages
 * @property {string} success.alternative - Should be used as an alternative to success/default for things like hover or pressed states
 * @property {string} success.muted - Should be used for background of success messages
 * @property {string} success.disabled - Should be used for disabled state
 * @property {string} success.inverse -  Should be used only as the foreground element on top of succes/default and success/alternative
 *
 * @property {string} info.default - Should be used for all info state component colors such as buttons or links
 * @property {string} info.alternative - Should be used as an alternative to info/default for things like hover or pressed states
 * @property {string} info.muted - Should be used for background of info messages
 * @property {string} info.disabled - Should be used for disabled state
 * @property {string} info.inverse - Should be used only as the foreground element on top of info/default and info/alternative
 */
/* eslint-enable jsdoc/check-property-names, jsdoc/tag-lines */
const colors: Colors = {
  light: {
    background: {
      default: '#FFFFFF',
      alternative: '#F2F4F6',
    },
    text: {
      default: '#24272A',
      alternative: '#535A61',
      muted: '#BBC0C5',
    },
    icon: {
      default: '#24272A',
      muted: '#BBC0C5',
    },
    border: {
      default: '#BBC0C5',
      muted: '#D6D9DC',
    },
    overlay: {
      default: '#00000099',
      inverse: '#FCFCFC',
      alternative: '#000000CC',
    },
    primary: {
      default: '#037DD6',
      alternative: '#0260A4',
      muted: '#037DD619',
      inverse: '#FCFCFC',
      disabled: '#037DD680',
    },
    secondary: {
      default: '#F66A0A',
      alternative: '#C65507',
      muted: '#F66A0A19',
      inverse: '#FCFCFC',
      disabled: '#F66A0A80',
    },
    error: {
      default: '#D73A49',
      alternative: '#B92534',
      muted: '#D73A4919',
      inverse: '#FCFCFC',
      disabled: '#D73A4980',
    },
    warning: {
      default: '#FFD33D',
      alternative: '#FFC70A',
      muted: '#FFD33D19',
      inverse: '#141618',
      disabled: '#FFD33D80',
    },
    success: {
      default: '#28A745',
      alternative: '#1E7E34',
      muted: '#28A74519',
      inverse: '#FCFCFC',
      disabled: '#28A74580',
    },
    info: {
      default: '#037DD6',
      alternative: '#0260A4',
      muted: '#037DD619',
      inverse: '#FCFCFC',
      disabled: '#037DD680',
    },
  },
  dark: {
    background: {
      default: '#24272A',
      alternative: '#141618',
    },
    text: {
      default: '#FFFFFF',
      alternative: '#D6D9DC',
      muted: '#9FA6AE',
    },
    icon: {
      default: '#FFFFFF',
      muted: '#9FA6AE',
    },
    border: {
      default: '#848C96',
      muted: '#3B4046',
    },
    overlay: {
      default: '#00000099',
      inverse: '#FCFCFC',
      alternative: '#000000CC',
    },
    primary: {
      default: '#1098FC',
      alternative: '#43AEFC',
      muted: '#1098FC26',
      inverse: '#FCFCFC',
      disabled: '#1098FC80',
    },
    secondary: {
      default: '#F8883B',
      alternative: '#FAA66C',
      muted: '#F8883B26',
      inverse: '#FCFCFC',
      disabled: '#F8883B80',
    },
    error: {
      default: '#D73A49',
      alternative: '#E06470',
      muted: '#D73A4926',
      inverse: '#FCFCFC',
      disabled: '#D73A4980',
    },
    warning: {
      default: '#FFD33D',
      alternative: '#FFDF70',
      muted: '#FFD33D26',
      inverse: '#141618',
      disabled: '#FFD33D80',
    },
    success: {
      default: '#28A745',
      alternative: '#5DD879',
      muted: '#28A74526',
      inverse: '#FCFCFC',
      disabled: '#28A74580',
    },
    info: {
      default: '#1098FC',
      alternative: '#43AEFC',
      muted: '#1098FC26',
      inverse: '#FCFCFC',
      disabled: '#037DD680',
    },
  },
};

export default colors;
