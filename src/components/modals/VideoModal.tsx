import Modal from "../ui/Modal";
import { useVideoModalStore } from "@/hooks/useVideoModalStore";

export default function VideoModal() {
  const { isOpen } = useVideoModalStore();
  return (
    <Modal isOpen={isOpen}>
      <video></video>
    </Modal>
  );
}
