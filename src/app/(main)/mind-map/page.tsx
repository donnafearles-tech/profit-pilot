import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from "lucide-react";

export default function MindMapPage() {
  return (
    <div>
      <PageHeader
        title="Data Flow Mental Map"
        description="Visualize the connections in your data from ingredients to sales."
      />
      <Card>
        <CardContent className="p-4 md:p-6">
            <div className="relative flex items-center justify-center h-[60vh] border-2 border-dashed rounded-lg overflow-hidden">
                <p className="text-muted-foreground z-10">Mental map visualization will be displayed here.</p>
                {/* Background decorative elements */}
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />

                 {/* Example node */}
                 <div className="absolute top-[20%] left-[20%] p-4 bg-card border rounded-lg shadow-md">
                     <p className="font-bold">Ingredients</p>
                 </div>
                 <div className="absolute top-[50%] left-[50%] p-4 bg-card border rounded-lg shadow-md">
                     <Share2 className="absolute text-muted-foreground -top-4 -left-4 h-8 w-8 -rotate-45" />
                     <p className="font-bold">Recipes</p>
                 </div>
                 <div className="absolute bottom-[20%] right-[20%] p-4 bg-card border rounded-lg shadow-md">
                     <p className="font-bold">Sales</p>
                 </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
