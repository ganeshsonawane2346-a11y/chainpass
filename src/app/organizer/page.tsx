import { PageHeader } from "@/components/layout/PageHeader";
import { AnalyticsCards } from "@/components/organizer/AnalyticsCards";
import { CreateEventForm } from "@/components/organizer/CreateEventForm";
import { GlassCard } from "@/components/ui/GlassCard";

const recentClaims = [
  { student: "Maya P.", code: "CHAINPASS-A3F2", status: "Claimed", time: "2h ago" },
  { student: "Jordan L.", code: "CHAINPASS-B8E1", status: "Pending", time: "5h ago" },
  { student: "Sam R.", code: "CHAINPASS-C4D9", status: "Claimed", time: "1d ago" },
  { student: "Taylor K.", code: "CHAINPASS-D7A2", status: "Verified", time: "2d ago" },
];

export default function OrganizerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader
        title="Organizer Dashboard"
        description="Create events, upload certificates, generate claim codes, and track student claims."
        badge="Admin Panel"
      />
      <AnalyticsCards />
      <div className="mt-10">
        <CreateEventForm />
      </div>
      <GlassCard className="mt-10 p-6">
        <h3 className="text-lg font-semibold text-white">Recent Claims</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-500">
                <th className="pb-3 pr-4">Student</th>
                <th className="pb-3 pr-4">Claim Code</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentClaims.map((row) => (
                <tr key={row.code} className="border-b border-white/5">
                  <td className="py-3 text-white">{row.student}</td>
                  <td className="py-3 font-mono text-violet-300">{row.code}</td>
                  <td className="py-3">
                    <span
                      className={
                        row.status === "Claimed" || row.status === "Verified"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
