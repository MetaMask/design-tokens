/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { letterSpacing } from './letterSpacing';

const designTokens = require('../../figma/tokens.json');

describe('Letter Spacing', () => {
  it('matches the typescript letterSpacing0 with the figma tokens letterSpacing0', () => {
    expect(letterSpacing.letterSpacing0.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('matches the typescript letterSpacing1 with the figma tokens letterSpacing1', () => {
    expect(letterSpacing.letterSpacing1.toString()).toStrictEqual(
      designTokens.global.letterSpacing[1].value,
    );
  });
});
