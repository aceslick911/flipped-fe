import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { usePageContext } from 'vike-react/usePageContext';
import { PageContextClient } from 'vike/types';

interface ExtendedPageContext extends PageContextClient<unknown> {
  styleSheet?: { instance: any };
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext() as ExtendedPageContext;
  if (isBrowser()) return <>{children}</>;
  return <StyleSheetManager sheet={pageContext.styleSheet?.instance}>{children}</StyleSheetManager>;
}

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number';
}

export { Wrapper };
