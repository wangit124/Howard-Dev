"use client";

import { DEFAULT_IMAGE_SIZE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CustomImage = ({
  src,
  alt,
  radius,
  width = DEFAULT_IMAGE_SIZE,
  height = DEFAULT_IMAGE_SIZE,
}: {
  src: string;
  alt: string;
  radius?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div
      className={cn(
        "relative",
        radius === "rounded-full" ? "rounded-full" : radius,
        "overflow-hidden",
        "flex-shrink-0",
      )}
      style={{ width, height }}
    >
      <Image priority src={src} alt={alt} className="object-cover" fill />
    </div>
  );
};

export default CustomImage;
