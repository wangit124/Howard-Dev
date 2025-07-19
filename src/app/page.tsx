"use client";

import VideoModal from "@/components/modals/VideoModal";
import BubbleContent from "@/features/BubbleContent";
import InteractiveBubbles from "@/features/InteractiveBubbles";

export default function Home() {
  return (
    <div className="relative flex flex-1 overflow-auto bg-[url('/polygons_bg.svg')] bg-repeat-y min-h-[100%] min-w-[100%] h-[100%] w-[100%]">
      <InteractiveBubbles />
      <BubbleContent />
      <VideoModal />
    </div>
  );
}
