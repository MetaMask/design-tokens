import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SpacingSwatch } from './SpacingSwatch';

const meta: Meta<typeof SpacingSwatch> = {
  title: 'Documentation Components/SpacingSwatch',
  component: SpacingSwatch,
  argTypes: {
    name: { control: 'text' },
    size: { control: 'text' },
    pixels: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof SpacingSwatch>;

export const Default: Story = {
  args: {
    name: '4',
    size: '1rem',
    pixels: '16px',
    value: '1rem',
  },
};
