"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "../../hooks/useHandleImage";
import useHandleTags from "../../hooks/useHandleTags";
import ImagePreviewComponent from "../imagePreview";
import useHandleAddProject from "../../hooks/project/useHandleAddProject";
import { useUploadImage } from "../../hooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";

export default function AddProjectComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  const { preview, HandleImagePreview } = useHandleImage();
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
  const {
    register: registerImage,
    handleFileChange,
    isUploading,
  } = useUploadImage({});

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

            <div className="flex flex-row">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTag}
                placeholder="Press Enter to add Stack"
              />
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
            <Input type="text" placeholder="Repo" {...register("repo")} />
            <Input type="text" placeholder="Demo" {...register("demo")} />
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
