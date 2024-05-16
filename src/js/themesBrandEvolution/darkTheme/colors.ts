import { brandColorBrandEvolution as brandColor } from '../../brandColorBrandEvolution';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    default: brandColor.grey800, // For default neutral backgrounds
    alternative: brandColor.grey900, // For secondary neutral backgrounds.
    defaultHover: '#313235', // For "hover" states that use background-default.
    defaultPressed: '#3f4145', // For "pressed" states that use background-alternative.
    alternativeHover: '#1f2123', // For "hover" states that use background-alternative.
    alternativePressed: '#2e3033', // For "pressed" states that use background-alternative.
    hover: '#ffffff0f', // For "hover" state that use no background fill.
    pressed: '#ffffff1f', // For "pressed" state that use no background fill.
  },
  text: {
    default: brandColor.grey000, // For default neutral text.
    alternative: brandColor.grey200, // For softer contrast neutral text
    muted: brandColor.grey400, // For the softest contrast neutral text (not accessible)
  },
  icon: {
    default: brandColor.grey000, // For default neutral icons
    alternative: brandColor.grey200, // For softer neutral icons
    muted: brandColor.grey400, // For the weakest contrast neutral icons (not accessible)
  },
  border: {
    default: brandColor.grey400, // For soft contrast neutral border
    muted: '#858b9a33', // For the weakest  contrast neutral border
  },
  overlay: {
    default: '#00000066', // For the default shade of screen
    alternative: '#000000cc', // For a stronger shade of screen
  },
  primary: {
    default: brandColor.blue300, // For interactive, active, and selected semantics. Used for text, background, icon or border
    alternative: brandColor.blue200, // For the stronger contrast primary semantic elements.
    muted: '#8b99ff26', // For the weakest contrast primary semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of primary/default. Used for text, icon or border
    defaultHover: '#a8b2ff', // For the "hover" state of primary-default elements
    defaultPressed: '#c7ceff', // For the "pressed" state of primary-default elements
  },
  error: {
    default: brandColor.red300, // For the critical alert semantic elements. Used for text, background, icon or border
    alternative: brandColor.red200, // For the stronger contrast error semantic elements.
    muted: '#ff758426', // For the weakest contrast critical alert semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of error/default. Used for text, icon or border
    defaultHover: '#ff94a0', // For the "hover" state of error-default elements.
    defaultPressed: '#ffb2bb', // For the "pressed" state of error-default elements.
  },
  warning: {
    default: brandColor.yellow100, // For the caution alert semantic elements. Used for text, background, icon or border
    muted: '#ffd95726', // For the weakest contrast caution alert semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of warning/default. Used for text, icon or border
    defaultHover: '#ffe794', // For the "hover" state of warning-default elements
    defaultPressed: '#ffeeb2', // For the "pressed" state of warning-default elements
  },
  success: {
    default: brandColor.green300, // For the positive semantic elements. Used for text, background, icon or border
    muted: '#4cb56426', // For the weakest contrast positive semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of success/default. Used for text, icon or border
    defaultHover: '#60bd76', // For the "hover" state of success-default elements
    defaultPressed: '#76c688', // For the "pressed" state of success-default elements
  },
  info: {
    default: brandColor.blue300, // For informational read-only elements. Used for text, background, icon or border
    muted: '#8b99ff26', // For the weakest contrast informational semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of info/default. Used for text, icon or border
  },
  flask: {
    default: brandColor.purple300, // For Flask primary accent color.
    inverse: brandColor.grey900, // For elements used on top of flask/default. Used for text, icon or border
  },
  shadow: {
    default: '#00000066', // For neutral drop shadow color.
    primary: '#8b99ff33', // For primary drop shadow color.
    error: '#ff758433', // For critical/danger drop shadow color.
  },
};
