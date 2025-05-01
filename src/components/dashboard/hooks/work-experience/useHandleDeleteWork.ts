import { axiosInstance } from "@/config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useHandleDeleteWork() {
  const queryClient = useQueryClient();

  const { mutateAsync: DeleteWork, isPending: isPendingDeleteWork } =
    useMutation({
      mutationKey: ["Delete-Work"],
      mutationFn: async (id: string) => {
        await axiosInstance.delete(`/v1/work-experience/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Work-Experience"],
        });
        toast.success("", {
          description: "Success Delete Work Experience",
        });
      },
      onError: (error: any) => {
        toast.error("", {
          description: "Cannot Delete Work Experience",
        });
      },
    });
  return { DeleteWork, isPendingDeleteWork };
}
