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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useHandleImage from "./hooks/useHandleImage";
import ImagePreviewComponent from "./component/imagePreview";

export default function StackComponent() {
  const { preview, HandleImagePreview } = useHandleImage();

  return (
    <Card className="w-[450px] min-h-[250px]">
      <CardHeader>
        <CardTitle className="text-center">Stack Management</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Input Stack Name */}
          <Input type="text" placeholder="Name Stack" />

          {/* Upload Image */}
          <div className="flex flex-col items-center gap-2">
            <Input id="picture" type="file" onChange={HandleImagePreview} />
            {preview && <ImagePreviewComponent preview={preview} />}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="w-full flex justify-between">
          {/* List Stack Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">List Stack</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>List Stack</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-3 mt-4">
                {/* Dummy List Stack */}
                {["React", "Next.js"].map((stack, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p>{stack}</p>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Edit Hero Button */}
          <Button variant="secondary">Edit Hero</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
