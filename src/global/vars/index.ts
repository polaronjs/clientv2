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

  'accentColor-1': (config) => config.accentColor.lighten(-10),

  /**
   * The color used to represent danger
   */
  dangerColor: new ColorVariable(347.8, 86.3, 45.7),

  dangerColor1: (config) => config.dangerColor.lighten(10),

  'dangerColor-1': (config) => config.dangerColor.lighten(-10),

  /**
   * The color used to represent success
   */
  successColor: new ColorVariable(141, 77, 39.2),

  successColor1: (config) => config.successColor.lighten(10),

  'successColor-1': (config) => config.successColor.lighten(-10),

  gray1Color: new ColorVariable(0, 0, 5),

  gray2Color: ({ gray1Color }) => gray1Color.lighten(15),

  gray3Color: ({ gray1Color }) => gray1Color.lighten(30),

  gray4Color: ({ gray1Color }) => gray1Color.lighten(45),

  gray5Color: ({ gray1Color }) => gray1Color.lighten(70),

  gray6Color: ({ gray1Color }) => gray1Color.lighten(85),

  gray7Color: new ColorVariable(0, 0, 100), // exactly white

  modalBackground: (config) => config.gray7Color.mutateAlpha(0.9),
};
