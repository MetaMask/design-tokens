import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import tokens from '../src/figma/tokens.json';
import { Color } from './utils/getThemeColorsFromStylesheet';

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
    // Using useState hook to manage brandColors state
    const [brandColors, setBrandColors] = useState<Color>({});

    useEffect(() => {
      // Using useEffect hook to run the code after the component mounts

      // Getting all CSS variables that start with '--brand-colors' from all stylesheets
      const cssVars = Array.from(document.styleSheets)
        .flatMap((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules);
          } catch (err) {
            return [];
          }
        })
        .filter((cssRule) => cssRule.type === CSSRule.STYLE_RULE)
        .flatMap((cssRule) => Array.from((cssRule as CSSStyleRule).style))
        .filter((varName) => varName.startsWith('--brand-colors'));

      const brandColors: Color = {};

      // Looping through each CSS variable and getting its value
      cssVars.forEach((varName) => {
        const name = varName.split('-').slice(2).join('-');
        const color = getComputedStyle(document.documentElement)
          .getPropertyValue(varName)
          .trim();
        brandColors[name] = {
          color: color,
          name: `var(${varName})`,
        };
      });

      // Updating the state with the new brandColors
      setBrandColors(brandColors);
    }, []);

    // Rendering the component
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(brandColors).map(({ color, name }) => (
          <ColorSwatch key={name} color={color} name={name} />
        ))}
      </div>
    );
  },
};

export const JS: Story = {
  render: () => <h1>Coming soon</h1>,
};
