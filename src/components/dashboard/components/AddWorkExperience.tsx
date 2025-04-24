"use client"


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
import React from "react";

export default function AddWorkExperienceComponent() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:bg-white dark:text-black">
          Add Work Experience
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Work Experience</DialogTitle>
          <DialogDescription>
            Add Work Experience. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position" className="text-right">
              Position
            </Label>
            <Input id="position" value="Mentor" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="position" value="PT. Dumbways" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="jobdesc" className="text-right">
              Job Desc
            </Label>
            <Input
              id="jobdesc"
              value="Mentoring Talent"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stack" className="text-right">
              Stack
            </Label>
            <Input id="stack" value="Golang" className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Add Work Experience</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
