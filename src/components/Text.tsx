"use client";

import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
  children,
  size,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
  size?: "h1" | "h2" | "h3" | "p";
}) => {
  if (size === "h1") {
    return <h1 className={cn(className)}>{children}</h1>;
  }
  if (size === "h2") {
    return <h2 className={cn(className)}>{children}</h2>;
  }
  if (size === "h3") {
    return <h3 className={cn(className)}>{children}</h3>;
  }
  return <p className={cn(className)}>{children}</p>;
};

export default Text;
