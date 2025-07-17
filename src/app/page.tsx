"use client";

import BubbleContent from "@/features/BubbleContent";
import InteractiveBubbles from "@/features/InteractiveBubbles";

export default function Home() {
  return (
    <div className="bg-[url('/polygons_bg.svg')] bg-cover flex flex-1">
      <InteractiveBubbles />
      <BubbleContent />
    </div>
  );
}
