import React from 'react';

interface Props<C extends React.ElementType> {
  /**
   * The children or content of the Text component
   */
  children?: React.ReactChild;
  /**
   * Polymorphic prop to change the html root element of the component
   */
  as?: string;
  /**
   * The style prop of the Text component
   */
  style?: object;
}

type TextProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const Text = <C extends React.ElementType = 'span'>({
  style,
  children,
  as,
}: TextProps<C>) => {
  const Component = as || 'span';
  return <Component style={style}>{children}</Component>;
};
