import React from 'react';
import { lightTheme } from '../src/js';

import { Text } from './components';

import README from './Shadows.mdx';

export default {
  title: 'Shadows/Shadows',
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(lightTheme.shadows.size),
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'error'],
    },
  },
  args: {
    color: 'default',
    size: 'xs',
  },
};

interface ShadowSwatchProps {
  children: any;
  style?: object;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'error';
}

const ShadowSwatch = ({
  children,
  style,
  size = 'xs',
  color = 'default',
}: ShadowSwatchProps) => (
  <div
    style={{
      height: 100,
      backgroundColor: 'var(--color-background-default)',
      boxShadow:
        color === 'default'
          ? `var(--shadow-size-${size}) var(--color-shadow-${color}`
          : `var(--shadow-size-${size}) var(--color-${color}-shadow`,
      borderRadius: '4px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Shadow = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch {...args}>
        <Text as="p" style={{ margin: 0 }}>
          Shadow
        </Text>
      </ShadowSwatch>
    </div>
  );
};

export const Size = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color={args.color} size="xs">
        <Text as="p" style={{ margin: 0 }}>
          XS
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="sm">
        <Text as="p" style={{ margin: 0 }}>
          SM
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="md">
        <Text as="p" style={{ margin: 0 }}>
          MD
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="lg">
        <Text as="p" style={{ margin: 0 }}>
          LG
        </Text>
      </ShadowSwatch>
    </div>
  );
};

export const Color = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color="default" size={args.size}>
        <Text as="p" style={{ margin: 0 }}>
          Default
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        color="primary"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-primary-default)',
          color: 'var(--color-primary-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Primary
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        color="error"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-error-default)',
          color: 'var(--color-error-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Error/Danger
        </Text>
      </ShadowSwatch>
    </div>
  );
};

export const ExampleUsage = () => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          marginBottom: '64px',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-xs) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Card
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-sm) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Dropdown
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Toast
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Modal
          </Text>
        </ShadowSwatch>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-primary-shadow)',
            backgroundColor: 'var(--color-primary-default)',
            color: 'var(--color-primary-inverse)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Button Primary Hover
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-danger-shadow)',
            backgroundColor: 'var(--color-error-default)',
            color: 'var(--color-error-inverse)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Button Error/Danger Hover
          </Text>
        </ShadowSwatch>
      </div>
    </div>
  );
};
