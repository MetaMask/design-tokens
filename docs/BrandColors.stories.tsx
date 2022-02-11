import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorSwatchGroup } from './components';
import { BrandColors } from './BrandColors';
import README from './BrandColors.mdx';
import tokens from '../src/figma/tokens.json';

export default {
  title: 'Colors/BrandColors',
  component: BrandColors,
  parameters: {
    docs: {
      page: README,
    },
  },
} as ComponentMeta<typeof BrandColors>;

const Template: ComponentStory<typeof BrandColors> = (args) => (
  <ColorSwatchGroup {...args} />
);

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  swatchData: tokens?.global?.brandColors,
};

DefaultStory.storyName = 'Default';
