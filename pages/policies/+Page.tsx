import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'All Policies' });
  return (
    <>
      <h1>All Policies</h1>
    </>
  );
}
