/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { fontSizes } from './fontSizes';

const designTokens = require('../../figma/tokens.json');

describe('Font Size', () => {
  it('matches the typescript fontSize1 with the figma tokens fontSize0', () => {
    expect(fontSizes.fontSize1.toString()).toStrictEqual(
      designTokens.global.fontSize[0].value,
    );
  });

  it('matches the typescript fontSize2 with the figma tokens fontSize1', () => {
    expect(fontSizes.fontSize2.toString()).toStrictEqual(
      designTokens.global.fontSize[1].value,
    );
  });

  it('matches the typescript fontSize3 with the figma tokens fontSize2', () => {
    expect(fontSizes.fontSize3.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );
  });

  it('matches the typescript fontSize4 with the figma tokens fontSize3', () => {
    expect(fontSizes.fontSize4.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );
  });

  it('matches the typescript fontSize5 with the figma tokens fontSize4', () => {
    expect(fontSizes.fontSize5.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );
  });

  it('matches the typescript fontSize6 with the figma tokens fontSize5', () => {
    expect(fontSizes.fontSize6.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );
  });

  it('matches the typescript fontSize7 with the figma tokens fontSize6', () => {
    expect(fontSizes.fontSize7.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );
  });
});
