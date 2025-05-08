import useHandleGetWorkExperience from "@/components/dashboard/hooks/WorkExperienceHooks/useHandleGetWork";
import { handleDateRange } from "../hooks/useHandlingDate";
import SkeletonWorkExperienceComponent from "./Skeleton/SkeletonWorkExperience";

export default function WorkExperienceComponent() {
  const { DataWork, isLoadingWork } = useHandleGetWorkExperience();

  if (isLoadingWork) {
    return <SkeletonWorkExperienceComponent />;
  }

  return (
    <div className="mb-32 lg:px-15" id="work-experience">
      <div className="md:h-20"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-12">Work Experience</h2>
      <div className="flex flex-col gap-5">
        {DataWork?.map((work) => (
          <div
            className="flex flex-col md:flex-row p-6  shadow-sm dark:bg-gray-800 rounded-xl"
            key={work.id}
          >
            {/* Image */}
            <div className="mb-2 ">
              <img
                src={work.image_url || "https://api.dicebear.com/9.x/glass/svg"}
                width={500}
                height={500}
                className="w-16 h-16 object-contain dark:bg-white dark:rounded-lg p-1 "
                alt="Picture of the author"
              />
            </div>
            {/* Content Experience */}
            <div className="flex flex-col w-full md:pl-8">
              <div className="flex justify-self-end ">
                <div className="flex flex-col md:w-full  ">
                  <h3 className="font-semibold text-lg mb-2">{work.role}</h3>
                  <div className="md:flex md:justify-between w-full mb-4">
                    <p className="text-green-600 text-sm mb-2">
                      {work.company}
                    </p>
                    <span className="text-sm  text-gray-500  mt-2 md:mt-0 mb-3 dark:text-gray-400 ">
                      {handleDateRange(work.start_date, work.end_date)}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <ul className="text-gray-600  text-sm list-disc dark:text-gray-400  pl-5 space-y-2 mb-4">
                  {work.task.map((t, index) => (
                    <li key={index}>{t}</li>
                  ))}
                </ul>
              </div>
              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {work?.stack?.map((s, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full text-xs font-medium text-gray-600 "
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
