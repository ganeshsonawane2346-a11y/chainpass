"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface WalletContextValue {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  chainName: string;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

const DEMO_ADDRESS = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    // Placeholder: replace with WalletConnect / wagmi connect
    await new Promise((r) => setTimeout(r, 800));
    setAddress(DEMO_ADDRESS);
    setIsConnecting(false);
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  const value = useMemo(
    () => ({
      address,
      isConnected: !!address,
      isConnecting,
      chainName: "Base Sepolia",
      connect,
      disconnect,
    }),
    [address, isConnecting, connect, disconnect]
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
