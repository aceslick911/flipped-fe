import { styled } from 'styled-components'

import { fwRef } from '#components/Helpers/ReactHelpers'

/**
 * FlipboxDirection - y or x
 */
type FlipboxDirection = "y" | "x";
/**
 * FlipboxDirection - y or x
 */
type FlipboxXFill = "x-fill" | "x-hug" | "x-fixed";
/**
 * FlipboxDirection - y or x
 */
type FlipboxYFill = "y-fill" | "y-hug" | "y-fixed";

type FlipboxClassNames =
  `${FlipboxDirection} ${FlipboxXFill} ${FlipboxYFill} ${CMSAlignCompass}`;

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
  children:
    | (string | Date | React.ReactNode)
    | (string | Date | React.ReactNode)[];
};

const StyledFlipBox = styled.div<StyledFlipBoxProps>`
  ${({ $style }) => $style || ""};
`;

//Add "flipbox" to className
export const FlipBox = fwRef("FlipBox", (props: FlipBoxProps) => {
  return (
    <StyledFlipBox
      className={`flipbox ${props.className}`}
      $style={props.$style}
    >
      {props.children as any}
    </StyledFlipBox>
  );
});
