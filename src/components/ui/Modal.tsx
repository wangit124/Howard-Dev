import { useBreakpoints } from "@/hooks/useBreakpoints";
import { COLOR } from "@/lib/types";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const expandIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

interface ModalProps {
  isOpen: boolean;
  toggleOpen: (open: boolean) => void;
  children: ReactNode;
}

export default function Modal({ isOpen, toggleOpen, children }: ModalProps) {
  const { md } = useBreakpoints();
  const modalRoot =
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-secondary/80">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={expandIn}
          className={cn("relative h-full w-full", md ? "py-20 px-40" : "p-6")}
        >
          <div
            onClick={() => toggleOpen(false)}
            className={cn(
              "rounded-full bg-primary absolute p-2 z-200 hover:scale-110 cursor-pointer",
              md ? "top-18 right-38" : "top-4 right-4"
            )}
          >
            <X size={24} color={COLOR.SECONDARY} strokeWidth={3} />
          </div>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>,
    modalRoot
  );
}
