import { useVideoModalStore } from "@/hooks/useVideoModalStore";
import Flex from "../ui/Flex";
import Modal from "../ui/Modal";
import { cn } from "@/lib/utils";
import VideoPlayer from "../ui/VideoPlayer";

export default function VideoModal() {
  const { isOpen, videoPath, toggleOpen } = useVideoModalStore();
  if (!videoPath) return null;
  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
      <Flex
        id="bubble_content_bg"
        justify="center"
        items="center"
        className={cn(
          "h-full overflow-auto flex flex-col justify-center items-center",
          "bg-linear-to-b",
          "from-primary-gradient-start",
          "to-primary-gradient-end",
          "rounded-lg",
          "p-2",
          "scrollable"
        )}
      >
        <Flex
          items="center"
          justify="center"
          className={"bg-secondary w-full h-full rounded-md overflow-auto py-6"}
        >
          <VideoPlayer src={videoPath} autoPlay />
        </Flex>
      </Flex>
    </Modal>
  );
}
