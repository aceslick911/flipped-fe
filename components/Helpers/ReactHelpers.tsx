import React from 'react'

import { BaseContainerProps } from './types'

export function fwRef<T = HTMLDivElement, P = BaseContainerProps>(
  displayName: string,
  render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
) {
  const component = React.forwardRef<T, P>((props, ref) => {
    return render(props as any, ref);
  });

  return component;
}


export function CN(...classNames: (string | false | undefined | null)[]): string {
  return classNames.filter((cn) => 
    cn !== false 
  && cn !== undefined 
  && cn !== null 
  && cn !== '' 
  && cn !== ' '
).join(' ')
}


export function hasProp(prop: string, props: any): boolean {
  return prop in props && props[prop] !== false && props[prop] !== undefined
}
