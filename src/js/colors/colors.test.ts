/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { colors as importableColors } from '.';

const designTokens = require('../../figma/tokens.json');

// js tokens for font family matches figma tokens

describe('Light Theme Colors', () => {
  it('js tokens for background.default matches figma tokens background.default', () => {
    expect(importableColors.light.background.default).toStrictEqual(
      designTokens.light.colors.background.default.value,
    );
  });

  it('js tokens for background.alternative matches figma tokens background.alternative', () => {
    expect(importableColors.light.background.alternative).toStrictEqual(
      designTokens.light.colors.background.alternative.value,
    );
  });

  it('js tokens for text.default matches figma tokens text.default', () => {
    expect(importableColors.light.text.default).toStrictEqual(
      designTokens.light.colors.text.default.value,
    );
  });

  it('js tokens for text.alternative matches figma tokens text.alternative', () => {
    expect(importableColors.light.text.alternative).toStrictEqual(
      designTokens.light.colors.text.alternative.value,
    );
  });

  it('js tokens for text.muted matches figma tokens text.muted', () => {
    expect(importableColors.light.text.muted).toStrictEqual(
      designTokens.light.colors.text.muted.value,
    );
  });

  it('js tokens for icon.default matches figma tokens icon.default', () => {
    expect(importableColors.light.icon.default).toStrictEqual(
      designTokens.light.colors.icon.default.value,
    );
  });

  it('js tokens for icon.alternative matches figma tokens icon.alternative', () => {
    expect(importableColors.light.icon.alternative).toStrictEqual(
      designTokens.light.colors.icon.alternative.value,
    );
  });

  it('js tokens for icon.muted matches figma tokens icon.muted', () => {
    expect(importableColors.light.icon.muted).toStrictEqual(
      designTokens.light.colors.icon.muted.value,
    );
  });

  it('js tokens for border.default matches figma tokens border.default', () => {
    expect(importableColors.light.border.default).toStrictEqual(
      designTokens.light.colors.border.default.value,
    );
  });

  it('js tokens for border.muted matches figma tokens border.muted', () => {
    expect(importableColors.light.border.muted).toStrictEqual(
      designTokens.light.colors.border.muted.value,
    );
  });

  it('js tokens for overlay.default matches figma tokens overlay.default', () => {
    expect(importableColors.light.overlay.default).toStrictEqual(
      designTokens.light.colors.overlay.default.value,
    );
  });

  it('js tokens for overlay.alternative matches figma tokens overlay.alternative', () => {
    expect(importableColors.light.overlay.alternative).toStrictEqual(
      designTokens.light.colors.overlay.alternative.value,
    );
  });

  it('js tokens for overlay.inverse matches figma tokens overlay.inverse', () => {
    expect(importableColors.light.overlay.inverse).toStrictEqual(
      designTokens.light.colors.overlay.inverse.value,
    );
  });

  it('js tokens for primary.default matches figma tokens primary.default', () => {
    expect(importableColors.light.primary.default).toStrictEqual(
      designTokens.light.colors.primary.default.value,
    );
  });

  it('js tokens for primary.alternative matches figma tokens primary.alternative', () => {
    expect(importableColors.light.primary.alternative).toStrictEqual(
      designTokens.light.colors.primary.alternative.value,
    );
  });

  it('js tokens for primary.muted matches figma tokens primary.muted', () => {
    expect(importableColors.light.primary.muted).toStrictEqual(
      designTokens.light.colors.primary.muted.value,
    );
  });

  it('js tokens for primary.inverse matches figma tokens primary.inverse', () => {
    expect(importableColors.light.primary.inverse).toStrictEqual(
      designTokens.light.colors.primary.inverse.value,
    );
  });

  it('js tokens for secondary.default matches figma tokens secondary.default', () => {
    expect(importableColors.light.secondary.default).toStrictEqual(
      designTokens.light.colors.secondary.default.value,
    );
  });

  it('js tokens for secondary.alternative matches figma tokens secondary.alternative', () => {
    expect(importableColors.light.secondary.alternative).toStrictEqual(
      designTokens.light.colors.secondary.alternative.value,
    );
  });

  it('js tokens for secondary.muted matches figma tokens secondary.muted', () => {
    expect(importableColors.light.secondary.muted).toStrictEqual(
      designTokens.light.colors.secondary.muted.value,
    );
  });

  it('js tokens for secondary.inverse matches figma tokens secondary.inverse', () => {
    expect(importableColors.light.secondary.inverse).toStrictEqual(
      designTokens.light.colors.secondary.inverse.value,
    );
  });

  it('js tokens for error.default matches figma tokens error.default', () => {
    expect(importableColors.light.error.default).toStrictEqual(
      designTokens.light.colors.error.default.value,
    );
  });

  it('js tokens for error.alternative matches figma tokens error.alternative', () => {
    expect(importableColors.light.error.alternative).toStrictEqual(
      designTokens.light.colors.error.alternative.value,
    );
  });

  it('js tokens for error.muted matches figma tokens error.muted', () => {
    expect(importableColors.light.error.muted).toStrictEqual(
      designTokens.light.colors.error.muted.value,
    );
  });

  it('js tokens for error.inverse matches figma tokens error.inverse', () => {
    expect(importableColors.light.error.inverse).toStrictEqual(
      designTokens.light.colors.error.inverse.value,
    );
  });

  it('js tokens for warning.default matches figma tokens warning.default', () => {
    expect(importableColors.light.warning.default).toStrictEqual(
      designTokens.light.colors.warning.default.value,
    );
  });

  it('js tokens for warning.alternative matches figma tokens warning.alternative', () => {
    expect(importableColors.light.warning.alternative).toStrictEqual(
      designTokens.light.colors.warning.alternative.value,
    );
  });

  it('js tokens for warning.muted matches figma tokens warning.muted', () => {
    expect(importableColors.light.warning.muted).toStrictEqual(
      designTokens.light.colors.warning.muted.value,
    );
  });

  it('js tokens for warning.inverse matches figma tokens warning.inverse', () => {
    expect(importableColors.light.warning.inverse).toStrictEqual(
      designTokens.light.colors.warning.inverse.value,
    );
  });

  it('js tokens for success.default matches figma tokens success.default', () => {
    expect(importableColors.light.success.default).toStrictEqual(
      designTokens.light.colors.success.default.value,
    );
  });

  it('js tokens for success.alternative matches figma tokens success.alternative', () => {
    expect(importableColors.light.success.alternative).toStrictEqual(
      designTokens.light.colors.success.alternative.value,
    );
  });

  it('js tokens for success.muted matches figma tokens success.muted', () => {
    expect(importableColors.light.success.muted).toStrictEqual(
      designTokens.light.colors.success.muted.value,
    );
  });

  it('js tokens for success.inverse matches figma tokens success.inverse', () => {
    expect(importableColors.light.success.inverse).toStrictEqual(
      designTokens.light.colors.success.inverse.value,
    );
  });

  it('js tokens for info.default matches figma tokens info.default', () => {
    expect(importableColors.light.info.default).toStrictEqual(
      designTokens.light.colors.info.default.value,
    );
  });

  it('js tokens for info.alternative matches figma tokens info.alternative', () => {
    expect(importableColors.light.info.alternative).toStrictEqual(
      designTokens.light.colors.info.alternative.value,
    );
  });

  it('js tokens for info.muted matches figma tokens info.muted', () => {
    expect(importableColors.light.info.muted).toStrictEqual(
      designTokens.light.colors.info.muted.value,
    );
  });

  it('js tokens for info.inverse matches figma tokens info.inverse', () => {
    expect(importableColors.light.info.inverse).toStrictEqual(
      designTokens.light.colors.info.inverse.value,
    );
  });
});

describe('Dark Theme Colors', () => {
  it('js tokens for background.default matches figma tokens background.default', () => {
    expect(importableColors.dark.background.default).toStrictEqual(
      designTokens.dark.colors.background.default.value,
    );
  });

  it('js tokens for background.alternative matches figma tokens background.alternative', () => {
    expect(importableColors.dark.background.alternative).toStrictEqual(
      designTokens.dark.colors.background.alternative.value,
    );
  });

  it('js tokens for text.default matches figma tokens text.default', () => {
    expect(importableColors.dark.text.default).toStrictEqual(
      designTokens.dark.colors.text.default.value,
    );
  });

  it('js tokens for text.alternative matches figma tokens text.alternative', () => {
    expect(importableColors.dark.text.alternative).toStrictEqual(
      designTokens.dark.colors.text.alternative.value,
    );
  });

  it('js tokens for text.muted matches figma tokens text.muted', () => {
    expect(importableColors.dark.text.muted).toStrictEqual(
      designTokens.dark.colors.text.muted.value,
    );
  });

  it('js tokens for icon.default matches figma tokens icon.default', () => {
    expect(importableColors.dark.icon.default).toStrictEqual(
      designTokens.dark.colors.icon.default.value,
    );
  });

  it('js tokens for icon.alternative matches figma tokens icon.alternative', () => {
    expect(importableColors.dark.icon.alternative).toStrictEqual(
      designTokens.dark.colors.icon.alternative.value,
    );
  });

  it('js tokens for icon.muted matches figma tokens icon.muted', () => {
    expect(importableColors.dark.icon.muted).toStrictEqual(
      designTokens.dark.colors.icon.muted.value,
    );
  });

  it('js tokens for border.default matches figma tokens border.default', () => {
    expect(importableColors.dark.border.default).toStrictEqual(
      designTokens.dark.colors.border.default.value,
    );
  });

  it('js tokens for border.muted matches figma tokens border.muted', () => {
    expect(importableColors.dark.border.muted).toStrictEqual(
      designTokens.dark.colors.border.muted.value,
    );
  });

  it('js tokens for overlay.default matches figma tokens overlay.default', () => {
    expect(importableColors.dark.overlay.default).toStrictEqual(
      designTokens.dark.colors.overlay.default.value,
    );
  });

  it('js tokens for overlay.alternative matches figma tokens overlay.alternative', () => {
    expect(importableColors.dark.overlay.alternative).toStrictEqual(
      designTokens.dark.colors.overlay.alternative.value,
    );
  });

  it('js tokens for overlay.inverse matches figma tokens overlay.inverse', () => {
    expect(importableColors.dark.overlay.inverse).toStrictEqual(
      designTokens.dark.colors.overlay.inverse.value,
    );
  });

  it('js tokens for primary.default matches figma tokens primary.default', () => {
    expect(importableColors.dark.primary.default).toStrictEqual(
      designTokens.dark.colors.primary.default.value,
    );
  });

  it('js tokens for primary.alternative matches figma tokens primary.alternative', () => {
    expect(importableColors.dark.primary.alternative).toStrictEqual(
      designTokens.dark.colors.primary.alternative.value,
    );
  });

  it('js tokens for primary.muted matches figma tokens primary.muted', () => {
    expect(importableColors.dark.primary.muted).toStrictEqual(
      designTokens.dark.colors.primary.muted.value,
    );
  });

  it('js tokens for primary.inverse matches figma tokens primary.inverse', () => {
    expect(importableColors.dark.primary.inverse).toStrictEqual(
      designTokens.dark.colors.primary.inverse.value,
    );
  });

  it('js tokens for secondary.default matches figma tokens secondary.default', () => {
    expect(importableColors.dark.secondary.default).toStrictEqual(
      designTokens.dark.colors.secondary.default.value,
    );
  });

  it('js tokens for secondary.alternative matches figma tokens secondary.alternative', () => {
    expect(importableColors.dark.secondary.alternative).toStrictEqual(
      designTokens.dark.colors.secondary.alternative.value,
    );
  });

  it('js tokens for secondary.muted matches figma tokens secondary.muted', () => {
    expect(importableColors.dark.secondary.muted).toStrictEqual(
      designTokens.dark.colors.secondary.muted.value,
    );
  });

  it('js tokens for secondary.inverse matches figma tokens secondary.inverse', () => {
    expect(importableColors.dark.secondary.inverse).toStrictEqual(
      designTokens.dark.colors.secondary.inverse.value,
    );
  });

  it('js tokens for error.default matches figma tokens error.default', () => {
    expect(importableColors.dark.error.default).toStrictEqual(
      designTokens.dark.colors.error.default.value,
    );
  });

  it('js tokens for error.alternative matches figma tokens error.alternative', () => {
    expect(importableColors.dark.error.alternative).toStrictEqual(
      designTokens.dark.colors.error.alternative.value,
    );
  });

  it('js tokens for error.muted matches figma tokens error.muted', () => {
    expect(importableColors.dark.error.muted).toStrictEqual(
      designTokens.dark.colors.error.muted.value,
    );
  });

  it('js tokens for error.inverse matches figma tokens error.inverse', () => {
    expect(importableColors.dark.error.inverse).toStrictEqual(
      designTokens.dark.colors.error.inverse.value,
    );
  });

  it('js tokens for warning.default matches figma tokens warning.default', () => {
    expect(importableColors.dark.warning.default).toStrictEqual(
      designTokens.dark.colors.warning.default.value,
    );
  });

  it('js tokens for warning.alternative matches figma tokens warning.alternative', () => {
    expect(importableColors.dark.warning.alternative).toStrictEqual(
      designTokens.dark.colors.warning.alternative.value,
    );
  });

  it('js tokens for warning.muted matches figma tokens warning.muted', () => {
    expect(importableColors.dark.warning.muted).toStrictEqual(
      designTokens.dark.colors.warning.muted.value,
    );
  });

  it('js tokens for warning.inverse matches figma tokens warning.inverse', () => {
    expect(importableColors.dark.warning.inverse).toStrictEqual(
      designTokens.dark.colors.warning.inverse.value,
    );
  });

  it('js tokens for success.default matches figma tokens success.default', () => {
    expect(importableColors.dark.success.default).toStrictEqual(
      designTokens.dark.colors.success.default.value,
    );
  });

  it('js tokens for success.alternative matches figma tokens success.alternative', () => {
    expect(importableColors.dark.success.alternative).toStrictEqual(
      designTokens.dark.colors.success.alternative.value,
    );
  });

  it('js tokens for success.muted matches figma tokens success.muted', () => {
    expect(importableColors.dark.success.muted).toStrictEqual(
      designTokens.dark.colors.success.muted.value,
    );
  });

  it('js tokens for success.inverse matches figma tokens success.inverse', () => {
    expect(importableColors.dark.success.inverse).toStrictEqual(
      designTokens.dark.colors.success.inverse.value,
    );
  });

  it('js tokens for info.default matches figma tokens info.default', () => {
    expect(importableColors.dark.info.default).toStrictEqual(
      designTokens.dark.colors.info.default.value,
    );
  });

  it('js tokens for info.alternative matches figma tokens info.alternative', () => {
    expect(importableColors.dark.info.alternative).toStrictEqual(
      designTokens.dark.colors.info.alternative.value,
    );
  });

  it('js tokens for info.muted matches figma tokens info.muted', () => {
    expect(importableColors.dark.info.muted).toStrictEqual(
      designTokens.dark.colors.info.muted.value,
    );
  });

  it('js tokens for info.inverse matches figma tokens info.inverse', () => {
    expect(importableColors.dark.info.inverse).toStrictEqual(
      designTokens.dark.colors.info.inverse.value,
    );
  });
});
