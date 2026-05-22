import { UGF_CONFIG } from "@/lib/constants";

/**
 * React-UGF integration placeholder.
 * Wire to @react-ugf/sdk when connecting to live paymaster on Base Sepolia.
 */
export interface UGFClaimParams {
  claimCode: string;
  walletAddress: string;
}

export interface UGFClaimResult {
  success: boolean;
  txHash: string;
  gasPaidBy: typeof UGF_CONFIG.framework;
  feePaid: string;
  certificateTokenId: string;
}

export async function claimCertificateViaUGF(
  params: UGFClaimParams
): Promise<UGFClaimResult> {
  // Simulated claim flow for demo UX
  await new Promise((r) => setTimeout(r, 2200));

  if (!params.claimCode.trim()) {
    throw new Error("Invalid claim code");
  }

  return {
    success: true,
    txHash: `0x${Array.from({ length: 64 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")}`,
    gasPaidBy: UGF_CONFIG.framework,
    feePaid: `0.50 ${UGF_CONFIG.paymentToken}`,
    certificateTokenId: String(Math.floor(Math.random() * 9000) + 1000),
  };
}

export function getUGFStatusMessage(): string {
  return `Gas Paid via ${UGF_CONFIG.framework}`;
}
