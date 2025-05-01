"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiTrash } from "react-icons/fi";
import useHandleTask from "../../hooks/useHandleTask";
import useHandleTags from "../../hooks/useHandleTags";
import ImagePreviewComponent from "../imagePreview";
import useHandleImage from "../../hooks/useHandleImage";
import { CalenderComponent } from "../calender";
import useHandleAddWork from "../../hooks/work-experience/useHandleAddWork";
import SpinnerButton from "@/components/login/components/Spinner";

export default function AddWorkExperienceComponent() {
  const { tasks, handleAddTask, handleRemoveTask } = useHandleTask();
  const { input, setInput, addTag, removeTag, tags } = useHandleTags();
  const { preview, HandleImagePreview } = useHandleImage();
  const { onSubmitAddWork, handleSubmit, isPendingAddWork, register } =
    useHandleAddWork();

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmitAddWork)}>
        <CardContent>
          <div className="flex flex-col gap-3">
            <Input type="text" placeholder="Role" {...register("role")} />
            <Input type="text" placeholder="Company" {...register("company")} />
            {tasks.map((task, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <Input placeholder="Task" {...register(`task.${index}`)} />
                <Button
                  className="w-10 text-xs "
                  onClick={() => {
                    handleRemoveTask(index);
                  }}
                >
                  <FiTrash />
                </Button>
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <Button onClick={handleAddTask}>Add Task</Button>
            </div>
            <div className="flex flex-row">
              <Input
                {...register("stack")}
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
            {/* Image */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input id="picture" type="file" onChange={HandleImagePreview} />
              {preview && <ImagePreviewComponent preview={preview} />}
            </div>
            <div className="flex flex-row justify-between">
              <CalenderComponent />
              <CalenderComponent />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button disabled={isPendingAddWork}>
              {isPendingAddWork ? <SpinnerButton /> : "Add Work Experience"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </div>
  );
}
