import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import AddProjectComponent from "./components/AddProject";
import AddStackComponent from "./components/AddStack";
import AddWorkExperienceComponent from "./components/AddWorkExperience";
import EditHeroComponent from "./components/EditHero";

export default function DashboardComponent() {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="dark:text-white">Dashboard CMS</CardTitle>
          <CardDescription>Welcome to CMS</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <EditHeroComponent />
            <AddStackComponent />
            <AddWorkExperienceComponent />
            <AddProjectComponent />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center "></CardFooter>
      </Card>
    </div>
  );
}
