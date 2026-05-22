import { ClaimForm } from "@/components/claim/ClaimForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { UGF_CONFIG } from "@/lib/constants";

export default function ClaimPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader
        title="Claim Certificate"
        description="Enter your claim code from your event organizer. Pay with Mock USD — gas handled by UGF."
        badge={UGF_CONFIG.framework}
      />
      <ClaimForm />
    </div>
  );
}
