import { BubbleType, QuadrantTypes } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ActiveBubbleStoreType = {
  activeBubble: BubbleType;
  bubblePositions: Record<BubbleType, QuadrantTypes>;
  setActiveBubble: (bubble: BubbleType, keepPosition?: boolean) => void;
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
        [BubbleType.CAREER]: "bottom-left",
        [BubbleType.STATS]: "bottom-right",
      },
      setActiveBubble: (bubble, keepPosition) =>
        set((prev) => {
          const temp = prev.bubblePositions[prev.activeBubble];
          return {
            activeBubble: bubble,
            bubblePositions: keepPosition
              ? prev.bubblePositions
              : {
                  ...prev.bubblePositions,
                  [prev.activeBubble]: prev.bubblePositions[bubble],
                  [bubble]: temp,
                },
          };
        }),
      setBubblePositions: (bubblePositions) => set({ bubblePositions }),
    }),
    { name: "active-bubble-store" }
  )
);
