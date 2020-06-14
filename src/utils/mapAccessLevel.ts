const levels = ['User', 'Editor', 'Admin', 'Super User'];

export const mapAccessLevel = (level: number) => {
  return levels[level];
};
