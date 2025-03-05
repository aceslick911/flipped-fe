import React from 'react';

import { useConfig } from 'vike-react/useConfig';

export default function Page() {
  const config = useConfig();
  config({ title: 'Terms & Conditions' });
  return (
    <>
      <h1>Terms & Conditions</h1>
    </>
  );
}
