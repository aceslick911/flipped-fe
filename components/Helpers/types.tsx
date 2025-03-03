import React, { ReactNode } from 'react'

export type GapProps = number | '0' | `${number}px` | `${number}px ${number}px`;
export type PaddingObjectProp = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
export type PaddingProps =
  | GapProps
  | PaddingObjectProp
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

export type MarginProps = PaddingProps;
export type FlexSizing = 'fill' | 'hug' | number | string;
export type ElementStyleProps = {
  $width?: FlexSizing;
  $height?: FlexSizing;

  $gap?: GapProps;
  $padding?: PaddingProps;
  $margin?: PaddingProps;
  $align?: CMSAlignCompass;
  $direction?: 'x' | 'y';

  $style?: string;
  $type?: string;
  testShading?: string;
};

export type ContainerProps = ElementStyleProps & {
  children?: ReactNode | undefined;
  className?: string;
  testShading?: string;
  wrap?: boolean;
  nowrap?: boolean;
  title?: string;
  href?: string;
  on?: {
    click?: (e: React.MouseEvent<HTMLElement>) => void;
    mouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  };
};

export type BaseContainerProps = ContainerProps &
  (
    | {
        type?: 'div' | 'ul' | 'li' | 'span' | 'input' | 'button';
        href?: string;
      }
    | {
        type?: 'a';
        href?: string;
      }
  );