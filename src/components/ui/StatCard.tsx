import { type LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
}

export function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
  return (
    <GlassCard className="p-5" hover>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-1 text-2xl font-bold text-white">{value}</p>
          {trend && (
            <p className="mt-1 text-xs text-emerald-400">{trend}</p>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <Icon className="h-5 w-5 text-violet-400" />
        </div>
      </div>
    </GlassCard>
  );
}
