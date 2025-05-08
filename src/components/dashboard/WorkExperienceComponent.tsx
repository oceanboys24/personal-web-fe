"use client";
import {
  Table,
  TableBody,
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
import AddWorkExperienceComponent from "./components/WorkExperienceComponent/AddWorkExperienceComponent";
import EditWorkExperienceComponent from "./components/WorkExperienceComponent/EditWorkExperienceComponent";
import useHandleGetWorkExperience from "./hooks/WorkExperienceHooks/useHandleGetWork";
import SpinnerButton from "../login/components/Spinner";
import { useState } from "react";
import { AlertDeleteWorkExperienceComponent } from "./components/WorkExperienceComponent/DeleteWorkExperienceComponent";
import { BiDetail } from "react-icons/bi";
import DetailWorkExperienceComponent from "./components/WorkExperienceComponent/DetailWorkExperienceComponent";

export default function WorkExperience() {
  // Fetching Data Work Experience
  const { isLoadingWork, DataWork } = useHandleGetWorkExperience();
  // Handle Open Close Dialog
  const [open, setOpen] = useState(false);

  // Loading Fetching Data Experience
  if (isLoadingWork) {
    return <SpinnerButton />;
  }
  return (
    <Card className="w-[550px] min-h-[450px] p-5 dark:bg-black">
      <h1 className="text-center">A list of Work Experience.</h1>
      {/* Add Work Experience */}
      <div className="mt-[-20px]">
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
            DataWork.map((work) => (
              <TableRow key={work.id}>
                <TableCell className="font-medium">{work.role}</TableCell>
                <TableCell>{work.company}</TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  {/* Details Work Experience  */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <BiDetail />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="min-w-[30%]">
                        <DialogTitle className="text-center">
                          Details Work Experience
                        </DialogTitle>
                        <DetailWorkExperienceComponent work={work} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* Edit Work Experience */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="cursor-pointer">
                          <CiEdit />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="min-w-[65%]">
                        <DialogTitle className="text-center">
                          Edit Work Experience
                        </DialogTitle>
                        <EditWorkExperienceComponent id={work.id} />
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
                    <AlertDeleteWorkExperienceComponent id={work.id} />
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
