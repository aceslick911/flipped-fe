import { ReactNode } from 'react';

import { usePageContext } from 'vike-react/usePageContext';

function normalize(url) {
  return `/${url.split('/').filter(Boolean).join('/')}`;
}

export const useLink = (props: { href: string }) => {
  const { href } = props;
  if (!href.startsWith('/')) throw new Error('Link href should start with /');
  const cleanedLinks = normalize(import.meta.env.BASE_URL + href);

  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = cleanedLinks === '/' ? urlPathname === cleanedLinks : urlPathname.startsWith(cleanedLinks);

  return {
    isActive,
    cleanedLinks,
  };
};

export function Link(props: {
  href: string;
  children?: ReactNode | ReactNode[];
}) {
  const { children } = props;
  const { isActive, cleanedLinks } = useLink(props);

  return (
    <a href={cleanedLinks} className={isActive ? 'is-active' : undefined}>
      {children}
    </a>
  );
}
