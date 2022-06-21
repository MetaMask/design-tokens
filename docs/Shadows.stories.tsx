import React from 'react';
import { Text } from './components';

import README from './Shadows.mdx';

export default {
  title: 'Shadows/Shadows',
  parameters: {
    docs: {
      page: README,
    },
  },
};

interface ShadowSwatchProps {
  children: any;
  style?: object;
}

const ShadowSwatch = ({ children, style }: ShadowSwatchProps) => (
  <div
    style={{
      height: 100,
      backgroundColor: 'var(--color-background-default)',
      boxShadow: 'var(--shadow-size-xs) var(--color-shadow-default)',
      borderRadius: '4px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Size = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch>
        <Text as="p" style={{ margin: 0 }}>
          XS
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-sm) var(--color-shadow-default)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          SM
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          MD
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          LG
        </Text>
      </ShadowSwatch>
    </div>
  );
};

export const Color = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Neutral
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-md) var(--color-primary-shadow)',
          backgroundColor: 'var(--color-primary-default)',
          color: 'var(--color-primary-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Primary
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        style={{
          boxShadow: 'var(--shadow-size-md) var(--color-error-shadow)',
          backgroundColor: 'var(--color-error-default)',
          color: 'var(--color-error-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Danger
        </Text>
      </ShadowSwatch>
    </div>
  );
};

export const Usage = () => {
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
            Button Danger Hover
          </Text>
        </ShadowSwatch>
      </div>
    </div>
  );
};
