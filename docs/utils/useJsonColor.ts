import { useEffect, useState } from 'react';

import figmaBrandColors from '../../src/figma/brandColors.json';
import figmaDarkTheme from '../../src/figma/darkTheme.json';
import figmaLightTheme from '../../src/figma/lightTheme.json';

export type ColorDetails = {
  value: string; // Hex value or alias to another color
  type: string; // Type usually color
  parent: string; // Parent category or group of the color
  description: string; // Description or notes about the color
};

export type ColorPalette = {
  [shade: string]: ColorDetails;
};

export type Theme = {
  [colorName: string]: {
    [shade: string]: {
      value: string;
      description: string;
    };
  };
};

type CompiledColors = {
  [themeName: string]: {
    [colorName: string]: {
      [shade: string]: {
        value: string;
        description: string;
      };
    };
  };
};

type Shade = {
  [shade: string]: {
    value: string;
    description: string;
  };
};

/**
 * Custom hook for compiling color themes from Figma JSON definitions.
 * Merges brand, light, and dark theme color settings into a single object.
 *
 * @returns Object containing compiled color themes.
 */
export const useJsonColor = (): CompiledColors => {
  const [colors, setColors] = useState<CompiledColors>({});

  useEffect(() => {
    /**
     * Parses a referenced color value and resolves it based on the current theme.
     * If the value is a reference (enclosed in curly braces), it navigates through the theme object.
     *
     * @param value - The color value or reference to resolve.
     * @param theme - The theme object to resolve references against.
     * @returns The resolved color value.
     */
    const parseColorValue = (value: string, theme: Theme): string => {
      if (value.startsWith('{') && value.endsWith('}')) {
        const path = value.slice(1, -1).split('.');
        let current: any = theme;
        for (const segment of path) {
          current = current[segment];
          if (!current) {
            return value; // Return original value if resolution fails.
          }
        }
        return current.value; // Return the resolved color value.
      }
      return value; // Return the direct value if not a reference.
    };

    /**
     * Compiles color themes from provided JSON theme definitions.
     * Each color value is checked and potentially resolved using parseColorValue.
     *
     * @param themes - Object containing various theme definitions.
     * @returns Object containing compiled and resolved themes.
     */
    const compileColors = (themes: {
      [key: string]: Theme;
    }): CompiledColors => {
      const compiledColors: CompiledColors = {};
      Object.entries(themes).forEach(([themeName, theme]) => {
        const tempThemeColors: Theme = {};
        Object.entries(theme).forEach(([colorName, colorValues]) => {
          const tempThemeColorShade: Shade = {};
          Object.entries(colorValues).forEach(([shade, details]) => {
            const { value, description } = details;
            const resolvedValue = parseColorValue(value, figmaBrandColors);
            const tempShadeColor = {
              ...details,
              value: resolvedValue,
              description:
                description + (value === resolvedValue ? '' : ` ${value}`),
            };
            tempThemeColorShade[shade] = tempShadeColor;
          });
          tempThemeColors[colorName] = tempThemeColorShade;
        });
        compiledColors[themeName] = tempThemeColors;
      });
      return compiledColors;
    };

    // Compile all color themes into a single object and update the state
    const allColors = compileColors({
      brandColor: { ...figmaBrandColors },
      lightTheme: figmaLightTheme,
      darkTheme: figmaDarkTheme,
    });
    setColors(allColors);
  }, []);

  return colors;
};
