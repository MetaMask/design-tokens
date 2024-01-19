import { ThemeColors } from '../types';

/**
 * Light theme colors
 */

export const colors: ThemeColors = {
  background: {
    default: '#FFFFFF',
    defaultHover: '#FAFAFA',
    defaultPressed: '#EBEBEB',
    alternative: '#F2F4F6',
    alternativeHover: '#EDEFF1',
    alternativePressed: '#DFE0E2',
    hover: '#00000005',
    pressed: '#00000014',
  },
  text: {
    default: '#24272A',
    alternative: '#535A61',
    muted: '#BBC0C5',
  },
  icon: {
    default: '#24272A',
    alternative: '#6A737D',
    muted: '#BBC0C5',
  },
  border: {
    default: '#BBC0C5',
    muted: '#D6D9DC',
  },
  overlay: {
    default: '#00000099',
    inverse: '#FCFCFC',
    alternative: '#000000CC',
  },
  shadow: {
    default: '#0000001A',
  },
  primary: {
    default: '#0376C9',
    defaultHover: '#0379CE',
    defaultPressed: '#036DB9',
    alternative: '#0260A4',
    muted: '#0376C919',
    inverse: '#FCFCFC',
    disabled: '#0376C980',
    shadow: '#0376C933',
  },
  secondary: {
    default: '#F66A0A',
    alternative: '#C65507',
    muted: '#F66A0A19',
    inverse: '#FCFCFC',
    disabled: '#F66A0A80',
  },
  error: {
    default: '#D73847',
    defaultHover: '#CD4250',
    defaultPressed: '#C63441',
    alternative: '#B92534',
    muted: '#D7384719',
    inverse: '#FCFCFC',
    disabled: '#D7384780',
    shadow: '#D7384766',
  },
  warning: {
    default: '#BF5208',
    defaultHover: '#C2540A',
    defaultPressed: '#A24507',
    alternative: '#FFC70A',
    muted: '#FFD33D19',
    inverse: '#FCFCFC',
    disabled: '#FFD33D80',
  },
  success: {
    default: '#1C8234',
    defaultHover: '#208838',
    defaultPressed: '#1B7431',
    alternative: '#1E7E34',
    muted: '#28A74519',
    inverse: '#FCFCFC',
    disabled: '#28A74580',
  },
  info: {
    default: '#0376C9',
    alternative: '#0260A4',
    muted: '#0376C919',
    inverse: '#FCFCFC',
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
