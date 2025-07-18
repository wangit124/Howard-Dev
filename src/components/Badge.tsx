"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Text from "./Text";

type Props = {
  children?: React.ReactNode;
};

const Badge: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cn(
        "bg-linear-to-b",
        "from-primary-gradient-start",
        "to-primary-gradient-end",
        "rounded-[40px]",
        "p-[2px]",
        "flex",
        "items-center",
        "justify-center",
        "cursor-pointer"
      )}
    >
      <div className="bg-secondary py-2 px-4 rounded-full flex items-center hover:bg-transparent">
        <Text className="font-bold">{children}</Text>
      </div>
    </div>
  );
};

export default Badge;
