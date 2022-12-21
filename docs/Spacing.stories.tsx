import React from 'react';
import { spacing } from '../src/js';

import { Text } from './components';

import README from './Spacing.mdx';

export default {
  title: 'Spacing/Spacing',
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    spacing: {
      control: 'select',
      options: Object.keys(spacing),
    },
  },
  args: {},
};

interface SpacingSwatchProps {
  children: any;
  style?: object;
  spacingProp: any;
}

const SpacingSwatch = ({
  children,
  style,
  spacingProp,
}: SpacingSwatchProps) => (
  <div
    style={{
      height: 36,
      display: 'flex',
      alignItems: 'center',
      gap: `${spacing.spacing2}px`,
      marginBottom: `${spacing.spacing1}px`,
      ...style,
    }}
  >
    <div style={{ width: `${spacing.spacing10}px`, height: '100%' }}>
      <div
        style={{
          backgroundColor: 'var(--color-error-muted)',
          height: '100%',
          width: `var(--${spacingProp})`,
          minWidth: '.5px',
        }}
      ></div>
    </div>
    <Text>{children}</Text>
  </div>
);

export const Spacing = (args) => {
  const spacingSizes = Object.keys(spacing);
  const formattedSpacingSizes = spacingSizes.map((key) => {
    return key.replace(/(\D+)(\d+)/, '$1-$2');
  });

  return (
    <div>
      {formattedSpacingSizes.map((size) => {
        return (
          <SpacingSwatch key={size} spacingProp={size}>
            {size}
          </SpacingSwatch>
        );
      })}
    </div>
  );
};
