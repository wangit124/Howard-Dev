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

export enum BubbleType {
  ABOUT = "about",
  PROJECTS = "projects",
  CAREER = "career",
  STATS = "stats",
}

export enum COLOR {
  PRIMARY = "#CFB97D",
  SECONDARY = "#000000",
  ACCENT = "#FFFFFF",
}
