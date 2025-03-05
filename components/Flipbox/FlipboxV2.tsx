import { HTMLAttributes } from 'react';

import { css, styled as styledComponents } from 'styled-components';

import { CN, fwRef } from '#components/Helpers/ReactHelpers';

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
  type?: 'div' | 'a';

  /**
   * className
   * @default "y x-fill y-fill NW"
   */
  className: FlipboxClassNames;
  children: (string | Date | React.ReactNode) | (string | Date | React.ReactNode)[];
};

type FlipBoxProps =
  | (BaseFlipBoxProps &
      HTMLAttributes<HTMLAnchorElement> & {
        type: 'a';
        href: string;
      })
  | (BaseFlipBoxProps &
      HTMLAttributes<HTMLDivElement> & {
        type?: 'div';
      });

export const FlipBox = fwRef('FlipBox', (props: FlipBoxProps) => {
  switch (props.type) {
    case 'a':
      return (
        <StyledFlipBoxAnchor {...props} className={CN('flipbox', props.className, props.name)} $style={props.$style}>
          {props.children as any}
        </StyledFlipBoxAnchor>
      );
    case 'div':
    default:
      return (
        <StyledFlipBoxDiv {...props} className={CN('flipbox', props.className, props.name)} $style={props.$style}>
          {props.children as any}
        </StyledFlipBoxDiv>
      );
  }
});

function styledComp(compName: string) {
  return (strings: TemplateStringsArray, ...interpolations: any[]) =>
    fwRef(compName, (props: FlipBoxProps, ref) => {
      const styles = css(strings, ...interpolations);
      return (
        <FlipBox {...props} ref={ref} $style={styles.join('; ') + props.$style}>
          {props.children}
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
