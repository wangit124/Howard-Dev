"use client";

import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
  direction?: "col" | "row";
  justify?: "start" | "center" | "end" | "between" | "evenly";
  items?: "start" | "center" | "end";
  style?: React.CSSProperties;
};

const Flex: React.FC<Props> = ({
  children,
  id,
  className,
  onClick,
  direction = "row",
  justify = "start",
  items = "start",
  style,
}) => {
  return (
    <div
      id={id}
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        justify === "center"
          ? "justify-center"
          : justify === "end"
          ? "justify-end"
          : justify === "between"
          ? "justify-between"
          : justify === "evenly"
          ? "justify-evenly"
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
