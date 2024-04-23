import type { BrandColor } from './brandColor.types';

/*
Changes:
- White no longer exist
white000 (now is grey000)
white010

- Black no longer exist
black000 (now is grey1000)

- Grey updates
grey000 added (white)
grey030 -> grey025
grey040 -> grey050
grey750 no longer exist
grey1000 added (black)

- Blue updates
blue000 no longer exist

- Orange updates
orange000 no longer exist

- Green updates
green000 no longer exist

- Red updates
red000 no longer exist

- Yellow updates
yellow000 no longer exist

- Violet no longer exist
violet300

- Lime added
*/

export const brandColor: BrandColor = {
  // Grey
  grey000: '#ffffff',
  grey025: '#f7f9fc',
  grey050: '#f3f5f9',
  grey100: '#dadce5',
  grey200: '#b7bbc8',
  grey300: '#9ca1af',
  grey400: '#858b9a',
  grey500: '#686e7d',
  grey600: '#4b505c',
  grey700: '#31333a',
  grey800: '#222325',
  grey900: '#121314',
  grey1000: '#000000',

  // Blue
  blue025: '#f8f9ff',
  blue050: '#f4f5ff',
  blue100: '#d6dbff',
  blue200: '#adb6fe',
  blue300: '#8b99ff',
  blue400: '#6f7eff',
  blue500: '#4459ff',
  blue600: '#2c3dc5',
  blue700: '#1c277f',
  blue800: '#131b59',
  blue900: '#0b0f32',

  // Green
  green025: '#f1faf4',
  green050: '#ebf7ee',
  green100: '#c1e6c9',
  green200: '#80cb91',
  green300: '#4cb564',
  green400: '#279f41',
  green500: '#1c7e33',
  green600: '#145d25',
  green700: '#0d3b18',
  green800: '#092912',
  green900: '#051709',

  // Red
  red025: '#fff6f7',
  red050: '#fff2f3',
  red100: '#ffd2d5',
  red200: '#ffa1aa',
  red300: '#ff7584',
  red400: '#f74d5e',
  red500: '#ca3542',
  red600: '#952731',
  red700: '#611a20',
  red800: '#431216',
  red900: '#3b0f13',

  // Yellow
  yellow025: '#fff9e6',
  yellow050: '#fff5d5',
  yellow100: '#ffd957',
  yellow200: '#f0b034',
  yellow300: '#e18f01',
  yellow400: '#c37b02',
  yellow500: '#9a6300',
  yellow600: '#714802',
  yellow700: '#482d01',
  yellow800: '#321f00',
  yellow900: '#1c1100',

  // Orange
  orange025: '#fff8f5',
  orange050: '#fff0ea',
  orange100: '#ffd4c1',
  orange200: '#ffa47c',
  orange300: '#ff7940',
  orange400: '#f35714',
  orange500: '#c3420d',
  orange600: '#932d06',
  orange700: '#631800',
  orange800: '#451100',
  orange900: '#280a00',

  // Purple
  purple025: '#fcf6ff',
  purple050: '#fbf2ff',
  purple100: '#efd2ff',
  purple200: '#dfa4ff',
  purple300: '#d27dff',
  purple400: '#b864f5',
  purple500: '#8f44e4',
  purple600: '#6c2ab2',
  purple700: '#6c2ab2',
  purple800: '#380658',
  purple900: '#280a00',

  // Lime
  lime025: '#effed9',
  lime050: '#e3febd',
  lime100: '#b8ef4a',
  lime200: '#95ca45',
  lime300: '#7ab040',
  lime400: '#64993d',
  lime500: '#457a39',
  lime600: '#275b35',
  lime700: '#093a31',
  lime800: '#012826',
  lime900: '#011515',
};
