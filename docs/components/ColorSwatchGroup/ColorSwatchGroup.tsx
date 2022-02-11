import React from 'react';

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
  swatchData: ColorToken;
}

export const ColorSwatchGroup = ({ swatchData }) => {
  if (!swatchData) {
    return <div>No swatch data</div>;
  }

  const lightColorsArr = Object.keys(swatchData);

  return lightColorsArr.map((color) => {
    const colorsObj = swatchData[color];
    const colorsArr = Object.keys(colorsObj);
    return (
      <div
        key={color}
        style={{ fontSize: '0.875rem', fontFamily: 'sans-serif' }}
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
              <div>
                <ColorSwatch
                  color={toneObj.value}
                  name={`${color}.${tone}`}
                  key={tone}
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
