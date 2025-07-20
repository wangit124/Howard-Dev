"use client";

import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
};

const Button: React.FC<
  ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ variant, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-linear-to-b",
        "from-primary-gradient-start",
        "to-primary-gradient-end",
        "rounded-full",
        variant === "primary" ? "py-[14px]" : "py-[2px]",
        variant === "primary" ? "px-5" : "px-[2px]",
        "flex",
        "items-center",
        "justify-center",
        "cursor-pointer",
        "hover:scale-106"
      )}
    >
      {variant === "primary" ? (
        children
      ) : (
        <div className="bg-secondary py-3 px-5 rounded-full w-full flex items-center justify-center">
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
