/// <reference path="./node_modules/vite/client.d.ts" />
/// <reference path="./types/importMeta.d.ts" />


type CMSAlignCompassKeys = {
  /** North - Align children at top */
  N?: boolean;
  /** South - Align children at bottom */
  S?: boolean;
  /** East - Align children at right */
  E?: boolean;
  /** West - Align children at left */
  W?: boolean;
  /** North East - Align children at top right */
  NE?: boolean;
  /** North West - Align children at top left */
  NW?: boolean;
  /** South East - Align children at bottom right */
  SE?: boolean;
  /** South West - Align children at bottom left */
  SW?: boolean;
  /** Center - Align children at center */
  C?: boolean;
  /** Spread Nort-South - Align children with equal spacing from top to bottom */
  NS?: boolean;
  /** Spread West-East - Align children with equal spacing from left to right */
  WE?: boolean;
};

type ExactlyOne<T> = {
  [K in keyof T]: { [P in K]: boolean | number | string } & { [P in Exclude<keyof T, K>]?: never };
}[keyof T];


type CMSAlignCompass = keyof CMSAlignCompassKeys;


type widthSizing = {
  xfill: boolean
  xhug: boolean
  width: FlexSizing
}
type heightSizing = {
  yfill: boolean
  yhug: boolean
  height: FlexSizing
}