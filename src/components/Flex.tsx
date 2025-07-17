"use client";

import { cn } from "@/lib/utils";
import React from "react";

const Flex = ({
  children,
  className,
  direction = "row",
  justify = "start",
  items = "start",
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  direction?: "col" | "row";
  justify?: "start" | "center" | "end" | "between";
  items?: "start" | "center" | "end";
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "flex",
        "flex-s-0",
        direction === "col" ? "flex-col" : "flex-row",
        justify === "center"
          ? "justify-center"
          : justify === "end"
          ? "justify-end"
          : "justify-start",
        items === "center"
          ? "items-center"
          : items === "end"
          ? "items-end"
          : "items-start",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Flex;
