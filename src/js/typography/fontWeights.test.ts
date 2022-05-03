/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { fontWeights } from './fontWeights';

const designTokens = require('../../figma/tokens.json');

describe('Font Size', () => {
  it('euclid-circular-b-0 should equal Medium / 500', () => {
    expect(
      designTokens.global.fontWeights['euclid-circular-b-0'].value,
    ).toStrictEqual('Medium');
    expect(fontWeights.medium).toStrictEqual(500);
  });

  it('euclid-circular-b-1 should equal Bold / 700', () => {
    expect(
      designTokens.global.fontWeights['euclid-circular-b-1'].value,
    ).toStrictEqual('Bold');
    expect(fontWeights.bold).toStrictEqual(700);
  });

  it('euclid-circular-b-1 should equal Regular / 400', () => {
    expect(
      designTokens.global.fontWeights['euclid-circular-b-2'].value,
    ).toStrictEqual('Regular');
    expect(fontWeights.regular).toStrictEqual(400);
  });
});
