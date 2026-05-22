export interface Certificate {
  id: string;
  title: string;
  eventName: string;
  studentName: string;
  issueDate: string;
  imageUrl: string;
  tokenId: string;
  contractAddress: string;
  verified: boolean;
  type: "certificate" | "badge" | "nft";
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
  icon: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  claimCodes: string[];
  certificatesIssued: number;
  pendingClaims: number;
  imageUrl?: string;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  displayName: string;
  certificates: number;
  badges: number;
  reputation: number;
}

export interface StudentProfile {
  address: string;
  displayName: string;
  bio: string;
  joinedAt: string;
  certificates: Certificate[];
  badges: AchievementBadge[];
  reputation: number;
}
