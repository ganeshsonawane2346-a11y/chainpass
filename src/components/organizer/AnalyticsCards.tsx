import { FileCheck, Clock, Users } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function AnalyticsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard
        label="Total Certificates Issued"
        value={1247}
        icon={FileCheck}
        trend="+12% this month"
      />
      <StatCard
        label="Pending Claims"
        value={38}
        icon={Clock}
      />
      <StatCard
        label="Verified Students"
        value={892}
        icon={Users}
        trend="+8% this week"
      />
    </div>
  );
}
