"use client";

import { Text, GradientBubble, CustomImage } from "@/components";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { DEFAULT_BUBBLE_SIZE, ProfileBubbleWidth } from "@/lib/constants";
import { Breakpoints, QuadrantToOffsetCache, QuadrantTypes } from "@/lib/types";
import { getRandomNumInclusive } from "@/lib/utils";
import { useLayoutEffect, useMemo } from "react";

const connectBubblesWithLine = ({
  fromBubble,
  toBubble,
  line,
  quadrant,
  quadrantToOffsetCache,
}: {
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
  if (quadrant === "top-left") {
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

const updateBubblePositions = (
  breakpoints: Breakpoints,
  quadrantToOffsetCache: QuadrantToOffsetCache
) => {
  const profileBubble = document.getElementById("profile_bubble");
  const aboutBubble = document.getElementById("about_bubble");
  const projectsBubble = document.getElementById("projects_bubble");
  const experienceBubble = document.getElementById("experience_bubble");
  const statsBubble = document.getElementById("stats_bubble");
  const aboutBubbleLine = document.getElementById("about_bubble_line");
  const projectsBubbleLine = document.getElementById("projects_bubble_line");
  const experienceBubbleLine = document.getElementById(
    "experience_bubble_line"
  );
  const statsBubbleLine = document.getElementById("stats_bubble_line");
  if (
    !profileBubble ||
    !aboutBubble ||
    !projectsBubble ||
    !experienceBubble ||
    !statsBubble ||
    !aboutBubbleLine ||
    !projectsBubbleLine ||
    !experienceBubbleLine ||
    !statsBubbleLine
  ) {
    return;
  }
  connectBubblesWithLine({
    fromBubble: profileBubble,
    toBubble: projectsBubble,
    line: projectsBubbleLine,
    breakpoints,
    quadrant: "top-left",
    quadrantToOffsetCache,
  });
  connectBubblesWithLine({
    fromBubble: profileBubble,
    toBubble: aboutBubble,
    line: aboutBubbleLine,
    breakpoints,
    quadrant: "top-right",
    quadrantToOffsetCache,
  });
  connectBubblesWithLine({
    fromBubble: profileBubble,
    toBubble: experienceBubble,
    line: experienceBubbleLine,
    breakpoints,
    quadrant: "bottom-left",
    quadrantToOffsetCache,
  });
  connectBubblesWithLine({
    fromBubble: profileBubble,
    toBubble: statsBubble,
    line: statsBubbleLine,
    breakpoints,
    quadrant: "bottom-right",
    quadrantToOffsetCache,
  });
};

export default function InteractiveBubbles() {
  const breakpoints = useBreakpoints();

  const getRandomOffset = () => ({
    x: getRandomNumInclusive(
      ProfileBubbleWidth / 2 + 30,
      Math.floor(
        !breakpoints.md ? breakpoints.width / 2 : breakpoints.width / 4
      ) -
        (DEFAULT_BUBBLE_SIZE / 2 + 20)
    ),
    y: getRandomNumInclusive(
      ProfileBubbleWidth / 2 + 30,
      Math.floor(breakpoints.height / 2) - (DEFAULT_BUBBLE_SIZE / 2 + 20)
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
      breakpoints.height,
    ]
  );

  useLayoutEffect(() => {
    updateBubblePositions(breakpoints, quadrantToOffsetCache);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints]);

  return (
    <>
      <GradientBubble
        id="projects_bubble"
        className="absolute z-99"
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <Text size="h1">Projects</Text>
      </GradientBubble>
      <svg
        id="projects_bubble_svg"
        className="absolute w-full h-full pointer-events-none"
      >
        <line id="projects_bubble_line" stroke="#CFB97D" strokeWidth="1" />
      </svg>
      <GradientBubble
        id="about_bubble"
        className="absolute z-99"
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <Text size="h1">About</Text>
      </GradientBubble>
      <svg
        id="about_bubble_svg"
        className="absolute w-full h-full pointer-events-none"
      >
        <line id="about_bubble_line" stroke="#CFB97D" strokeWidth="1" />
      </svg>
      <GradientBubble
        id="profile_bubble"
        width={ProfileBubbleWidth}
        height={ProfileBubbleWidth}
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
      <svg
        id="experience_bubble_svg"
        className="absolute w-full h-full pointer-events-none"
      >
        <line id="experience_bubble_line" stroke="#CFB97D" strokeWidth="1" />
      </svg>
      <GradientBubble
        id="experience_bubble"
        className="absolute z-99"
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <Text size="h1">Experience</Text>
      </GradientBubble>
      <svg
        id="stats_bubble_svg"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <line id="stats_bubble_line" stroke="#CFB97D" strokeWidth="1" />
      </svg>
      <GradientBubble
        id="stats_bubble"
        className="absolute z-99"
        style={{
          top: "50%",
          left: !breakpoints.md ? "50%" : "25%",
          transform: `translate(${!breakpoints.md ? "-50%" : "-25%"}, -50%)`,
        }}
      >
        <Text size="h1">Stats</Text>
      </GradientBubble>
    </>
  );
}
