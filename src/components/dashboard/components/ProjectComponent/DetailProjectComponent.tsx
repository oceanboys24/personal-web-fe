import { CardContent } from "@/components/ui/card";
import { Project } from "../../types/ProjectTypes";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";

export default function DetailProjectComponent({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="flex flex-col gap-3">
      <CardContent>
        <div className="flex flex-col gap-3 ">
          {/* Image */}
          <div className="flex justify-center flex-col items-center gap-1.5">
            {project.image_url && (
              <ImagePreviewComponent preview={project.image_url} />
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold text-lg">{project.name}</h1>
            <h1 className="font-semibold text-lg">{project.description}</h1>
            <h1 className="font-semibold text-lg">{project.repo}</h1>
            <h1 className="font-semibold text-lg">{project.demo}</h1>
            <h1 className="font-semibold text-lg">{project.stack}</h1>
          </div>
        </div>
      </CardContent>
    </div>
  );
}
