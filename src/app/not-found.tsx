import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-violet-400">404</h1>
      <p className="mt-4 text-xl text-white">Page not found</p>
      <p className="mt-2 text-slate-400">
        This certificate or page doesn&apos;t exist.
      </p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
