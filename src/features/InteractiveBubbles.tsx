"use client";

import { GradientBubble, CustomImage } from "@/components";
import { useActiveBubbleStore } from "@/hooks/useActiveBubbleStore";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useBubbleContentModal } from "@/hooks/useBubbleContentModalStore";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { DEFAULT_BUBBLE_SIZE, PROFILE_BUBBLE_SIZE } from "@/lib/constants";
import { Breakpoints, BubbleType, QuadrantTypes } from "@/lib/types";
import { useEffect } from "react";
import DraggableBubble from "@/components/DraggableBubble";

const connectBubblesWithLine = ({
  isActiveBubble,
  fromBubble,
  toBubble,
  breakpoints,
  line,
  quadrant,
}: {
  isActiveBubble: boolean;
  fromBubble: HTMLElement;
  toBubble: HTMLElement;
  line: HTMLElement;
  breakpoints: Breakpoints;
  quadrant: QuadrantTypes;
}) => {
  // Position toBubble
  const fromRect = fromBubble.getBoundingClientRect();
  const fromOffset = fromRect.width / 2;
  const fromCenter = {
    x: fromRect.left + fromOffset,
    y: fromRect.top + fromOffset,
  };
  const toRectWidth = DEFAULT_BUBBLE_SIZE;
  const xRightBound = breakpoints.md
    ? breakpoints.width / 2
    : breakpoints.width;
  const targetThresholds: Record<QuadrantTypes, { x: number[]; y: number[] }> =
    {
      "top-left": {
        x: [toRectWidth, fromRect.left - toRectWidth / 2],
        y: [30, fromRect.top - toRectWidth - 30],
      },
      "top-right": {
        x: [fromRect.right, xRightBound - toRectWidth - 40],
        y: [30, fromRect.top - toRectWidth - 30],
      },
      "bottom-left": {
        x: [toRectWidth, fromRect.left - toRectWidth / 2],
        y: [fromRect.bottom, breakpoints.height - toRectWidth - 30],
      },
      "bottom-right": {
        x: [fromRect.right, xRightBound - toRectWidth - 40],
        y: [fromRect.bottom, breakpoints.height - toRectWidth],
      },
    };
  const target = { x: fromCenter.x, y: fromCenter.y };
  const thresholds = targetThresholds[quadrant];
  if (isActiveBubble && breakpoints.md) {
    target.x = breakpoints.width / 2 - 40;
    target.y = 20;
  } else if (quadrant === "top-left") {
    target.x = Math.min(thresholds.x[0], thresholds.x[1]);
    target.y = Math.min(thresholds.y[0] + 40, thresholds.y[1]);
  } else if (quadrant === "top-right") {
    target.x = Math.min(thresholds.x[0] + 16, thresholds.x[1]);
    target.y = Math.min(thresholds.y[0] + 8, thresholds.y[1]);
  } else if (quadrant === "bottom-left") {
    target.x = Math.min(thresholds.x[0], thresholds.x[1]);
    target.y = Math.min(thresholds.y[0], thresholds.y[1]);
  } else if (quadrant === "bottom-right") {
    target.x = Math.min(thresholds.x[0] + 20, thresholds.x[1]);
    target.y = Math.min(thresholds.y[0] + 40, thresholds.y[1]);
  }
  toBubble.style.left = `${target.x}px`;
  toBubble.style.top = `${target.y}px`;
  toBubble.style.transform = "none";

  // Connect toBubble and fromBubble with line
  const toOffset = toRectWidth / 2;
  const toCenter = {
    x: target.x + toOffset,
    y: target.y + toOffset,
  };
  line.setAttribute("x1", fromCenter.x.toString());
  line.setAttribute("y1", fromCenter.y.toString());
  line.setAttribute("x2", toCenter.x.toString());
  line.setAttribute("y2", toCenter.y.toString());
};

const setInitialBubblePositions = (breakpoints: Breakpoints) => {
  const { activeBubble, bubblePositions } = useActiveBubbleStore.getState();
  const profileBubble = document.getElementById("profile_bubble");
  if (!profileBubble) return;
  const bubbles = Object.values(BubbleType);
  for (const bubbleType of bubbles) {
    const isActiveBubble = bubbleType === activeBubble;
    const toBubble = document.getElementById(`${bubbleType}_bubble`);
    const toBubbleLine = document.getElementById(`${bubbleType}_bubble_line`);
    if (!toBubble || !toBubbleLine) return;
    connectBubblesWithLine({
      isActiveBubble,
      fromBubble: profileBubble,
      toBubble,
      line: toBubbleLine,
      breakpoints,
      quadrant: bubblePositions[bubbleType],
    });
  }
};

const dragLineWithBubble = (type: BubbleType) => {
  const bubble = document.getElementById(`${type}_bubble`);
  const bubbleLine = document.getElementById(`${type}_bubble_line`);
  if (!bubble || !bubbleLine) return;
  const bubbleRect = bubble.getBoundingClientRect();
  const offset = bubbleRect.width / 2;
  const bubbleCenter = {
    x: bubbleRect.left + offset,
    y: bubbleRect.top + offset,
  };
  bubbleLine.setAttribute("x2", bubbleCenter.x.toString());
  bubbleLine.setAttribute("y2", bubbleCenter.y.toString());
};

export default function InteractiveBubbles() {
  const { track } = useTrackAnalytics();
  const breakpoints = useBreakpoints();
  const { toggleOpen } = useBubbleContentModal();
  const { activeBubble, setActiveBubble } = useActiveBubbleStore();

  useEffect(() => {
    setInitialBubblePositions(breakpoints);
  }, [breakpoints, activeBubble]);

  const onBubbleClick = (type: BubbleType) => {
    setActiveBubble(type, !breakpoints.md);
    if (!breakpoints.md) toggleOpen(true);
    track({ type: "click", entity: "bubble", item: type });
  };

  if (!window) return null;

  return (
    <div>
      <GradientBubble
        id="profile_bubble"
        width={PROFILE_BUBBLE_SIZE}
        height={PROFILE_BUBBLE_SIZE}
        transparent
        className="absolute z-99"
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <CustomImage src="/profile.png" alt="profile" radius="rounded-full" />
      </GradientBubble>
      {Object.values(BubbleType).map((type) => (
        <DraggableBubble
          key={type}
          type={type}
          onClick={onBubbleClick}
          activeBubble={activeBubble}
          breakpoints={breakpoints}
          onDrag={() => dragLineWithBubble(type)}
        />
      ))}
    </div>
  );
}
