import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useHandleDeleteStack from "../../hooks/StackHooks/useHandleDeleteStack";
import SpinnerButton from "@/components/login/components/Spinner";

export function DeleteStackComponent({ id }: { id: string }) {
  // Handle Delete Stack 
  const { isPendingDeleteStack, DeleteStack } = useHandleDeleteStack();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => {
            DeleteStack(id);
          }}
          disabled={isPendingDeleteStack}
        >
          {isPendingDeleteStack ? <SpinnerButton /> : "Continue"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
