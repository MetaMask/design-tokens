/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { brandColor } from './brandColor';

const designTokens = require('../../figma/tokens.json');

describe('Brand Color', () => {
  describe('Grey', () => {
    it('js tokens for grey000 matches figma tokens grey000', () => {
      expect(brandColor.grey000).toStrictEqual(
        designTokens.global.brandColors.grey.grey000.value.toLowerCase(),
      );
    });

    it('js tokens for grey025 matches figma tokens grey025', () => {
      expect(brandColor.grey025).toStrictEqual(
        designTokens.global.brandColors.grey.grey025.value.toLowerCase(),
      );
    });

    it('js tokens for grey050 matches figma tokens grey050', () => {
      expect(brandColor.grey050).toStrictEqual(
        designTokens.global.brandColors.grey.grey050.value.toLowerCase(),
      );
    });

    it('js tokens for grey100 matches figma tokens grey100', () => {
      expect(brandColor.grey100).toStrictEqual(
        designTokens.global.brandColors.grey.grey100.value.toLowerCase(),
      );
    });

    it('js tokens for grey200 matches figma tokens grey200', () => {
      expect(brandColor.grey200).toStrictEqual(
        designTokens.global.brandColors.grey.grey200.value.toLowerCase(),
      );
    });

    it('js tokens for grey300 matches figma tokens grey300', () => {
      expect(brandColor.grey300).toStrictEqual(
        designTokens.global.brandColors.grey.grey300.value.toLowerCase(),
      );
    });

    it('js tokens for grey400 matches figma tokens grey400', () => {
      expect(brandColor.grey400).toStrictEqual(
        designTokens.global.brandColors.grey.grey400.value.toLowerCase(),
      );
    });

    it('js tokens for grey500 matches figma tokens grey500', () => {
      expect(brandColor.grey500).toStrictEqual(
        designTokens.global.brandColors.grey.grey500.value.toLowerCase(),
      );
    });

    it('js tokens for grey600 matches figma tokens grey600', () => {
      expect(brandColor.grey600).toStrictEqual(
        designTokens.global.brandColors.grey.grey600.value.toLowerCase(),
      );
    });

    it('js tokens for grey700 matches figma tokens grey700', () => {
      expect(brandColor.grey700).toStrictEqual(
        designTokens.global.brandColors.grey.grey700.value.toLowerCase(),
      );
    });

    it('js tokens for grey800 matches figma tokens grey800', () => {
      expect(brandColor.grey800).toStrictEqual(
        designTokens.global.brandColors.grey.grey800.value.toLowerCase(),
      );
    });

    it('js tokens for grey900 matches figma tokens grey900', () => {
      expect(brandColor.grey900).toStrictEqual(
        designTokens.global.brandColors.grey.grey900.value.toLowerCase(),
      );
    });

    it('js tokens for grey1000 matches figma tokens grey1000', () => {
      expect(brandColor.grey1000).toStrictEqual(
        designTokens.global.brandColors.grey.grey1000.value.toLowerCase(),
      );
    });
  });

  describe('Blue', () => {
    it('js tokens for blue025 matches figma tokens blue025', () => {
      expect(brandColor.blue025).toStrictEqual(
        designTokens.global.brandColors.blue.blue025.value.toLowerCase(),
      );
    });

    it('js tokens for blue050 matches figma tokens blue050', () => {
      expect(brandColor.blue050).toStrictEqual(
        designTokens.global.brandColors.blue.blue050.value.toLowerCase(),
      );
    });

    it('js tokens for blue100 matches figma tokens blue100', () => {
      expect(brandColor.blue100).toStrictEqual(
        designTokens.global.brandColors.blue.blue100.value.toLowerCase(),
      );
    });

    it('js tokens for blue200 matches figma tokens blue200', () => {
      expect(brandColor.blue200).toStrictEqual(
        designTokens.global.brandColors.blue.blue200.value.toLowerCase(),
      );
    });

    it('js tokens for blue300 matches figma tokens blue300', () => {
      expect(brandColor.blue300).toStrictEqual(
        designTokens.global.brandColors.blue.blue300.value.toLowerCase(),
      );
    });

    it('js tokens for blue400 matches figma tokens blue400', () => {
      expect(brandColor.blue400).toStrictEqual(
        designTokens.global.brandColors.blue.blue400.value.toLowerCase(),
      );
    });

    it('js tokens for blue500 matches figma tokens blue500', () => {
      expect(brandColor.blue500).toStrictEqual(
        designTokens.global.brandColors.blue.blue500.value.toLowerCase(),
      );
    });

    it('js tokens for blue600 matches figma tokens blue600', () => {
      expect(brandColor.blue600).toStrictEqual(
        designTokens.global.brandColors.blue.blue600.value.toLowerCase(),
      );
    });

    it('js tokens for blue700 matches figma tokens blue700', () => {
      expect(brandColor.blue700).toStrictEqual(
        designTokens.global.brandColors.blue.blue700.value.toLowerCase(),
      );
    });

    it('js tokens for blue800 matches figma tokens blue800', () => {
      expect(brandColor.blue800).toStrictEqual(
        designTokens.global.brandColors.blue.blue800.value.toLowerCase(),
      );
    });

    it('js tokens for blue900 matches figma tokens blue900', () => {
      expect(brandColor.blue900).toStrictEqual(
        designTokens.global.brandColors.blue.blue900.value.toLowerCase(),
      );
    });
  });

  describe('Green', () => {
    it('js tokens for green025 matches figma tokens green025', () => {
      expect(brandColor.green025).toStrictEqual(
        designTokens.global.brandColors.green.green025.value.toLowerCase(),
      );
    });

    it('js tokens for green050 matches figma tokens green050', () => {
      expect(brandColor.green050).toStrictEqual(
        designTokens.global.brandColors.green.green050.value.toLowerCase(),
      );
    });

    it('js tokens for green100 matches figma tokens green100', () => {
      expect(brandColor.green100).toStrictEqual(
        designTokens.global.brandColors.green.green100.value.toLowerCase(),
      );
    });

    it('js tokens for green200 matches figma tokens green200', () => {
      expect(brandColor.green200).toStrictEqual(
        designTokens.global.brandColors.green.green200.value.toLowerCase(),
      );
    });

    it('js tokens for green300 matches figma tokens green300', () => {
      expect(brandColor.green300).toStrictEqual(
        designTokens.global.brandColors.green.green300.value.toLowerCase(),
      );
    });

    it('js tokens for green400 matches figma tokens green400', () => {
      expect(brandColor.green400).toStrictEqual(
        designTokens.global.brandColors.green.green400.value.toLowerCase(),
      );
    });

    it('js tokens for green500 matches figma tokens green500', () => {
      expect(brandColor.green500).toStrictEqual(
        designTokens.global.brandColors.green.green500.value.toLowerCase(),
      );
    });

    it('js tokens for green600 matches figma tokens green600', () => {
      expect(brandColor.green600).toStrictEqual(
        designTokens.global.brandColors.green.green600.value.toLowerCase(),
      );
    });

    it('js tokens for green700 matches figma tokens green700', () => {
      expect(brandColor.green700).toStrictEqual(
        designTokens.global.brandColors.green.green700.value.toLowerCase(),
      );
    });

    it('js tokens for green800 matches figma tokens green800', () => {
      expect(brandColor.green800).toStrictEqual(
        designTokens.global.brandColors.green.green800.value.toLowerCase(),
      );
    });

    it('js tokens for green900 matches figma tokens green900', () => {
      expect(brandColor.green900).toStrictEqual(
        designTokens.global.brandColors.green.green900.value.toLowerCase(),
      );
    });
  });

  describe('Red', () => {
    it('js tokens for red025 matches figma tokens red025', () => {
      expect(brandColor.red025).toStrictEqual(
        designTokens.global.brandColors.red.red025.value.toLowerCase(),
      );
    });

    it('js tokens for red050 matches figma tokens red050', () => {
      expect(brandColor.red050).toStrictEqual(
        designTokens.global.brandColors.red.red050.value.toLowerCase(),
      );
    });

    it('js tokens for red100 matches figma tokens red100', () => {
      expect(brandColor.red100).toStrictEqual(
        designTokens.global.brandColors.red.red100.value.toLowerCase(),
      );
    });

    it('js tokens for red200 matches figma tokens red200', () => {
      expect(brandColor.red200).toStrictEqual(
        designTokens.global.brandColors.red.red200.value.toLowerCase(),
      );
    });

    it('js tokens for red300 matches figma tokens red300', () => {
      expect(brandColor.red300).toStrictEqual(
        designTokens.global.brandColors.red.red300.value.toLowerCase(),
      );
    });

    it('js tokens for red400 matches figma tokens red400', () => {
      expect(brandColor.red400).toStrictEqual(
        designTokens.global.brandColors.red.red400.value.toLowerCase(),
      );
    });

    it('js tokens for red500 matches figma tokens red500', () => {
      expect(brandColor.red500).toStrictEqual(
        designTokens.global.brandColors.red.red500.value.toLowerCase(),
      );
    });

    it('js tokens for red600 matches figma tokens red600', () => {
      expect(brandColor.red600).toStrictEqual(
        designTokens.global.brandColors.red.red600.value.toLowerCase(),
      );
    });

    it('js tokens for red700 matches figma tokens red700', () => {
      expect(brandColor.red700).toStrictEqual(
        designTokens.global.brandColors.red.red700.value.toLowerCase(),
      );
    });

    it('js tokens for red800 matches figma tokens red800', () => {
      expect(brandColor.red800).toStrictEqual(
        designTokens.global.brandColors.red.red800.value.toLowerCase(),
      );
    });

    it('js tokens for red900 matches figma tokens red900', () => {
      expect(brandColor.red900).toStrictEqual(
        designTokens.global.brandColors.red.red900.value.toLowerCase(),
      );
    });
  });

  describe('Yellow', () => {
    it('js tokens for yellow025 matches figma tokens yellow025', () => {
      expect(brandColor.yellow025).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow025.value.toLowerCase(),
      );
    });

    it('js tokens for yellow050 matches figma tokens yellow050', () => {
      expect(brandColor.yellow050).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow050.value.toLowerCase(),
      );
    });

    it('js tokens for yellow100 matches figma tokens yellow100', () => {
      expect(brandColor.yellow100).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow100.value.toLowerCase(),
      );
    });

    it('js tokens for yellow200 matches figma tokens yellow200', () => {
      expect(brandColor.yellow200).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow200.value.toLowerCase(),
      );
    });

    it('js tokens for yellow300 matches figma tokens yellow300', () => {
      expect(brandColor.yellow300).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow300.value.toLowerCase(),
      );
    });

    it('js tokens for yellow400 matches figma tokens yellow400', () => {
      expect(brandColor.yellow400).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow400.value.toLowerCase(),
      );
    });

    it('js tokens for yellow500 matches figma tokens yellow500', () => {
      expect(brandColor.yellow500).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow500.value.toLowerCase(),
      );
    });

    it('js tokens for yellow600 matches figma tokens yellow600', () => {
      expect(brandColor.yellow600).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow600.value.toLowerCase(),
      );
    });

    it('js tokens for yellow700 matches figma tokens yellow700', () => {
      expect(brandColor.yellow700).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow700.value.toLowerCase(),
      );
    });

    it('js tokens for yellow800 matches figma tokens yellow800', () => {
      expect(brandColor.yellow800).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow800.value.toLowerCase(),
      );
    });

    it('js tokens for yellow900 matches figma tokens yellow900', () => {
      expect(brandColor.yellow900).toStrictEqual(
        designTokens.global.brandColors.yellow.yellow900.value.toLowerCase(),
      );
    });
  });

  describe('Orange', () => {
    it('js tokens for orange025 matches figma tokens orange025', () => {
      expect(brandColor.orange025).toStrictEqual(
        designTokens.global.brandColors.orange.orange025.value.toLowerCase(),
      );
    });

    it('js tokens for orange050 matches figma tokens orange050', () => {
      expect(brandColor.orange050).toStrictEqual(
        designTokens.global.brandColors.orange.orange050.value.toLowerCase(),
      );
    });

    it('js tokens for orange100 matches figma tokens orange100', () => {
      expect(brandColor.orange100).toStrictEqual(
        designTokens.global.brandColors.orange.orange100.value.toLowerCase(),
      );
    });

    it('js tokens for orange200 matches figma tokens orange200', () => {
      expect(brandColor.orange200).toStrictEqual(
        designTokens.global.brandColors.orange.orange200.value.toLowerCase(),
      );
    });

    it('js tokens for orange300 matches figma tokens orange300', () => {
      expect(brandColor.orange300).toStrictEqual(
        designTokens.global.brandColors.orange.orange300.value.toLowerCase(),
      );
    });

    it('js tokens for orange400 matches figma tokens orange400', () => {
      expect(brandColor.orange400).toStrictEqual(
        designTokens.global.brandColors.orange.orange400.value.toLowerCase(),
      );
    });

    it('js tokens for orange500 matches figma tokens orange500', () => {
      expect(brandColor.orange500).toStrictEqual(
        designTokens.global.brandColors.orange.orange500.value.toLowerCase(),
      );
    });

    it('js tokens for orange600 matches figma tokens orange600', () => {
      expect(brandColor.orange600).toStrictEqual(
        designTokens.global.brandColors.orange.orange600.value.toLowerCase(),
      );
    });

    it('js tokens for orange700 matches figma tokens orange700', () => {
      expect(brandColor.orange700).toStrictEqual(
        designTokens.global.brandColors.orange.orange700.value.toLowerCase(),
      );
    });

    it('js tokens for orange800 matches figma tokens orange800', () => {
      expect(brandColor.orange800).toStrictEqual(
        designTokens.global.brandColors.orange.orange800.value.toLowerCase(),
      );
    });

    it('js tokens for orange900 matches figma tokens orange900', () => {
      expect(brandColor.orange900).toStrictEqual(
        designTokens.global.brandColors.orange.orange900.value.toLowerCase(),
      );
    });
  });

  describe('Purple', () => {
    it('js tokens for purple025 matches figma tokens purple025', () => {
      expect(brandColor.purple025).toStrictEqual(
        designTokens.global.brandColors.purple.purple025.value.toLowerCase(),
      );
    });

    it('js tokens for purple050 matches figma tokens purple050', () => {
      expect(brandColor.purple050).toStrictEqual(
        designTokens.global.brandColors.purple.purple050.value.toLowerCase(),
      );
    });

    it('js tokens for purple100 matches figma tokens purple100', () => {
      expect(brandColor.purple100).toStrictEqual(
        designTokens.global.brandColors.purple.purple100.value.toLowerCase(),
      );
    });

    it('js tokens for purple200 matches figma tokens purple200', () => {
      expect(brandColor.purple200).toStrictEqual(
        designTokens.global.brandColors.purple.purple200.value.toLowerCase(),
      );
    });

    it('js tokens for purple300 matches figma tokens purple300', () => {
      expect(brandColor.purple300).toStrictEqual(
        designTokens.global.brandColors.purple.purple300.value.toLowerCase(),
      );
    });

    it('js tokens for purple400 matches figma tokens purple400', () => {
      expect(brandColor.purple400).toStrictEqual(
        designTokens.global.brandColors.purple.purple400.value.toLowerCase(),
      );
    });

    it('js tokens for purple500 matches figma tokens purple500', () => {
      expect(brandColor.purple500).toStrictEqual(
        designTokens.global.brandColors.purple.purple500.value.toLowerCase(),
      );
    });

    it('js tokens for purple600 matches figma tokens purple600', () => {
      expect(brandColor.purple600).toStrictEqual(
        designTokens.global.brandColors.purple.purple600.value.toLowerCase(),
      );
    });

    it('js tokens for purple700 matches figma tokens purple700', () => {
      expect(brandColor.purple700).toStrictEqual(
        designTokens.global.brandColors.purple.purple700.value.toLowerCase(),
      );
    });

    it('js tokens for purple800 matches figma tokens purple800', () => {
      expect(brandColor.purple800).toStrictEqual(
        designTokens.global.brandColors.purple.purple800.value.toLowerCase(),
      );
    });

    it('js tokens for purple900 matches figma tokens purple900', () => {
      expect(brandColor.purple900).toStrictEqual(
        designTokens.global.brandColors.purple.purple900.value.toLowerCase(),
      );
    });
  });

  describe('Lime', () => {
    it('js tokens for lime025 matches figma tokens lime025', () => {
      expect(brandColor.lime025).toStrictEqual(
        designTokens.global.brandColors.lime.lime025.value.toLowerCase(),
      );
    });

    it('js tokens for lime050 matches figma tokens lime050', () => {
      expect(brandColor.lime050).toStrictEqual(
        designTokens.global.brandColors.lime.lime050.value.toLowerCase(),
      );
    });

    it('js tokens for lime100 matches figma tokens lime100', () => {
      expect(brandColor.lime100).toStrictEqual(
        designTokens.global.brandColors.lime.lime100.value.toLowerCase(),
      );
    });

    it('js tokens for lime200 matches figma tokens lime200', () => {
      expect(brandColor.lime200).toStrictEqual(
        designTokens.global.brandColors.lime.lime200.value.toLowerCase(),
      );
    });

    it('js tokens for lime300 matches figma tokens lime300', () => {
      expect(brandColor.lime300).toStrictEqual(
        designTokens.global.brandColors.lime.lime300.value.toLowerCase(),
      );
    });

    it('js tokens for lime400 matches figma tokens lime400', () => {
      expect(brandColor.lime400).toStrictEqual(
        designTokens.global.brandColors.lime.lime400.value.toLowerCase(),
      );
    });

    it('js tokens for lime500 matches figma tokens lime500', () => {
      expect(brandColor.lime500).toStrictEqual(
        designTokens.global.brandColors.lime.lime500.value.toLowerCase(),
      );
    });

    it('js tokens for lime600 matches figma tokens lime600', () => {
      expect(brandColor.lime600).toStrictEqual(
        designTokens.global.brandColors.lime.lime600.value.toLowerCase(),
      );
    });

    it('js tokens for lime700 matches figma tokens lime700', () => {
      expect(brandColor.lime700).toStrictEqual(
        designTokens.global.brandColors.lime.lime700.value.toLowerCase(),
      );
    });

    it('js tokens for lime800 matches figma tokens lime800', () => {
      expect(brandColor.lime800).toStrictEqual(
        designTokens.global.brandColors.lime.lime800.value.toLowerCase(),
      );
    });

    it('js tokens for lime900 matches figma tokens lime900', () => {
      expect(brandColor.lime900).toStrictEqual(
        designTokens.global.brandColors.lime.lime900.value.toLowerCase(),
      );
    });
  });

  describe('White', () => {
    it('js tokens for white matches figma tokens white', () => {
      expect(brandColor.white).toStrictEqual(
        designTokens.global.brandColors.white.value.toLowerCase(),
      );
    });
  });

  describe('Black', () => {
    it('js tokens for black000 matches figma tokens black000', () => {
      expect(brandColor.black).toStrictEqual(
        designTokens.global.brandColors.black.value.toLowerCase(),
      );
    });
  });
});
