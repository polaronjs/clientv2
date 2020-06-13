import {
  StructureVariable,
  ColorVariable,
  createStringVariable,
} from './types';

export const config = {
  /**
   * The width of the sidebar menu in pixels
   */
  sidebarWidth: new StructureVariable(380, 'px'),

  /**
   * The color used for non-informative accents (an informative color would be something like a danger, warning or success color)
   */
  accentColor: new ColorVariable(216.9, 100, 50),

  /**
   * The color used to represent danger
   */
  dangerColor: new ColorVariable(347.8, 86.3, 45.7),

  /**
   * The color used to represent success
   */
  successColor: new ColorVariable(141, 77, 39.2),

  gray1Color: createStringVariable('#3B3B3B'),

  gray2Color: createStringVariable('#656565'),

  gray3Color: createStringVariable('#848484'),

  gray4Color: createStringVariable('#ABABAB'),

  gray5Color: createStringVariable('#CCCCCC'),

  gray6Color: createStringVariable('#E2E2E2'),

  gray7Color: createStringVariable('white'),
};
