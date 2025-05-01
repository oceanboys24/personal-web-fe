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
import useHandleAddStack from "../../hooks/stack/useHandleAddStack";
import { useUploadImage } from "../../hooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";

export default function AddStackComponent() {
  const { preview, HandleImagePreview } = useHandleImage();
  const {
    onSubmitAddStack,
    handleSubmit,
    errors,
    RegisterAddStack,
    isPendingAddStack,
  } = useHandleAddStack();
  const { register, handleFileChange } = useUploadImage();

  return (
    <form onSubmit={handleSubmit(onSubmitAddStack)}>
      <div className="flex flex-col gap-4">
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* Input Stack Name */}
            <Input
              type="text"
              placeholder="Name Stack"
              {...RegisterAddStack("name")}
            />

            {/* Upload Image */}
            <div className="flex flex-col items-center gap-2">
              <Input
                id="picture"
                type="file"
                {...register("image")}
                onChange={(e) => {
                  handleFileChange(e);
                  HandleImagePreview(e);
                }}
              />
              {preview && <ImagePreviewComponent preview={preview} />}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          {/* Add Stack */}
          <Button
            variant="default"
          >
            Add Stack
            {/* {isPendingAddStack ? <SpinnerButton /> : "Add Stack"} */}
          </Button>
        </CardFooter>
      </div>
    </form>
  );
}
