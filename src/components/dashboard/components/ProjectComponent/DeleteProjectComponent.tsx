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
import useHandleDeleteProject from "../../hooks/ProjectHooks/useHandleDeleteProject";
import SpinnerButton from "@/components/login/components/Spinner";

export function AlertDeleteProjectComponent({ id }: { id: string }) {
  // Handle Delete Project
  const { DeleteProject, isPendingDeleteProject } = useHandleDeleteProject();

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
            DeleteProject(id);
          }}
          disabled={isPendingDeleteProject}
        >
          {isPendingDeleteProject ? <SpinnerButton /> : "Continue"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
