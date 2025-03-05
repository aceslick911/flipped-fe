// import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from 'tailwindcss'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [

    vike({}),
    // tailwindcss(),
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
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    target: 'es2022',
  },
  base: '/flipped-fe',
  resolve: {
    alias: {
      //@ts-ignore
      '#root': __dirname,
      //@ts-ignore
      '#V2': path.resolve(__dirname, 'components/Layout/FlippedV2'),
      '#assets': path.resolve(__dirname, 'assets'),
      '#components': path.resolve(__dirname, 'components'),
      //  "#utils/": "./utils/*"
      '#utils': path.resolve(__dirname, 'utils'),
    },
  },
});
