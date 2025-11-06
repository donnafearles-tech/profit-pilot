import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { comboSuggestions } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ComboSuggestions() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>AI Combo Suggestions</CardTitle>
        <CardDescription>
          High-profitability combos suggested by AI.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {comboSuggestions.map((combo) => {
            const image = PlaceHolderImages.find((p) => p.id === combo.imageId);
            return (
              <div key={combo.id} className="flex items-center gap-4 group">
                {image && (
                  <div className="w-20 h-16 rounded-md overflow-hidden relative">
                    <Image
                      src={image.imageUrl}
                      alt={combo.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-semibold">{combo.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {combo.items}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  {combo.profitMargin}
                </Badge>
              </div>
            );
          })}
        </div>
        <Button variant="outline" className="w-full mt-6" asChild>
            <Link href="/lab">
                Go to Combo Lab <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
