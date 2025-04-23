import HeroComponent from "./MainComponents/Hero";
import StackComponent from "./MainComponents/Stack";
import WorkExperienceComponent from "./MainComponents/WorkExperience";

export default function MainContent() {
  return (
    <div className="flex flex-col p-10">
      {/* Card Container */}
      <HeroComponent />
      {/* Tech Stack */}
      <StackComponent />
      {/* Work Experience */}
      <WorkExperienceComponent />
      {/* Projects */}
      {/* <ProjectComponent /> */}
      {/* Qoutes */}
      {/* <QuoteComponent /> */}
    </div>
  );
}
