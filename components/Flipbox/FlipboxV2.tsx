import { styled } from 'styled-components'

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
export const FlipBox = styled.div<FlipBoxProps>`
  ${({ $style }) => $style || ""};
`;
