import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useHandleImage from "../../hooks/useHandleImage";
import ImagePreviewComponent from "../imagePreview";

export default function AddStackComponent() {
  const { preview, HandleImagePreview } = useHandleImage();
  return (
    <div className="flex flex-col gap-4">
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Input Stack Name */}
          <Input type="text" placeholder="Name Stack" />

          {/* Upload Image */}
          <div className="flex flex-col items-center gap-2">
            <Input id="picture" type="file" onChange={HandleImagePreview} />
            {preview && <ImagePreviewComponent preview={preview} />}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        {/* Add Stack */}
        <Button variant="default">Add Stack</Button>
      </CardFooter>
    </div>
  );
}
