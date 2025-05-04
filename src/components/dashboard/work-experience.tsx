"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import AddWorkExperienceComponent from "./component/work-experience/add-work-experience";
import EditWorkExperienceComponent from "./component/work-experience/edit-work-experience";
import { AlertDeleteComponent } from "./component/work-experience/delete-work-experience";
import useHandleGetWorkExperience from "./hooks/work-experience/useHandleGetWork";
import SpinnerButton from "../login/components/Spinner";
import { useState } from "react";

export default function WorkExperience() {
  const { isLoadingWork, DataWork } = useHandleGetWorkExperience();
  // Open Close Dialog
  const [open, setOpen] = useState(false);

  // Loading Fetching Data
  if (isLoadingWork) {
    return <SpinnerButton />;
  }

  return (
    <Card className="w-[550px] min-h-[450px] p-5">
      {/* Add Work Experience */}
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-12 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <span>
                <IoMdAdd />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-center">
              Add Work Experience
            </DialogTitle>
            <AddWorkExperienceComponent
              onClose={() => {
                setOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Get Work Experience */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DataWork && DataWork.length > 0 ? (
            DataWork.map((work, index) => (
              <TableRow key={work.id}>
                <TableCell className="font-medium">{work.role}</TableCell>
                <TableCell>{work.company}</TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  {/* Edit Work Experience */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="cursor-pointer">
                          <CiEdit />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle className="text-center">
                          Edit Work Experience
                        </DialogTitle>
                        <EditWorkExperienceComponent
                          id={work.id}
                          index={index}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* Delete Work Experience */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="cursor-pointer">
                        <MdOutlineDeleteOutline />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDeleteComponent id={work.id} />
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No Work Experience List
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
