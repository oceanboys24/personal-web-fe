"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiTrash } from "react-icons/fi";
import useHandleTask from "../../hooks/useHandleTask";
import useHandleTags from "../../hooks/useHandleTags";
import ImagePreviewComponent from "../imagePreview";
import useHandleImage from "../../hooks/useHandleImage";
import useHandleAddWork from "../../hooks/work-experience/useHandleAddWork";
import SpinnerButton from "@/components/login/components/Spinner";
import { Controller } from "react-hook-form";
import { useUploadImage } from "../../hooks/useUploadImage";
import { StartCalenderComponent } from "../start_calender";
import { EndCalenderComponent } from "../end_calender";

export default function AddWorkExperienceComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  const { tasks, handleAddTask, handleRemoveTask } = useHandleTask();
  const { preview, HandleImagePreview } = useHandleImage();
  const {
    setValue,
    onSubmitAddWork,
    handleSubmit,
    isPendingAddWork,
    register,
    control,
  } = useHandleAddWork();
  const { input, setInput, addTag, removeTag, tags } = useHandleTags((tags) => {
    setValue("stack", tags);
  });
  const { register: registerImage, handleFileChange } = useUploadImage();

  const onSubmit = async (data: any) => {
    await onSubmitAddWork(data);
    onClose();
  };

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-3">
            <Input type="text" placeholder="Role" {...register("role")} />
            <Input type="text" placeholder="Company" {...register("company")} />
            {tasks.map((task, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <Input placeholder="Task" {...register(`task.${index}`)} />
                {index !== 0 && (
                  <Button
                    className="w-10 text-xs "
                    type="button"
                    onClick={() => {
                      handleRemoveTask(index);
                    }}
                  >
                    <FiTrash />
                  </Button>
                )}
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <Button onClick={handleAddTask} type="button">
                Add Task
              </Button>
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
            <Controller
              name="stack"
              control={control}
              defaultValue={tags}
              render={({ field }) => <input {...field} type="hidden" />}
            />

            {/* Image */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input
                id="picture"
                {...registerImage("image")}
                type="file"
                onChange={(e) => {
                  HandleImagePreview(e);
                  handleFileChange(e);
                }}
              />
              {preview && <ImagePreviewComponent preview={preview} />}
            </div>
            <div className="flex flex-row justify-between">
              {/* Start Date */}
              <Controller
                name="start_date"
                control={control}
                render={({ field }) => (
                  <StartCalenderComponent
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                  />
                )}
              />
              {/* End Date */}
              <Controller
                name="end_date"
                control={control}
                render={({ field }) => (
                  <EndCalenderComponent
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                  />
                )}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex mt-5 justify-end">
            <Button disabled={isPendingAddWork}>
              {isPendingAddWork ? <SpinnerButton /> : "Add Work Experience"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </div>
  );
}
