import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import useHandleVisitor from "../../hooks/DashboardHooks/useHandleVistor";
import SpinnerButton from "@/components/login/components/Spinner";

const chartData = [
  { value: 60, color: "hsl(220, 70%, 50%)" },
  { value: 40, color: "hsl(142, 76%, 36%)" },
];

export function VisitorCount() {
  const { DataVisitor, isLoading } = useHandleVisitor();

  return (
    <Card className="w-full h-full">
      <CardContent className="p-1">
        <div className="relative h-[200px]  w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">
              {isLoading ? <SpinnerButton /> : DataVisitor?.count}
            </span>
            <span className="text-sm text-muted-foreground">Visitors</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
