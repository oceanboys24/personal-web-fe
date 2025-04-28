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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddWorkExperienceComponent from "./component/work-experience/add-work-experience";
import EditWorkExperienceComponent from "./component/work-experience/edit-work-experience";
import { AlertDeleteComponent } from "./component/work-experience/delete-work-experience";

export default function WorkExperience() {
  return (
    <Card className="w-[550px] min-h-[450px] p-5">
      {/* Add Work Experience */}
      <div>
        <Dialog>
          <DialogTrigger>
            <Button>
              <IoMdAdd />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddWorkExperienceComponent />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableCaption>A list of Work Experience.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Mentor</TableCell>
            <TableCell>PT Ngawi Sejahtera</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              {/* Edit Work Experience */}
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>
                      <CiEdit />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <EditWorkExperienceComponent />
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
                <AlertDeleteComponent />
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
