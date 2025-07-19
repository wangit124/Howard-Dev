import { COLOR } from "@/lib/types";
import { X } from "lucide-react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  toggleOpen: (open: boolean) => void;
  children: ReactNode;
}

export default function Modal({ isOpen, toggleOpen, children }: ModalProps) {
  const modalRoot =
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-secondary/80">
      <div className="relative p-6 h-full w-full">
        <div
          onClick={() => toggleOpen(false)}
          className="rounded-full bg-primary absolute p-2 top-4 right-4 z-200 hover:scale-110 cursor-pointer"
        >
          <X size={24} color={COLOR.SECONDARY} strokeWidth={3} />
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
