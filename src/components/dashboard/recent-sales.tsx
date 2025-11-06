import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentSales } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>A list of the most recent transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Net Profit</TableHead>
              <TableHead className="text-right">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSales.map((sale) => (
              <TableRow key={sale.id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="font-medium">{sale.product}</div>
                  <div className="text-sm text-muted-foreground">{sale.id}</div>
                </TableCell>
                <TableCell className="text-right">${sale.amount.toFixed(2)}</TableCell>
                <TableCell className="text-right text-green-600 dark:text-green-400">
                  ${sale.netProfit.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">{sale.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
