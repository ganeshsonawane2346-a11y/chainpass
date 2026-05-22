# ChainPass

A modern Web3 education platform for claiming blockchain-based certificates and achievement badges **without needing ETH for gas fees**.

Powered by **UGF (Universal Gas Framework)** on **Base Sepolia** using Mock USD.

## Features

- **Landing Page** — Hero, feature cards, How It Works
- **Student Dashboard** — Certificates, badges, reputation stats
- **Claim Certificate** — Gasless claim flow with UGF animation
- **Organizer Dashboard** — Create events, generate claim codes, analytics
- **Certificate View** — NFT display with LinkedIn share & explorer links
- **QR Verification** — Scan or verify by token ID
- **Leaderboard** — Community rankings
- **Student Profile** — Web3 learning identity

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- WalletConnect / React-UGF placeholders

## Getting Started

```bash
cd chainpass
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Pages (routes)
├── components/
│   ├── claim/        # Claim flow
│   ├── certificate/  # Certificate display
│   ├── dashboard/    # Student cards
│   ├── landing/      # Hero, features
│   ├── layout/       # Navbar, footer
│   ├── organizer/    # Admin panel
│   └── ui/           # Reusable UI
├── lib/
│   ├── web3/         # UGF & chain config placeholders
│   ├── constants.ts
│   ├── mock-data.ts
│   └── types.ts
└── providers/        # Wallet context (demo)
```

## Web3 Integration (Next Steps)

1. Add `wagmi` + `@walletconnect/web3modal` for real wallet connections
2. Wire `@react-ugf/sdk` in `src/lib/web3/ugf.ts`
3. Set `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` in `.env.local`
4. Deploy certificate NFT contract on Base Sepolia

## Demo Flow

1. Connect wallet (simulated demo address)
2. Go to **Claim** → enter any claim code → see UGF gasless flow
3. View certificates in **Dashboard**
4. Try **Verify** with token IDs: `1042`, `2087`, `3091`
