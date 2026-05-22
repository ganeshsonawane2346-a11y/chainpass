import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { APP_NAME, CHAIN, UGF_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              LinkedIn-style certifications with Web3 identity and gasless
              onboarding for students worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white">Platform</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><Link href="/claim" className="hover:text-white">Claim</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/leaderboard" className="hover:text-white">Leaderboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Organizers</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><Link href="/organizer" className="hover:text-white">Create Event</Link></li>
                <li><Link href="/verify" className="hover:text-white">Verify QR</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Network</h4>
              <p className="mt-3 text-sm text-slate-400">{CHAIN.name}</p>
              <p className="text-sm text-violet-400">{UGF_CONFIG.framework}</p>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {APP_NAME}. Built for education on Base Sepolia.
        </p>
      </div>
    </footer>
  );
}
