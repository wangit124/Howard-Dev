import { Breakpoints } from "@/lib/types";
import { useState, useEffect } from "react";

export const breakpoints = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useBreakpoints(): Breakpoints {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    height,
    base: width >= breakpoints.base,
    sm: width >= breakpoints.sm,
    md: width >= breakpoints.md,
    lg: width >= breakpoints.lg,
    xl: width >= breakpoints.xl,
  };
}
