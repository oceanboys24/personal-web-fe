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
import AddProjectComponent from "./components/ProjectComponent/AddProjectComponent";
import EditProjectComponent from "./components/ProjectComponent/EditProjectComponent";
import { AlertDeleteProjectComponent } from "./components/ProjectComponent/DeleteProjectComponent";
import SpinnerButton from "../login/components/Spinner";
import useHandleGetProject from "./hooks/ProjectHooks/useHandleGetProject";
import { useState } from "react";
import { BiDetail } from "react-icons/bi";
import DetailProjectComponent from "./components/ProjectComponent/DetailProjectComponent";

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
    <Card className="w-[550px] min-h-[450px] p-5 dark:bg-black">
      <h1 className="text-center">A list of Project.</h1>
      {/* Add Project */}
      <div className="mt-[-20px]">
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
                {/* Details Project  */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <BiDetail />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[30%]">
                      <DialogTitle className="text-center">
                        Details Project
                      </DialogTitle>
                      <DetailProjectComponent project={project} />
                    </DialogContent>
                  </Dialog>
                </div>
                {/* Edit Project */}
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
