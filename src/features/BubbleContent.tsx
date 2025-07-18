"use client";

import { Flex } from "@/components";
import { useActiveBubbleStore } from "@/hooks/useActiveBubbleStore";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { DEFAULT_BUBBLE_SIZE } from "@/lib/constants";
import { BubbleType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import About from "./content/About";
import Career from "./content/Career";
import Projects from "./content/Projects";
import Stats from "./content/Stats";

export default function BubbleContent() {
  const { md, width } = useBreakpoints();
  const { activeBubble } = useActiveBubbleStore();
  useEffect(() => {
    const bubbleContentBg = document.getElementById("bubble_content_bg");
    if (!bubbleContentBg) return;
    bubbleContentBg.style.left = `${width / 2 + DEFAULT_BUBBLE_SIZE / 2}px`;
  }, [width]);
  if (!md) return null;
  return (
    <Flex
      id="bubble_content_bg"
      justify="center"
      items="center"
      className={cn(
        "absolute",
        "top-[40px]",
        "bottom-[30px]",
        "right-[30px]",
        "bg-linear-to-b",
        "from-primary-gradient-start",
        "to-primary-gradient-end",
        "rounded-lg",
        "p-2",
        "scrollable"
      )}
    >
      <Flex className="bg-black w-full h-full rounded-md overflow-auto px-12 py-8">
        {activeBubble === BubbleType.ABOUT && <About />}
        {activeBubble === BubbleType.CAREER && <Career />}
        {activeBubble === BubbleType.PROJECTS && <Projects />}
        {activeBubble === BubbleType.STATS && <Stats />}
      </Flex>
    </Flex>
  );
}
