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
import useHandleImage from "./hooks/useHandleImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImagePreviewComponent from "./component/imagePreview";

export default function StackComponent() {
  // Handle Image
  const { preview, HandleImagePreview } = useHandleImage();

  return (
    <Card className="w-[450px] min-h-[250px] ">
      <CardHeader>
        <CardTitle className="text-center">Stack Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="Name Stack" />
          <div className="flex justify-center flex-col items-center gap-1.5">
            <Input id="picture" type="file" onChange={HandleImagePreview} />
            {preview && <ImagePreviewComponent preview={preview} />}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex flex-row justify-between">
          <Dialog>
            <DialogTrigger>
              <Button>List Stack</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>List Stack</DialogTitle>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex flex-row justify-between items-center">
                    <p>Name Stack</p>
                    <Button variant="destructive">Delete</Button>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p>Name Stack</p>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div>
            <Button>Edit Hero</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
