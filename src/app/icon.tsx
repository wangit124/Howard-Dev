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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"
        >
          <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
          <path d="M10 19v-3.96 3.15" />
          <path d="M7 19h5" />
          <rect width="6" height="10" x="16" y="12" rx="2" />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
