"use client";

import { Text, GradientBubble } from "@/components";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { Breakpoints, BubbleType, COLOR } from "@/lib/types";
import { getRandomNumInclusive } from "@/lib/utils";
import {
  motion,
  useDragControls,
  useMotionValue,
  animate,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  type: BubbleType;
  breakpoints: Breakpoints;
  activeBubble: BubbleType;
  onClick: (type: BubbleType) => void;
  onDrag: () => void;
};

const DraggableBubble: React.FC<Props> = ({
  type,
  onClick,
  breakpoints,
  activeBubble,
  onDrag,
}) => {
  const { md } = useBreakpoints();
  const controls = useDragControls();
  const dragging = useRef(false);
  const snapping = useRef(false);
  const isActiveBubble = type === activeBubble;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animatedScale = useMotionValue(1);

  const timerIds = useRef<Set<NodeJS.Timeout>>(new Set()); // To store multiple timer IDs
  const intervalIds = useRef<Set<NodeJS.Timeout>>(new Set());

  const disableAnimate = md && isActiveBubble;

  const onAnimationUpdate = () => onDrag?.();

  const animateFloat = () => {
    if (dragging.current || snapping.current || disableAnimate) return;
    const offsetX = getRandomNumInclusive(-16, 16);
    const offsetY = getRandomNumInclusive(-10, 10);
    const scaleValue = animatedScale.get();
    const scaleTarget = scaleValue > 1 ? 0.96 : 1.1;
    animate(x, offsetX, {
      ease: "easeInOut",
      duration: 2,
      onUpdate: onAnimationUpdate,
    });
    animate(y, offsetY, {
      ease: "easeInOut",
      duration: 2,
      onUpdate: onAnimationUpdate,
    });
    animate(animatedScale, scaleTarget, {
      ease: "easeInOut",
      duration: 3,
      onUpdate: onAnimationUpdate,
      onComplete: () => {
        animate(x, 0, {
          ease: "easeInOut",
          duration: 2,
          onUpdate: onAnimationUpdate,
        });
        animate(y, 0, {
          ease: "easeInOut",
          duration: 2,
          onUpdate: onAnimationUpdate,
        });
        animate(animatedScale, 1, {
          ease: "easeInOut",
          duration: 3,
          onUpdate: onAnimationUpdate,
        });
      },
    });
  };

  useEffect(() => {
    if (disableAnimate) {
      timerIds.current.forEach((timerId) => clearTimeout(timerId));
      intervalIds.current.forEach((intervalId) => clearTimeout(intervalId));
      return;
    }
    const startAnimation = () => {
      animateFloat();
      const randomInterval = getRandomNumInclusive(3000, 5000);
      const intervalId = setInterval(animateFloat, randomInterval);
      intervalIds.current.add(intervalId);
    };
    const initialDelay = getRandomNumInclusive(500, 2500);
    const timeoutId = setTimeout(startAnimation, initialDelay);
    timerIds.current.add(timeoutId);
    return () => {
      if (timerIds.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timerIds.current.forEach((timerId) => clearTimeout(timerId));
      }
      if (intervalIds.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intervalIds.current.forEach((intervalId) => clearTimeout(intervalId));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableAnimate]);

  const snapBack = () => {
    snapping.current = true;
    const onSnapComplete = () => {
      if (!x.isAnimating() && !y.isAnimating()) {
        snapping.current = false;
      }
    };
    animate(x, 0, {
      type: "spring",
      stiffness: 200,
      damping: 12,
      mass: 0.8,
      onUpdate: onAnimationUpdate,
      onComplete: onSnapComplete,
    });
    animate(y, 0, {
      type: "spring",
      stiffness: 200,
      damping: 12,
      mass: 0.8,
      onUpdate: onAnimationUpdate,
      onComplete: onSnapComplete,
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    controls.start(e);
    dragging.current = false;
  };

  const handleDragStart = () => {
    dragging.current = true;
  };

  const handleDragEnd = () => {
    dragging.current = false;
    snapBack();
  };

  const handleClick = () => {
    if (dragging.current) return;
    onClick(type);
  };

  return (
    <div key={type}>
      <motion.div
        id={`${type}_bubble`}
        drag={!md || !isActiveBubble}
        dragControls={controls}
        dragMomentum={false}
        onPointerDown={handlePointerDown}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={onDrag}
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
          scale: isActiveBubble ? 1.06 : animatedScale,
          x,
          y,
        }}
        className="absolute z-99"
      >
        <GradientBubble onClick={handleClick} className="cursor-grab">
          <Text size="h1" className="text-secondary capitalize">
            {type}
          </Text>
        </GradientBubble>
      </motion.div>
      <svg
        id={`${type}_bubble_svg`}
        className="absolute z-98 w-full h-full pointer-events-none"
      >
        <line
          id={`${type}_bubble_line`}
          stroke={COLOR.PRIMARY}
          strokeWidth={3}
        />
      </svg>
    </div>
  );
};

export default DraggableBubble;
