"use client";

import { Text, Flex, GradientBubble, CustomImage } from "@/components";
import { DEFAULT_BUBBLE_SIZE } from "@/lib/constants";

export default function InteractiveBubbles() {
  return (
    <Flex direction="col" justify="center" items="center" className="flex-1">
      <Flex direction="row" items="center" justify="between">
        <GradientBubble>
          <Text size="h1">Projects</Text>
        </GradientBubble>
        <GradientBubble>
          <Text size="h1">About</Text>
        </GradientBubble>
      </Flex>
      <GradientBubble
        width={DEFAULT_BUBBLE_SIZE + 28}
        height={DEFAULT_BUBBLE_SIZE + 28}
        transparent
      >
        <CustomImage src="/profile.png" alt="profile" radius="rounded-full" />
      </GradientBubble>
      <Flex direction="row" items="center" justify="between">
        <GradientBubble>
          <Text size="h1">Experience</Text>
        </GradientBubble>
        <GradientBubble>
          <Text size="h1">Stats</Text>
        </GradientBubble>
      </Flex>
    </Flex>
  );
}
