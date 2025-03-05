import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Contact Us' });
  return (
    <>
      <h1>Contact Us</h1>
    </>
  );
}
