import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  description: string;
}

export function KpiCard({
  title,
  value,
  change,
  changeType,
  description,
}: KpiCardProps) {
  const isIncrease = changeType === "increase";

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {isIncrease ? (
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownRight className="h-4 w-4 text-red-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-headline">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span
            className={cn(
              "font-semibold",
              isIncrease ? "text-green-600" : "text-red-600"
            )}
          >
            {change}
          </span>{" "}
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
