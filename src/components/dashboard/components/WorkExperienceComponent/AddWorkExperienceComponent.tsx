"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiTrash } from "react-icons/fi";
import useHandleTask from "../../hooks/SharedHooks/useHandleTask";
import useHandleTags from "../../hooks/SharedHooks/useHandleTags";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import useHandleAddWork from "../../hooks/WorkExperienceHooks/useHandleAddWork";
import SpinnerButton from "@/components/login/components/Spinner";
import { Controller } from "react-hook-form";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import { StartCalenderComponent } from "../CalenderComponent/StartCalenderComponent";
import { EndCalenderComponent } from "../CalenderComponent/EndCalenderComponent";

export default function AddWorkExperienceComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  // Handle Task Form or Input
  const { tasks, handleAddTask, handleRemoveTask } = useHandleTask();

  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();

  // Handle Add Work Experience
  const {
    setValue,
    onSubmitAddWork,
    handleSubmit,
    isPendingAddWork,
    register,
    errors,
    control,
  } = useHandleAddWork();

  // Handle Tags Form or Input
  const { input, setInput, addTag, removeTag, tags } = useHandleTags((tags) => {
    setValue("stack", tags);
  });

  // Handle Upload Image
  const {
    register: registerImage,
    handleFileChange,
    isUploading,
  } = useUploadImage({});

  // Handle Submit Add Work Experience
  const onSubmit = async (data: any) => {
    await onSubmitAddWork(data);
    onClose();
  };

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div>
              <Input type="text" placeholder="Role" {...register("role")} />
              {errors.role && (
                <span className="text-red-500 text-sm">
                  {errors.role.message}
                </span>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Company"
                {...register("company")}
              />
              {errors.company && (
                <span className="text-red-500 text-sm">
                  {errors.company.message}
                </span>
              )}
            </div>
            {tasks.map((task, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <div className="w-full">
                  <Input placeholder="Task" {...register(`task.${index}`)} />
                  {index === 0 && errors.task?.[0]?.message && (
                    <span className="text-red-500 text-sm">
                      {errors.task[0]?.message}
                    </span>
                  )}
                </div>
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
              {preview && (
                <ImagePreviewComponent
                  isUploading={isUploading}
                  preview={preview}
                />
              )}
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
            <Button
              disabled={isPendingAddWork}
              className="cursor-pointer"
              type="submit"
            >
              {isPendingAddWork ? <SpinnerButton /> : "Add Work Experience"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </div>
  );
}
