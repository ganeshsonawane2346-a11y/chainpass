import { Hero } from "@/components/landing/Hero";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { UGF_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <GlassCard className="mx-auto max-w-4xl p-8 text-center" glow>
          <p className="text-sm font-medium text-violet-400">
            {UGF_CONFIG.framework}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Ready to prove your skills on-chain?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            Join thousands of students earning verifiable credentials — no crypto
            expertise required.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/claim" size="lg">
              Claim Certificate
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              View Dashboard
            </Button>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
