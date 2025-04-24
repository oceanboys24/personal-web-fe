import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsComponent() {
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
          <div className="shadow-sm dark:bg-gray-800 rounded-xl">
            <div className="h-52 items-center   rounded-t-xl justify-center bg-gray-100">
              <img
                src="/fakturly.png"
                className="w-full h-full object-contain"
                alt="Fakturly"
              />
            </div>
            <div className="p-6 md:p-8 ">
              <h3 className="font-semibold text-xl mb-3">Fakturly</h3>
              <p className="text-sm  text-gray-400">
                Digital invoice and payment reminder solution that makes billing
                management easier. Built with modern tech stack for optimal
                performance.
              </p>
            </div>
            {/* Stack */}
            <div className="flex flex-wrap gap-2 pl-6 pb-3 lg:pl-6 lg:pb-3 ">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full text-xs font-medium text-gray-600 ">
                Golang
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full text-xs font-medium text-gray-600 ">
                Javascript
              </span>
            </div>
            {/* Demo */}
            <div className="flex gap-3 pl-5 pb-5">
              <span className="inline-flex dark:text-gray-400 items-center px-3 py-1.5 text-xs text-gray-500 gap-2 ">
                <FaGithub /> Private Repository
              </span>
              <a
                href="#"
                className="inline-flex items-center px-3 py-1.5 text-xs gap-3 text-blue-600 hover:text-blue-800  transition-colors"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
