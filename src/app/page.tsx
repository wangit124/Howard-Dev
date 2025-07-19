"use client";

import VideoModal from "@/components/modals/VideoModal";
import BubbleContent from "@/features/BubbleContent";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const InteractiveBubbles = dynamic(
  () => import("@/features/InteractiveBubbles"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { track } = useTrackAnalytics();
  useEffect(() => {
    track({ type: "view" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative flex flex-1 overflow-auto bg-[url('/polygons_bg.svg')] bg-repeat-y min-h-[100%] min-w-[100%] h-[100%] w-[100%]">
      <InteractiveBubbles />
      <BubbleContent />
      <VideoModal />
    </div>
  );
}
