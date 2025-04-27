import EditHero from "./component/edit-hero";
import StackComponent from "./component/stack";

export default function DashboardComponent() {
  return (
    <div className="flex justify-center items-center h-full">
      {/* <EditHero /> */}
      <StackComponent />
    </div>
  );
}
