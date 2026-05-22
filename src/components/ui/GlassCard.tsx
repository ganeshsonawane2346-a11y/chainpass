import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hover && "transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.07]",
        glow && "shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}
