import React from 'react';
import brandColor from '../src/figma/brandColors.json';
import { ColorSwatch, ColorSwatchGroup } from './components';
import README from './ThemeColors.mdx';
import { getCSSVariablesFromStylesheet, useJsonColor } from './utils';

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
  render: () => {
    const { lightTheme } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
};

export const FigmaDarkTheme = {
  render: () => {
    const { darkTheme } = useJsonColor();
    if (!darkTheme) {
      return null; // or some fallback component
    }
    return (
      <div
        style={{
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <ColorSwatchGroup swatchData={darkTheme} theme="#24272a" />
      </div>
    );
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: brandColor.grey[800].value }],
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
  render: () => {
    const { lightTheme } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
};
export const JSDarkTheme = {
  render: () => {
    const { darkTheme } = useJsonColor(true);
    if (!darkTheme) {
      return null; // or some fallback component
    }
    return (
      <div
        style={{
          backgroundColor: darkTheme?.background?.default?.value,
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <ColorSwatchGroup
          theme={darkTheme?.background?.default?.value as string}
          swatchData={darkTheme}
        />
      </div>
    );
  },
};

export const JSLightThemeBrandEvolution = {
  render: () => {
    const { lightTheme } = useJsonColor(true);
    if (!lightTheme) {
      return null; // or some fallback component
    }
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
};
export const JSDarkThemeBrandEvolution = {
  render: () => {
    const { darkTheme } = useJsonColor(true);
    if (!darkTheme) {
      return null; // or some fallback component
    }
    return (
      <div
        style={{
          backgroundColor: darkTheme?.background?.default?.value,
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <ColorSwatchGroup
          theme={darkTheme?.background?.default?.value as string}
          swatchData={darkTheme}
        />
      </div>
    );
  },
};
