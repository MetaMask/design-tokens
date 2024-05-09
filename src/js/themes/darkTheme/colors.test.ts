import * as brandColors from '../../../figma/brandColors.json';
import * as darkTheme from '../../../figma/darkTheme.json';
import { colors as definedColors } from './colors';

type ColorDetails = {
  value: string;
  type: string;
  parent: string;
  description: string;
};

/**
 * Recursively resolve color references in a theme object.
 * @param theme - Object containing theme definitions.
 * @param colors - Object containing color definitions.
 */
function resolveColorReferences(theme: any, colors: any): void {
  Object.keys(theme).forEach((key) => {
    if (typeof theme[key] === 'object' && theme[key] !== null) {
      resolveColorReferences(theme[key], colors);
    } else if (typeof theme[key] === 'string' && theme[key].startsWith('{')) {
      const match = theme[key].match(/\{(.+?)\}/u);
      if (match) {
        const [colorFamily, shade] = match[1].split('.');
        if (colors[colorFamily]?.[shade]) {
          theme[key] = colors[colorFamily][shade].value;
        }
      }
    }
  });
}

describe('Theme Color Resolution', () => {
  const clonedTheme = JSON.parse(JSON.stringify(darkTheme)) as {
    [key: string]: { [key: string]: ColorDetails };
  };
  resolveColorReferences(clonedTheme, brandColors);

  Object.entries(clonedTheme).forEach(([category, details]) => {
    if (category !== 'default') {
      // Skip 'default' category if it's not part of definedColors
      Object.entries(details).forEach(([key, detail]) => {
        const cleanKey = key
          .replace(/\*/gu, '')
          .replace(/-([a-z])/gu, (_, p1) => p1.toUpperCase())
          .replace(/\s*\(strong\)\s*/gu, '');
        it(`ensures ${category}.${cleanKey} matches defined color`, () => {
          expect((definedColors as any)[category][cleanKey]).toStrictEqual(
            detail.value,
          );
        });
      });
    }
  });
});
