import { Zap, Award, QrCode, Shield } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap = {
  zap: Zap,
  award: Award,
  qr: QrCode,
  shield: Shield,
} as const;

export function FeatureCards() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Built for learners, not crypto experts
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          Everything you need to prove skills on-chain — with beginner-friendly UX.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <GlassCard key={feature.title} className="p-6" hover glow>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/30">
                  <Icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
