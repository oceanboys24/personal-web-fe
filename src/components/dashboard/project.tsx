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
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddProjectComponent from "./component/project/add-project";
import EditProjectComponent from "./component/project/edit-project";
import { AlertDeleteProjectComponent } from "./component/project/delete-project";

export default function ProjectComponent() {
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
            <AddProjectComponent />
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
          <TableRow>
            <TableCell className="font-medium">Mentor</TableCell> 
            <TableCell className="text-right flex gap-2 justify-end">
              {/* Edit Work Experience */}
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <CiEdit  />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <EditProjectComponent />
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
                <AlertDeleteProjectComponent />
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
