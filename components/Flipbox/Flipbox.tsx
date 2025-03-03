import React, { createRef, ReactNode, useEffect, useMemo } from 'react'

import { styled } from 'styled-components'

import { CN, fwRef, hasProp } from '#components/Helpers/ReactHelpers'
import {
  BaseContainerProps,
  ContainerProps,
  ElementStyleProps,
  GapProps,
  MarginProps,
  PaddingObjectProp,
  PaddingProps,
} from '#components/Helpers/types'
import { Link } from '#components/Link'

export type InlineOnlyProps = {
  inlineOnly?: true;
  $style?: string;
  name: string;
  children?: ReactNode | ReactNode[] | undefined;
  ref?: React.Ref<any>;
};

export type BDivProps = {
  name: string;
  className?: string;

  x?: boolean;
  y?: boolean;

  /** @deprecated Use $style string instead */
  margin?: Exclude<MarginProps, PaddingObjectProp>;
  /** @deprecated Use $style string instead */
  gap?: GapProps;
  /** @deprecated Use $style string instead */
  padding?: Exclude<PaddingProps, PaddingObjectProp>;
  /** @deprecated Use $style string instead */
  children?: any;
  $style?: string;
  ref?: React.Ref<any>;
  on?: BaseContainerProps['on'];

  testShading?: string;

  /** @deprecated Use $style string instead */
  wrap?: boolean;
  /** @deprecated Use $style string instead */
  nowrap?: boolean;

  href?: string;

  type?: BaseContainerProps['type'];

  title?: string;
} & (ExactlyOne<CMSAlignCompassKeys> & ExactlyOne<widthSizing> & ExactlyOne<heightSizing>);

export type BDivPropsExcludingName = {
  x?: boolean;
  y?: boolean;

  /** Only string values allowed - more efficient */
  margin?: Exclude<MarginProps, PaddingObjectProp>;
  /** Only string values allowed - more efficient */
  padding?: Exclude<PaddingProps, PaddingObjectProp>;

  gap?: GapProps;
  children?: any;

  ref?: React.Ref<any>;
  on?: BaseContainerProps['on'];

  className?: string;
  testShading?: string;
  wrap?: boolean;
  nowrap?: boolean;
  type?: BaseContainerProps['type'];
  href?: string;

  title?: string;

  $style?: string;
} & (ExactlyOne<CMSAlignCompassKeys> & ExactlyOne<widthSizing> & ExactlyOne<heightSizing>);

export type BDiveOrInlineProps = InlineOnlyProps | BDivProps;

const FLIPBOX_CLASS = 'flipbox';

const FLIPBOX_PREFIX = ``;
const FB_NAME_PREFIX = 'cont-';

export const AlignedProptoCMDAlignCompass = (props: BDivProps): CMSAlignCompass => {
  if ('C' in props) return 'C';
  if ('N' in props) return 'N';
  if ('S' in props) return 'S';
  if ('WE' in props) return 'WE';
  if ('NS' in props) return 'NS';
  if ('E' in props) return 'E';
  if ('W' in props) return 'W';
  if ('NE' in props) return 'NE';
  if ('NW' in props) return 'NW';
  if ('SE' in props) return 'SE';
  if ('SW' in props) return 'SW';
  return 'NW';
};

export function getStyles(props: ContainerProps, baseName?: string): string {
  const classes = [] as string[];
  if (props.className) {
    classes.push(`${props.className}`);
  }

  classes.push(`${FLIPBOX_PREFIX}${props.$direction || 'x'}`);

  classes.push(props.$width === 'fill' || props.$width === 'hug' ? `x-${props.$width}` : `x-fixed`);
  classes.push(props.$height === 'fill' || props.$height === 'hug' ? `y-${props.$height}` : `y-fixed`);

  if (hasProp('wrap', props)) {
    classes.push(`${FLIPBOX_PREFIX}wrap`);
  } else if (hasProp('nowrap', props)) {
    classes.push(`${FLIPBOX_PREFIX}nowrap`);
  }

  if (props.$align) {
    classes.push(`${FLIPBOX_PREFIX}a-${props.$align}`);
  }

  const resetStyles = '';

  if (props.href !== undefined && props.href.length > 0) {
    // add anchor reset styles
    // resetStyles = resetStyles ? ` ${FLIPBOX_PREFIX}-anchorReset` : `${FLIPBOX_PREFIX}a-anchorReset`
    classes.push(`${FLIPBOX_PREFIX}anchorReset`);
  }

  return CN(...classes);
}

export function getContStyles(props: ContainerProps): string {
  return getStyles(props, 'cont');
}

export function getFlipboxClassNames(props: BDivProps): string {
  return CN(getContStyles(props), props.className, props.name);
}

export const FB = (compName: string, styles: string) =>
  fwRef(compName, (props, ref) => {
    return (
      <FlipBox
        name={compName}
        inlineOnly
        $style={
          styles || props.$style
            ? `
flex-wrap: wrap;

${styles};
${props.$style || ''};
`
            : undefined
        }
        ref={ref}
      >
        {props.children}
      </FlipBox>
    );
  });

export const FlipBox = fwRef<any, BDiveOrInlineProps>('BDiv', (untypedProps, ref) => {
  if ('inlineOnly' in untypedProps && untypedProps.inlineOnly === true) {
    if ('$style' in untypedProps && untypedProps.$style !== '') {
      return (
        <Inlined
          $style={untypedProps.$style}
          className={CN('iline', `cont-${untypedProps.name}`)}
          ref={ref || untypedProps.ref}
        >
          {untypedProps.children}
        </Inlined>
      ) as any;
    } else {
      return (<div ref={ref || untypedProps.ref}>{untypedProps.children}</div>) as any;
    }
  } else {
    const props = untypedProps as BDivProps;
    const width = (
      'xfill' in props && props.xfill
        ? 'fill'
        : 'xhug' in props && props.xhug
          ? 'hug'
          : ('width' in props && props.width) || 'fill'
    ) as any;
    const height = (
      'yfill' in props && props.yfill
        ? 'fill'
        : 'yhug' in props && props.yhug
          ? 'hug'
          : ('height' in props && props.height) || 'fill'
    ) as any;

    if (props.type === 'a') {
      return (
        <BaseContainer
          $align={AlignedProptoCMDAlignCompass(props)}
          $direction={props.y ? 'y' : 'x'}
          $margin={props.margin}
          $padding={props.padding}
          $gap={props.gap}
          {...props}
          $width={width}
          $height={height}
          ref={ref || props.ref}
          testShading={props.testShading}
          wrap={'wrap' in props}
          nowrap={'nowrap' in props}
          type={props.type}
          href={props.href || ''}
          $style={props.$style || ''}
        />
      );
    }

    return 'name' in props ? (
      <BaseContainer
        $align={AlignedProptoCMDAlignCompass(props)}
        $direction={props.y ? 'y' : 'x'}
        $margin={props.margin}
        $padding={props.padding}
        $gap={props.gap}
        {...props}
        $width={width}
        $height={height}
        ref={ref || props.ref}
        testShading={props.testShading}
        wrap={'wrap' in props}
        nowrap={'nowrap' in props}
        type={props.type}
        className={CN(props.className, `cont-${props.name}`)}
        $style={props.$style || ''}
      />
    ) : (
      <BaseContainer {...(props as BaseContainerProps)} ref={ref} />
    );
  }
});

const ResolveStyles = {
  height: (props: BaseContainerProps, includeProp = false) => {
    if (typeof props.$height === 'number') {
      return `${includeProp ? 'height: ' : ''}${props.$height}px;`;
    } else if (props.$height && props.$height !== 'fill' && props.$height !== 'hug') {
      return `${includeProp ? 'height: ' : ''}${props.$height}`;
    } else {
      return '';
    }
  },
  width: (props: BaseContainerProps, includeProp = false) => {
    if (typeof props.$width === 'number') {
      return `${includeProp ? 'width: ' : ''}${props.$width}px;`;
    } else if (props.$width && props.$width !== 'fill' && props.$width !== 'hug') {
      return `${includeProp ? 'width: ' : ''}${props.$width}`;
    } else {
      return '';
    }
  },
};

const useFlipBoxContainer = <Etype extends HTMLElement>(props, ref: React.Ref<Etype>) => {
  const newRef = createRef<Etype>();

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(newRef.current);
      } else {
        (ref as any).current = newRef.current;
      }
    }
  }, [ref, newRef, newRef.current]);

  const baseStyle = useMemo(() => {
    return `
    ${ResolveStyles.height(props, true)};
    ${ResolveStyles.width(props, true)};
    ${props.$style};
  `;
  }, [props, props?.$height, props?.$width, props?.$style]);

  return { baseStyle, newRef };
};

export const BaseContainer = fwRef<HTMLDivElement, BaseContainerProps>('BC', (props, ref) => {
  const { baseStyle, newRef } = useFlipBoxContainer(props, ref);

  if (props.type === 'a' || (props.href !== undefined && props.href.length > 0)) {
    return (
      <BCDSA
       
        $margin={props.$margin}
        $align={props.$align}
        $direction={props.$direction}
        $gap={props.$gap}
        $height={props.$height}
        $padding={props.$padding}
        $width={props.$width}
        className={getContStyles(props)}
        ref={newRef as any}
        $style={baseStyle}
        onClick={props.on?.click}
        onMouseDown={props.on?.mouseDown}
        onTouchStart={props.on?.mouseDown as any}
        title={props.title}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >{ props.children}</BCDSA>
    );
  }
  const Comp = props.type
    ? ((props.type === 'ul'
        ? BCDSUl
        : props.type === 'li'
          ? BCDSLi
          : props.type === 'span'
            ? BCDSSpan
            : BCDS) as typeof BCDS)
    : BCDS;

  return (
    <Comp
      $margin={props.$margin}
      $align={props.$align}
      $direction={props.$direction}
      $gap={props.$gap}
      $height={props.$height}
      $padding={props.$padding}
      $width={props.$width}
      className={getContStyles(props)}
      ref={newRef}
      $style={baseStyle}
      onClick={props.on?.click}
      onMouseDown={props.on?.mouseDown}
      onTouchStart={props.on?.mouseDown as any}
      title={props.title}
      >{ props.children}</Comp>
  );
});

const Inlined = styled.div<{ $style?: string }>`
  ${(props) => props.$style}
`;


export const BCDS = styled.div<ElementStyleProps>`
  ${(props) => {
    if (typeof props.$gap === 'number') {
      return `gap: ${props.$gap}px;`;
    } else if (props.$gap) {
      return `gap: ${props.$gap};`;
    } else return ``;
  }}

  ${(props) => {
    if (typeof props.$padding === 'number') {
      return `padding: ${props.$padding}px;`;
    } else if (typeof props.$padding === 'object') {
      return `padding: ${props.$padding.top ?? 0}px ${props.$padding.right ?? 0}px ${props.$padding.bottom ?? 0}px ${props.$padding.left ?? 0}px;`;
    } else if (props.$padding) {
      return `padding: ${props.$padding};`;
    } else return ``;
  }}

  ${(props) => {
    if (typeof props.$margin === 'number') {
      return `margin: ${props.$margin}px;`;
    } else if (typeof props.$margin === 'object') {
      return `margin: ${props.$margin.top ?? 0}px ${props.$margin.right ?? 0}px ${props.$margin.bottom ?? 0}px ${props.$margin.left ?? 0}px;`;
    } else if (props.$margin) {
      return `margin: ${props.$margin};`;
    } else return ``;
  }}

  ${(props) => (props.$style ? `${props.$style};` : '')}
`;


const BCDSUl = styled(BCDS).attrs({ as: 'ul' })``;
const BCDSLi = styled(BCDS).attrs({ as: 'li' })``;
const BCDSSpan = styled(BCDS).attrs({ as: 'span' })``;

export const DIV = styled(BCDS)<ElementStyleProps>``;
export const BUTTON = styled(BCDS).attrs({ as: 'button' })<ElementStyleProps>``;

const BCDSA = styled(BCDS).attrs({ as: 'a' })``;

export const StyledLink = styled(Link)<{ $style?: string }>`
  user-select: none;
  text-decoration: none;
  display: flex;

  ${(props) => (props.$style ? `${props.$style};` : '')}
`;
