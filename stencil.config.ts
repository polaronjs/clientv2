import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: ['**/*.{js,css,json,html,ico,png}'],
      },
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/_vars.scss'],
    }),
  ],
};
