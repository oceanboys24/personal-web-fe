import { axiosInstance } from "@/config/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useHandleDeleteStack() {
  const queryClient = useQueryClient();

  const { mutateAsync: DeleteStack, isPending: isPendingDeleteStack } =
    useMutation({
      mutationKey: ["Delete-Stack"],
      mutationFn: async (id: string) => {
        await axiosInstance.delete(`/v1/stack/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Stack"],
        });
        toast.success("", {
          description: "Success Delete Stack",
        });
      },
      onError: (error: any) => {
        toast.error("", {
          description: "Cannot Delete STACK",
        });
      },
    });
  return { DeleteStack, isPendingDeleteStack };
}
