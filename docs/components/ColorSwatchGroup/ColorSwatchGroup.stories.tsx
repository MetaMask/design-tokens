import { ComponentStory, ComponentMeta } from '@storybook/react';
import tokens from '../../../src/figma/tokens.json';

import { ColorSwatchGroup } from '.';

export default {
  title: 'Doc components/ColorSwatchGroup',
  argTypes: {
    swatchData: {
      control: 'object',
    },
    textBackgroundColor: {
      control: 'text',
    },
    borderColor: {
      control: 'text',
    },
    textColor: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
  args: {
    swatchData: tokens.light.colors,
    borderColor: tokens.light.colors.border.muted.value,
    textBackgroundColor: tokens.light.colors.background.default.value,
    textColor: tokens.light.colors.text.default.value,
  },
} as ComponentMeta<typeof ColorSwatchGroup>;

const Template: ComponentStory<typeof ColorSwatchGroup> = (args) => (
  <ColorSwatchGroup {...args} />
);

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  children: 'Text',
};

DefaultStory.storyName = 'Default';
