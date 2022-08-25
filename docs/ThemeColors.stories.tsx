import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorSwatchGroup, Text } from './components';
import README from './ThemeColors.mdx';

import tokens from '../src/figma/tokens.json';

export default {
  title: 'Colors/ThemeColors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
} as ComponentMeta<typeof ColorSwatchGroup>;

const Template: ComponentStory<typeof ColorSwatchGroup> = (args) => {
  return (
    <>
      <ColorSwatchGroup {...args} />
    </>
  );
};

export const LightThemeColors = Template.bind({});

LightThemeColors.args = {
  swatchData: tokens.light.colors,
  borderColor: tokens.light.colors.border.muted.value,
  textBackgroundColor: tokens.light.colors.background.default.value,
  textColor: tokens.light.colors.text.default.value,
};

export const DarkThemeColors = Template.bind({});

DarkThemeColors.args = {
  swatchData: tokens.dark.colors,
  borderColor: tokens.dark.colors.border.muted.value,
  textBackgroundColor: tokens.dark.colors.background.default.value,
  textColor: tokens.dark.colors.text.default.value,
};

DarkThemeColors.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: tokens.dark.colors.background.default.value },
    ],
  },
};

DarkThemeColors.decorators = [
  (Story) => (
    <div
      style={{
        backgroundColor: tokens.dark.colors.background.default.value,
        margin: '-1rem',
        padding: '1rem',
      }}
    >
      <Story />
    </div>
  ),
];
