"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiTrash } from "react-icons/fi";
import ImagePreviewComponent from "../ImageComponent/ImagePreview";
import useHandleImage from "../../hooks/SharedHooks/useHandleImage";
import useHandleEditWork from "../../hooks/WorkExperienceHooks/useHandleEditWork";
import useHandleTags from "../../hooks/SharedHooks/useHandleTags";
import { useEffect } from "react";
import { useHandleGetWorkExperienceById } from "../../hooks/WorkExperienceHooks/useHandleGetWork";
import { useUploadImage } from "../../hooks/SharedHooks/useUploadImage";
import SpinnerButton from "@/components/login/components/Spinner";
import { StartCalenderComponent } from "../CalenderComponent/StartCalenderComponent";
import { EndCalenderComponent } from "../CalenderComponent/EndCalenderComponent";

export default function EditWorkExperienceComponent({ id }: { id: string }) {
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();

  // Handle Upload Image
  const { handleFileChange, isUploading } = useUploadImage({});

  // Handle Edit Work Experience
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    isPendingEditWork,
    errors,
    onSubmitEdit,
  } = useHandleEditWork(id);
  // Get Work Experience By IDs
  const { DataWorkSingle, isLoadingWorkSingle } =
    useHandleGetWorkExperienceById(id);

  //Handle Tags Form or Input
  const { input, setInput, addTag, removeTag, tags, setTags } = useHandleTags(
    (tags) => {
      setValue("stack", tags);
    }
  );

  // Watch Form task
  const tasksList = watch("task") || [];

  // Handle Task and Date
  const handleTaskTaskEdit = () => {
    const currentTask = watch("task") || [];
    setValue("task", [...currentTask, ""]);
  };

  const handleRemoveTaskEdit = (index: number | null | undefined) => {
    const currentTask = watch("task") || [];
    const updatedTask = currentTask.filter((_: any, i: number) => i !== index);
    setValue("task", updatedTask);
  };

  const handleStartDateChange = (startDate: string) => {
    setValue("start_date", startDate);
  };

  const handleEndDateChange = (endDate: string) => {
    setValue("end_date", endDate);
  };

  useEffect(() => {
    if (DataWorkSingle) {
      setValue("role", DataWorkSingle.role || "");
      setValue("company", DataWorkSingle.company || "");
      setValue("task", DataWorkSingle.task || []);
      setTags(DataWorkSingle.stack || []);
      setValue("start_date", DataWorkSingle.start_date || "");
      setValue("end_date", DataWorkSingle.end_date || "");
    }
  }, [DataWorkSingle, id, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitEdit)}>
      <div className="flex flex-col gap-5">
        <CardContent>
          <div className="flex flex-row gap-3 ">
            {/* Container 1 */}
            <div className="w-full flex flex-col gap-5">
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
              <div className="flex flex-col gap-2">
                {tasksList.map(
                  (task: any, index: Number | null | undefined) => (
                    <div className="flex flex-row gap-2" key={index as number}>
                      <div className="w-full">
                        <Input
                          placeholder="Task"
                          {...register(`task.${index as number}`)}
                        />
                        {errors.task?.[index as number] && (
                          <span className="text-red-500 text-sm">
                            {errors.task?.[index as number]?.message}
                          </span>
                        )}
                      </div>
                      {index !== 0 && (
                        <Button
                          className="w-10 text-xs "
                          type="button"
                          onClick={() => {
                            handleRemoveTaskEdit(index as number);
                          }}
                        >
                          <FiTrash />
                        </Button>
                      )}
                    </div>
                  )
                )}
                <div className="flex flex-row justify-between">
                  <Button onClick={handleTaskTaskEdit} type="button">
                    Add Task
                  </Button>
                </div>
              </div>
            </div>
            {/* Container 2 */}
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-row">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={addTag}
                  placeholder="Press Enter to add Stack"
                />
              </div>
              <div className="flex flex-row flex-wrap pl-4">
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
                <Input hidden {...register("image_url")} type="text" />
                <Input
                  id="picture"
                  type="file"
                  onChange={(e) => {
                    HandleImagePreview(e);
                    handleFileChange(e);
                  }}
                />
                {(preview || DataWorkSingle?.image_url) && (
                  <ImagePreviewComponent
                    isUploading={isUploading}
                    preview={preview || DataWorkSingle?.image_url}
                  />
                )}
              </div>
              <div className="flex flex-row justify-between">
                <StartCalenderComponent
                  name="start_date"
                  value={watch("start_date")}
                  onChange={handleStartDateChange}
                />
                <EndCalenderComponent
                  name="end_date"
                  value={watch("end_date")}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button type="submit" disabled={isUploading || isPendingEditWork}>
              {isPendingEditWork || isUploading ? (
                <SpinnerButton />
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </CardFooter>
      </div>
    </form>
  );
}
