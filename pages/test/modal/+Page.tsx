import * as React from 'react'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { RiCheckboxCircleFill } from '@remixicon/react'
import { clientOnly } from 'vike-react/clientOnly'
import { useConfig } from 'vike-react/useConfig'

import * as Modal from '#components/Modal/modal'
import * as Button from '#components/radix/button'

const Ren = clientOnly(() => import('./mod'));

export default function Page(pageContext: any) {
  const config = useConfig();
  config({ title: 'Portal Test' });

  const content = pageContext;

  return <Ren fallback={<div>LOADING</div>} />;
}
