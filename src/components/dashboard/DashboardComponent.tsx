import RecentActivityCard from "./components/DashboardComponent/RecentActivityComponent";
import SummaryComponent from "./components/DashboardComponent/SummaryComponent";
import { VisitorCount } from "./components/DashboardComponent/VisitorComponent";

export default function DashboardPageComponent() {
  return (
    <div className="h-full">
      <div className="w-full h-full flex justify-center ">
        {/* Analytics */}
        <div className="flex flex-1 flex-col gap-4 p-4  2xl:max-w-[1000px]  xl:max-w-[900px] ">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {/* Visitor Count */}
            <div className="w-[400px]  max-h-[275px] md:w-[100%]  rounded-xl bg-muted/50">
              <VisitorCount />
            </div>
            {/* Summary Profile */}
            <div className="w-[400px] max-h-[275px]  md:w-[100%] rounded-xl bg-muted/50">
              <SummaryComponent />
            </div>
          </div>
          <div className="flex w-full  rounded-xl bg-muted/50">
            <RecentActivityCard />
          </div>
        </div>

       
      </div>
    </div>
  );
}
