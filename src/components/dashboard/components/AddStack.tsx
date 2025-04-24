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

export default function AddStackComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:bg-white dark:text-black">Add Stack</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Stack</DialogTitle>
          <DialogDescription>
            Add Stack. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Golang" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4  ">
            <Label htmlFor="image">
              Image Stack
            </Label>
            <Input id="image" type="file" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Stack</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
