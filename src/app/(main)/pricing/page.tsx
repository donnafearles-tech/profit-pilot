import { PageHeader } from "@/components/page-header";

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        title="Pricing & Discount Simulator"
        description="Calculate optimal prices and simulate the impact of discounts."
      />
      <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Pricing engine and simulator components will be displayed here.</p>
      </div>
    </div>
  );
}
