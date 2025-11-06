import { PageHeader } from "@/components/page-header";

export default function SuggestionsPage() {
  return (
    <div>
      <PageHeader
        title="AI-Powered Suggestions"
        description="Discover high-profitability product combinations using GenAI."
      />
       <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">AI suggestion components will be displayed here.</p>
      </div>
    </div>
  );
}
