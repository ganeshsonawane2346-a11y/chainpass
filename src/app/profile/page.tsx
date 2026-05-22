"use client";

import Link from "next/link";
import { User, MapPin, Calendar } from "lucide-react";
import { useWallet } from "@/providers/WalletProvider";
import { MOCK_PROFILE } from "@/lib/mock-data";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { CertificateCard } from "@/components/dashboard/CertificateCard";
import { StatCard } from "@/components/ui/StatCard";
import { Award, Medal, Star } from "lucide-react";
import { formatDate, truncateAddress } from "@/lib/utils";
import { WalletButton } from "@/components/ui/WalletButton";

export default function ProfilePage() {
  const { address, isConnected } = useWallet();
  const profile = MOCK_PROFILE;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <PageHeader
          title="Student Profile"
          description="Your public Web3 learning identity on ChainPass."
          badge="Web3 Identity"
        />
        <WalletButton />
      </div>

      <GlassCard className="mb-8 p-8" glow>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600">
            <User className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{profile.displayName}</h2>
            <p className="mt-1 text-slate-400">{profile.bio}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1 font-mono">
                {isConnected && address
                  ? truncateAddress(address, 6)
                  : truncateAddress(profile.address, 6)}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Joined {formatDate(profile.joinedAt)}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Base Sepolia
              </span>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Certificates"
          value={profile.certificates.length}
          icon={Award}
        />
        <StatCard label="Badges" value={profile.badges.length} icon={Medal} />
        <StatCard
          label="Reputation"
          value={profile.reputation}
          icon={Star}
        />
      </div>

      <h3 className="mb-4 text-lg font-semibold text-white">Credentials</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>

      <p className="mt-8 text-center">
        <Link href="/leaderboard" className="text-violet-400 hover:text-violet-300">
          See where you rank on the leaderboard →
        </Link>
      </p>
    </div>
  );
}
