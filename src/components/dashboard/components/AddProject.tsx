import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function AddProjectComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:bg-white dark:text-black">Add Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription>Add Project</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value="lorem ipsum"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stack" className="text-right">
              Stack
            </Label>
            <Input id="stack" value="Golang" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="repo" >
              Repository 
            </Label>
            <Switch id="repo"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="demo" >
              Demo
            </Label>
            <Switch id="demo"  />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Projectt</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
