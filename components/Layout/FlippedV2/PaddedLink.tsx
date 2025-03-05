import styled from '#components/Flipbox/FlipboxV2';
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

  if (isLink) {
    const { isActive, cleanedLinks } = useLink({ href: props.href });
    return (
      <PaddedLinkStyled
        type="a"
        href={cleanedLinks}
        name={CN(props.name, 'comp-padded-link', { 'is-active': isActive })}
        className="x x-hug y-hug C"
        $style={props.$style}
      >
        {children}
      </PaddedLinkStyled>
    );
  }
  return (
    <PaddedLinkStyled
      type="a"
      href={props.href}
      name={CN(props.name, 'comp-padded-link')}
      className="x x-hug y-hug C"
      $style={props.$style}
    >
      {children}
    </PaddedLinkStyled>
  );
};

const PaddedLinkStyled = styled.FlipBox('PaddedLink')`
  text-align: right;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 12px;
  font-weight: 400;

  padding: 5px;
  gap: 3px;

`;
