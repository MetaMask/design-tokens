import { useEffect, useState } from 'react';

import figmaBrandColors from '../../src/figma/brandColors.json';
import figmaBrandColorsBrandEvolution from '../../src/figma/brandColorsBrandEvolution.json';
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
  [colorName: string]: ColorPalette;
};

type CompiledColors = {
  [themeName: string]: Theme;
};

/**
 * Custom hook for compiling color themes from Figma JSON definitions.
 * Merges brand, light, and dark theme color settings into a single object.
 *
 * @param useEvolutionColors - Prop to use the brand evolution colors instead of the default brand colors.
 * @returns Object containing compiled color themes.
 */
export const useJsonColor = (useEvolutionColors = false): CompiledColors => {
  const [colors, setColors] = useState<CompiledColors>({});

  useEffect(() => {
    // Choose the correct brand colors based on the flag
    const brandColors = useEvolutionColors
      ? figmaBrandColorsBrandEvolution
      : figmaBrandColors;

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

    const compileColors = (themes: {
      [key: string]: Theme;
    }): CompiledColors => {
      const compiledColors: CompiledColors = {};
      Object.entries(themes).forEach(([themeName, theme]) => {
        compiledColors[themeName] = {};
        Object.entries(theme).forEach(([colorName, colorValues]) => {
          compiledColors[themeName][colorName] = {};
          Object.entries(colorValues).forEach(([shade, details]) => {
            const { value, description } = details;
            const resolvedValue = parseColorValue(value, brandColors);
            compiledColors[themeName][colorName][shade] = {
              ...details,
              value: resolvedValue,
              description:
                description +
                (value === resolvedValue ? '' : ` (was ${value})`),
            };
          });
        });
      });
      return compiledColors;
    };

    // Compile all color themes into a single object and update the state
    const allColors = compileColors({
      brandColor: { ...brandColors },
      lightTheme: figmaLightTheme,
      darkTheme: figmaDarkTheme,
    });
    setColors(allColors);
  }, [useEvolutionColors]); // Add useEvolutionColors to dependency array to re-run effect when it changes

  return colors;
};
