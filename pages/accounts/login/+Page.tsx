import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Login' });
  return (
    <>
      <h1>Login</h1>
    </>
  );
}
