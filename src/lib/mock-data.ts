import type { AchievementBadge, Certificate, LeaderboardEntry, StudentProfile } from "./types";

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "AI Workshop Certificate",
    eventName: "AI Foundations Workshop 2026",
    studentName: "Alex Chen",
    issueDate: "2026-03-15",
    imageUrl: "/certificates/ai-workshop.svg",
    tokenId: "1042",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    verified: true,
    type: "certificate",
  },
  {
    id: "cert-2",
    title: "Blockchain Bootcamp Badge",
    eventName: "Web3 Developer Bootcamp",
    studentName: "Alex Chen",
    issueDate: "2026-04-02",
    imageUrl: "/certificates/bootcamp.svg",
    tokenId: "2087",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    verified: true,
    type: "badge",
  },
  {
    id: "cert-3",
    title: "Hackathon Winner NFT",
    eventName: "ChainPass Global Hackathon",
    studentName: "Alex Chen",
    issueDate: "2026-05-01",
    imageUrl: "/certificates/hackathon.svg",
    tokenId: "3091",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    verified: true,
    type: "nft",
  },
];

export const MOCK_BADGES: AchievementBadge[] = [
  {
    id: "badge-1",
    title: "Early Adopter",
    description: "Joined ChainPass during beta",
    earnedAt: "2026-01-10",
    icon: "star",
  },
  {
    id: "badge-2",
    title: "Gasless Pioneer",
    description: "First claim via UGF",
    earnedAt: "2026-02-20",
    icon: "zap",
  },
  {
    id: "badge-3",
    title: "Verified Learner",
    description: "3+ certificates earned",
    earnedAt: "2026-04-15",
    icon: "check",
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, address: "0x7a3...f2e1", displayName: "Alex Chen", certificates: 12, badges: 8, reputation: 940 },
  { rank: 2, address: "0x9b2...a4c3", displayName: "Maya Patel", certificates: 10, badges: 7, reputation: 820 },
  { rank: 3, address: "0x4e1...b8d2", displayName: "Jordan Lee", certificates: 9, badges: 6, reputation: 780 },
  { rank: 4, address: "0x2c8...e5f0", displayName: "Sam Rivera", certificates: 8, badges: 5, reputation: 710 },
  { rank: 5, address: "0x6d4...c1a9", displayName: "Taylor Kim", certificates: 7, badges: 5, reputation: 650 },
  { rank: 6, address: "0x1f9...d7b4", displayName: "Riley Morgan", certificates: 6, badges: 4, reputation: 590 },
  { rank: 7, address: "0x8a5...f3c2", displayName: "Casey Brooks", certificates: 5, badges: 4, reputation: 520 },
  { rank: 8, address: "0x3b7...a6e8", displayName: "Quinn Hayes", certificates: 4, badges: 3, reputation: 450 },
];

export const MOCK_PROFILE: StudentProfile = {
  address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  displayName: "Alex Chen",
  bio: "Web3 learner · AI enthusiast · Building on Base",
  joinedAt: "2026-01-05",
  certificates: MOCK_CERTIFICATES,
  badges: MOCK_BADGES,
  reputation: 720,
};

export function getCertificateById(id: string): Certificate | undefined {
  return MOCK_CERTIFICATES.find((c) => c.id === id);
}
