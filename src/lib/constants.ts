export const APP_NAME = "ChainPass";
export const APP_TAGLINE = "Claim Blockchain Certificates Without ETH";
export const APP_SUBTAGLINE = "Powered by UGF on Base Sepolia";

export const CHAIN = {
  id: 84532,
  name: "Base Sepolia",
  explorerUrl: "https://sepolia.basescan.org",
  currency: "Mock USD",
} as const;

export const UGF_CONFIG = {
  framework: "Universal Gas Framework",
  paymentToken: "Mock USD",
  network: "Base Sepolia",
  gasless: true,
} as const;

export const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/claim", label: "Claim" },
  { href: "/verify", label: "Verify" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/organizer", label: "Organizer" },
] as const;

export const FEATURES = [
  {
    title: "Gasless Transactions",
    description:
      "Claim credentials with Mock USD via UGF — no ETH required for gas fees.",
    icon: "zap",
  },
  {
    title: "NFT Certificates",
    description:
      "Receive soulbound-style certificates as verifiable on-chain credentials.",
    icon: "award",
  },
  {
    title: "QR Verification",
    description:
      "Anyone can verify authenticity instantly with a scannable QR code.",
    icon: "qr",
  },
  {
    title: "Soulbound Credentials",
    description:
      "Non-transferable achievements tied to your Web3 identity — like LinkedIn, on-chain.",
    icon: "shield",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Connect Wallet",
    description: "Link your wallet in one click — we guide you through it.",
  },
  {
    step: 2,
    title: "Enter Claim Code",
    description: "Paste the code from your event organizer or email.",
  },
  {
    step: 3,
    title: "Pay with Mock USD",
    description: "UGF covers gas — you only pay a small Mock USD fee.",
  },
  {
    step: 4,
    title: "Receive NFT Certificate",
    description: "Your certificate appears in your dashboard instantly.",
  },
] as const;
