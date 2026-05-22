"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { KeyRound, Fuel, CheckCircle2 } from "lucide-react";
import { useWallet } from "@/providers/WalletProvider";
import { claimCertificateViaUGF, getUGFStatusMessage } from "@/lib/web3/ugf";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { WalletButton } from "@/components/ui/WalletButton";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { BlockchainVisual } from "@/components/ui/BlockchainVisual";

type ClaimStep = "idle" | "processing" | "success";

export function ClaimForm() {
  const router = useRouter();
  const { isConnected, connect } = useWallet();
  const [claimCode, setClaimCode] = useState("");
  const [step, setStep] = useState<ClaimStep>("idle");
  const [ugfMessage, setUgfMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleClaim() {
    setError("");
    if (!isConnected) {
      await connect();
      return;
    }
    if (!claimCode.trim()) {
      setError("Please enter your claim code");
      return;
    }

    setStep("processing");
    try {
      await claimCertificateViaUGF({
        claimCode: claimCode.trim(),
        walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      });
      setUgfMessage(getUGFStatusMessage());
      setStep("success");
      setTimeout(() => setShowSuccess(true), 600);
    } catch {
      setStep("idle");
      setError("Claim failed. Please check your code and try again.");
    }
  }

  return (
    <div className="relative">
      <BlockchainVisual />
      <GlassCard className="relative mx-auto max-w-lg p-8" glow>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Claim Your Certificate</h2>
          <WalletButton size="sm" />
        </div>

        <label className="block text-sm text-slate-400">Claim Code</label>
        <div className="relative mt-2">
          <KeyRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={claimCode}
            onChange={(e) => setClaimCode(e.target.value)}
            placeholder="e.g. CHAINPASS-AI-2026-XXXX"
            disabled={step === "processing"}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}

        <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-500">
          Wallet:{" "}
          <span className={isConnected ? "text-emerald-400" : "text-amber-400"}>
            {isConnected ? "Connected · Base Sepolia" : "Not connected"}
          </span>
        </div>

        <Button
          className="mt-6 w-full"
          size="lg"
          onClick={handleClaim}
          loading={step === "processing"}
          disabled={step === "processing"}
        >
          Claim Certificate
        </Button>

        <AnimatePresence mode="wait">
          {step === "processing" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-6">
                <LoadingSpinner label="Processing on Base Sepolia..." />
                <div className="mt-6 space-y-3">
                  {["Validating claim code", "UGF paymaster routing", "Minting soulbound NFT"].map(
                    (label, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.5 }}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                        {label}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-emerald-400"
            >
              <Fuel className="h-5 w-5" />
              <span className="font-medium">{ugfMessage}</span>
              <CheckCircle2 className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>

      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Certificate Claimed Successfully"
        message="Your NFT certificate is now in your dashboard. Share it on LinkedIn!"
        actionLabel="View Dashboard"
        onAction={() => router.push("/dashboard")}
      />
    </div>
  );
}
