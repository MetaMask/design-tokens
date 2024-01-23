// Define a type for the color object
export interface Color {
  [key: string]: {
    color: string;
    name: string;
  };
}

/**
 * Retrieves CSS variables from the stylesheet.
 *
 * @param varPrefix - The prefix of the CSS variables to retrieve.
 * @returns An object containing the retrieved CSS variables.
 */
function getCSSVariablesFromStylesheet(varPrefix: string): Color {
  const cssVariables: Color = {};

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
    .filter((varName) => varName.startsWith(varPrefix))
    .forEach((varName) => {
      const name = varName.split('-').slice(2).join('-');
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      cssVariables[name] = {
        color,
        name: `var(${varName})`,
      };
    });

  return cssVariables;
}

export default getCSSVariablesFromStylesheet;
