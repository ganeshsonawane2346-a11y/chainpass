"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { APP_TAGLINE, APP_SUBTAGLINE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { BlockchainVisual } from "@/components/ui/BlockchainVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <BlockchainVisual />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
        >
          <Sparkles className="h-4 w-4" />
          {APP_SUBTAGLINE}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-white via-violet-100 to-blue-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
        >
          {APP_TAGLINE}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          Earn verifiable blockchain certificates and badges like LinkedIn —
          without buying ETH. Gas fees handled invisibly by UGF with Mock USD.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/claim" size="lg">
            Claim Certificate
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button href="/organizer" variant="secondary" size="lg">
            Create Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
