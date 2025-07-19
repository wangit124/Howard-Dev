"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
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
  motionProps?: HTMLMotionProps<"div">;
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
  motionProps,
}) => {
  return (
    <motion.div
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
      {...(motionProps || {})}
    >
      {children}
    </motion.div>
  );
};

export default Flex;
