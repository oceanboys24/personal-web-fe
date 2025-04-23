import Image from "next/image";

export default function WorkExperienceComponent() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-12">Work Experience</h2>
      <div className="flex flex-col md:flex-row p-6  shadow-sm">
        {/* Image */}
        <div className="mb-2  ">
          <Image
            src="/dumbways.png"
            width={500}
            height={500}
            className="w-16 h-16 object-contain"
            alt="Picture of the author"
          />
        </div>
        {/* Content Experience */}
        <div className="flex flex-col w-full md:pl-8">
          <div className="flex justify-self-end ">
            <div className="flex flex-col md:w-full  ">
              <h3 className="font-semibold text-lg mb-2">
                Mentor Full Stack Web Developer
              </h3>
              <div className="md:flex md:justify-between w-full mb-4">
                <p className="text-green-600 dark:text-green-400 text-sm mb-2">
                  DumbWays Indonesia
                </p>
                <span className="text-sm  text-gray-500 dark:text-gray-400 mt-2 md:mt-0 mb-3 ">
                  Oct 2022 - Present
                </span>
              </div>
            </div>
          </div>
          <div>
            <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc  pl-5 space-y-2 mb-4">
              <li>Mentoring students in Full Stack Development bootcamp</li>
              <li>Learning about Programming and Softskill</li>
            </ul>
          </div>
          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              Javascript
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              Golang
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              Linux
            </span>{" "}
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              React
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
