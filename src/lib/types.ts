export type Breakpoints = {
  width: number;
  height: number;
  base: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
};

export type QuadrantTypes =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type QuadrantToOffsetCache = {
  [k in QuadrantTypes]: { x: number; y: number };
};
