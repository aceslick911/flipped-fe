import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import path from 'path';


export default defineConfig({
  plugins: [vike({}), react({
    babel: {
      plugins: [["babel-plugin-styled-components"]]
    }
  })],
  build: {
    target: 'es2022',
  },
  base: '/flipped-fe/',
  resolve: {
    alias: {
      //@ts-ignore
      '#root': __dirname,
      //@ts-ignore
      "#V2": path.resolve(__dirname, 'components/FlippedV2'),
    },
  },
});
