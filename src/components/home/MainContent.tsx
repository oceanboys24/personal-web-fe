import HeroComponent from "./Components/Hero";
import ProjectComponent from "./Components/Projects";
import QuoteComponent from "./Components/Quote";
import StackComponent from "./Components/Stack";
import WorkExperienceComponent from "./Components/WorkExperience";

export default function MainContent() {
  return (
    <div className="flex flex-col justify-center items-center p-10 pt-20 2xl:px-90">
      <div className="flex flex-col w-full">
        {/* Card Container */}
        <HeroComponent />
        {/* Tech Stack */}
        <StackComponent />
        {/* Work Experience */}
        <WorkExperienceComponent />
        {/* Projects */}
        <ProjectComponent />
        {/* Qoutes */}
        <QuoteComponent />
      </div>
    </div>
  );
}
