import { create } from "zustand";

export type VideoModalStore = {
  isOpen: boolean;
  videoPath: string | undefined;
  setVideoPath: (path: string) => void;
  toggleOpen: (open: boolean) => void;
};

export const useVideoModalStore = create<VideoModalStore>((set) => ({
  isOpen: false,
  videoPath: undefined,
  setVideoPath: (path) => set({ videoPath: path }),
  toggleOpen: (open) => set({ isOpen: open }),
}));
