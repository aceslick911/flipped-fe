import { useMemo } from 'react';

import { FlipBox } from '#components/Flipbox/FlipboxV2';
import { CN } from '#components/Helpers/ReactHelpers';
import { useLink } from '#components/Link';

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

  if (isLink) {
    const { isActive, cleanedLinks } = useLink({ href: props.href });
    return (
      <FlipBox
        type="a"
        href={cleanedLinks}
        name={CN(props.name, 'comp-padded-link', { 'is-active': isActive })}
        className="x x-hug y-hug C"
        $style={styles}
      >
        {children}
      </FlipBox>
    );
  }
  return (
    <FlipBox
      type="a"
      href={props.href}
      name={CN(props.name, 'comp-padded-link')}
      className="x x-hug y-hug C"
      $style={styles}
    >
      {children}
    </FlipBox>
  );
};
