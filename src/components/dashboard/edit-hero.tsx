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
import useHeroEditGet from "./hooks/useHeroEditGet";

export default function EditHero() {
  const { preview, HandleImagePreview } = useHandleImage();
  const { DataHero, isLoading, register, reset } = useHeroEditGet();

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
      <CardHeader>
        <CardTitle className="text-center">Edit Hero</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="Surname" {...register("surname")} />
          <Input type="text" placeholder="Email" {...register("email")} />
          <Input type="text" placeholder="CV Link" {...register("cv")} />
          <Input
            type="text"
            placeholder="Profession"
            {...register("profession")}
          />
          <Textarea
            className="max-h-30"
            placeholder="Description"
            {...register("description")}
          />
          <Input type="text" placeholder="Location" {...register("location")} />
          <div className="flex justify-end items-center space-x-2">
            <Label htmlFor="available">Is Available</Label>
            <Switch id="available" {...register("is_available")} />
          </div>
          <div className="flex justify-center flex-col items-center gap-1.5">
            <Input id="picture" type="file" onChange={HandleImagePreview} />
            {preview && <ImagePreviewComponent preview={preview} />}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex   justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
