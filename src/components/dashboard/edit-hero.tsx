"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import useHandleImage from "./hooks/useHandleImage";
import ImagePreviewComponent from "./component/imagePreview";

import SpinnerButton from "../login/components/Spinner";

import { useEffect } from "react";
import useHandleEditHero from "./hooks/useHandleEditHero";

export default function EditHero() {
  const { preview, HandleImagePreview } = useHandleImage();
  const {
    onSubmitEdit,
    HandleSubmitEdit,
    registerEdit,
    DataHero,
    isLoading,
    reset,
    isPendingEdit,
  } = useHandleEditHero();

  useEffect(() => {
    if (DataHero) {
      reset(DataHero);
    }
  }, [DataHero]);

  if (isLoading) {
    return <SpinnerButton />;
  }

  return (
    <Card className="w-[450px] min-h-[450px] ">
      <form onSubmit={HandleSubmitEdit(onSubmitEdit)}>
        <CardHeader>
          <CardTitle className="text-center">Edit Hero</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Surname"
              {...registerEdit("surname")}
            />
            <Input type="text" placeholder="Email" {...registerEdit("email")} />
            <Input
              type="text"
              placeholder="Handphone"
              {...registerEdit("handphone")}
            />
            <Input type="text" placeholder="CV Link" {...registerEdit("cv")} />
            <Input
              type="text"
              placeholder="Profession"
              {...registerEdit("profession")}
            />
            <Textarea
              className="max-h-30"
              placeholder="Description"
              {...registerEdit("description")}
            />
            <Input
              type="text"
              placeholder="Location"
              {...registerEdit("location")}
            />
            {/* <div className="flex justify-end items-center space-x-2">
              <Label htmlFor="available">Is Available</Label>
              <Switch id="available" {...registerEdit("is_available")} />
            </div> */}
            <div className="flex justify-center flex-col items-center gap-1.5">
              <Input
                id="picture"
                type="file"
                // {...register("image")}
                onChange={HandleImagePreview}
              />
              {/* {(preview || DataHero?.image_url) && (
                <ImagePreviewComponent
                  preview={preview}
                  imageUrl={DataHero?.image_url}
                />
              )} */}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex   justify-end">
            <Button disabled={isPendingEdit}>
              {isPendingEdit ? <SpinnerButton /> : "Save Changes"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
