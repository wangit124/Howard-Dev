import redis from "@/lib/redis";
import { AnalyticsSummary, TrackClickOrViewInput } from "@/lib/types";

const cacheKey = "analytics:summary";
const cacheTTL = 60;

export async function GET() {
  try {
    const cached = await redis.get<string>(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { "Content-Type": "application/json", "X-Cache": "HIT" },
      });
    }

    const keys = await redis.keys("*");

    let totalViews = 0;
    const uniqueViewUsers = new Set<string>();
    const totalClicksPerItem: Record<string, number> = {};
    const uniqueClicksPerItem: Record<string, Set<string>> = {};

    for (const key of keys) {
      const parts = key.split(":");
      const value = await redis.get<number>(key);
      if (value === null) continue;
      if (parts[0] === "views" && parts.length === 2) {
        const userId = parts[1];
        uniqueViewUsers.add(userId);
        totalViews += value;
      }
      if (parts[0] === "clicks" && parts.length === 4) {
        const [, userId, entity, item] = parts;
        const itemKey = `${entity}_${item}`;
        totalClicksPerItem[itemKey] =
          (totalClicksPerItem[itemKey] || 0) + value;
        if (!uniqueClicksPerItem[itemKey]) {
          uniqueClicksPerItem[itemKey] = new Set();
        }
        uniqueClicksPerItem[itemKey].add(userId);
      }
    }

    const itemClicksSummary: Record<
      string,
      { uniqueCount: number; totalCount: number }
    > = {};
    for (const item in uniqueClicksPerItem) {
      itemClicksSummary[item] = {
        uniqueCount: uniqueClicksPerItem[item].size,
        totalCount: totalClicksPerItem[item] || 0,
      };
    }

    const result: AnalyticsSummary = {
      totalViews,
      uniqueViews: uniqueViewUsers.size,
      itemClicksSummary,
    };
    const resultString = JSON.stringify(result, null, 2);
    await redis.set(cacheKey, resultString, { ex: cacheTTL });
    return new Response(resultString, {
      status: 200,
      headers: { "Content-Type": "application/json", "X-Cache": "MISS" },
    });
  } catch (error) {
    console.error("Error fetching Redis data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  const userId = request?.headers?.get("x-user-id");
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const body: TrackClickOrViewInput = await request.json();
  const { type, entity, item } = body;

  try {
    if (type === "click") {
      if (!entity || !item) {
        return new Response("Missing 'entity' or 'item' for click", {
          status: 400,
        });
      }
      const key = `clicks:${userId}:${entity}:${item}`;
      await redis.incr(key);
    } else if (type === "view") {
      const key = `views:${userId}`;
      await redis.incr(key);
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Redis error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
