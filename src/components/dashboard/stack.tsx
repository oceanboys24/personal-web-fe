"use client";

import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import AddStackComponent from "./component/stack/add-stack";
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
import { DeleteStackComponent } from "./component/stack/delete-stack";

export default function StackComponent() {
  return (
    <Card className="w-[550px] min-h-[450px] p-5">
      {/* Add Work Experience */}
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-12">
              <IoMdAdd />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-center">
              Add Stack
            </DialogTitle>
            <AddStackComponent />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableCaption>A list of Stack.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Golang</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              {/* Delete Work Experience */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>
                    <MdOutlineDeleteOutline />
                  </Button>
                </AlertDialogTrigger>
                <DeleteStackComponent />
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
