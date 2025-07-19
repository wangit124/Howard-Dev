import { AnalyticsSummary } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [analyticsSummary, setAnalyticsSummary] = useState<AnalyticsSummary>({
    totalViews: 0,
    uniqueViews: 0,
    itemClicksSummary: {},
  });
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/redis", { method: "GET" });
        const resJson = await res.json();
        setAnalyticsSummary(resJson);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  return { analyticsSummary, loading };
};
