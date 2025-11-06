import { PageHeader } from "@/components/page-header";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TasksPage() {
  return (
    <div>
      <PageHeader
        title="Task Calendar"
        description="Manage your tasks and plan your agenda."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <Card>
                <CardContent className="p-0">
                    <Calendar
                        mode="single"
                        selected={new Date()}
                        className="p-4 w-full"
                    />
                </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {tasks.map(task => (
                            <div key={task.id} className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <p className="font-medium">{task.title}</p>
                                    <Badge variant={task.priority === "High" ? "destructive" : "secondary"}>
                                        {task.priority}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                     <span className={cn(
                                         "h-2 w-2 rounded-full",
                                         task.status === "In Progress" && "bg-yellow-500",
                                         task.status === "Todo" && "bg-blue-500",
                                         task.status === "Done" && "bg-green-500",
                                     )}></span>
                                    <span className="text-xs text-muted-foreground">{task.status}</span>
                                    <Badge variant="outline">{task.label}</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
