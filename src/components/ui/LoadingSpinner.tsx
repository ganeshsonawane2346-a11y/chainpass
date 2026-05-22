"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const sizeMap = { sm: "h-6 w-6", md: "h-10 w-10", lg: "h-14 w-14" };

export function LoadingSpinner({
  size = "md",
  label,
  className,
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <motion.div
        className={cn(
          "rounded-full border-2 border-violet-500/30 border-t-violet-400",
          sizeMap[size]
        )}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {label && <p className="text-sm text-slate-400">{label}</p>}
    </div>
  );
}
