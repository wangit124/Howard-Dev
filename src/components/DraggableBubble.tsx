"use client";

import { Text, GradientBubble } from "@/components";
import { Breakpoints, BubbleType, COLOR } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, useDragControls } from "framer-motion";
import React from "react";

type Props = {
  type: BubbleType;
  onClick: (type: BubbleType) => void;
  breakpoints: Breakpoints;
  activeBubble: BubbleType;
  onDrag?: () => void;
};

const DraggableBubble: React.FC<Props> = ({
  type,
  onClick,
  breakpoints,
  activeBubble,
  onDrag,
}) => {
  const controls = useDragControls();
  const isActiveBubble = type === activeBubble;
  return (
    <div key={type}>
      <motion.div
        id={`${type}_bubble`}
        drag={!isActiveBubble}
        dragControls={controls}
        dragMomentum={false}
        onDrag={onDrag}
        onPointerDown={(e) => controls.start(e)}
        className={cn(
          "absolute z-99",
          type === activeBubble ? "scale-105" : "scale-100"
        )}
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <GradientBubble onClick={() => onClick(type)}>
          <Text size="h1" className="text-secondary capitalize">
            {type}
          </Text>
        </GradientBubble>
      </motion.div>
      <svg
        id={`${type}_bubble_svg`}
        className="absolute w-full h-full pointer-events-none"
      >
        <line
          id={`${type}_bubble_line`}
          stroke={COLOR.PRIMARY}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default DraggableBubble;
