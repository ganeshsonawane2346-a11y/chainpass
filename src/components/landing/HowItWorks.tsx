import { HOW_IT_WORKS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          Four simple steps — blockchain complexity stays in the background.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <GlassCard key={item.step} className="relative p-6" hover>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
