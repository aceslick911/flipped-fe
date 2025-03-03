import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';
import Layout from '../layouts/LayoutDefault';

import vikeReactStyledComponents from 'vike-react-styled-components/config';

export default {
  prerender: true,

  // https://vike.dev/Layout
  Layout,

  title: 'Flipped Energy Australia',
  description: 'Demo showcasing Vike',

  extends: [vikeReact, vikeReactStyledComponents],
} satisfies Config;
