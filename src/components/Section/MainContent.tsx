import CardComponent from "./MainComponents/Card";
import StackComponent from "./MainComponents/Stack";
import WorkExperienceComponent from "./MainComponents/WorkExperience";
import ProjectComponent from "./MainComponents/Project";
import QuoteComponent from "./MainComponents/Quote";

export default function MainContent() {
  return (
    <div className="flex flex-col p-10">
      {/* Card Container */}
      <CardComponent />
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
