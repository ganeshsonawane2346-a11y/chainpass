"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "./Button";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function SuccessModal({
  open,
  onClose,
  title,
  message,
  actionLabel = "View Dashboard",
  onAction,
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/95 p-8 text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring" }}
            >
              <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />
            </motion.div>
            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
            {message && (
              <p className="mt-2 text-sm text-slate-400">{message}</p>
            )}
            <Button
              className="mt-6 w-full"
              onClick={onAction ?? onClose}
            >
              {actionLabel}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
