import { CardContent } from "@/components/ui/card";
import { WorkExperience } from "../../types/WorkExperienceTypes";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";

export default function DetailWorkExperienceComponent({
  work,
}: {
  work: WorkExperience;
}) {
  return (
    <div className="flex flex-col gap-3">
      <CardContent>
        <div className="flex flex-col gap-3 ">
          {/* Image */}
          <div className="flex justify-center flex-col items-center gap-1.5">
            {work.image_url && (
              <ImagePreviewComponent preview={work.image_url} />
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold text-lg">{work.role}</h1>
            <h1 className="font-semibold text-lg">{work.company}</h1>
            <h1 className="font-semibold text-lg">{work.task}</h1>
            <h1 className="font-semibold text-lg">{work.stack}</h1>
            <h1 className="font-semibold text-lg">{work.start_date}</h1>
            <h1 className="font-semibold text-lg">{work.end_date}</h1>
          </div>
        </div>
      </CardContent>
    </div>
  );
}
