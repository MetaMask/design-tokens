import type { ThemeColors } from '../types';

/**
 * Dark theme colors
 */

export const colors: ThemeColors = {
  background: {
    default: '#24272A',
    defaultHover: '#282B2E',
    defaultPressed: '#36383B',
    alternative: '#141618',
    alternativeHover: '#191B1D',
    alternativePressed: '#27292A',
    hover: '#FFFFFF05',
    pressed: '#FFFFFF14',
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
    defaultHover: '#0092FA',
    defaultPressed: '#54B6FC',
    alternative: '#43AEFC',
    muted: '#1098FC26',
    inverse: '#141618',
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
    default: '#FF5263',
    defaultHover: '#FF4D58',
    defaultPressed: '#F9868E',
    alternative: '#E88F97',
    muted: '#FF526326',
    inverse: '#141618',
    disabled: '#D7384780',
    shadow: '#FF526366',
  },
  warning: {
    default: '#FFD33D',
    defaultHover: '#FFC60A',
    defaultPressed: '#FFEAA3D1',
    alternative: '#FFDF70',
    muted: '#FFD33D26',
    inverse: '#141618',
    disabled: '#FFD33D80',
  },
  success: {
    default: '#28A745',
    defaultHover: '#05B82F',
    defaultPressed: '#6AEC88',
    alternative: '#5DD879',
    muted: '#28A74526',
    inverse: '#141618',
    disabled: '#28A74580',
  },
  info: {
    default: '#1098FC',
    alternative: '#43AEFC',
    muted: '#1098FC26',
    inverse: '#141618',
    disabled: '#0376C980',
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
    sepolia: {
      default: '#CFB5F0',
      inverse: '#FCFCFC',
    },
  },
  flask: {
    default: '#8B45B6',
    inverse: '#FCFCFC',
  },
};
