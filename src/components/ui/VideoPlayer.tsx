"use client";

type VideoPlayerProps = {
  src: string;
  poster?: string;
};

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <video
      className="h-full rounded-md"
      src={src}
      poster={poster}
      controls
      preload="metadata"
    />
  );
}
