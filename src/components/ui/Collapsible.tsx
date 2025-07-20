"use client";

import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type CollapsibleProps = {
  className?: string;
  defaultExpanded?: boolean;
  headerContent: React.ReactNode;
  hiddenContent: React.ReactNode;
  onClick?: () => void;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  className,
  defaultExpanded,
  headerContent,
  hiddenContent,
  onClick,
}) => {
  const { md } = useBreakpoints();
  const [collapsed, setCollapsed] = useState(!defaultExpanded);
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
        "hover:scale-101",
        className
      )}
      onClick={() => {
        setCollapsed((prev) => !prev);
        if (!collapsed) onClick?.();
      }}
    >
      <div className="bg-secondary p-2 rounded-md w-full">
        <div className="flex items-center w-full">
          <div className="flex flex-1">{headerContent}</div>
          <div className="mr-4">
            {collapsed ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
        {!collapsed && (
          <div className={cn(md ? "p-4" : "p-2")}>{hiddenContent}</div>
        )}
      </div>
    </div>
  );
};

export default Collapsible;
