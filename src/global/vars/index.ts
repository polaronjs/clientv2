import { StructureVariable, ColorVariable } from './types';

const accentColor = new ColorVariable(216.9, 100, 50);
const dangerColor = new ColorVariable(347.8, 86.3, 45.7);
const successColor = new ColorVariable(141, 77, 39.2);

const gray1Color = new ColorVariable(0, 0, 12.9);
const gray7Color = new ColorVariable(0, 100, 100);

export const config = {
  /**
   * The width of the sidebar menu in pixels
   */
  sidebarWidth: new StructureVariable(
    Math.min(320, window.innerWidth - 50),
    'px'
  ),

  /**
   * The color used for non-informative accents (an informative color would be something like a danger, warning or success color)
   */
  accentColor,

  accentColor1: accentColor.lighten({ amount: 10 }),

  accentColor2: accentColor.lighten({ amount: 20 }),

  'accentColor-1': accentColor.lighten({ amount: -10 }),

  'accentColor-2': accentColor.lighten({ amount: -20 }),

  /**
   * The color used to represent danger
   */
  dangerColor,

  dangerColor1: dangerColor.lighten({ amount: 10 }),

  dangerColor2: dangerColor.lighten({ amount: 20 }),

  'dangerColor-1': dangerColor.lighten({ amount: -10 }),

  'dangerColor-2': dangerColor.lighten({ amount: -20 }),

  /**
   * The color used to represent success
   */
  successColor,

  successColor1: successColor.lighten({ amount: 5 }),

  successColor2: successColor.lighten({ amount: 10 }),

  'successColor-1': successColor.lighten({ amount: -10 }),

  'successColor-2': successColor.lighten({ amount: -20 }),

  gray1Color,

  gray2Color: '#3B3B3B',

  gray3Color: '#848484',

  gray4Color: '#ABABAB',

  gray5Color: '#CCCCCC',

  gray6Color: '#E2E2E2',

  gray7Color,

  modalBackground: (config) => config.gray7Color.mutateAlpha({ alpha: 0.8 }),
};
