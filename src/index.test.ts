/* eslint-ignore @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { colors as importableColors } from '.';

const designTokens = require('./figma/tokens.json');

describe('Colors', () => {
  it('Importable colors match figma colors', () => {
    expect(importableColors.dark.background.default).toStrictEqual(
      designTokens.dark.colors.background.default.value,
    );
  });
});
