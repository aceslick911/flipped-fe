import { styled } from 'styled-components'

type FlipBoxProps = {
  $style?: string;
  className:`${string} ${"flipbox"|undefined} ${"y"|"x"} ${"x-fill"|"x-hug"|"x-fixed"} ${"y-fill"|"y-hug"|"y-fixed"} ${CMSAlignCompass}${string|undefined}`;
}
export const FlipBox = styled.div<FlipBoxProps>`
  ${({ $style }) => $style};  
`;
