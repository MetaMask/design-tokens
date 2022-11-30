import { ComponentStory, ComponentMeta } from '@storybook/react';
import { lightTheme } from '../../../src';

import { ColorSwatch } from '.';

export default {
  title: 'Doc components/ColorSwatch',
  argTypes: {
    color: {
      control: 'text',
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
    style: {
      control: 'object',
    },
  },
  args: {
    color: lightTheme.colors.text.default,
    name: 'text.default',
    borderColor: lightTheme.colors.border.muted,
    textBackgroundColor: lightTheme.colors.background.default,
    textColor: lightTheme.colors.text.default,
  },
} as ComponentMeta<typeof ColorSwatch>;

const Template: ComponentStory<typeof ColorSwatch> = (args) => (
  <ColorSwatch {...args} />
);

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  children: 'Text',
};

DefaultStory.storyName = 'Default';
