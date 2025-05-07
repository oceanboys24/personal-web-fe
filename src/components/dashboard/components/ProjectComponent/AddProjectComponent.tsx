"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import useHandleTags from "../../hooks/SharedHooks/useHandleTags";
import ImagePreviewComponent from "../ImageComponent/imagePreview";
import useHandleAddProject from "../../hooks/ProjectHooks/useHandleAddProject";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";

export default function AddProjectComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();
  // Handle Add Project
  const {
    handleSubmit,
    register,
    onSubmitAddProject,
    errors,
    setValue,
    isPendingAddProject,
  } = useHandleAddProject();
  const { input, setInput, addTag, removeTag, tags } = useHandleTags((tags) => {
    setValue("stack", tags);
  });
  // Handle Upload Image
  const {
    register: registerImage,
    handleFileChange,
    isUploading,
  } = useUploadImage({});

  // Submit Add Project
  const onSubmitAddMyProject = async (data: any) => {
    await onSubmitAddProject(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitAddMyProject)}>
      <div className="flex flex-col gap-3">
        <CardContent>
          <div className="flex flex-col gap-3">
            <div>
              <Input type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <Textarea
                className="max-h-30"
                placeholder="Description"
                {...register("description")}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTag}
                placeholder="Press Enter to add Stack"
              />
              {errors.stack && (
                <span className="text-red-500 text-sm">
                  {errors.stack.message}
                </span>
              )}
            </div>
            <div className="flex flex-row flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => removeTag(index)}
                  style={{ marginRight: 8, cursor: "pointer" }}
                >
                  {tag} ✖
                </span>
              ))}
            </div>
            <div>
              <Input type="text" placeholder="Repo" {...register("repo")} />
              {errors.repo && (
                <span className="text-red-500 text-sm">
                  {errors.repo.message}
                </span>
              )}
            </div>
            <div>
              <Input type="text" placeholder="Demo" {...register("demo")} />
              {errors.demo && (
                <span className="text-red-500 text-sm">
                  {errors.demo.message}
                </span>
              )}
            </div>
            {/* Image */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input
                id="picture"
                {...registerImage("image")}
                type="file"
                onChange={(e) => {
                  HandleImagePreview(e), handleFileChange(e);
                }}
              />
              {preview && <ImagePreviewComponent preview={preview} />}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex  justify-end">
            <Button disabled={isUploading || isPendingAddProject}>
              {isUploading || isPendingAddProject ? (
                <SpinnerButton />
              ) : (
                "Add Project"
              )}
            </Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
