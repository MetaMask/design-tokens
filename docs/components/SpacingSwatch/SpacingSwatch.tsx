import React from 'react';
import { Text } from '../Text';

interface SpacingSwatchProps {
  name: string;
  size: string;
  pixels: string;
  value: string;
}

export const SpacingSwatch: React.FC<SpacingSwatchProps> = ({
  name,
  size,
  pixels,
  value,
}) => (
  <div>
    <Text as="p">
      <strong style={{ margin: 0, fontWeight: 'bold' }}>{name} </strong> |{' '}
      {size} | {pixels}
    </Text>
    <div
      style={{
        width: value,
        height: '24px',
        backgroundColor: 'var(--color-primary-default)',
        marginRight: '16px',
      }}
    />
  </div>
);
