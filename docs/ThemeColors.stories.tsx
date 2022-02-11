import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorSwatchGroup } from './components';
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
} as ComponentMeta<typeof ThemeColors>;

const Template: ComponentStory<typeof ThemeColors> = (args) => (
  <ColorSwatchGroup {...args} />
);

export const LightThemeColors = Template.bind({});

LightThemeColors.args = {
  swatchData: tokens.light.colors,
};

export const DarkThemeColors = Template.bind({});

DarkThemeColors.args = {
  swatchData: tokens.dark.colors,
};
