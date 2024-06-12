"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLN25RJU7js = require('./chunk-LN25RJU7.js');

// src/js/themes/darkTheme/colors.ts
var colors = {
  background: {
    default: _chunkLN25RJU7js.brandColor.grey800,
    // For default neutral backgrounds
    alternative: _chunkLN25RJU7js.brandColor.grey900,
    // For secondary neutral backgrounds.
    defaultHover: "#313235",
    // For "hover" states that use background-default.
    defaultPressed: "#3f4145",
    // For "pressed" states that use background-alternative.
    alternativeHover: "#1f2123",
    // For "hover" states that use background-alternative.
    alternativePressed: "#2e3033",
    // For "pressed" states that use background-alternative.
    hover: "#ffffff0f",
    // For "hover" state that use no background fill.  (black-6% | white-6%)
    pressed: "#ffffff1f"
    // For "pressed" state that use no background fill.  (black-12% | white-12%)
  },
  text: {
    default: _chunkLN25RJU7js.brandColor.grey000,
    // For default neutral text.
    alternative: _chunkLN25RJU7js.brandColor.grey200,
    // For softer contrast neutral text
    muted: _chunkLN25RJU7js.brandColor.grey400
    // For the softest contrast neutral text (not accessible)
  },
  icon: {
    default: _chunkLN25RJU7js.brandColor.grey000,
    // For default neutral icons
    alternative: _chunkLN25RJU7js.brandColor.grey200,
    // For softer neutral icons
    muted: _chunkLN25RJU7js.brandColor.grey400
    // For the weakest contrast neutral icons (not accessible)
  },
  border: {
    default: _chunkLN25RJU7js.brandColor.grey400,
    // For soft contrast neutral border
    muted: "#858b9a33"
    // For the weakest  contrast neutral border (grey200-40% | grey400-20%)
  },
  overlay: {
    default: "#00000066",
    // For the default shade of screen (black-40%)
    alternative: "#000000cc",
    // For a stronger shade of screen (black-80%)
    inverse: _chunkLN25RJU7js.brandColor.grey000
    // For elements used on top of overlay/alternative. Used for text, icon or border
  },
  primary: {
    default: _chunkLN25RJU7js.brandColor.blue300,
    // For interactive, active, and selected semantics. Used for text, background, icon or border
    alternative: _chunkLN25RJU7js.brandColor.blue200,
    // For the stronger contrast primary semantic elements.
    muted: "#8b99ff26",
    // For the weakest contrast primary semantic backgrounds. (blue500-10% | blue300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey900,
    // For elements used on top of primary/default. Used for text, icon or border
    defaultHover: "#a8b2ff",
    // For the "hover" state of primary-default elements
    defaultPressed: "#c7ceff"
    // For the "pressed" state of primary-default elements
  },
  error: {
    default: _chunkLN25RJU7js.brandColor.red300,
    // For the critical alert semantic elements. Used for text, background, icon or border
    alternative: _chunkLN25RJU7js.brandColor.red200,
    // For the stronger contrast error semantic elements.
    muted: "#ff758426",
    // For the weakest contrast critical alert semantic backgrounds. (red500-10% | red300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey900,
    // For elements used on top of error/default. Used for text, icon or border
    defaultHover: "#ff94a0",
    // For the "hover" state of error-default elements.
    defaultPressed: "#ffb2bb"
    // For the "pressed" state of error-default elements.
  },
  warning: {
    default: _chunkLN25RJU7js.brandColor.yellow100,
    // For the caution alert semantic elements. Used for text, background, icon or border
    muted: "#ffd95726",
    // For the weakest contrast caution alert semantic backgrounds. (yellow500-10% | yellow100-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey900,
    // For elements used on top of warning/default. Used for text, icon or border
    defaultHover: "#ffe794",
    // For the "hover" state of warning-default elements
    defaultPressed: "#ffeeb2"
    // For the "pressed" state of warning-default elements
  },
  success: {
    default: _chunkLN25RJU7js.brandColor.green300,
    // For the positive semantic elements. Used for text, background, icon or border
    muted: "#4cb56426",
    // For the weakest contrast positive semantic backgrounds. (green500-10% | green300-10%)
    inverse: _chunkLN25RJU7js.brandColor.grey900,
    // For elements used on top of success/default. Used for text, icon or border
    defaultHover: "#60bd76",
    // For the "hover" state of success-default elements
    defaultPressed: "#76c688"
    // For the "pressed" state of success-default elements
  },
  info: {
    default: _chunkLN25RJU7js.brandColor.blue300,
    // For informational read-only elements. Used for text, background, icon or border
    muted: "#8b99ff26",
    // For the weakest contrast informational semantic backgrounds.(blue500-10% | blue300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey900
    // For elements used on top of info/default. Used for text, icon or border
  },
  flask: {
    default: _chunkLN25RJU7js.brandColor.purple300,
    // For Flask primary accent color.
    inverse: _chunkLN25RJU7js.brandColor.grey900
    // For elements used on top of flask/default. Used for text, icon or border
  },
  shadow: {
    default: "#00000066",
    // For neutral drop shadow color. (black-10% | black-40%)
    primary: "#8b99ff33",
    // For primary drop shadow color. (blue500-20% | blue300-20%)
    error: "#ff758433"
    // For critical/danger drop shadow color. (red50-20% | red300-20%)
  }
};



exports.colors = colors;
//# sourceMappingURL=chunk-KBAVOXT3.js.map