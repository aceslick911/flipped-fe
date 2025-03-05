import React from 'react';

import { useConfig } from 'vike-react/useConfig';

import { PaddedLink } from '#V2/PaddedLink';
import { CN } from '#components/Helpers/ReactHelpers';

export default function Page() {
  const config = useConfig();
  config({ title: 'E-Mail confirmation success' });
  return (
    <>
      <h1>An error was encountered</h1>
      There was an issue verifying your email address. Please try again or{' '}
      <PaddedLink href="/contact" className={CN('inline')}>
        contact us
      </PaddedLink>
      .
    </>
  );
}
