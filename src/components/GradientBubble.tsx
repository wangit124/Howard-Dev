"use client";

import { DEFAULT_BUBBLE_SIZE } from "@/lib/constants";
import React from "react";
import Flex from "./Flex";
import { cn } from "@/lib/utils";

const GradientBubble = ({
  children,
  className,
  width = DEFAULT_BUBBLE_SIZE,
  height = DEFAULT_BUBBLE_SIZE,
  transparent,
}: {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  transparent?: boolean;
}) => {
  return (
    <Flex
      justify="center"
      items="center"
      className={cn(
        "rounded-full",
        "bg-linear-to-b",
        transparent
          ? "from-primary-gradient-start/20"
          : "from-primary-gradient-start",
        transparent
          ? "to-primary-gradient-end/20"
          : "to-primary-gradient-end",
        className ? ` ${className}` : "",
      )}
      style={{ width, height }}
    >
      {children}
    </Flex>
  );
};

export default GradientBubble;
