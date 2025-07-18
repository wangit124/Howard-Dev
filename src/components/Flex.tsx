"use client";

import { cn } from "@/lib/utils";
import React from "react";

const Flex = ({
  children,
  id,
  className,
  onClick,
  direction = "row",
  justify = "start",
  items = "start",
  style,
}: {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
  direction?: "col" | "row";
  justify?: "start" | "center" | "end" | "between";
  items?: "start" | "center" | "end";
  style?: React.CSSProperties;
}) => {
  return (
    <div
      id={id}
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
        "flex-shrink-0",
        className
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
