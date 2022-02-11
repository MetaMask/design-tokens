import React from 'react';
import tokens from '../src/figma/tokens.json';

import { ColorSwatch } from './components';

export const BrandColors = () => {
  const brandColorsObj = tokens?.global?.colors;
  const brandColorsArr = Object.keys(brandColorsObj);

  return brandColorsArr.map((color) => {
    const colorsObj = brandColorsObj[color];
    const colorsArr = Object.keys(colorsObj);
    return (
      <div key={color}>
        <h2>{color}</h2>
        <div
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fill, 160px)',
          }}
        >
          {colorsArr.map((tone) => {
            const toneObj = colorsObj[tone];
            console.log('toneObj', toneObj);
            return <ColorSwatch color={toneObj.value} name={tone} key={tone} />;
          })}
        </div>
      </div>
    );
  });
};
