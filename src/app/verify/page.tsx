"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { QrCode, Search, BadgeCheck, XCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { MOCK_CERTIFICATES } from "@/lib/mock-data";

export default function VerifyPage() {
  const [tokenId, setTokenId] = useState("");
  const [result, setResult] = useState<"idle" | "valid" | "invalid">("idle");

  const sampleCert = MOCK_CERTIFICATES[0];
  const verifyUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/certificate/${sampleCert.id}`
      : `https://chainpass.app/certificate/${sampleCert.id}`;

  function handleVerify() {
    const valid = MOCK_CERTIFICATES.some((c) => c.tokenId === tokenId.trim());
    setResult(valid ? "valid" : tokenId ? "invalid" : "idle");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader
        title="QR Verification"
        description="Scan or enter a token ID to verify certificate authenticity on Base Sepolia."
        badge="Public Verification"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <GlassCard className="flex flex-col items-center p-8" glow>
          <QrCode className="mb-4 h-8 w-8 text-violet-400" />
          <h3 className="font-semibold text-white">Scan Certificate QR</h3>
          <p className="mt-2 text-center text-sm text-slate-400">
            Each certificate includes a unique QR linking to on-chain proof.
          </p>
          <div className="mt-6 rounded-2xl bg-white p-4">
            <QRCodeSVG
              value={verifyUrl}
              size={200}
              level="H"
              includeMargin
              bgColor="#ffffff"
              fgColor="#0f172a"
            />
          </div>
          <p className="mt-4 font-mono text-xs text-slate-500">
            Token #{sampleCert.tokenId}
          </p>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="font-semibold text-white">Manual Verification</h3>
          <p className="mt-2 text-sm text-slate-400">
            Enter a token ID to check blockchain verification status.
          </p>
          <div className="mt-6 flex gap-2">
            <input
              value={tokenId}
              onChange={(e) => {
                setTokenId(e.target.value);
                setResult("idle");
              }}
              placeholder="e.g. 1042"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:outline-none"
            />
            <Button onClick={handleVerify}>
              <Search className="h-4 w-4" />
              Verify
            </Button>
          </div>

          {result === "valid" && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <BadgeCheck className="h-6 w-6 shrink-0 text-emerald-400" />
              <div>
                <p className="font-medium text-emerald-400">Certificate Verified</p>
                <p className="mt-1 text-sm text-slate-400">
                  This credential is authentic and recorded on Base Sepolia.
                </p>
              </div>
            </div>
          )}

          {result === "invalid" && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <XCircle className="h-6 w-6 shrink-0 text-red-400" />
              <div>
                <p className="font-medium text-red-400">Not Found</p>
                <p className="mt-1 text-sm text-slate-400">
                  No matching certificate on chain. Try token IDs: 1042, 2087, 3091.
                </p>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs text-slate-500">
            Demo: use token IDs from sample certificates (1042, 2087, 3091).
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
