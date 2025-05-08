import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useHandleEditStack from "../../hooks/StackHooks/useHandleEditStack";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";
import { Stack } from "../../types/StackTypes";
import SpinnerButton from "@/components/login/components/Spinner";
import { useEffect } from "react";

export default function EditStackComponent({
  id,
  stack,
}: {
  id: string;
  stack: Stack;
}) {
  const {
    errors,
    handleSubmit,
    isPendingEditStack,
    onSubmitEditStack,
    register,
    setValue,
  } = useHandleEditStack(id);

  const { handleFileChange, isUploading } = useUploadImage({});
  const { HandleImagePreview, preview } = useHandleImage();

  useEffect(() => {
    if (stack) {
      setValue("name", stack.name);
    }
  }, [stack, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitEditStack)}>
      <div className="flex flex-col gap-3">
        <CardContent>
          <div className="flex flex-col gap-3 ">
            <div className="w-full flex flex-col gap-3">
              <Input type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* Image */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input
                id="picture"
                type="file"
                onChange={(e) => {
                  handleFileChange(e);
                  HandleImagePreview(e);
                }}
              />
              <Input type="text" hidden {...register("image_url")} />
              {errors.image_url && (
                <p className="text-red-500 text-sm">
                  {errors.image_url.message}
                </p>
              )}
              {(preview || stack.image_url) && (
                <ImagePreviewComponent
                  isUploading={isUploading}
                  preview={preview || stack.image_url}
                />
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button type="submit" disabled={isPendingEditStack || isUploading}>
              {isPendingEditStack || isUploading ? (
                <SpinnerButton />
              ) : (
                "Edit Stack"
              )}
            </Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
