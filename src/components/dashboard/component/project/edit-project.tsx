"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "../../hooks/useHandleImage";
import useHandleTags from "../../hooks/useHandleTags";
import ImagePreviewComponent from "../imagePreview";
import useHandleEditProject from "../../hooks/project/useHandleEditProject";
import { useEffect, useState } from "react";
import { useUploadImage } from "../../hooks/useUploadImage";

export default function EditProjectComponent({
  id,
  idProject,
}: {
  id: string;
  idProject: number;
}) {
  const { input, setInput, addTag, removeTag, tags, setTags } = useHandleTags(
    (tags) => {
      setValue("stack", tags);
    }
  );
  const { handleFileChange } = useUploadImage({});
  const { preview, HandleImagePreview } = useHandleImage();
  const { DataProject, setValue, register, onSubmitEdit, handleSubmit } =
    useHandleEditProject(id);

  useEffect(() => {
    if (DataProject) {
      setValue("name", DataProject![idProject].name);
      setValue("description", DataProject![idProject].description);
      setValue("demo", DataProject![idProject].demo);
      setValue("repo", DataProject![idProject].repo);
      setTags(DataProject![idProject].stack);
    }
  }, [DataProject, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitEdit)}>
      <div className="flex flex-col gap-3">
        <CardContent>
          <div className="flex flex-col gap-3">
            <Input type="text" placeholder="Name" {...register("name")} />
            <Textarea
              className="max-h-30"
              placeholder="Description"
              {...register("description")}
            />

            <div className="flex flex-row">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTag}
                placeholder="Press Enter to add Stack"
              />
            </div>
            <div className="flex flex-row flex-wrap">
              {tags?.map((tag, index) => (
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
                type="file"
                {...register("image_url")}
                onChange={(e) => {
                  handleFileChange(e);
                  HandleImagePreview(e);
                }}
              />
              {(preview || DataProject![idProject].image_url) && (
                <ImagePreviewComponent
                  preview={preview || DataProject![idProject].image_url}
                />
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button>Edit Project</Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
