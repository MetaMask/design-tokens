import React from 'react';
import { Theme } from '../../utils/useJsonColor';
import { ColorSwatch } from '..';

interface ColorSwatchGroupProps {
  /**
   * The color object
   */
  swatchData: Theme;
  /**
   * The color of text background that contains the name of the color defaults to background.default
   */
  textBackgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  /** Hex code value of the theme (light or dark mode) this is used to help determine the text color of each swatch when opacity is involved
   * Default is light theme #ffffff
   */
  theme?: string;
}

function toCamelCase(str) {
  // Check if the string contains a dash followed by a number, if so, skip modification
  if (/\-\d+%$/.test(str)) {
    return str;
  }
  return str.replace(/-([a-z])/gi, function (g) {
    return g[1].toUpperCase();
  });
}
export const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({
  swatchData,
  borderColor,
  textBackgroundColor = 'transparent',
  theme = '#ffffff',
}) => {
  if (!swatchData) {
    return <div>No swatch data</div>;
  }

  // Function to extract numbers and sort them numerically
  const sortShadesNumerically = (a, b) => {
    const numberPattern = /\d+/; // Matches digits in the shade identifier
    const numberA = parseInt(a.match(numberPattern), 10);
    const numberB = parseInt(b.match(numberPattern), 10);
    return numberA - numberB;
  };

  // Function to determine the contrast of the text color based on the background color
  function getContrastYIQ(hexcolor: string, backgroundColor: string) {
    hexcolor = hexcolor.replace('#', '');
    let r,
      g,
      b,
      a = 1;
    if (hexcolor.length === 8) {
      // If alpha is present
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      a = parseInt(hexcolor.substr(6, 2), 16) / 255;
    } else {
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
    }

    const bgR = parseInt(backgroundColor.substr(1, 2), 16);
    const bgG = parseInt(backgroundColor.substr(3, 2), 16);
    const bgB = parseInt(backgroundColor.substr(5, 2), 16);

    r = Math.round(r * a + (1 - a) * bgR);
    g = Math.round(g * a + (1 - a) * bgG);
    b = Math.round(b * a + (1 - a) * bgB);

    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  const renderSwatches = () => {
    return Object.entries(swatchData).map(([category, colors]) => {
      const colorKeys = Object.keys(colors)
        .filter((key) => !/\-\d+%$/.test(key))
        .map((key) => ({
          originalKey: key,
          camelCaseKey: toCamelCase(key),
        }));

      const sortedColorKeys = colorKeys.sort((a, b) =>
        sortShadesNumerically(a.camelCaseKey, b.camelCaseKey),
      );

      return (
        <div
          key={category}
          style={{
            fontSize: '0.875rem',
            fontFamily: 'sans-serif',
            color: getContrastYIQ(theme, theme),
          }}
        >
          <h2>{category}</h2>
          <div
            style={{
              display: 'grid',
              gap: '16px',
              gridTemplateColumns: 'repeat(auto-fill, 300px)',
            }}
          >
            {sortedColorKeys.map(({ originalKey, camelCaseKey }) => {
              const { value, description } = colors[originalKey];
              return (
                <div key={camelCaseKey}>
                  <ColorSwatch
                    color={value}
                    name={`${category}.${camelCaseKey}`}
                    textColor={getContrastYIQ(value, theme)}
                    {...{ borderColor, textBackgroundColor }}
                  />
                  {description && (
                    <p style={{ lineHeight: 1.3 }}>{description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return <>{renderSwatches()}</>;
};
