import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../src/figma/tokens.json';
import { ColorSwatchGroup } from './components';
import README from './BrandColors.mdx';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Colors/BrandColors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGroup>;

export const DefaultStory: Story = {
  render: () => <ColorSwatchGroup swatchData={tokens.global.brandColors} />,
  name: 'Default',
};
