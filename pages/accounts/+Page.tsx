import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'My Account' });
  return (
    <>
      <h1>My Account</h1>
    </>
  );
}
