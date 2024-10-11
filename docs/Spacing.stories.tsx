import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SpacingSwatch, Text } from './components';
import { spacing } from '../src/js/spacing/spacing';
import README from './Spacing.mdx';

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

const spacingData = [
  { name: '0', size: '0px', pixels: '0px', value: spacing['0'] },
  { name: 'px', size: '1px', pixels: '1px', value: spacing.px },
  { name: '0.5', size: '0.125rem', pixels: '2px', value: spacing['0.5'] },
  { name: '1', size: '0.25rem', pixels: '4px', value: spacing['1'] },
  { name: '1.5', size: '0.375rem', pixels: '6px', value: spacing['1.5'] },
  { name: '2', size: '0.5rem', pixels: '8px', value: spacing['2'] },
  { name: '2.5', size: '0.625rem', pixels: '10px', value: spacing['2.5'] },
  { name: '3', size: '0.75rem', pixels: '12px', value: spacing['3'] },
  { name: '3.5', size: '0.875rem', pixels: '14px', value: spacing['3.5'] },
  { name: '4', size: '1rem', pixels: '16px', value: spacing['4'] },
  { name: '5', size: '1.25rem', pixels: '20px', value: spacing['5'] },
  { name: '6', size: '1.5rem', pixels: '24px', value: spacing['6'] },
  { name: '7', size: '1.75rem', pixels: '28px', value: spacing['7'] },
  { name: '8', size: '2rem', pixels: '32px', value: spacing['8'] },
  { name: '9', size: '2.25rem', pixels: '36px', value: spacing['9'] },
  { name: '10', size: '2.5rem', pixels: '40px', value: spacing['10'] },
  { name: '11', size: '2.75rem', pixels: '44px', value: spacing['11'] },
  { name: '12', size: '3rem', pixels: '48px', value: spacing['12'] },
  { name: '14', size: '3.5rem', pixels: '56px', value: spacing['14'] },
  { name: '16', size: '4rem', pixels: '64px', value: spacing['16'] },
  { name: '20', size: '5rem', pixels: '80px', value: spacing['20'] },
  { name: '24', size: '6rem', pixels: '96px', value: spacing['24'] },
  { name: '28', size: '7rem', pixels: '112px', value: spacing['28'] },
  { name: '32', size: '8rem', pixels: '128px', value: spacing['32'] },
  { name: '36', size: '9rem', pixels: '144px', value: spacing['36'] },
  { name: '40', size: '10rem', pixels: '160px', value: spacing['40'] },
  { name: '44', size: '11rem', pixels: '176px', value: spacing['44'] },
  { name: '48', size: '12rem', pixels: '192px', value: spacing['48'] },
  { name: '52', size: '13rem', pixels: '208px', value: spacing['52'] },
  { name: '56', size: '14rem', pixels: '224px', value: spacing['56'] },
  { name: '60', size: '15rem', pixels: '240px', value: spacing['60'] },
  { name: '64', size: '16rem', pixels: '256px', value: spacing['64'] },
  { name: '72', size: '18rem', pixels: '288px', value: spacing['72'] },
  { name: '80', size: '20rem', pixels: '320px', value: spacing['80'] },
  { name: '96', size: '24rem', pixels: '384px', value: spacing['96'] },
];

export const Default: StoryObj = {
  render: () => (
    <div>
      <Text as="p">Name | Size | Pixels</Text>
      {spacingData.map((item) => (
        <SpacingSwatch
          key={item.name}
          name={item.name}
          size={item.size}
          pixels={item.pixels}
          value={item.value}
        />
      ))}
    </div>
  ),
};
