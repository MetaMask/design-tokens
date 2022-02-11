import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorSwatchGroup } from './components';

import README from './BrandColors.mdx';

import tokens from '../src/figma/tokens.json';

export default {
  title: 'Colors/BrandColors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
} as ComponentMeta<typeof ColorSwatchGroup>;

const Template: ComponentStory<typeof ColorSwatchGroup> = (args) => (
  <ColorSwatchGroup {...args} />
);

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  swatchData: tokens?.global?.brandColors,
};

DefaultStory.storyName = 'Default';
