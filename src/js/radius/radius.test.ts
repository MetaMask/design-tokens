import type { RadiusToken } from './radius';
import { radius } from './radius';

describe('radius', () => {
  it('should have the correct number of tokens', () => {
    expect(Object.keys(radius)).toHaveLength(8);
  });

  it('should have the correct token names', () => {
    const expectedTokens: RadiusToken[] = [
      'none',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      'full',
    ];
    expect(Object.keys(radius)).toEqual(expectedTokens);
  });

  it('should have the correct values for each token', () => {
    expect(radius.none).toBe('0');
    expect(radius.sm).toBe('0.125rem');
    expect(radius.md).toBe('0.25rem');
    expect(radius.lg).toBe('0.5rem');
    expect(radius.xl).toBe('1rem');
    expect(radius['2xl']).toBe('1.5rem');
    expect(radius['3xl']).toBe('2rem');
    expect(radius.full).toBe('9999px');
  });

  it('should not allow adding new properties', () => {
    // @ts-expect-error
    expect(() => (radius.newProperty = '1px')).toThrow();
  });
});
