"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Calendar,
  Download,
  ExternalLink,
  Share2,
} from "lucide-react";
import type { Certificate } from "@/lib/types";
import { CHAIN } from "@/lib/constants";
import { formatDate, truncateAddress } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

interface CertificateDisplayProps {
  certificate: Certificate;
}

export function CertificateDisplay({ certificate }: CertificateDisplayProps) {
  const explorerUrl = `${CHAIN.explorerUrl}/token/${certificate.contractAddress}?a=${certificate.tokenId}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <GlassCard className="overflow-hidden p-2" glow>
        <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-violet-900/30 to-blue-900/30">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            fill
            className="object-contain p-8"
            priority
          />
        </div>
      </GlassCard>

      <div>
        <div className="flex items-center gap-2 text-emerald-400">
          <BadgeCheck className="h-5 w-5" />
          <span className="text-sm font-medium">Blockchain Verified</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold text-white">
          {certificate.title}
        </h1>
        <p className="mt-2 text-slate-400">{certificate.eventName}</p>

        <GlassCard className="mt-6 space-y-4 p-6">
          <div>
            <p className="text-xs text-slate-500">Student</p>
            <p className="font-medium text-white">{certificate.studentName}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Issue Date</p>
            <p className="flex items-center gap-2 font-medium text-white">
              <Calendar className="h-4 w-4 text-violet-400" />
              {formatDate(certificate.issueDate)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Token ID</p>
            <p className="font-mono text-sm text-violet-300">
              #{certificate.tokenId}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Contract</p>
            <p className="font-mono text-sm text-slate-400">
              {truncateAddress(certificate.contractAddress, 6)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Network</p>
            <p className="text-sm text-white">{CHAIN.name}</p>
          </div>
        </GlassCard>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="primary" size="md">
            <Share2 className="h-4 w-4" />
            Share on LinkedIn
          </Button>
          <Button variant="secondary" size="md">
            <Download className="h-4 w-4" />
            Download Certificate
          </Button>
          <Button href={explorerUrl} variant="outline" size="md">
            <ExternalLink className="h-4 w-4" />
            View on Explorer
          </Button>
          <Button variant="ghost" size="md">
            <Share2 className="h-4 w-4" />
            Copy Link
          </Button>
        </div>

        <p className="mt-6 text-center text-sm">
          <Link href="/verify" className="text-violet-400 hover:text-violet-300">
            Verify this certificate with QR →
          </Link>
        </p>
      </div>
    </div>
  );
}
