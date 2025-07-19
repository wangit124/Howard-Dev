"use client";

import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
  children,
  size = "base",
  className,
  link,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  size?: "h1" | "h2" | "h3" | "p" | "base";
  link?: boolean;
} & {
  onClick?: React.MouseEventHandler<unknown>;
}) => {
  if (link) {
    return (
      <a
        className={cn("underline", "cursor-pointer", className)}
        role="button"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  if (size === "h1") {
    return <h1 className={cn(className)}>{children}</h1>;
  }
  if (size === "h2") {
    return <h2 className={cn(className)}>{children}</h2>;
  }
  if (size === "h3") {
    return <h3 className={cn(className)}>{children}</h3>;
  }
  if (size === "p") {
    return <p className={cn(className)}>{children}</p>;
  }
  return <span className={cn(className, "base-text")}>{children}</span>;
};

export default Text;
