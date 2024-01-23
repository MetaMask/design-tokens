// Define a type for the theme colors
export interface Color {
  [key: string]: {
    color: string;
    name: string;
  };
}

/**
 * Retrieves theme colors from the stylesheet.
 *
 * @returns An object containing the retrieved theme colors.
 */
function getThemeColorsFromStylesheet(): Color {
  const themeColors: Color = {};

  Array.from(document.styleSheets)
    .flatMap((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules);
      } catch (err) {
        return [];
      }
    })
    .filter((cssRule) => cssRule.type === CSSRule.STYLE_RULE)
    .filter(
      (cssRule: CSSRule) => (cssRule as CSSStyleRule).selectorText === ':root',
    )
    .flatMap(
      (cssRule: CSSRule) =>
        Array.from((cssRule as CSSStyleRule).style) as string[],
    )
    .filter((varName) => varName.startsWith('--color-'))
    .forEach((varName) => {
      const name = varName.split('-').slice(2).join('-');
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      themeColors[name] = {
        color,
        name: `var(${varName})`,
      };
    });

  return themeColors;
}

export default getThemeColorsFromStylesheet;
