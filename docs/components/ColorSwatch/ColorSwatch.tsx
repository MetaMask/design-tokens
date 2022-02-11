import React, { FunctionComponent } from 'react';
import { colors } from '../../../src';

interface ColorSwatchProps {
  /**
   * The color of the swatch
   */
  color?: string;
  /**
   * The color of text background that contains the name of the color defaults to colors.light.background.default
   */
  textBackgroundColor?: string;
  /**
   * The border color of the swatch defaults to colors.light.border.default
   */
  borderColor?: string;
  /**
   * The color of the text defaults to colors.light.text.default
   */
  textColor?: string;
  /**
   * The name of the color
   */
  name?: string;
}

export const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  color,
  borderColor = colors.light.border.default,
  textBackgroundColor = colors.light.background.default,
  textColor = colors.light.text.default,
  name,
  ...props
}) => {
  return (
    <div
      style={{
        height: 120,
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column-reverse',
        borderRadius: '8px',
      }}
      {...props}
    >
      <div
        style={{
          backgroundColor: textBackgroundColor,
          padding: 8,
          borderRadius: '0 0 8px 8px',
        }}
      >
        <strong style={{ display: 'block', marginBottom: '8px' }}>
          <code>{`${name}`}</code>
        </strong>
        <code>{`${color}`}</code>
      </div>
    </div>
  );
};
