import EditHero from "./edit-hero";
import StackComponent from "./stack";
import WorkExperienceComponent from "./work-experience";

export default function DashboardComponent() {
  return (
    <div className="flex justify-center items-center h-full">
      {/* <EditHero /> */}
      {/* <StackComponent /> */}
      <WorkExperienceComponent />
    </div>
  );
}
