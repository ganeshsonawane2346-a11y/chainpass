"use client";

import { Wallet, LogOut, Loader2 } from "lucide-react";
import { useWallet } from "@/providers/WalletProvider";
import { truncateAddress } from "@/lib/utils";
import { Button } from "./Button";

export function WalletButton({ size = "md" as const }: { size?: "sm" | "md" }) {
  const { address, isConnected, isConnecting, connect, disconnect } =
    useWallet();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 sm:inline">
          {truncateAddress(address)}
        </span>
        <Button variant="ghost" size={size} onClick={disconnect}>
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Disconnect</span>
        </Button>
      </div>
    );
  }

  return (
    <Button variant="secondary" size={size} onClick={connect} loading={isConnecting}>
      {isConnecting ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Wallet className="h-4 w-4" />
      )}
      Connect Wallet
    </Button>
  );
}
