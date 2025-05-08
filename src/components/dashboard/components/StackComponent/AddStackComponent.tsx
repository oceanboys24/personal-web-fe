import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";
import useHandleAddStack from "../../hooks/StackHooks/useHandleAddStack";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";

export default function AddStackComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();

  // Handle Add Stack
  const {
    onSubmitAddStack,
    handleSubmit,
    RegisterAddStack,
    isPendingAddStack,
    errors,
  } = useHandleAddStack();

  // Handle Upload Image
  const { register, handleFileChange, isUploading, uploadedImage } =
    useUploadImage({});

  // Handle Submit Form Add Stack
  const handleSubmitAndClose = async (data: any) => {
    await onSubmitAddStack(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitAndClose)}>
      <div className="flex flex-col gap-4">
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* Input Stack Name */}
            <div>
              <Input
                type="text"
                placeholder="Name Stack"
                {...RegisterAddStack("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

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
              {preview && (
                <ImagePreviewComponent
                  preview={preview}
                  isUploading={isUploading}
                />
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          {/* Add Stack */}
          <Button
            variant="default"
            disabled={isPendingAddStack || isUploading || !uploadedImage}
          >
            {isPendingAddStack || isUploading ? <SpinnerButton /> : "Add Stack"}
          </Button>
        </CardFooter>
      </div>
    </form>
  );
}
