import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Privacy' });
  return (
    <>
      <h1>Privacy</h1>
    </>
  );
}
