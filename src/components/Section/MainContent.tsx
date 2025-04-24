import HeroComponent from "./MainComponents/Hero";
import ProjectComponent from "./MainComponents/Projects";
import QuoteComponent from "./MainComponents/Quote";
import StackComponent from "./MainComponents/Stack";
import WorkExperienceComponent from "./MainComponents/WorkExperience";

export default function MainContent() {
  return (
    <div className="flex flex-col p-10 pt-20">
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
  );
}
