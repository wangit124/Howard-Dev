"use client";

import { Text, GradientBubble, CustomImage } from "@/components";
import {
  ActiveBubbleStoreType,
  useActiveBubbleStore,
} from "@/hooks/useActiveBubbleStore";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { DEFAULT_BUBBLE_SIZE, PROFILE_BUBBLE_SIZE } from "@/lib/constants";
import {
  Breakpoints,
  BubbleType,
  COLOR,
  QuadrantToOffsetCache,
  QuadrantTypes,
} from "@/lib/types";
import { getRandomNumInclusive } from "@/lib/utils";
import { useEffect, useMemo } from "react";

const connectBubblesWithLine = ({
  isActiveBubble,
  fromBubble,
  toBubble,
  breakpoints,
  line,
  quadrant,
  quadrantToOffsetCache,
}: {
  isActiveBubble: boolean;
  fromBubble: HTMLElement;
  toBubble: HTMLElement;
  line: HTMLElement;
  breakpoints: Breakpoints;
  quadrant: QuadrantTypes;
  quadrantToOffsetCache: QuadrantToOffsetCache;
}) => {
  const toRect = toBubble.getBoundingClientRect();
  const fromRect = fromBubble.getBoundingClientRect();
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2,
    y: fromRect.top + fromRect.height / 2,
  };
  const baseOffsetFrom = fromRect.width / 2;
  const baseOffsetTo = toRect.width / 2;
  const randomXOffset = quadrantToOffsetCache[quadrant]?.x;
  const randomYOffset = quadrantToOffsetCache[quadrant]?.y;
  const targetPos = {
    x: fromCenter.x - baseOffsetFrom,
    y: fromCenter.y - baseOffsetFrom,
  };
  if (isActiveBubble && breakpoints.md) {
    targetPos.x = breakpoints.width / 2 - 40;
    targetPos.y = baseOffsetTo / 4;
  } else if (quadrant === "top-left") {
    targetPos.x -= randomXOffset;
    targetPos.y -= randomYOffset;
  } else if (quadrant === "top-right") {
    targetPos.x += randomXOffset;
    targetPos.y -= randomYOffset;
  } else if (quadrant === "bottom-left") {
    targetPos.x -= randomXOffset;
    targetPos.y += randomYOffset;
  } else {
    targetPos.x += randomXOffset;
    targetPos.y += randomYOffset;
  }
  toBubble.style.left = `${targetPos.x}px`;
  toBubble.style.top = `${targetPos.y}px`;
  toBubble.style.transform = "none";
  line.setAttribute("x1", fromCenter.x.toString());
  line.setAttribute("y1", fromCenter.y.toString());
  line.setAttribute("x2", (targetPos.x + baseOffsetTo).toString());
  line.setAttribute("y2", (targetPos.y + baseOffsetTo).toString());
};

const updateBubblePositions = ({
  activeBubble,
  breakpoints,
  bubblePositions,
  quadrantToOffsetCache,
}: {
  activeBubble: BubbleType;
  bubblePositions: ActiveBubbleStoreType["bubblePositions"];
  breakpoints: Breakpoints;
  quadrantToOffsetCache: QuadrantToOffsetCache;
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
      quadrantToOffsetCache,
    });
  }
};

export default function InteractiveBubbles() {
  const breakpoints = useBreakpoints();
  const heightStops = breakpoints.height % 50 === 0;

  const { activeBubble, bubblePositions, setActiveBubble } =
    useActiveBubbleStore();

  const getRandomOffset = () => ({
    x: getRandomNumInclusive(
      PROFILE_BUBBLE_SIZE / 2 + 30,
      Math.floor(
        !breakpoints.md ? breakpoints.width / 2 : breakpoints.width / 4
      ) -
        (DEFAULT_BUBBLE_SIZE / 2 + (breakpoints.md ? 14 : 30))
    ),
    y: getRandomNumInclusive(
      PROFILE_BUBBLE_SIZE / 2 + 30,
      Math.floor(breakpoints.height / 2) -
        (DEFAULT_BUBBLE_SIZE / 2 + (breakpoints.md ? 14 : 30))
    ),
  });

  const quadrantToOffsetCache: QuadrantToOffsetCache = useMemo(
    () => ({
      "top-right": getRandomOffset(),
      "top-left": getRandomOffset(),
      "bottom-left": getRandomOffset(),
      "bottom-right": getRandomOffset(),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      breakpoints.base,
      breakpoints.sm,
      breakpoints.md,
      breakpoints.lg,
      heightStops,
    ]
  );

  useEffect(() => {
    updateBubblePositions({
      activeBubble,
      bubblePositions,
      breakpoints,
      quadrantToOffsetCache,
    });
  }, [breakpoints, activeBubble, bubblePositions, quadrantToOffsetCache]);

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
        <div key={type}>
          <GradientBubble
            id={`${type}_bubble`}
            onClick={() => setActiveBubble(type)}
            className="absolute z-99"
            style={{
              top: "50%",
              left: !breakpoints.md ? "50%" : "25%",
              transform: `translate(${
                !breakpoints.md ? "-50%" : "-25%"
              }, -50%)`,
            }}
          >
            <Text size="h1" className="text-secondary capitalize">
              {type}
            </Text>
          </GradientBubble>
          <svg
            id={`${type}_bubble_svg`}
            className="absolute w-full h-full pointer-events-none"
          >
            <line id={`${type}_bubble_line`} stroke={COLOR.PRIMARY} strokeWidth="1" />
          </svg>
        </div>
      ))}
    </div>
  );
}
