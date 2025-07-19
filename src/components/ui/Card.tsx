"use client";

import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-linear-to-b",
        "from-primary-gradient-start",
        "to-primary-gradient-end",
        "rounded-lg",
        "p-[2px]",
        "flex",
        "items-center",
        "justify-center",
        "cursor-pointer",
        "hover:scale-102",
        className
      )}
      {...props}
    >
      <div className="bg-secondary p-2 rounded-md w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
