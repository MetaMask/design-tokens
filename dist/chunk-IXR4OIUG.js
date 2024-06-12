"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLN25RJU7js = require('./chunk-LN25RJU7.js');

// src/js/themes/lightTheme/colors.ts
var colors = {
  background: {
    default: _chunkLN25RJU7js.brandColor.grey000,
    // For default neutral backgrounds
    alternative: _chunkLN25RJU7js.brandColor.grey050,
    // For secondary neutral backgrounds.
    defaultHover: "#f0f0f0",
    // For "hover" states that use background-default.
    defaultPressed: "#e0e0e0",
    // For "pressed" states that use background-alternative.
    alternativeHover: "#dde3ee",
    // For "hover" states that use background-alternative.
    alternativePressed: "#c9d2e4",
    // For "pressed" states that use background-alternative.
    hover: "#0000000f",
    // For "hover" state that use no background fill.  (black-6% | white-6%)
    pressed: "#0000001f"
    // For "pressed" state that use no background fill.  (black-12% | white-12%)
  },
  text: {
    default: _chunkLN25RJU7js.brandColor.grey900,
    // For default neutral text.
    alternative: _chunkLN25RJU7js.brandColor.grey500,
    // For softer contrast neutral text
    muted: _chunkLN25RJU7js.brandColor.grey300
    // For the softest contrast neutral text (not accessible)
  },
  icon: {
    default: _chunkLN25RJU7js.brandColor.grey900,
    // For default neutral icons
    alternative: _chunkLN25RJU7js.brandColor.grey500,
    // For softer neutral icons
    muted: _chunkLN25RJU7js.brandColor.grey300
    // For the weakest contrast neutral icons (not accessible)
  },
  border: {
    default: _chunkLN25RJU7js.brandColor.grey200,
    // For soft contrast neutral border
    muted: "#b7bbc866"
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
    default: _chunkLN25RJU7js.brandColor.blue500,
    // For interactive, active, and selected semantics. Used for text, background, icon or border
    alternative: _chunkLN25RJU7js.brandColor.blue600,
    // For the stronger contrast primary semantic elements.
    muted: "#4459ff1a",
    // For the weakest contrast primary semantic backgrounds. (blue500-10% | blue300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey000,
    // For elements used on top of primary/default. Used for text, icon or border
    defaultHover: "#243cff",
    // For the "hover" state of primary-default elements
    defaultPressed: "#0521ff"
    // For the "pressed" state of primary-default elements
  },
  error: {
    default: _chunkLN25RJU7js.brandColor.red500,
    // For the critical alert semantic elements. Used for text, background, icon or border
    alternative: _chunkLN25RJU7js.brandColor.red600,
    // For the stronger contrast error semantic elements.
    muted: "#ca35421a",
    // For the weakest contrast critical alert semantic backgrounds. (red500-10% | red300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey000,
    // For elements used on top of error/default. Used for text, icon or border
    defaultHover: "#b22f3a",
    // For the "hover" state of error-default elements.
    defaultPressed: "#9a2832"
    // For the "pressed" state of error-default elements.
  },
  warning: {
    default: _chunkLN25RJU7js.brandColor.yellow500,
    // For the caution alert semantic elements. Used for text, background, icon or border
    muted: "#9a63001a",
    // For the weakest contrast caution alert semantic backgrounds. (yellow500-10% | yellow100-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey000,
    // For elements used on top of warning/default. Used for text, icon or border
    defaultHover: "#7a4f00",
    // For the "hover" state of warning-default elements
    defaultPressed: "#5c3b00"
    // For the "pressed" state of warning-default elements
  },
  success: {
    default: _chunkLN25RJU7js.brandColor.green500,
    // For the positive semantic elements. Used for text, background, icon or border
    muted: "#1c7e331a",
    // For the weakest contrast positive semantic backgrounds. (green500-10% | green300-10%)
    inverse: _chunkLN25RJU7js.brandColor.grey000,
    // For elements used on top of success/default. Used for text, icon or border
    defaultHover: "#166429",
    // For the "hover" state of success-default elements
    defaultPressed: "#114b1e"
    // For the "pressed" state of success-default elements
  },
  info: {
    default: _chunkLN25RJU7js.brandColor.blue500,
    // For informational read-only elements. Used for text, background, icon or border
    muted: "#4459ff1a",
    // For the weakest contrast informational semantic backgrounds.(blue500-10% | blue300-15%)
    inverse: _chunkLN25RJU7js.brandColor.grey000
    // For elements used on top of info/default. Used for text, icon or border
  },
  flask: {
    default: _chunkLN25RJU7js.brandColor.purple500,
    // For Flask primary accent color.
    inverse: _chunkLN25RJU7js.brandColor.grey000
    // For elements used on top of flask/default. Used for text, icon or border
  },
  shadow: {
    default: "#0000001a",
    // For neutral drop shadow color. (black-10% | black-40%)
    primary: "#4459ff33",
    // For primary drop shadow color. (blue500-20% | blue300-20%)
    error: "#ca354266"
    // For critical/danger drop shadow color. (red50-20% | red300-20%)
  }
};



exports.colors = colors;
//# sourceMappingURL=chunk-IXR4OIUG.js.map