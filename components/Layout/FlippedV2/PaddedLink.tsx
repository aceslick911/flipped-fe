import { useMemo } from 'react';

import { FlipBox } from '#components/Flipbox/FlipboxV2';
import { Link } from '#components/Link';

import './PaddedLink.scss';

export type PaddedLinkProps = {
  children?: React.ReactNode | React.ReactNode[];
  name?: string;
  $style?: string;

  href: string;
};

export const PaddedLink = (props: PaddedLinkProps) => {
  const { children } = props;
  const isLink = props.href.startsWith('/');
  const styles = useMemo(
    () => `
    padding: 5px;
    ${props.$style};
  `,
    [],
  );
  return (
    <FlipBox name={props.name || 'comp-padded-link'} className="x x-hug y-hug C" $style={styles}>
      {isLink ? <Link href={props.href}>{children}</Link> : <a href={props.href}>{children}</a>}
    </FlipBox>
  );
};
