/**
 * Base Sepolia + WalletConnect configuration placeholders.
 * Replace with actual wagmi/viem config when integrating production wallets.
 */
export const baseSepolia = {
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://sepolia.base.org"] },
  },
  blockExplorers: {
    default: { name: "Basescan", url: "https://sepolia.basescan.org" },
  },
} as const;

export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "YOUR_WALLETCONNECT_PROJECT_ID";

export const contractAddresses = {
  certificateNFT: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  ugfPaymaster: "0x0000000000000000000000000000000000000000",
  mockUSD: "0x0000000000000000000000000000000000000000",
} as const;
