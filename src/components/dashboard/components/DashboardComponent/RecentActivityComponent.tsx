import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useHandleActivity from "../../hooks/DashboardHooks/useHandleActivity";
import formatToDateTime from "../../hooks/SharedHooks/useHandleFormatDate";
import SpinnerButton from "@/components/login/components/Spinner";

export default function RecentActivityCard() {
  const { DataActivity, isLoadingActivity } = useHandleActivity();
  return (
    <Card className="w-full shadow-md overflow-hidden p-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-center">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-[250px] overflow-y-auto custom-scrollbar pr-6">
        <ul className="space-y-3 text-sm">
          {isLoadingActivity ? (
            <SpinnerButton />
          ) : (
            DataActivity?.map((activity, index) => (
              <li
                key={index}
                className="flex justify-between items-center gap-2"
              >
                <span className="font-semibold w-[100px] truncate">
                  {activity.action}
                </span>

                <div className="flex justify-center items-center  w-[100px] h-8 rounded">
                  <span className="text-center text-sm">
                    {activity.endpoint}
                  </span>
                </div>

                <span className="text-xs text-muted-foreground whitespace-nowrap w-[80px] text-right">
                  {formatToDateTime(activity.created_at)}
                </span>
              </li>
            ))
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
