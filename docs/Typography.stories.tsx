import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  typography,
  fontSizes,
  lineHeights,
  fontFamilies,
  fontWeights,
  letterSpacing,
} from '../src/ts/typography';

import { Text } from './components';

import README from './Typography.mdx';

export default {
  title: 'Typography/Typography',
  parameters: {
    docs: {
      page: README,
    },
  },
} as ComponentMeta<typeof Text>;

export const FontFamily: ComponentStory<typeof Text> = (...args) => {
  const styles = {
    displayMD: {
      fontFamily: fontFamilies.euclidCircularB,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMD} {...args}>
        Euclid Circular B
      </Text>
    </>
  );
};

export const SmallScreen: ComponentStory<typeof Text> = (...args) => {
  const styles = {
    displayMD: {
      fontFamily: typography.sDisplayMD.fontFamily,
      fontSize: typography.sDisplayMD.fontSize,
      lineHeight: `${typography.sDisplayMD.lineHeight}px`,
      fontWeight: typography.sDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: typography.sHeadingLG.fontFamily,
      fontSize: typography.sHeadingLG.fontSize,
      lineHeight: `${typography.sHeadingLG.lineHeight}px`,
      fontWeight: typography.sHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: typography.sHeadingMD.fontFamily,
      fontSize: typography.sHeadingMD.fontSize,
      lineHeight: `${typography.sHeadingMD.lineHeight}px`,
      fontWeight: typography.sHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: typography.sHeadingSM.fontFamily,
      fontSize: typography.sHeadingSM.fontSize,
      lineHeight: `${typography.sHeadingSM.lineHeight}px`,
      fontWeight: typography.sHeadingSM.fontWeight,
    },
    bodyMD: {
      fontFamily: typography.sBodyMD.fontFamily,
      fontSize: typography.sBodyMD.fontSize,
      lineHeight: `${typography.sBodyMD.lineHeight}px`,
      fontWeight: typography.sBodyMD.fontWeight,
    },
    bodySM: {
      fontFamily: typography.sBodySM.fontFamily,
      fontSize: typography.sBodySM.fontSize,
      lineHeight: `${typography.sBodySM.lineHeight}px`,
      fontWeight: typography.sBodySM.fontWeight,
    },
    bodyXS: {
      fontFamily: typography.sBodyXS.fontFamily,
      fontSize: typography.sBodyXS.fontSize,
      lineHeight: `${typography.sBodyXS.lineHeight}px`,
      fontWeight: typography.sBodyXS.fontWeight,
      letterSpacing: typography.sBodyXS.letterSpacing,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMD} {...args}>
        S DisplayMD 32px/40px 2rem
      </Text>
      <Text as="h2" style={styles.headingLG} {...args}>
        S HeadingLG 24px/32px 1.5rem
      </Text>
      <Text as="h3" style={styles.headingMD} {...args}>
        S HeadingMD 18px/24px 1.125rem
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        S HeadingSM 16px/24px 1rem
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        S BodyMD 14px/22px 0.875rem
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        S BodySM 12px/20px 0.75rem
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        S BodyXS 10px/16px 0.625rem
      </Text>
    </>
  );
};

export const LargeScreen: ComponentStory<typeof Text> = (...args) => {
  const styles = {
    displayMD: {
      fontFamily: typography.lDisplayMD.fontFamily,
      fontSize: typography.lDisplayMD.fontSize,
      lineHeight: `${typography.lDisplayMD.lineHeight}px`,
      fontWeight: typography.lDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: typography.lHeadingLG.fontFamily,
      fontSize: typography.lHeadingLG.fontSize,
      lineHeight: `${typography.lHeadingLG.lineHeight}px`,
      fontWeight: typography.lHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: typography.lHeadingMD.fontFamily,
      fontSize: typography.lHeadingMD.fontSize,
      lineHeight: `${typography.lHeadingMD.lineHeight}px`,
      fontWeight: typography.lHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: typography.lHeadingSM.fontFamily,
      fontSize: typography.lHeadingSM.fontSize,
      lineHeight: `${typography.lHeadingSM.lineHeight}px`,
      fontWeight: typography.lHeadingSM.fontWeight,
    },
    bodyMD: {
      fontFamily: typography.lBodyMD.fontFamily,
      fontSize: typography.lBodyMD.fontSize,
      lineHeight: `${typography.lBodyMD.lineHeight}px`,
      fontWeight: typography.lBodyMD.fontWeight,
    },
    bodySM: {
      fontFamily: typography.lBodySM.fontFamily,
      fontSize: typography.lBodySM.fontSize,
      lineHeight: `${typography.lBodySM.lineHeight}px`,
      fontWeight: typography.lBodySM.fontWeight,
    },
    bodyXS: {
      fontFamily: typography.lBodyXS.fontFamily,
      fontSize: typography.lBodyXS.fontSize,
      lineHeight: `${typography.lBodyXS.lineHeight}px`,
      fontWeight: typography.lBodyXS.fontWeight,
      letterSpacing: typography.lBodyXS.letterSpacing,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMD} {...args}>
        L DisplayMD 32px/40px 2rem
      </Text>
      <Text as="h2" style={styles.headingLG} {...args}>
        L HeadingLG 24px/32px 1.5rem
      </Text>
      <Text as="h3" style={styles.headingMD} {...args}>
        L HeadingMD 18px/24px 1.125rem
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        L HeadingSM 16px/24px 1rem
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        L BodyMD 14px/22px 0.875rem
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        L BodySM 12px/20px 0.75rem
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        L BodyXS 10px/16px 0.625rem
      </Text>
    </>
  );
};

export const FontWeight: ComponentStory<typeof Text> = (...args) => {
  const styles = {
    regular: {
      fontFamily: fontFamilies.euclidCircularB,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.regular,
    },
    medium: {
      fontFamily: fontFamilies.euclidCircularB,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.medium,
    },
    bold: {
      fontFamily: fontFamilies.euclidCircularB,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.bold,
    },
  };
  return (
    <>
      <Text as="h3" style={styles.regular} {...args}>
        Regular 400
      </Text>
      <Text as="h3" style={styles.medium} {...args}>
        Medium 500
      </Text>
      <Text as="h3" style={styles.bold} {...args}>
        Bold 700
      </Text>
    </>
  );
};
