import Link from "next/link";
import Image from "next/image";
import { Award, BadgeCheck, Trophy } from "lucide-react";
import type { Certificate } from "@/lib/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { formatDate } from "@/lib/utils";

const typeIcons = {
  certificate: Award,
  badge: BadgeCheck,
  nft: Trophy,
};

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const Icon = typeIcons[certificate.type];

  return (
    <Link href={`/certificate/${certificate.id}`}>
      <GlassCard className="overflow-hidden" hover glow>
        <div className="relative aspect-[4/3] bg-gradient-to-br from-violet-900/40 to-blue-900/40">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            fill
            className="object-cover p-6"
          />
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
            <Icon className="h-3 w-3" />
            Verified
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white">{certificate.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{certificate.eventName}</p>
          <p className="mt-2 text-xs text-slate-500">
            Issued {formatDate(certificate.issueDate)}
          </p>
        </div>
      </GlassCard>
    </Link>
  );
}
