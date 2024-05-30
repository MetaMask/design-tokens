/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { colors as importableColors } from './colors';

const designTokens = require('../../../figma/tokens.json');

describe('Dark Theme Colors', () => {
  it('js tokens for background.default matches figma tokens background.default', () => {
    expect(importableColors.background.default).toStrictEqual(
      designTokens.dark.colors.background.default.value,
    );
  });

  it('js tokens for background.defaultHover matches figma tokens background.defaultHover', () => {
    expect(importableColors.background.defaultHover).toStrictEqual(
      designTokens.dark.colors.background['default-hover'].value,
    );
  });

  it('js tokens for background.defaultPressed matches figma tokens background.defaultPressed', () => {
    expect(importableColors.background.defaultPressed).toStrictEqual(
      designTokens.dark.colors.background['default-pressed'].value,
    );
  });

  it('js tokens for background.alternative matches figma tokens background.alternative', () => {
    expect(importableColors.background.alternative).toStrictEqual(
      designTokens.dark.colors.background.alternative.value,
    );
  });

  it('js tokens for background.alternativeHover matches figma tokens background.alternativeHover', () => {
    expect(importableColors.background.alternativeHover).toStrictEqual(
      designTokens.dark.colors.background['alternative-hover'].value,
    );
  });

  it('js tokens for background.alternativePressed matches figma tokens background.alternativePressed', () => {
    expect(importableColors.background.alternativePressed).toStrictEqual(
      designTokens.dark.colors.background['alternative-pressed'].value,
    );
  });

  it('js tokens for background.hover matches figma tokens background.hover', () => {
    expect(importableColors.background.hover).toStrictEqual(
      designTokens.dark.colors.background.hover.value,
    );
  });

  it('js tokens for background.pressed matches figma tokens background.pressed', () => {
    expect(importableColors.background.pressed).toStrictEqual(
      designTokens.dark.colors.background.pressed.value,
    );
  });

  it('js tokens for text.default matches figma tokens text.default', () => {
    expect(importableColors.text.default).toStrictEqual(
      designTokens.dark.colors.text.default.value,
    );
  });

  it('js tokens for text.alternative matches figma tokens text.alternative', () => {
    expect(importableColors.text.alternative).toStrictEqual(
      designTokens.dark.colors.text.alternative.value,
    );
  });

  it('js tokens for text.muted matches figma tokens text.muted', () => {
    expect(importableColors.text.muted).toStrictEqual(
      designTokens.dark.colors.text.muted.value,
    );
  });

  it('js tokens for icon.default matches figma tokens icon.default', () => {
    expect(importableColors.icon.default).toStrictEqual(
      designTokens.dark.colors.icon.default.value,
    );
  });

  it('js tokens for icon.alternative matches figma tokens icon.alternative', () => {
    expect(importableColors.icon.alternative).toStrictEqual(
      designTokens.dark.colors.icon.alternative.value,
    );
  });

  it('js tokens for icon.muted matches figma tokens icon.muted', () => {
    expect(importableColors.icon.muted).toStrictEqual(
      designTokens.dark.colors.icon.muted.value,
    );
  });

  it('js tokens for border.default matches figma tokens border.default', () => {
    expect(importableColors.border.default).toStrictEqual(
      designTokens.dark.colors.border.default.value,
    );
  });

  it('js tokens for border.muted matches figma tokens border.muted', () => {
    expect(importableColors.border.muted).toStrictEqual(
      designTokens.dark.colors.border.muted.value,
    );
  });

  it('js tokens for overlay.default matches figma tokens overlay.default', () => {
    expect(importableColors.overlay.default).toStrictEqual(
      designTokens.dark.colors.overlay.default.value,
    );
  });

  it('js tokens for overlay.alternative matches figma tokens overlay.alternative', () => {
    expect(importableColors.overlay.alternative).toStrictEqual(
      designTokens.dark.colors.overlay.alternative.value,
    );
  });

  it('js tokens for primary.default matches figma tokens primary.default', () => {
    expect(importableColors.primary.default).toStrictEqual(
      designTokens.dark.colors.primary.default.value,
    );
  });

  it('js tokens for primary.default-hover matches figma tokens primary.default-hover in dark mode', () => {
    expect(importableColors.primary.defaultHover).toStrictEqual(
      designTokens.dark.colors.primary['default-hover'].value,
    );
  });

  it('js tokens for primary.default-pressed matches figma tokens primary.default-pressed in dark mode', () => {
    expect(importableColors.primary.defaultPressed).toStrictEqual(
      designTokens.dark.colors.primary['default-pressed'].value,
    );
  });

  it('js tokens for primary.alternative matches figma tokens primary.alternative', () => {
    expect(importableColors.primary.alternative).toStrictEqual(
      designTokens.dark.colors.primary.alternative.value,
    );
  });

  it('js tokens for primary.muted matches figma tokens primary.muted', () => {
    expect(importableColors.primary.muted).toStrictEqual(
      designTokens.dark.colors.primary.muted.value,
    );
  });

  it('js tokens for primary.inverse matches figma tokens primary.inverse', () => {
    expect(importableColors.primary.inverse).toStrictEqual(
      designTokens.dark.colors.primary.inverse.value,
    );
  });

  it('js tokens for error.default matches figma tokens error.default', () => {
    expect(importableColors.error.default).toStrictEqual(
      designTokens.dark.colors.error.default.value,
    );
  });

  it('js tokens for error.default-hover matches figma tokens error.default-hover in dark mode', () => {
    expect(importableColors.error.defaultHover).toStrictEqual(
      designTokens.dark.colors.error['default-hover'].value,
    );
  });

  it('js tokens for error.default-pressed matches figma tokens error.default-pressed in dark mode', () => {
    expect(importableColors.error.defaultPressed).toStrictEqual(
      designTokens.dark.colors.error['default-pressed'].value,
    );
  });

  it('js tokens for error.alternative matches figma tokens error.alternative', () => {
    expect(importableColors.error.alternative).toStrictEqual(
      designTokens.dark.colors.error.alternative.value,
    );
  });

  it('js tokens for error.muted matches figma tokens error.muted', () => {
    expect(importableColors.error.muted).toStrictEqual(
      designTokens.dark.colors.error.muted.value,
    );
  });

  it('js tokens for error.inverse matches figma tokens error.inverse', () => {
    expect(importableColors.error.inverse).toStrictEqual(
      designTokens.dark.colors.error.inverse.value,
    );
  });

  it('js tokens for warning.default matches figma tokens warning.default', () => {
    expect(importableColors.warning.default).toStrictEqual(
      designTokens.dark.colors.warning.default.value,
    );
  });

  it('js tokens for warning.default-hover matches figma tokens warning.default-hover in dark mode', () => {
    expect(importableColors.warning.defaultHover).toStrictEqual(
      designTokens.dark.colors.warning['default-hover'].value,
    );
  });

  it('js tokens for warning.default-pressed matches figma tokens warning.default-pressed in dark mode', () => {
    expect(importableColors.warning.defaultPressed).toStrictEqual(
      designTokens.dark.colors.warning['default-pressed'].value,
    );
  });

  it('js tokens for warning.muted matches figma tokens warning.muted', () => {
    expect(importableColors.warning.muted).toStrictEqual(
      designTokens.dark.colors.warning.muted.value,
    );
  });

  it('js tokens for warning.inverse matches figma tokens warning.inverse', () => {
    expect(importableColors.warning.inverse).toStrictEqual(
      designTokens.dark.colors.warning.inverse.value,
    );
  });

  it('js tokens for success.default matches figma tokens success.default', () => {
    expect(importableColors.success.default).toStrictEqual(
      designTokens.dark.colors.success.default.value,
    );
  });

  it('js tokens for success.default-hover matches figma tokens success.default-hover in dark mode', () => {
    expect(importableColors.success.defaultHover).toStrictEqual(
      designTokens.dark.colors.success['default-hover'].value,
    );
  });

  it('js tokens for success.default-pressed matches figma tokens success.default-pressed in dark mode', () => {
    expect(importableColors.success.defaultPressed).toStrictEqual(
      designTokens.dark.colors.success['default-pressed'].value,
    );
  });

  it('js tokens for success.muted matches figma tokens success.muted', () => {
    expect(importableColors.success.muted).toStrictEqual(
      designTokens.dark.colors.success.muted.value,
    );
  });

  it('js tokens for success.inverse matches figma tokens success.inverse', () => {
    expect(importableColors.success.inverse).toStrictEqual(
      designTokens.dark.colors.success.inverse.value,
    );
  });

  it('js tokens for info.default matches figma tokens info.default', () => {
    expect(importableColors.info.default).toStrictEqual(
      designTokens.dark.colors.info.default.value,
    );
  });

  it('js tokens for info.muted matches figma tokens info.muted', () => {
    expect(importableColors.info.muted).toStrictEqual(
      designTokens.dark.colors.info.muted.value,
    );
  });

  it('js tokens for info.inverse matches figma tokens info.inverse', () => {
    expect(importableColors.info.inverse).toStrictEqual(
      designTokens.dark.colors.info.inverse.value,
    );
  });

  it('js tokens for flask.default matches figma tokens flask.default', () => {
    expect(importableColors.flask.default).toStrictEqual(
      designTokens.dark.colors.flask.default.value,
    );
  });

  it('js tokens for flask.inverse matches figma tokens flask.inverse', () => {
    expect(importableColors.flask.inverse).toStrictEqual(
      designTokens.dark.colors.flask.inverse.value,
    );
  });

  it('js tokens for shadow.default matches figma tokens dark.shadows.xs.value.color', () => {
    expect(importableColors.shadow.default).toStrictEqual(
      designTokens.dark.shadows.xs.value.color,
    );

    expect(importableColors.shadow.default).toStrictEqual(
      designTokens.dark.shadows.sm.value.color,
    );

    expect(importableColors.shadow.default).toStrictEqual(
      designTokens.dark.shadows.md.value.color,
    );

    expect(importableColors.shadow.default).toStrictEqual(
      designTokens.dark.shadows.lg.value.color,
    );
  });

  it('js tokens for shadow.primary matches figma tokens shadows.primary', () => {
    expect(importableColors.shadow.primary).toStrictEqual(
      designTokens.dark.shadows.primary.value.color,
    );
  });

  it('js tokens for shadow.error matches figma tokens shadows.error', () => {
    expect(importableColors.shadow.error).toStrictEqual(
      designTokens.dark.shadows.error.value.color,
    );
  });
});
