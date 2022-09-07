import { ThemeColors } from '../types';

/**
 * Dark theme colors
 */

export const colors: ThemeColors = {
  background: {
    default: '#24272A',
    defaultHover: '#3B4046',
    defaultPressed: '#3B4046',
    alternative: '#141618',
    alternativeHover: '#2E3339',
    alternativePressed: '#2E3339',
  },
  text: {
    default: '#FFFFFF',
    alternative: '#D6D9DC',
    muted: '#9FA6AE',
  },
  icon: {
    default: '#FFFFFF',
    alternative: '#BBC0C5',
    muted: '#9FA6AE',
  },
  border: {
    default: '#848C96',
    muted: '#3B4046',
  },
  overlay: {
    default: '#00000099',
    inverse: '#FCFCFC',
    alternative: '#000000CC',
  },
  shadow: {
    default: '#00000066',
  },
  primary: {
    default: '#1098FC',
    alternative: '#43AEFC',
    muted: '#1098FC26',
    inverse: '#FCFCFC',
    disabled: '#1098FC80',
    shadow: '#1098FC66',
  },
  secondary: {
    default: '#F8883B',
    alternative: '#FAA66C',
    muted: '#F8883B26',
    inverse: '#FCFCFC',
    disabled: '#F8883B80',
  },
  error: {
    default: '#D73A49',
    alternative: '#E06470',
    muted: '#D73A4926',
    inverse: '#FCFCFC',
    disabled: '#D73A4980',
    shadow: '#D73A4966',
  },
  warning: {
    default: '#FFD33D',
    alternative: '#FFDF70',
    muted: '#FFD33D26',
    inverse: '#141618',
    disabled: '#FFD33D80',
  },
  success: {
    default: '#28A745',
    alternative: '#5DD879',
    muted: '#28A74526',
    inverse: '#FCFCFC',
    disabled: '#28A74580',
  },
  info: {
    default: '#1098FC',
    alternative: '#43AEFC',
    muted: '#1098FC26',
    inverse: '#FCFCFC',
    disabled: '#037DD680',
  },
  networks: {
    goerli: {
      default: '#1098FC',
      inverse: '#FCFCFC',
    },
    localhost: {
      default: '#BBC0C5',
      inverse: '#FCFCFC',
    },
  },
  flask: {
    default: '#8B45B6',
    inverse: '#FCFCFC',
  },
};
