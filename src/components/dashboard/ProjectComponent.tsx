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
import AddProjectComponent from "./component/project/add-project";
import EditProjectComponent from "./component/project/edit-project";
import { AlertDeleteProjectComponent } from "./component/project/delete-project";
import SpinnerButton from "../login/components/Spinner";
import useHandleGetProject from "./hooks/ProjectHooks/useHandleGetProject";
import { useState } from "react";

export default function ProjectComponent() {
  // Fetching Project
  const { DataProject, isLoadingProject } = useHandleGetProject();
  // Handle Open Close Dialog
  const [open, setOpen] = useState(false);
  // Waiting Fetch
  if (isLoadingProject) {
    return <SpinnerButton />;
  }

  return (
    <Card className="w-[550px] min-h-[450px] p-5">
      {/* Add Work Experience */}
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-12" onClick={() => setOpen(true)}>
              <IoMdAdd />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-center">Add Project</DialogTitle>
            <AddProjectComponent
              onClose={() => {
                setOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableCaption>A list of Project.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DataProject?.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="text-right flex gap-2 justify-end">
                {/* Edit Work Experience */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <CiEdit />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[65%]">
                      <DialogTitle className="text-center">
                        Edit Project
                      </DialogTitle>
                      <EditProjectComponent id={project.id} idProject={index} />
                    </DialogContent>
                  </Dialog>
                </div>
                {/* Delete Work Experience */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>
                      <MdOutlineDeleteOutline />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDeleteProjectComponent id={project.id} />
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
