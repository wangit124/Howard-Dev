import { create } from "zustand";

export type VideoModalStore = {
  isOpen: boolean;
  toggleOpen: (open: boolean) => void;
};

export const useVideoModalStore = create<VideoModalStore>((set) => ({
  isOpen: false,
  toggleOpen: (open) => set({ isOpen: open }),
}));
