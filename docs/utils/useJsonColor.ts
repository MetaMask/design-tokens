import { useEffect, useState } from 'react';

import figmaBrandColors from '../../src/figma/brandColors.json';
import figmaDarkTheme from '../../src/figma/darkTheme.json';
import figmaLightTheme from '../../src/figma/lightTheme.json';

export type ColorDetails = {
  value: string;
  type: string;
  parent: string;
  description: string;
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

export const useJsonColor = (): CompiledColors => {
  const [colors, setColors] = useState<CompiledColors>({});

  useEffect(() => {
    const parseColorValue = (value: string, theme: Theme): string => {
      if (value.startsWith('{') && value.endsWith('}')) {
        const path = value.slice(1, -1).split('.');
        let current: any = theme;
        for (const segment of path) {
          current = current[segment];
          if (!current) {
            return value; // If unresolved alias, return as is.
          }
        }
        return current.value; // Resolved alias value.
      }
      return value;
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
            const resolvedValue = parseColorValue(value, figmaBrandColors);
            compiledColors[themeName][colorName][shade] = {
              ...details,
              value: resolvedValue,
              description:
                description +
                (value !== resolvedValue ? ` Alias: ${value}` : ''),
            };
          });
        });
      });
      return compiledColors;
    };

    const allColors = compileColors({
      brandColor: { ...figmaBrandColors },
      lightTheme: figmaLightTheme,
      darkTheme: figmaDarkTheme,
    });
    setColors(allColors);
  }, []);

  return colors;
};
