import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const activities = [
  { name: "John Doe", action: "logged in", time: "10:15 AM" },
  { name: "Jane Smith", action: "uploaded a file", time: "9:45 AM" },
  { name: "Bob Lee", action: "updated profile", time: "8:30 AM" },
  { name: "Alice", action: "logged out", time: "8:10 AM" },
  { name: "John Doe", action: "logged in", time: "10:15 AM" },
  { name: "Jane Smith", action: "uploaded a file", time: "9:45 AM" },
  { name: "Bob Lee", action: "updated profile", time: "8:30 AM" },
  { name: "Alice", action: "logged out", time: "8:10 AM" },
];

export default function RecentActivityCard() {
  return (
    <Card className="w-full shadow-md overflow-hidden p-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-center">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-[250px] overflow-y-auto custom-scrollbar pr-6">
        <ul className="space-y-3 text-sm">
          {activities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center gap-2">
              <span className="font-semibold w-[100px] truncate">
                {activity.name}
              </span>

              <div className="flex justify-center items-center  w-[100px] h-8 rounded">
                <span className="text-center text-sm">{activity.action}</span>
              </div>

              <span className="text-xs text-muted-foreground whitespace-nowrap w-[80px] text-right">
                {activity.time}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
