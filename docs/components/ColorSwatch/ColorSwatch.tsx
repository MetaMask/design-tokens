import React, { FunctionComponent } from 'react';
import { lightTheme } from '../../../src';

interface ColorSwatchProps {
  /**
   * The color of the swatch
   */
  color?: string;
  /**
   * The color of text background that contains the name of the color defaults to lightTheme.colors.background.default
   */
  textBackgroundColor?: string;
  /**
   * The border color of the swatch defaults to lightTheme.colors.border.muted
   */
  borderColor?: string;
  /**
   * The color of the text defaults to lightTheme.colors.text.default
   */
  textColor?: string;
  /**
   * The name of the color
   */
  name?: string;
}

export const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  color,
  borderColor = lightTheme.colors.border.muted,
  textBackgroundColor = lightTheme.colors.background.default,
  textColor = lightTheme.colors.text.default,
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
