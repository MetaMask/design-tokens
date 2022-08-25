import React, { FunctionComponent } from 'react';

import { ColorSwatch } from '..';

interface ColorToken {
  /**
   * The value of the color can be hex or a reference to another color using
   * the Figma Token reference syntax {colors.blue.blue500} or using maths
   * notation rgba($colors.blue.blue500, .5)
   */
  value: string;
  /**
   * The description of the color and what is should be used for
   */
  description?: string;
  /**
   * The type of token
   */
  type: 'color';
}

interface ColorSwatchGroupProps {
  /**
   * The color object
   */
  swatchData: {
    [key: string]: ColorToken;
  };
  /**
   * The color of text background that contains the name of the color defaults to background.default
   */
  textBackgroundColor?: string;
  /**
   * The border color of the swatch defaults to border.muted
   */
  borderColor?: string;
  /**
   * The color of the text defaults to text.default
   */
  textColor?: string;
  /**
   * The name of the color
   */
  name?: string;
}
export const ColorSwatchGroup: FunctionComponent<ColorSwatchGroupProps> = ({
  swatchData,
  borderColor,
  textBackgroundColor,
  textColor,
}) => {
  if (!swatchData) {
    return <div>No swatch data</div>;
  }
  const swatchColorsArr = Object.keys(swatchData);

  const renderSwatches = () => {
    return swatchColorsArr.map((category) => {
      const colorsObj = swatchData[category];
      let colorsArr: any = [];
      const recursiveColors = (nextLevel, label) => {
        for (const key in nextLevel) {
          const level = nextLevel[key];
          if (level.value) {
            colorsArr.push({
              label: `${label}${key}`,
              value: level.value,
              description: level.description,
            });
            continue;
          }
          recursiveColors(level, `${label}${key}.`);
        }
      };
      recursiveColors(colorsObj, '');
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
            {colorsArr.map((color) => {
              return (
                <div key={color.label}>
                  <ColorSwatch
                    color={color.value}
                    name={color.label}
                    {...{ borderColor, textBackgroundColor, textColor }}
                  />
                  {color?.description ? (
                    <p style={{ lineHeight: 1.3 }}>{color?.description}</p>
                  ) : null}
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
