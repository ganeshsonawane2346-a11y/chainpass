import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCertificateById } from "@/lib/mock-data";
import { CertificateDisplay } from "@/components/certificate/CertificateDisplay";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const certificate = getCertificateById(id);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>
      <CertificateDisplay certificate={certificate} />
    </div>
  );
}
