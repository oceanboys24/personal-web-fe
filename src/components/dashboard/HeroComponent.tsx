"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "./hooks/SharedHooks/useHandleImage";
import ImagePreviewComponent from "./components/ImageComponent/ImagePreview";

import SpinnerButton from "../login/components/Spinner";

import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useUploadImage } from "./hooks/SharedHooks/useUploadImage";
import useHandleEditHero from "./hooks/HeroHooks/useHandleEditHero";

export default function HeroComponentDashboard() {
  // Handle Dirty Image
  const [isDirtyImage, setIsDirtyImage] = useState(false);
  // Handle Preview Image
  const { preview, HandleImagePreview } = useHandleImage();
  // Handle Edit Hero
  const {
    onSubmitEdit,
    HandleSubmitEdit,
    registerEdit,
    DataHero,
    isLoading,
    watch,
    isDirty,
    control,
    errors,
    reset,
    isPendingEdit,
  } = useHandleEditHero({ setIsDirtyImage });
  // Watch Input File is Dirty
  const { register, handleFileChange } = useUploadImage({
    isDirtyImage,
    setIsDirtyImage,
  });
  // Watch Form
  const formValues = watch();

  // Render Edit
  useEffect(() => {
    if (DataHero) {
      reset(DataHero);
    }
  }, [DataHero]);

  if (isLoading) {
    return <SpinnerButton />;
  }

  return (
    <Card className="w-[900px] min-h-[450px] bg-gray-50 shadow-2xl/20">
      <form onSubmit={HandleSubmitEdit(onSubmitEdit)}>
        <CardHeader>
          <CardTitle className="text-center text-xl mb-5">Edit Hero</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-10 justify-between">
              <div className="flex flex-col gap-3 w-[50%] ">
                <Input
                  type="text"
                  placeholder="Surname"
                  {...registerEdit("surname")}
                />
                {errors.surname && (
                  <span className="text-red-500">{errors.surname.message}</span>
                )}
                <Input
                  type="email"
                  placeholder="Email"
                  {...registerEdit("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
                <Input
                  type="text"
                  placeholder="Handphone"
                  {...registerEdit("handphone")}
                />
                {errors.handphone && (
                  <span className="text-red-500 text-sm">
                    {errors.handphone.message}
                  </span>
                )}
                <Input
                  type="text"
                  placeholder="CV Link"
                  {...registerEdit("cv")}
                />
                {errors.cv && (
                  <span className="text-red-500 text-sm">
                    {errors.cv.message}
                  </span>
                )}
                <Input
                  type="text"
                  placeholder="Profession"
                  {...registerEdit("profession")}
                />
                {errors.profession && (
                  <span className="text-red-500 text-sm">
                    {errors.profession.message}
                  </span>
                )}
                <div className="flex justify-center  items-center flex-col  gap-3">
                  <Input
                    id="picture"
                    type="file"
                    className="w-[100%]"
                    {...register("image")}
                    onChange={(e) => {
                      handleFileChange(e);
                      HandleImagePreview(e);
                    }}
                  />
                  {(preview || DataHero?.image_url) && (
                    <ImagePreviewComponent
                      preview={preview}
                      imageUrl={DataHero?.image_url}
                    />
                  )}
                </div>
              </div>
              <div className="flex w-[50%] flex-col gap-3">
                <div className="flex flex-col h-full gap-3">
                  <Textarea
                    className="max-h-50 "
                    placeholder="Description"
                    {...registerEdit("description")}
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm">
                      {errors.description.message}
                    </span>
                  )}
                  <Input
                    type="text"
                    placeholder="Location"
                    {...registerEdit("location")}
                  />
                  {errors.location && (
                    <span className="text-red-500 text-sm">
                      {errors.location.message}
                    </span>
                  )}
                  <div className="flex justify-end items-center space-x-2">
                    <Controller
                      name="is_available"
                      control={control}
                      defaultValue={DataHero?.is_available}
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="is_available">Is Available</Label>
                          <Switch
                            id="is_available"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full flex  items-end  justify-end">
                  <Button
                    disabled={isPendingEdit || (!isDirty && !isDirtyImage)}
                  >
                    {isPendingEdit ? <SpinnerButton /> : "Save Changes"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
