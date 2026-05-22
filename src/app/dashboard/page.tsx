"use client";

import Link from "next/link";
import {
  Award,
  Medal,
  Star,
  Plus,
  Wallet,
} from "lucide-react";
import { useWallet } from "@/providers/WalletProvider";
import { MOCK_CERTIFICATES, MOCK_BADGES } from "@/lib/mock-data";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertificateCard } from "@/components/dashboard/CertificateCard";
import { StatCard } from "@/components/ui/StatCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WalletButton } from "@/components/ui/WalletButton";
import { truncateAddress } from "@/lib/utils";

export default function DashboardPage() {
  const { address, isConnected } = useWallet();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <PageHeader
          title="Student Dashboard"
          description="Your earned certificates, badges, and on-chain reputation."
          badge="Learner Portal"
        />
        <WalletButton />
      </div>

      <GlassCard className="mb-8 flex flex-wrap items-center gap-4 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <Wallet className="h-5 w-5 text-violet-400" />
        </div>
        <div>
          <p className="text-xs text-slate-500">Connected Wallet</p>
          <p className="font-mono text-sm text-white">
            {isConnected && address
              ? truncateAddress(address, 6)
              : "Not connected — connect to view credentials"}
          </p>
        </div>
        <div className="ml-auto">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            Base Sepolia
          </span>
        </div>
      </GlassCard>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <StatCard label="Total Certificates" value={3} icon={Award} trend="+1 this month" />
        <StatCard label="Badges Earned" value={3} icon={Medal} />
        <StatCard label="Reputation Score" value={720} icon={Star} trend="Top 15%" />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">NFT Certificates</h2>
        <Button href="/claim" size="sm">
          <Plus className="h-4 w-4" />
          Claim New
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_CERTIFICATES.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-white">
        Achievement Badges
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {MOCK_BADGES.map((badge) => (
          <GlassCard key={badge.id} className="p-4" hover>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20">
              <Star className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="mt-3 font-medium text-white">{badge.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{badge.description}</p>
            <p className="mt-2 text-xs text-slate-500">Earned {badge.earnedAt}</p>
          </GlassCard>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        <Link href="/profile" className="text-violet-400 hover:text-violet-300">
          View full profile →
        </Link>
      </p>
    </div>
  );
}
