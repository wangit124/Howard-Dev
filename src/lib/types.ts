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

export type TrackClickOrViewInput = {
  type: "view" | "click";
  entity?: string;
  item?: string;
};

export type ClickDataColumns = {
  name: string;
  uniqueCount: number | string;
  totalCount: number | string;
};

export type ViewDataColumns = { name: string; count: number | string };

export type AnalyticsSummary = {
  totalViews: number;
  uniqueViews: number;
  itemClicksSummary: Record<
    string,
    { uniqueCount: number; totalCount: number }
  >;
};
