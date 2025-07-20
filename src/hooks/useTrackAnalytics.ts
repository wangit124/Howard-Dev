import { TrackClickOrViewInput } from "@/lib/types";

export const useTrackAnalytics = () => {
  const track = async (data: TrackClickOrViewInput) => {
    try {
      let xUserId = localStorage.getItem("x-user-id");
      if (!xUserId) {
        xUserId = crypto.randomUUID();
        localStorage.setItem("x-user-id", xUserId);
      }
      if (!xUserId) return;
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "x-user-id": xUserId },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { track };
};
