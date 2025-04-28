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

export default function EditHero() {
  const { preview, HandleImagePreview } = useHandleImage();
  return (
    <Card className="w-[450px] min-h-[450px] ">
      <CardHeader>
        <CardTitle className="text-center">Edit Hero</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="Surname" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="CV Link" />
          <Input type="text" placeholder="Profession" />
          <Textarea className="max-h-30" placeholder="Description" />
          <Input type="text" placeholder="Location" />
          <div className="flex justify-end items-center space-x-2">
            <Label htmlFor="available">Is Available</Label>
            <Switch id="available" />
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
