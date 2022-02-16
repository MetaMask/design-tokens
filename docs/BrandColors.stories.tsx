import { ComponentStory, ComponentMeta } from '@storybook/react';
import tokens from '../src/figma/tokens.json';

import { ColorSwatchGroup } from './components';

import README from './BrandColors.mdx';

export default {
  title: 'Colors/BrandColors',
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
  swatchData: tokens.global.brandColors,
};

DefaultStory.storyName = 'Default';
