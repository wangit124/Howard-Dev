import { ImageResponse } from "next/og";

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 32,
          height: 32,
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(180deg, #CFB97D 100%, #94814C 0%)",
          borderRadius: 8,
        }}
      >
        HW
      </div>
    ),
    { width: 32, height: 32 }
  );
}
