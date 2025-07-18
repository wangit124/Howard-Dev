import { BubbleType, QuadrantTypes } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ActiveBubbleStoreType = {
  activeBubble: BubbleType;
  bubblePositions: Record<BubbleType, QuadrantTypes>;
  setActiveBubble: (activeBubble: BubbleType) => void;
  setBubblePositions: (
    bubblePositions: Record<BubbleType, QuadrantTypes>
  ) => void;
};

export const useActiveBubbleStore = create<ActiveBubbleStoreType>()(
  persist(
    (set) => ({
      activeBubble: BubbleType.ABOUT,
      bubblePositions: {
        [BubbleType.ABOUT]: "top-right",
        [BubbleType.PROJECTS]: "top-left",
        [BubbleType.EXPERIENCE]: "bottom-left",
        [BubbleType.STATS]: "bottom-right",
      },
      setActiveBubble: (activeBubble) => set({ activeBubble }),
      setBubblePositions: (bubblePositions) => set({ bubblePositions }),
    }),
    { name: "active-bubble-store" }
  )
);
