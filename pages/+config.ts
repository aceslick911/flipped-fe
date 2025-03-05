import vikeReactStyledComponents from 'vike-react-styled-components/config'
import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

import Layout from '../layouts/LayoutDefault'

export default {
  prerender: true,

  // https://vike.dev/Layout
  Layout,

  title: 'Flipped Energy Australia',
  description: 'Demo showcasing Vike',

  extends: [vikeReact, vikeReactStyledComponents],

  //bodyHtmlBegin:
  // bodyHtmlEnd: '<div id="portal"></div>',
} satisfies Config;
