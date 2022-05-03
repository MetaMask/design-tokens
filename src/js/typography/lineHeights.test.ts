/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { lineHeights } from './lineHeights';

const designTokens = require('../../figma/tokens.json');

describe('Line Height', () => {
  it('matches the typescript lineHeights1 with the figma tokens lineHeights6', () => {
    expect(lineHeights.lineHeight1.toString()).toStrictEqual(
      designTokens.global.lineHeights[6].value,
    );
  });

  it('matches the typescript lineHeights2 with the figma tokens lineHeights5', () => {
    expect(lineHeights.lineHeight2.toString()).toStrictEqual(
      designTokens.global.lineHeights[5].value,
    );
  });

  it('matches the typescript lineHeights3 with the figma tokens lineHeights4', () => {
    expect(lineHeights.lineHeight3.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );
  });

  it('matches the typescript lineHeights4 with the figma tokens lineHeights3', () => {
    expect(lineHeights.lineHeight4.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );
  });

  it('matches the typescript lineHeights5 with the figma tokens lineHeights2', () => {
    expect(lineHeights.lineHeight5.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );
  });

  it('matches the typescript lineHeights6 with the figma tokens lineHeights1', () => {
    expect(lineHeights.lineHeight6.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );
  });

  it('matches the typescript lineHeights7 with the figma tokens lineHeights0', () => {
    expect(lineHeights.lineHeight7.toString()).toStrictEqual(
      designTokens.global.lineHeights[0].value,
    );
  });
});
