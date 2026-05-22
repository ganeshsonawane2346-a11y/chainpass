import { Trophy, Medal } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { MOCK_LEADERBOARD } from "@/lib/mock-data";

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader
        title="Leaderboard"
        description="Top learners ranked by certificates, badges, and reputation score."
        badge="Community Rankings"
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {MOCK_LEADERBOARD.slice(0, 3).map((entry, i) => (
          <GlassCard
            key={entry.rank}
            className={`p-6 text-center ${i === 0 ? "ring-2 ring-amber-500/40" : ""}`}
            glow={i === 0}
          >
            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                i === 0
                  ? "bg-amber-500/20"
                  : i === 1
                    ? "bg-slate-400/20"
                    : "bg-orange-700/20"
              }`}
            >
              {i === 0 ? (
                <Trophy className="h-6 w-6 text-amber-400" />
              ) : (
                <Medal className="h-6 w-6 text-slate-400" />
              )}
            </div>
            <p className="mt-3 text-2xl font-bold text-white">#{entry.rank}</p>
            <p className="font-semibold text-white">{entry.displayName}</p>
            <p className="text-sm text-violet-400">{entry.reputation} rep</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-6 py-4 text-slate-500">Rank</th>
                <th className="px-6 py-4 text-slate-500">Student</th>
                <th className="px-6 py-4 text-slate-500">Wallet</th>
                <th className="px-6 py-4 text-slate-500">Certificates</th>
                <th className="px-6 py-4 text-slate-500">Badges</th>
                <th className="px-6 py-4 text-slate-500">Reputation</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((entry) => (
                <tr
                  key={entry.rank}
                  className="border-b border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="px-6 py-4 font-bold text-white">#{entry.rank}</td>
                  <td className="px-6 py-4 font-medium text-white">
                    {entry.displayName}
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-400">
                    {entry.address}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{entry.certificates}</td>
                  <td className="px-6 py-4 text-slate-300">{entry.badges}</td>
                  <td className="px-6 py-4 font-semibold text-violet-400">
                    {entry.reputation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
