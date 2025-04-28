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
import { FiTrash } from "react-icons/fi";
import useHandleTask from "./hooks/useHandleTask";
import useHandleTags from "./hooks/useHandleTags";
import ImagePreviewComponent from "./component/imagePreview";
import useHandleImage from "./hooks/useHandleImage";
import { CalenderComponent } from "./component/calender";
import { Textarea } from "../ui/textarea";

export default function ProjectComponent() {
  const { input, setInput, addTag, removeTag, tags } = useHandleTags();
  const { preview, HandleImagePreview } = useHandleImage();
  return (
    <Card className="w-[450px] min-h-[450px] ">
      <CardHeader>
        <CardTitle className="text-center">Project Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="Name" />
          <Textarea className="max-h-30" placeholder="Description" />
          
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
          <Input type="text" placeholder="Repo" />
          <Input type="text" placeholder="Demo" />
          {/* Image */}
          <div className="flex justify-center flex-col items-center gap-1.5">
            <Input id="picture" type="file" onChange={HandleImagePreview} />
            {preview && <ImagePreviewComponent preview={preview} />}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex   justify-end">
          <Button>Add Project</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
