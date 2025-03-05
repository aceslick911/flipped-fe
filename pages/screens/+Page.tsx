import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Screens' });
  return (
    <>
      <h1>Screens</h1>
    </>
  );
}
