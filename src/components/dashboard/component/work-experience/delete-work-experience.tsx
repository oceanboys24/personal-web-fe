"use client";
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
import useHandleDeleteWork from "../../hooks/work-experience/useHandleDeleteWork";
import { Delete } from "lucide-react";
import SpinnerButton from "@/components/login/components/Spinner";

export function AlertDeleteComponent({ id }: { id: string }) {
  const { DeleteWork, isPendingDeleteWork } = useHandleDeleteWork();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure Delete?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => {
            DeleteWork(id);
          }}
          disabled={isPendingDeleteWork}
        >
          {isPendingDeleteWork ? <SpinnerButton /> : "Continue"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
