import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../src/figma/tokens.json';
import { brandColor } from '../src/js';
import { ColorSwatchGroup, ColorSwatch } from './components';
import README from './BrandColors.mdx';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Colors/Brand Colors',
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

export const JS: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
      }}
    >
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColor).map(([name, color]) => (
        <ColorSwatch key={name} color={color} name={`brandColor.${name}`} />
      ))}
    </div>
  ),
};
