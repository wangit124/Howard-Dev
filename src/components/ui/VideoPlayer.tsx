"use client";

import { DetailedHTMLProps, VideoHTMLAttributes } from "react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
} & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export default function VideoPlayer({
  src,
  poster,
  ...props
}: VideoPlayerProps) {
  return (
    <video
      className="h-full rounded-md"
      src={src}
      poster={poster}
      controls
      preload="metadata"
      {...props}
    />
  );
}
