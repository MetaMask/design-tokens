import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../src/figma/tokens.json';
import getCSSVariablesFromStylesheet from './utils/getCSSVariablesFromStylesheet';

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

export const Figma: Story = {
  render: () => <ColorSwatchGroup swatchData={tokens.global.brandColors} />,
};

export const CSS: Story = {
  render: () => {
    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(cssBrandColors).map(({ color, name }) => (
          <ColorSwatch key={name} color={color} name={name} />
        ))}
      </div>
    );
  },
};

export const JS: Story = {
  render: () => <h1>Coming soon</h1>,
};
