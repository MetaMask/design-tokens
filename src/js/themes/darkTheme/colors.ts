import { ThemeColors } from '../types';

/* eslint-disable jsdoc/check-property-names, jsdoc/tag-lines */
/**
 * MetaMask's Design System Colors
 *
 * NOTE - This documentation doesn't reflect the actual structure of the colors object. We are only documenting the common properties between light and dark themes.
 *
 * @property {string} background.default - For default neutral backgrounds
 * @property {string} background.alternative - For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)
 *
 * @property {string} text.default - For general text that takes main priority in the information hierarchy
 * @property {string} text.alternative - For a weaker contrast option for neutral text
 * @property {string} text.muted - For inactive or lowest priority text. (Example: placeholder)
 *
 * @property {string} icon.default - For default neutral icons
 * @property {string} icon.alternative - For a weaker contrast option for neutral icons
 * @property {string} icon.muted - For inactive or lowest priority icons
 *
 * @property {string} border.default - For default neutral borders with visible contrast. (Example: text inputs)
 * @property {string} border.muted - For a weaker contrast option for neutral borders.
 *
 * @property {string} overlay.default - For shading layers behind modality screens
 * @property {string} overlay.alternative - For a stronger shading layer option behind modality screens
 * @property {string} overlay.inverse - [Deprecated] Should be used for elements over an overlay
 *
 * @property {string} primary.default - For primary user action related elements
 * @property {string} primary.alternative - For the \"pressed\" state of interactive primary elements
 * @property {string} primary.muted - For lowest contrast background used in primary elements
 * @property {string} primary.disabled - [Deprecated] Should be used for disabled state
 * @property {string} primary.inverse - For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)
 *
 * @property {string} secondary.default - [Deprecated] Should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox
 * @property {string} secondary.alternative - [Deprecated] Should be used as an alternative to secondary.default for things such as hover states
 * @property {string} secondary.muted - [Deprecated] It’s a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination
 * @property {string} secondary.disabled - [Deprecated] Should be used for all disabled secondary action components
 * @property {string} secondary.inverse - [Deprecated] Should be used only as the foreground element on top of primary/default and primary/alternative. It is intended to be the most contrasting color to primary/default. It should meet all AA and AAA accessibility standards such as the text or icon of a primary button
 *
 * @property {string} error.default - For high-level alert danger/critical elements. Used for text, background, icon or border
 * @property {string} error.alternative - For the \"pressed\" state of interactive danger/critical elements
 * @property {string} error.muted - For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)
 * @property {string} error.disabled - [Deprecated] Should be used for disabled state
 * @property {string} error.inverse - For elements used on top of error/default (Example: label of danger/critical button)
 *
 * @property {string} warning.default - For low-mid level alert elements. Used for text, background, icon or border
 * @property {string} warning.alternative - [Deprecated] Should be used as an alternative to warning/default for things like hover or pressed states
 * @property {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
 * @property {string} warning.disabled - [Deprecated] Should be used for disabled state
 * @property {string} warning.inverse - For elements used on top of warning/default. Used for text, icon or border
 *
 * @property {string} success.default - For positive & good semantic elements. Used for text, background, icon or border
 * @property {string} success.alternative - [Deprecated] Should be used as an alternative to success/default for things like hover or pressed states
 * @property {string} success.muted - For lowest contrast background used in success semantic. (Example: notification background)
 * @property {string} success.disabled - [Deprecated] Should be used for disabled state
 * @property {string} success.inverse -  For elements used on top of success/default. Used for text, icon or border
 *
 * @property {string} info.default - For informational semantic elements. Used for text, background, icon or border
 * @property {string} info.alternative - [Deprecated] Should be used as an alternative to info/default for things like hover or pressed states
 * @property {string} info.muted - For lowest contrast background used in informational semantic. (Example: notification background)
 * @property {string} info.disabled - [Deprecated] Should be used for disabled state
 * @property {string} info.inverse - SFor elements used on top of info/default. Used for text, icon or border
 */
/* eslint-enable jsdoc/check-property-names, jsdoc/tag-lines */

export const colors: ThemeColors = {
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
    alternative: '#BBC0C5',
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
};
