import { StructureVariable, ColorVariable } from './types';

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
  accentColor: new ColorVariable(216.9, 100, 50),

  accentColor1: (config) => config.accentColor.lighten(10),

  accentColor2: (config) => config.accentColor.lighten(40),

  'accentColor-1': (config) => config.accentColor.lighten(-10),

  'accentColor-2': (config) => config.accentColor.lighten(-40),

  /**
   * The color used to represent danger
   */
  dangerColor: new ColorVariable(347.8, 86.3, 45.7),

  dangerColor1: (config) => config.dangerColor.lighten(10),

  dangerColor2: (config) => config.dangerColor.lighten(40),

  'dangerColor-1': (config) => config.dangerColor.lighten(-10),

  'dangerColor-2': (config) => config.dangerColor.lighten(-40),

  /**
   * The color used to represent success
   */
  successColor: new ColorVariable(141, 77, 39.2),

  successColor1: (config) => config.successColor.lighten(5),

  successColor2: (config) => config.successColor.lighten(40),

  'successColor-1': (config) => config.successColor.lighten(-10),

  'successColor-2': (config) => config.successColor.lighten(-20),

  gray1Color: new ColorVariable(0, 0, 12.9),

  gray2Color: '#3B3B3B',

  gray3Color: '#848484',

  gray4Color: '#ABABAB',

  gray5Color: '#CCCCCC',

  gray6Color: '#E2E2E2',

  gray7Color: new ColorVariable(0, 100, 100),

  modalBackground: (config) => config.gray7Color.mutateAlpha(0.9),
};
