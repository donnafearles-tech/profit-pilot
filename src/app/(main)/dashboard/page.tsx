import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { kpiData } from "@/lib/data";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { ComboSuggestions } from "@/components/dashboard/combo-suggestions";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { Download } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="Here's a snapshot of your business performance.">
        <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
        </Button>
      </PageHeader>
      
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="lg:col-span-2">
                <SalesChart />
            </div>
            <div>
                <ComboSuggestions />
            </div>
        </div>

        <div>
            <RecentSales />
        </div>
      </div>
    </>
  );
}
