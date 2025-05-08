"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import useHandleTags from "../../hooks/SharedHooks/useHandleTags";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";
import useHandleEditProject from "../../hooks/ProjectHooks/useHandleEditProject";
import { useEffect } from "react";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";

export default function EditProjectComponent({
  id,
  idProject,
}: {
  id: string;
  idProject: number;
}) {
  // Handle Image Upload
  const { handleFileChange, isUploading } = useUploadImage({});
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();
  // Handle Edit Project
  const {
    DataProject,
    errors,
    setValue,
    register,
    onSubmitEdit,
    handleSubmit,
    isPendingEdit,
  } = useHandleEditProject(id, idProject);
  // Handle Tags Form or Input
  const { input, setInput, addTag, removeTag, tags, setTags } = useHandleTags(
    (tags) => {
      setValue("stack", tags);
    }
  );
  // Rendering Data Edit Project
  useEffect(() => {
    if (DataProject) {
      setValue("name", DataProject![idProject].name);
      setValue("description", DataProject![idProject].description);
      setValue("demo", DataProject![idProject].demo);
      setValue("repo", DataProject![idProject].repo);
      setTags(DataProject![idProject].stack || []);
    }
  }, [DataProject, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitEdit)}>
      <div className="flex flex-col gap-3">
        <CardContent>
          <div className="flex flex-row gap-3 w-full">
            <div className="w-full flex flex-col gap-3">
              <Input type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
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

              <div className="flex flex-wrap items-center border p-2 rounded">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    onClick={() => removeTag(index)}
                    className="flex items-center bg-gray-200 rounded px-2 py-1 mr-2 mb-2 cursor-pointer"
                  >
                    {tag} ✖
                  </div>
                ))}
                <input
                  className="flex-1 min-w-[100px] outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={addTag}
                  placeholder="Press Enter to add Stack"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
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
                  type="file"
                  onChange={(e) => {
                    handleFileChange(e);
                    HandleImagePreview(e);
                  }}
                />
                <Input type="text" {...register("image_url")} hidden />
                {errors.image_url && (
                  <p className="text-red-500 text-sm">
                    {errors.image_url.message}
                  </p>
                )}
                {(preview || DataProject![idProject].image_url) && (
                  <ImagePreviewComponent
                    isUploading={isUploading}
                    preview={preview || DataProject![idProject].image_url}
                  />
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button type="submit" disabled={isPendingEdit || isUploading}>
              {isPendingEdit || isUploading ? (
                <SpinnerButton />
              ) : (
                "Edit Project"
              )}
            </Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
