import { css, styled as styledComponents } from 'styled-components';

import { CN, fwRef } from '#components/Helpers/ReactHelpers';

/**
 * FlipboxDirection - y or x
 */
type FlipboxDirection = 'y' | 'x';
/**
 * FlipboxDirection - y or x
 */
type FlipboxXFill = 'x-fill' | 'x-hug' | 'x-fixed';
/**
 * FlipboxDirection - y or x
 */
type FlipboxYFill = 'y-fill' | 'y-hug' | 'y-fixed';

type FlipboxClassNames = `${FlipboxDirection} ${FlipboxXFill} ${FlipboxYFill} ${CMSAlignCompass}`;

type StyledFlipBoxProps = {
  $style?: string;
};

type FlipBoxProps = {
  $style?: string;
  name?: string;
  /**
   * className
   * @default "y x-fill y-fill NW"
   */
  className: FlipboxClassNames;
  children: (string | Date | React.ReactNode) | (string | Date | React.ReactNode)[];
};

const StyledFlipBox = styledComponents.div<StyledFlipBoxProps>`
  ${({ $style }) => $style || ''};
`;

//Add "flipbox" to className
export const FlipBox = fwRef('FlipBox', (props: FlipBoxProps) => {
  return (
    <StyledFlipBox className={CN('flipbox', props.className, props.name)} $style={props.$style}>
      {props.children as any}
    </StyledFlipBox>
  );
});

function styledComp(compName: string) {
  return (strings: TemplateStringsArray, ...interpolations: any[]) =>
    fwRef(compName, (props: FlipBoxProps, ref) => {
      const styles = css(strings, ...interpolations);
      return (
        <FlipBox
          {...props}
          //         name={compName}
          //           $style={
          //             styles || props.$style
          //               ? `
          // flex-wrap: wrap;

          // ${styles};
          // ${props.$style || ''};
          // `
          //               : undefined
          //           }
          ref={ref}
        >
          {props.children}
        </FlipBox>
      );
    });
}

const styled = {
  FlipBox: styledComp,
  ...styledComponents,
};

export default styled;
