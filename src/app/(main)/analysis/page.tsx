import { PageHeader } from "@/components/page-header";

export default function AnalysisPage() {
  return (
    <div>
      <PageHeader
        title="Cost Variance Analysis"
        description="Track and analyze differences between planned and actual costs."
      />
      <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Cost analysis components will be displayed here.</p>
      </div>
    </div>
  );
}
