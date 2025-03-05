import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Email Confiration' });
  return (
    <>
      <h1>E-Mail Confirmation</h1>
    </>
  );
}
