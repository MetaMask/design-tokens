/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { brandColors } from './brandColors';

const designTokens = require('../../figma/tokens.json');

describe('Brand Colors', () => {
  describe('White', () => {
    it('js tokens for white000 matches figma tokens white000', () => {
      expect(brandColors.white['000']).toStrictEqual(
        designTokens.global.brandColors.white.white000.value,
      );
    });

    it('js tokens for white010 matches figma tokens white010', () => {
      expect(brandColors.white['010']).toStrictEqual(
        designTokens.global.brandColors.white.white010.value,
      );
    });
  });

  describe('Black', () => {
    it('js tokens for black000 matches figma tokens black000', () => {
      expect(brandColors.black['000']).toStrictEqual(
        designTokens.global.brandColors.black.black000.value,
      );
    });
  });

  describe('Grey', () => {
    it('js tokens for grey030 matches figma tokens grey030', () => {
      expect(brandColors.grey['030']).toStrictEqual(
        designTokens.global.brandColors.grey.grey030.value,
      );
    });

    it('js tokens for grey040 matches figma tokens grey040', () => {
      expect(brandColors.grey['040']).toStrictEqual(
        designTokens.global.brandColors.grey.grey040.value,
      );
    });

    it('js tokens for grey100 matches figma tokens grey100', () => {
      expect(brandColors.grey['100']).toStrictEqual(
        designTokens.global.brandColors.grey.grey100.value,
      );
    });

    it('js tokens for grey200 matches figma tokens grey200', () => {
      expect(brandColors.grey['200']).toStrictEqual(
        designTokens.global.brandColors.grey.grey200.value,
      );
    });

    it('js tokens for grey300 matches figma tokens grey300', () => {
      expect(brandColors.grey['300']).toStrictEqual(
        designTokens.global.brandColors.grey.grey300.value,
      );
    });

    it('js tokens for grey400 matches figma tokens grey400', () => {
      expect(brandColors.grey['400']).toStrictEqual(
        designTokens.global.brandColors.grey.grey400.value,
      );
    });

    it('js tokens for grey500 matches figma tokens grey500', () => {
      expect(brandColors.grey['500']).toStrictEqual(
        designTokens.global.brandColors.grey.grey500.value,
      );
    });

    it('js tokens for grey600 matches figma tokens grey600', () => {
      expect(brandColors.grey['600']).toStrictEqual(
        designTokens.global.brandColors.grey.grey600.value,
      );
    });

    it('js tokens for grey700 matches figma tokens grey700', () => {
      expect(brandColors.grey['700']).toStrictEqual(
        designTokens.global.brandColors.grey.grey700.value,
      );
    });

    it('js tokens for grey750 matches figma tokens grey750', () => {
      expect(brandColors.grey['750']).toStrictEqual(
        designTokens.global.brandColors.grey.grey750.value,
      );
    });

    it('js tokens for grey800 matches figma tokens grey800', () => {
      expect(brandColors.grey['800']).toStrictEqual(
        designTokens.global.brandColors.grey.grey800.value,
      );
    });

    it('js tokens for grey900 matches figma tokens grey900', () => {
      expect(brandColors.grey['900']).toStrictEqual(
        designTokens.global.brandColors.grey.grey900.value,
      );
    });
  });

  describe('Blue', () => {
    it('js tokens for blue000 matches figma tokens blue000', () => {
      expect(brandColors.blue['000']).toStrictEqual(
        designTokens.global.brandColors.blue.blue000.value,
      );
    });

    it('js tokens for blue100 matches figma tokens blue100', () => {
      expect(brandColors.blue['100']).toStrictEqual(
        designTokens.global.brandColors.blue.blue100.value,
      );
    });

    it('js tokens for blue200 matches figma tokens blue200', () => {
      expect(brandColors.blue['200']).toStrictEqual(
        designTokens.global.brandColors.blue.blue200.value,
      );
    });

    it('js tokens for blue300 matches figma tokens blue300', () => {
      expect(brandColors.blue['300']).toStrictEqual(
        designTokens.global.brandColors.blue.blue300.value,
      );
    });

    it('js tokens for blue400 matches figma tokens blue400', () => {
      expect(brandColors.blue['400']).toStrictEqual(
        designTokens.global.brandColors.blue.blue400.value,
      );
    });

    it('js tokens for blue500 matches figma tokens blue500', () => {
      expect(brandColors.blue['500']).toStrictEqual(
        designTokens.global.brandColors.blue.blue500.value,
      );
    });

    it('js tokens for blue600 matches figma tokens blue600', () => {
      expect(brandColors.blue['600']).toStrictEqual(
        designTokens.global.brandColors.blue.blue600.value,
      );
    });

    it('js tokens for blue700 matches figma tokens blue700', () => {
      expect(brandColors.blue['700']).toStrictEqual(
        designTokens.global.brandColors.blue.blue700.value,
      );
    });

    it('js tokens for blue800 matches figma tokens blue800', () => {
      expect(brandColors.blue['800']).toStrictEqual(
        designTokens.global.brandColors.blue.blue800.value,
      );
    });

    it('js tokens for blue900 matches figma tokens blue900', () => {
      expect(brandColors.blue['900']).toStrictEqual(
        designTokens.global.brandColors.blue.blue900.value,
      );
    });
  });

  describe('Orange', () => {
    it('js tokens for orange000 matches figma tokens orange000', () => {
      expect(brandColors.orange['000']).toStrictEqual(
        designTokens.global.brandColors.orange.orange000.value,
      );
    });

    it('js tokens for orange100 matches figma tokens orange100', () => {
      expect(brandColors.orange['100']).toStrictEqual(
        designTokens.global.brandColors.orange.orange100.value,
      );
    });

    it('js tokens for orange200 matches figma tokens orange200', () => {
      expect(brandColors.orange['200']).toStrictEqual(
        designTokens.global.brandColors.orange.orange200.value,
      );
    });

    it('js tokens for orange300 matches figma tokens orange300', () => {
      expect(brandColors.orange['300']).toStrictEqual(
        designTokens.global.brandColors.orange.orange300.value,
      );
    });

    it('js tokens for orange400 matches figma tokens orange400', () => {
      expect(brandColors.orange['400']).toStrictEqual(
        designTokens.global.brandColors.orange.orange400.value,
      );
    });

    it('js tokens for orange500 matches figma tokens orange500', () => {
      expect(brandColors.orange['500']).toStrictEqual(
        designTokens.global.brandColors.orange.orange500.value,
      );
    });

    it('js tokens for orange600 matches figma tokens orange600', () => {
      expect(brandColors.orange['600']).toStrictEqual(
        designTokens.global.brandColors.orange.orange600.value,
      );
    });

    it('js tokens for orange700 matches figma tokens orange700', () => {
      expect(brandColors.orange['700']).toStrictEqual(
        designTokens.global.brandColors.orange.orange700.value,
      );
    });

    it('js tokens for orange800 matches figma tokens orange800', () => {
      expect(brandColors.orange['800']).toStrictEqual(
        designTokens.global.brandColors.orange.orange800.value,
      );
    });

    it('js tokens for orange900 matches figma tokens orange900', () => {
      expect(brandColors.orange['900']).toStrictEqual(
        designTokens.global.brandColors.orange.orange900.value,
      );
    });
  });

  describe('Green', () => {
    it('js tokens for green000 matches figma tokens green000', () => {
      expect(brandColors.green['000']).toStrictEqual(
        designTokens.global.brandColors.green.green000.value,
      );
    });

    it('js tokens for green100 matches figma tokens green100', () => {
      expect(brandColors.green['100']).toStrictEqual(
        designTokens.global.brandColors.green.green100.value,
      );
    });

    it('js tokens for green200 matches figma tokens green200', () => {
      expect(brandColors.green['200']).toStrictEqual(
        designTokens.global.brandColors.green.green200.value,
      );
    });

    it('js tokens for green300 matches figma tokens green300', () => {
      expect(brandColors.green['300']).toStrictEqual(
        designTokens.global.brandColors.green.green300.value,
      );
    });

    it('js tokens for green400 matches figma tokens green400', () => {
      expect(brandColors.green['400']).toStrictEqual(
        designTokens.global.brandColors.green.green400.value,
      );
    });

    it('js tokens for green500 matches figma tokens green500', () => {
      expect(brandColors.green['500']).toStrictEqual(
        designTokens.global.brandColors.green.green500.value,
      );
    });

    it('js tokens for green600 matches figma tokens green600', () => {
      expect(brandColors.green['600']).toStrictEqual(
        designTokens.global.brandColors.green.green600.value,
      );
    });

    it('js tokens for green700 matches figma tokens green700', () => {
      expect(brandColors.green['700']).toStrictEqual(
        designTokens.global.brandColors.green.green700.value,
      );
    });

    it('js tokens for green800 matches figma tokens green800', () => {
      expect(brandColors.green['800']).toStrictEqual(
        designTokens.global.brandColors.green.green800.value,
      );
    });

    it('js tokens for green900 matches figma tokens green900', () => {
      expect(brandColors.green['900']).toStrictEqual(
        designTokens.global.brandColors.green.green900.value,
      );
    });
  });

  describe('Red', () => {
    it('js tokens for red000 matches figma tokens red000', () => {
      expect(brandColors.red['000']).toStrictEqual(
        designTokens.global.brandColors.red.red000.value,
      );
    });

    it('js tokens for red100 matches figma tokens red100', () => {
      expect(brandColors.red['100']).toStrictEqual(
        designTokens.global.brandColors.red.red100.value,
      );
    });

    it('js tokens for red200 matches figma tokens red200', () => {
      expect(brandColors.red['200']).toStrictEqual(
        designTokens.global.brandColors.red.red200.value,
      );
    });

    it('js tokens for red300 matches figma tokens red300', () => {
      expect(brandColors.red['300']).toStrictEqual(
        designTokens.global.brandColors.red.red300.value,
      );
    });

    it('js tokens for red400 matches figma tokens red400', () => {
      expect(brandColors.red['400']).toStrictEqual(
        designTokens.global.brandColors.red.red400.value,
      );
    });

    it('js tokens for red500 matches figma tokens red500', () => {
      expect(brandColors.red['500']).toStrictEqual(
        designTokens.global.brandColors.red.red500.value,
      );
    });

    it('js tokens for red600 matches figma tokens red600', () => {
      expect(brandColors.red['600']).toStrictEqual(
        designTokens.global.brandColors.red.red600.value,
      );
    });

    it('js tokens for red700 matches figma tokens red700', () => {
      expect(brandColors.red['700']).toStrictEqual(
        designTokens.global.brandColors.red.red700.value,
      );
    });

    it('js tokens for red800 matches figma tokens red800', () => {
      expect(brandColors.red['800']).toStrictEqual(
        designTokens.global.brandColors.red.red800.value,
      );
    });

    it('js tokens for red900 matches figma tokens red900', () => {
      expect(brandColors.red['900']).toStrictEqual(
        designTokens.global.brandColors.red.red900.value,
      );
    });
  });

  describe('Purple', () => {
    it('js tokens for purple500 matches figma tokens purple500', () => {
      expect(brandColors.purple['500']).toStrictEqual(
        designTokens.global.brandColors.purple.purple500.value,
      );
    });
  });

  describe('Violet', () => {
    it('js tokens for violet300 matches figma tokens violet300', () => {
      expect(brandColors.violet['300']).toStrictEqual(
        designTokens.global.brandColors.violet.violet300.value,
      );
    });
  });

  describe('Yellow', () => {
    it('js tokens for yellow000 matches figma tokens yellow000', () => {
      expect(brandColors.yellow['000']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow000.value,
      );
    });

    it('js tokens for yellow100 matches figma tokens yellow100', () => {
      expect(brandColors.yellow['100']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow100.value,
      );
    });

    it('js tokens for yellow200 matches figma tokens yellow200', () => {
      expect(brandColors.yellow['200']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow200.value,
      );
    });

    it('js tokens for yellow300 matches figma tokens yellow300', () => {
      expect(brandColors.yellow['300']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow300.value,
      );
    });

    it('js tokens for yellow400 matches figma tokens yellow400', () => {
      expect(brandColors.yellow['400']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow400.value,
      );
    });

    it('js tokens for yellow500 matches figma tokens yellow500', () => {
      expect(brandColors.yellow['500']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow500.value,
      );
    });

    it('js tokens for yellow600 matches figma tokens yellow600', () => {
      expect(brandColors.yellow['600']).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow600.value,
      );
    });
  });
});
