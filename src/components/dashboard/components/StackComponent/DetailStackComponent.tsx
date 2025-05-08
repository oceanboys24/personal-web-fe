import { CardContent } from "@/components/ui/card";
import { Stack } from "../../types/StackTypes";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";

export default function DetailStackComponent({ stack }: { stack: Stack }) {
  return (
    <div className="flex flex-col gap-3">
      <CardContent>
        <div className="flex flex-col gap-3 ">
          {/* Image */}
          <div className="flex justify-center flex-col items-center gap-1.5">
            {stack.image_url && (
              <ImagePreviewComponent preview={stack.image_url} />
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold text-lg">{stack.name}</h1>
          </div>
        </div>
      </CardContent>
    </div>
  );
}
