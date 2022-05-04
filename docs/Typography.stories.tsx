import { ComponentStory, ComponentMeta } from '@storybook/react';
import { typography } from '../src/js/typography';

import { fontSizes } from '../src/js/typography/fontSizes';
import { lineHeights } from '../src/js/typography/lineHeights';
import { fontFamilies } from '../src/js/typography/fontFamilies';
import { fontWeights } from '../src/js/typography/fontWeights';
import { letterSpacing } from '../src/js/typography/letterSpacing';

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
    displayMDMedium: {
      fontFamily: fontFamilies.euclidCircularB,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMDMedium} {...args}>
        Euclid Circular B
      </Text>
    </>
  );
};

export const SmallScreen: ComponentStory<typeof Text> = (...args) => {
  const smallScreenFontSizeBase = 16;
  const styles = {
    displayMDMedium: {
      fontFamily: typography.sDisplayMDMedium.fontFamily,
      fontSize: typography.sDisplayMDMedium.fontSize,
      lineHeight: `${typography.sDisplayMDMedium.lineHeight}px`,
      fontWeight: typography.sDisplayMDMedium.fontWeight,
    },
    headingLGBold: {
      fontFamily: typography.sHeadingLGBold.fontFamily,
      fontSize: typography.sHeadingLGBold.fontSize,
      lineHeight: `${typography.sHeadingLGBold.lineHeight}px`,
      fontWeight: typography.sHeadingLGBold.fontWeight,
    },
    headingMDBold: {
      fontFamily: typography.sHeadingMDBold.fontFamily,
      fontSize: typography.sHeadingMDBold.fontSize,
      lineHeight: `${typography.sHeadingMDBold.lineHeight}px`,
      fontWeight: typography.sHeadingMDBold.fontWeight,
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
      <Text as="h1" style={styles.displayMDMedium} {...args}>
        {`S DisplayMDMedium ${styles.displayMDMedium.fontSize}px/${
          styles.displayMDMedium.lineHeight
        } ${styles.displayMDMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h2" style={styles.headingLGBold} {...args}>
        {`S HeadingLGBold ${styles.headingLGBold.fontSize}px/${
          styles.headingLGBold.lineHeight
        } ${styles.headingLGBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h3" style={styles.headingMDBold} {...args}>
        {`S HeadingMDBold ${styles.headingMDBold.fontSize}px/${
          styles.headingMDBold.lineHeight
        } ${styles.headingMDBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        {`S HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        {`S BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        {`S BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        {`S BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
    </>
  );
};

export const LargeScreen: ComponentStory<typeof Text> = (...args) => {
  const largeScreenFontSizeBase = 16;
  const styles = {
    displayMDMedium: {
      fontFamily: typography.lDisplayMDMedium.fontFamily,
      fontSize: typography.lDisplayMDMedium.fontSize,
      lineHeight: `${typography.lDisplayMDMedium.lineHeight}px`,
      fontWeight: typography.lDisplayMDMedium.fontWeight,
    },
    headingLGBold: {
      fontFamily: typography.lHeadingLGBold.fontFamily,
      fontSize: typography.lHeadingLGBold.fontSize,
      lineHeight: `${typography.lHeadingLGBold.lineHeight}px`,
      fontWeight: typography.lHeadingLGBold.fontWeight,
    },
    headingMDBold: {
      fontFamily: typography.lHeadingMDBold.fontFamily,
      fontSize: typography.lHeadingMDBold.fontSize,
      lineHeight: `${typography.lHeadingMDBold.lineHeight}px`,
      fontWeight: typography.lHeadingMDBold.fontWeight,
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
      <Text as="h1" style={styles.displayMDMedium} {...args}>
        {`L DisplayMDMedium ${styles.displayMDMedium.fontSize}px/${
          styles.displayMDMedium.lineHeight
        } ${styles.displayMDMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h2" style={styles.headingLGBold} {...args}>
        {`L HeadingLGBold ${styles.headingLGBold.fontSize}px/${
          styles.headingLGBold.lineHeight
        } ${styles.headingLGBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h3" style={styles.headingMDBold} {...args}>
        {`L HeadingMDBold ${styles.headingMDBold.fontSize}px/${
          styles.headingMDBold.lineHeight
        } ${styles.headingMDBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        {`L HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        {`L BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        {`L BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        {`L BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / largeScreenFontSizeBase
        }rem`}
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
