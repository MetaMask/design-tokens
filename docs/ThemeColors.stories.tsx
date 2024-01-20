import React from 'react';
import tokens from '../src/figma/tokens.json';
import { ColorSwatchGroup } from './components';
import README from './ThemeColors.mdx';

export default {
  title: 'Colors/ThemeColors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const LightThemeColors = {
  render: () => <ColorSwatchGroup {...LightThemeColors.args} />,
  args: {
    swatchData: tokens.light.colors,
    borderColor: tokens.light.colors.border.muted.value,
    textBackgroundColor: tokens.light.colors.background.default.value,
    textColor: tokens.light.colors.text.default.value,
  },
};

export const DarkThemeColors = {
  render: () => (
    <div
      style={{
        backgroundColor: tokens.dark.colors.background.default.value,
        margin: '-1rem',
        padding: '1rem',
      }}
    >
      <ColorSwatchGroup {...DarkThemeColors.args} />
    </div>
  ),
  args: {
    swatchData: tokens.dark.colors,
    borderColor: tokens.dark.colors.border.muted.value,
    textBackgroundColor: tokens.dark.colors.background.default.value,
    textColor: tokens.dark.colors.text.default.value,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: tokens.dark.colors.background.default.value },
      ],
    },
  },
};
