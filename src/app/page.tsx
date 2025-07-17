"use client";

import BubbleContent from "@/features/BubbleContent";
import InteractiveBubbles from "@/features/InteractiveBubbles";

export default function Home() {
  return (
    <div className="bg-[url('/polygons_bg.svg')] flex w-full h-full">
      <InteractiveBubbles />
      <BubbleContent />
    </div>
  );
}
