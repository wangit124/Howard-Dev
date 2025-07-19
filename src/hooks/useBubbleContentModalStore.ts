import { create } from "zustand";

export type BubbleContentModalStore = {
  isOpen: boolean;
  toggleOpen: (open: boolean) => void;
};

export const useBubbleContentModal = create<BubbleContentModalStore>((set) => ({
  isOpen: false,
  toggleOpen: (open) => set({ isOpen: open }),
}));
