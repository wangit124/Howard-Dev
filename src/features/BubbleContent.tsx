"use client";

import { Flex } from "@/components";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { DEFAULT_BUBBLE_SIZE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function BubbleContent() {
  const { md, width } = useBreakpoints();
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
        "top-[30px]",
        "bottom-[30px]",
        "right-[30px]",
        "bg-linear-to-b",
        "from-primary-gradient-start",
        "to-primary-gradient-end",
        "rounded-lg",
        "p-2"
      )}
    >
      <Flex className="bg-black w-full h-full rounded-md"></Flex>
    </Flex>
  );
}
