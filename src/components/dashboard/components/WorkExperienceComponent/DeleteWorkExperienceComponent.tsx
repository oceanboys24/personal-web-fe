"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useHandleDeleteWork from "../../hooks/WorkExperienceHooks/useHandleDeleteWork";
import SpinnerButton from "@/components/login/components/Spinner";

export function AlertDeleteProjectComponent({ id }: { id: string }) {
  // Handle Delete Work Component
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
        <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => {
            DeleteWork(id);
          }}
          disabled={isPendingDeleteWork}
          className="cursor-pointer"
        >
          {isPendingDeleteWork ? <SpinnerButton /> : "Continue"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
