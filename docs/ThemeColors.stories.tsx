import React from 'react';
import tokens from '../src/figma/tokens.json';
import { lightTheme, darkTheme } from '../src';
import getCSSVariablesFromStylesheet from './utils/getCSSVariablesFromStylesheet';

import { ColorSwatchGroup, ColorSwatch } from './components';

import README from './ThemeColors.mdx';

export default {
  title: 'Colors/Theme Colors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const FigmaLightTheme = {
  render: () => <ColorSwatchGroup {...FigmaLightTheme.args} />,
  args: {
    swatchData: tokens.light.colors,
    borderColor: tokens.light.colors.border.muted.value,
    textBackgroundColor: tokens.light.colors.background.default.value,
    textColor: tokens.light.colors.text.default.value,
  },
};

export const FigmaDarkTheme = {
  render: () => (
    <div
      style={{
        backgroundColor: tokens.dark.colors.background.default.value,
        margin: '-1rem',
        padding: '1rem',
      }}
    >
      <ColorSwatchGroup {...FigmaDarkTheme.args} />
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

export const CSSLightTheme = {
  render: () => {
    const lightThemeColors = getCSSVariablesFromStylesheet('--color-');
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
        {Object.entries(lightThemeColors).map(
          ([name, { color, name: colorName }]) => (
            <ColorSwatch key={name} color={color} name={colorName} />
          ),
        )}
      </div>
    );
  },
};

export const CSSDarkTheme = {
  render: () => {
    const darkThemeColors = getCSSVariablesFromStylesheet('--color-');
    return (
      <div
        style={{
          backgroundColor: 'var(--color-background-default)',
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fill, 300px)',
          }}
        >
          {Object.entries(darkThemeColors).map(
            ([name, { color, name: colorName }]) => (
              <ColorSwatch
                key={name}
                color={color}
                name={colorName}
                borderColor="var(--color-border-muted)"
                textBackgroundColor="var(--color-background-default)"
                textColor="var(--color-text-default)"
              />
            ),
          )}
        </div>
      </div>
    );
  },
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: 'var(--color-background-default)' }],
  },
  decorators: [
    (StoryFn) => {
      // Check if document object is available
      if (typeof document !== 'undefined') {
        // Add the data-theme attribute to the root element
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      // Render the story
      return <StoryFn />;
    },
  ],
};

export const JSLightTheme = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
      }}
    >
      {Object.entries(lightTheme.colors).flatMap(([category, colorObj]) =>
        Object.entries(colorObj).map(([name, color]) => (
          <ColorSwatch
            key={`${category}-${name}`}
            color={color}
            name={`color.${category}.${name}`}
          />
        )),
      )}
    </div>
  ),
};

export const JSDarkTheme = {
  render: () => (
    <div
      style={{
        backgroundColor: darkTheme.colors.background.default,
        margin: '-1rem',
        padding: '1rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
        {Object.entries(darkTheme.colors).flatMap(([category, colorObj]) =>
          Object.entries(colorObj).map(([name, color]) => (
            <ColorSwatch
              key={`${category}-${name}`}
              color={color}
              name={`color.${category}.${name}`}
              borderColor={darkTheme.colors.border.muted}
              textBackgroundColor={darkTheme.colors.background.default}
              textColor={darkTheme.colors.text.default}
            />
          )),
        )}
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: darkTheme.colors.background.default }],
    },
  },
};
