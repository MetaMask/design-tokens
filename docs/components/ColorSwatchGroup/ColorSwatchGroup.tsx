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
    return swatchColorsArr.map((color, index) => {
      const colorsObj = swatchData[color];
      const colorsArr = Object.keys(colorsObj);
      return (
        <div
          key={`${color}${index}`}
          style={{
            fontSize: '0.875rem',
            fontFamily: 'sans-serif',
            color: textColor,
          }}
        >
          <h2>{color}</h2>
          <div
            style={{
              display: 'grid',
              gap: '16px',
              gridTemplateColumns: 'repeat(auto-fill, 300px)',
            }}
          >
            {colorsArr.map((tone) => {
              const toneObj = colorsObj[tone];
              return (
                <div key={tone}>
                  <ColorSwatch
                    color={toneObj.value}
                    name={`${color}.${tone}`}
                    {...{ borderColor, textBackgroundColor, textColor }}
                  />
                  {toneObj?.description ? (
                    <p style={{ lineHeight: 1.3 }}>{toneObj.description}</p>
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
