"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiTrash } from "react-icons/fi";
import ImagePreviewComponent from "../imagePreview";
import useHandleImage from "../../hooks/useHandleImage";
import useHandleEditWork from "../../hooks/work-experience/useHandleEditWork";
import useHandleTags from "../../hooks/useHandleTags";
import { useEffect, useState } from "react";

export default function EditWorkExperienceComponent({
  id,
  index,
}: {
  id: string;
  index?: number;
}) {
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();
  // const { input, setInput, addTag, removeTag, tags } = useHandleTags((tags) => {
  //   setValue("stack", tags);
  // });

  const {
    DataWork,
    watch,
    register,
    setValue,
    handleSubmit,
    onSubmitEdit,
    reset,
  } = useHandleEditWork(id, index);

  const tasksList = watch("task") || [];

  const handleTaskTaskEdit = () => {
    const currentTask = watch("task") || [];
    setValue("task", [...currentTask, ""]);
  };

  const handleRemoveTaskEdit = (index: number) => {
    const currentTask = watch("task") || [];
    const updatedTask = currentTask.filter((_, i) => i !== index);
    setValue("task", updatedTask);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitEdit)}>
      <div className="flex flex-col gap-5">
        <CardContent>
          <div className="flex flex-col gap-3">
            <Input type="text" placeholder="Role" {...register("role")} />
            <Input type="text" placeholder="Company" {...register("company")} />
            {tasksList.map((task, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <Input placeholder="Task" {...register(`task.${index}`)} />
                {index !== 0 && (
                  <Button
                    className="w-10 text-xs "
                    type="button"
                    onClick={() => {
                      handleRemoveTaskEdit(index);
                    }}
                  >
                    <FiTrash />
                  </Button>
                )}
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <Button onClick={handleTaskTaskEdit} type="button">
                Add Task
              </Button>
            </div>
            {/* <div className="flex flex-row">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTag}
                placeholder="Press Enter to add Stack"
              />
            </div> */}
            {/* <div className="flex flex-row flex-wrap">
              {workStacks?.map((work, index) => (
                <span
                  key={index}
                  onClick={() => removeWorkStack(index)}
                  style={{ marginRight: 8, cursor: "pointer" }}
                >
                  {work} ✖
                </span>
              ))}
              {tags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => removeTag(index)}
                  style={{ marginRight: 8, cursor: "pointer" }}
                >
                  {tag} ✖
                </span>
              ))}
            </div> */}
            {/* Image */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input id="picture" type="file" onChange={HandleImagePreview} />
              {preview && <ImagePreviewComponent preview={preview} />}
            </div>
            {/* <div className="flex flex-row justify-between">
            <StartCalenderComponent />
            <EndCalenderComponent />
          </div> */}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
