import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getCSSVariablesFromStylesheet, useJsonColor } from './utils';
import { ColorSwatchGroup, ColorSwatch } from './components';
import README from './BrandColorsBrandEvolution.mdx';
import { brandColor } from '../src/js/brandColorBrandEvolution';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Colors/Brand Colors Brand Evolution',
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
  render: () => {
    const { brandColor } = useJsonColor(true);
    return <ColorSwatchGroup swatchData={brandColor} />;
  },
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

export const JS = {
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
