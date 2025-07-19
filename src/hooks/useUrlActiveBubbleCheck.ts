import { useEffect } from "react";
import { useActiveBubbleStore } from "./useActiveBubbleStore";
import { BubbleType } from "@/lib/types";

const useUrlActiveBubbleCheck = () => {
  const { setActiveBubble } = useActiveBubbleStore();
  useEffect(() => {
    const onHashChange = () => {
      const bubbleType = window?.location?.hash
        ?.replace("#", "")
        ?.toLowerCase();
      if (
        bubbleType &&
        Object.values(BubbleType).includes(bubbleType as BubbleType)
      ) {
        setActiveBubble(bubbleType as BubbleType);
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUrlActiveBubbleCheck;
