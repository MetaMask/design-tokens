import { spacing, getSpacing } from './spacing';

describe('spacing tokens', () => {
  it('spacing object contains all expected keys', () => {
    const expectedKeys = [
      'px',
      '0',
      '0.5',
      '1',
      '1.5',
      '2',
      '2.5',
      '3',
      '3.5',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '14',
      '16',
      '20',
      '24',
      '28',
      '32',
      '36',
      '40',
      '44',
      '48',
      '52',
      '56',
      '60',
      '64',
      '72',
      '80',
      '96',
    ];

    expectedKeys.forEach((key) => {
      expect(spacing[key as keyof typeof spacing]).toBeDefined();
    });
  });

  it('spacing values are correct', () => {
    expect(spacing['0']).toBe('0px');
    expect(spacing.px).toBe('1px');
    expect(spacing['0.5']).toBe('0.125rem');
    expect(spacing['1']).toBe('0.25rem');
    expect(spacing['1.5']).toBe('0.375rem');
    expect(spacing['2']).toBe('0.5rem');
    expect(spacing['4']).toBe('1rem');
    expect(spacing['16']).toBe('4rem');
    expect(spacing['96']).toBe('24rem');
  });

  it('getSpacing function returns correct values', () => {
    expect(getSpacing('0')).toBe('0px');
    expect(getSpacing('px')).toBe('1px');
    expect(getSpacing('0.5')).toBe('0.125rem');
    expect(getSpacing('1')).toBe('0.25rem');
    expect(getSpacing('4')).toBe('1rem');
    expect(getSpacing('96')).toBe('24rem');
  });

  it('getSpacing function returns undefined for non-existent keys', () => {
    expect(getSpacing('nonexistent')).toBeUndefined();
    expect(getSpacing('100')).toBeUndefined();
  });

  it('spacing object has the correct number of entries', () => {
    expect(Object.keys(spacing)).toHaveLength(35);
  });

  it('all spacing values are strings', () => {
    Object.values(spacing).forEach((value) => {
      expect(typeof value).toBe('string');
    });
  });

  it('all spacing values end with either px or rem', () => {
    Object.values(spacing).forEach((value) => {
      expect(value.endsWith('px') || value.endsWith('rem')).toBe(true);
    });
  });
});
