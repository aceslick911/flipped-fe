import react from '@vitejs/plugin-react';
import path from 'node:path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vike({}),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  build: {
    target: 'es2022',
  },
  base: '/flipped-fe',
  resolve: {
    alias: {
      //@ts-ignore
      // '#root': __dirname,
      //@ts-ignore
      '#V2': path.resolve(__dirname, 'components/Layout/FlippedV2'),
      '#assets': path.resolve(__dirname, 'assets'),
      '#components': path.resolve(__dirname, 'components'),
    },
  },
});
