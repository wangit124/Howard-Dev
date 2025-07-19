import { TrackClickOrViewInput } from "@/lib/types";

export const useTrackAnalytics = () => {
  const track = async (data: TrackClickOrViewInput) => {
    try {
      let xUserId = localStorage.getItem("x-user-id");
      if (!xUserId) {
        localStorage.setItem("x-user-id", crypto.randomUUID());
        xUserId = localStorage.getItem("x-user-id");
      }
      await fetch("/api/redis", {
        method: "POST",
        headers: xUserId ? { "x-user-id": xUserId } : undefined,
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { track };
};
