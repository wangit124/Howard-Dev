"use client";

import { Flex, Modal } from "@/components";
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
import { useBubbleContentModal } from "@/hooks/useBubbleContentModalStore";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function BubbleContent() {
  const { md, width } = useBreakpoints();
  const { activeBubble } = useActiveBubbleStore();
  const { isOpen, toggleOpen } = useBubbleContentModal();
  useEffect(() => {
    const bubbleContentBg = document.getElementById("bubble_content_bg");
    if (!bubbleContentBg) return;
    bubbleContentBg.style.left = `${width / 2 + DEFAULT_BUBBLE_SIZE / 2}px`;
  }, [width, activeBubble]);

  const className = cn(
    "flex justify-center items-center",
    md
      ? "absolute top-[40px] bottom-[30px] right-[30px]"
      : "h-full overflow-auto flex flex-col justify-center items-center",
    "bg-linear-to-b",
    "from-primary-gradient-start",
    "to-primary-gradient-end",
    "rounded-lg",
    "p-2",
    "scrollable"
  );

  const content = (
    <Flex
      className={cn(
        "bg-black w-full h-full rounded-md overflow-auto py-8",
        md ? "px-12" : "px-4"
      )}
    >
      {activeBubble === BubbleType.ABOUT && <About />}
      {activeBubble === BubbleType.CAREER && <Career />}
      {activeBubble === BubbleType.PROJECTS && <Projects />}
      {activeBubble === BubbleType.STATS && <Stats />}
    </Flex>
  );

  const animatedContainer = (
    <motion.div
      id="bubble_content_bg"
      key={activeBubble}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {content}
    </motion.div>
  );

  const nonAnimatedContainer = (
    <div id="bubble_content_bg" className={className}>
      {content}
    </div>
  );

  if (!md) {
    return (
      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
        {nonAnimatedContainer}
      </Modal>
    );
  }
  return animatedContainer;
}
