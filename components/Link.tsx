import { ReactNode } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

function normalize(url) {
  return `/${url.split('/').filter(Boolean).join('/')}`;
}

export function Link({ href, children }: { href: string; children?: ReactNode | ReactNode[] }) {
  if (!href.startsWith('/')) throw new Error('Link href should start with /');
  href = normalize(import.meta.env.BASE_URL + href);

  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={isActive ? 'is-active' : undefined}>
      {children}
    </a>
  );
}
