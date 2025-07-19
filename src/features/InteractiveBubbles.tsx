"use client";

import { GradientBubble, CustomImage } from "@/components";
import {
  ActiveBubbleStoreType,
  useActiveBubbleStore,
} from "@/hooks/useActiveBubbleStore";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useBubbleContentModal } from "@/hooks/useBubbleContentModalStore";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { PROFILE_BUBBLE_SIZE } from "@/lib/constants";
import { Breakpoints, BubbleType, QuadrantTypes } from "@/lib/types";
import { useEffect } from "react";
import DraggableBubble from "@/components/DraggableBubble";
import { getRandomNumInclusive } from "@/lib/utils";

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
  let toRect = toBubble.getBoundingClientRect();
  const xRightBound = breakpoints.md
    ? breakpoints.width / 2
    : breakpoints.width;
  const targetThresholds: Record<QuadrantTypes, { x: number[]; y: number[] }> =
    {
      "top-left": {
        x: [toRect.width, fromRect.left - toRect.width],
        y: [30, fromRect.top - toRect.height - 30],
      },
      "top-right": {
        x: [fromRect.right, xRightBound - toRect.width - 40],
        y: [30, fromRect.top - toRect.height - 30],
      },
      "bottom-left": {
        x: [toRect.width, fromRect.left - toRect.width],
        y: [fromRect.bottom, breakpoints.height - toRect.height - 30],
      },
      "bottom-right": {
        x: [fromRect.right, xRightBound - toRect.width - 40],
        y: [fromRect.bottom, breakpoints.height - toRect.height - 30],
      },
    };
  const target = { x: fromCenter.x, y: fromCenter.y };
  if (isActiveBubble && breakpoints.md) {
    target.x = breakpoints.width / 2 - 40;
    target.y = 20;
  } else {
    const thresholds = targetThresholds[quadrant];
    target.x = getRandomNumInclusive(thresholds.x[0], thresholds.x[1]);
    target.y = getRandomNumInclusive(thresholds.y[0], thresholds.y[1]);
  }
  toBubble.style.left = `${target.x}px`;
  toBubble.style.top = `${target.y}px`;
  toBubble.style.transform = "none";

  // Connect toBubble and fromBubble with line
  toRect = toBubble.getBoundingClientRect();
  const toOffset = toRect.width / 2;
  const toCenter = {
    x: toRect.left + toOffset,
    y: toRect.top + toOffset,
  };
  line.setAttribute("x1", fromCenter.x.toString());
  line.setAttribute("y1", fromCenter.y.toString());
  line.setAttribute("x2", toCenter.x.toString());
  line.setAttribute("y2", toCenter.y.toString());
};

const setInitialBubblePositions = ({
  activeBubble,
  breakpoints,
  bubblePositions,
}: {
  activeBubble: BubbleType;
  bubblePositions: ActiveBubbleStoreType["bubblePositions"];
  breakpoints: Breakpoints;
}) => {
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

const dragLineWithBubble = ({ type }: { type: BubbleType }) => {
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
  const { activeBubble, bubblePositions, setActiveBubble } =
    useActiveBubbleStore();

  useEffect(() => {
    setInitialBubblePositions({
      activeBubble,
      bubblePositions,
      breakpoints,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints]);

  const onBubbleClick = (type: BubbleType) => {
    setActiveBubble(type);
    if (!breakpoints.md) {
      toggleOpen(true);
    }
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
          onDrag={() => dragLineWithBubble({ type })}
        />
      ))}
    </div>
  );
}
