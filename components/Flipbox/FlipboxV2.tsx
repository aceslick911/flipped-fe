import { styled } from 'styled-components'

type FlipBoxProps = {
  $style?: string;
  className:`${"flipbox"} ${"y"|"x"} ${"x-fill"|"x-hug"|"x-fixed"} ${"y-fill"|"y-hug"|"y-fixed"} ${CMSAlignCompass}`;
}

export const FlipBox = styled.div<FlipBoxProps>`
  ${({ $style }) => $style};  
`;
