import { useEffect } from "react";
import { useActiveBubbleStore } from "./useActiveBubbleStore";
import { BubbleType } from "@/lib/types";
import { useBreakpoints } from "./useBreakpoints";
import { useBubbleContentModal } from "./useBubbleContentModalStore";

const useUrlActiveBubbleCheck = () => {
  const { md } = useBreakpoints();
  const { setActiveBubble } = useActiveBubbleStore();
  const { toggleOpen } = useBubbleContentModal();
  useEffect(() => {
    const onHashChange = () => {
      const bubbleType = window?.location?.hash
        ?.replace("#", "")
        ?.toLowerCase();
      if (
        bubbleType &&
        Object.values(BubbleType).includes(bubbleType as BubbleType)
      ) {
        setActiveBubble(bubbleType as BubbleType, !md);
        if (!md) toggleOpen(true);
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
