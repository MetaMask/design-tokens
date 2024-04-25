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
}

export const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({
  swatchData,
  borderColor,
  textBackgroundColor = 'transparent',
  textColor = '#212529',
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
  function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  const renderSwatches = () => {
    return Object.entries(swatchData).map(([category, colors]) => {
      // Filter out color keys that contain a dash, indicating a percentage-based color
      const filteredColorKeys = Object.keys(colors).filter(
        (key) => !key.includes('-'),
      );

      // Sort the remaining color keys numerically
      const sortedColorKeys = filteredColorKeys.sort(sortShadesNumerically);

      return (
        <div
          key={category}
          style={{
            fontSize: '0.875rem',
            fontFamily: 'sans-serif',
            color: textColor,
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
            {sortedColorKeys.map((label) => {
              const { value, description } = colors[label];
              return (
                <div key={label}>
                  <ColorSwatch
                    color={value}
                    name={label}
                    textColor={getContrastYIQ(value)}
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
