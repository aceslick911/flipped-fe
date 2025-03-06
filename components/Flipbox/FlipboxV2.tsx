import { HTMLAttributes } from 'react'

import { css, styled as styledComponents } from 'styled-components'

import { CN, fwRef } from '#components/Helpers/ReactHelpers'

/**
 * FlipboxDirection - y or x
 */
type FlipboxDirection = 'x' | 'y';
/**
 * FlipboxDirection - y or x
 */
type FlipboxXFill = 'x-hug' | 'x-fill' | 'x-fixed';
/**
 * FlipboxDirection - y or x
 */
type FlipboxYFill = 'y-hug' | 'y-fill' | 'y-fixed';

type FlipboxClassNames = `${FlipboxDirection} ${FlipboxXFill} ${FlipboxYFill} ${CMSAlignCompass}`;

type StyledFlipBoxProps = {
  $style?: string;
};

type BaseFlipBoxProps = {
  $style?: string;
  name?: string;
  /**
   * type
   * @default "div"
   * @example "a"
   */
  type?: 'div' | 'a' | 'button';

  /**
   * className
   * @default "y x-fill y-fill NW"
   */
  className: FlipboxClassNames;
};

type FlipBoxMultiChildren = BaseFlipBoxProps & {
  children: (string | Date | React.ReactNode) | (string | Date | React.ReactNode)[];
};

type FlipBoxSingleChild = BaseFlipBoxProps & {
  children?: string | Date | React.ReactNode;
};

type FlipBoxProps =
  | (FlipBoxMultiChildren &
      HTMLAttributes<HTMLAnchorElement> & {
        type: 'a';
        href: string;
      })
  | (FlipBoxMultiChildren &
      HTMLAttributes<HTMLDivElement> & {
        type?: 'div';
      })
  | (FlipBoxSingleChild &
      HTMLAttributes<HTMLButtonElement> & {
        type?: 'button';
      });

export const FlipBox = fwRef('FlipBox', (_props: FlipBoxProps) => {
  const { type = 'div', children, className, name, $style, ...flipBoxProps } = _props;
  switch (type) {
    case 'a':
      return (
        <StyledFlipBoxAnchor
          {...(flipBoxProps as any)}
          name={name}
          className={CN('flipbox', className, name)}
          $style={$style}
        >
          {children as any}
        </StyledFlipBoxAnchor>
      );
    case 'button':
      return (
        <StyledFlipBoxButton
          {...(flipBoxProps as any)}
          name={name}
          className={CN('flipbox', className, name)}
          $style={$style}
        >
          {children as any}
        </StyledFlipBoxButton>
      );

    case 'div':
    default:
      return (
        <StyledFlipBoxDiv
          {...(flipBoxProps as any)}
          name={name}
          className={CN('flipbox', className, name)}
          $style={$style}
        >
          {children as any}
        </StyledFlipBoxDiv>
      );
  }
});

function styledComp(compName: string) {
  return (strings: TemplateStringsArray, ...interpolations: any[]) =>
    fwRef(compName, (_props: FlipBoxProps, ref) => {
      const { children, $style, type, ...rest } = _props;
      const styles = css(strings, ...interpolations);
      return (
        <FlipBox type={type} {...(rest as any)} ref={ref} $style={styles.join('; ') + $style}>
          {children}
        </FlipBox>
      );
    });
}

// export const styled = {
//   FlipBox: styledComp,
//   ...styledComponents,
// };
export const styled = styledComponents as typeof styledComponents & { FlipBox: typeof styledComp };
styled.FlipBox = styledComp;

export default styled;

const StyledFlipBoxDiv = styledComponents.div<StyledFlipBoxProps>`
  ${({ $style }) => $style || ''};
`;

const StyledFlipBoxAnchor = styledComponents.a<StyledFlipBoxProps>`
  display: flex;
  color: inherit;
  ${({ $style }) => $style || ''};
`;

const StyledFlipBoxButton = styledComponents.button<StyledFlipBoxProps>`
  display: flex;
  color: inherit;
  ${({ $style }) => $style || ''};
`;
