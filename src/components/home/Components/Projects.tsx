import useHandleGetProject from "@/components/dashboard/hooks/ProjectHooks/useHandleGetProject";
import SpinnerButton from "@/components/login/components/Spinner";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsComponent() {
  const { DataProject, isLoadingProject } = useHandleGetProject();

  if (isLoadingProject) {
    return <SpinnerButton />;
  }

  return (
    <div className="mb-32 lg:px-15" id="projects">
      <div className="md:h-20"></div>
      {/* Title Project */}
      <div className="flex justify-between items-center mb-12 ">
        <h2 className="text-2xl md:text-3xl font-bold">My Project:</h2>
      </div>
      <div>
        {/* List Project */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project */}
          {DataProject?.map((project, index) => (
            <div className="shadow-sm dark:bg-gray-800 rounded-xl" key={index}>
              <div className="h-52 items-center   rounded-t-xl justify-center bg-gray-100">
                <img
                  src={
                    project.image_url ||
                    "https://api.dicebear.com/9.x/glass/svg"
                  }
                  className="w-full h-full object-contain"
                  alt="Project Image"
                />
              </div>
              <div className="p-6 md:p-8 ">
                <h3 className="font-semibold text-xl mb-3">{project.name}</h3>
                <p className="text-sm  text-gray-400">{project.description}</p>
              </div>
              {/* Stack */}
              <div className="flex flex-wrap gap-2 pl-6 pb-3 lg:pl-6 lg:pb-3 ">
                {project.stack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full text-xs font-medium text-gray-600 "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Demo */}
              <div className="flex gap-3 pl-5 pb-5">
                {project.repo === "" ? (
                  <span className="inline-flex dark:text-gray-400 items-center px-3 py-1.5 text-xs text-gray-500 gap-2 ">
                    <FaGithub /> Private Repository
                  </span>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="inline-flex dark:text-gray-400 items-center px-3 py-1.5 text-xs text-blue-600 gap-2 "
                  >
                    <FaGithub /> View on Github
                  </a>
                )}

                {project.demo === "" ? (
                  <span className="inline-flex items-center px-3 py-1.5 text-xs gap-3 text-gray-500  transition-colors">
                    <FaExternalLinkAlt />
                    Demo Not Available
                  </span>
                ) : (
                  <a
                    href={project?.demo}
                    target="_blank"
                    className="inline-flex items-center px-3 py-1.5 text-xs gap-3 text-blue-600 hover:text-blue-800  transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
