import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'E-Mail confirmation success' });
  return (
    <>
      <h1>Your e-mail address has been successfully validated</h1>
    </>
  );
}
