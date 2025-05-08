"use client";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import { BiDetail } from "react-icons/bi";

import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddStackComponent from "./components/StackComponent/AddStackComponent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { DeleteStackComponent } from "./components/StackComponent/DeleteStackComponent";
import useHandleGetStack from "./hooks/StackHooks/useHandleGetStack";
import SpinnerButton from "../login/components/Spinner";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditStackComponent from "./components/StackComponent/EditStackComponent";
import DetailStackComponent from "./components/StackComponent/DetailStackComponent";

export default function StackComponent() {
  // Fetching Stack
  const { isLoadingStack, DataStack } = useHandleGetStack();
  // Handle Open Close Dialog
  const [open, setOpen] = useState(false);
  //Fetching Data Stack
  if (isLoadingStack) {
    return <SpinnerButton />;
  }

  return (
    <Card className="w-[550px] min-h-[450px] dark:bg-black p-5 bg-gray-50">
      <h1 className="text-center">A list of Stack.</h1>

      {/* Add Work Experience */}
      <div className="mt-[-20px]">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-12" onClick={() => setOpen(true)}>
              <IoMdAdd />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-center">Add Stack</DialogTitle>
            <AddStackComponent
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
          {DataStack?.map((stack, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{stack.name}</TableCell>
              <TableCell className="text-right flex gap-2 justify-end">
                {/* Details Stack  */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <BiDetail />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[30%]">
                      <DialogTitle className="text-center">Details Stack</DialogTitle>
                      <DetailStackComponent stack={stack} />
                    </DialogContent>
                  </Dialog>
                </div>
                {/* Edit Stack  */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <CiEdit />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[30%]">
                      <DialogTitle className="text-center">
                        Edit Stack
                      </DialogTitle>
                      <EditStackComponent id={stack.id} stack={stack} />
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
                  <DeleteStackComponent id={stack.id} />
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
