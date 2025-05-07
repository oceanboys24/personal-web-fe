import { axiosInstance } from "@/config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useHandleDeleteProject() {
  const queryClient = useQueryClient();

  const { mutateAsync: DeleteProject, isPending: isPendingDeleteProject } =
    useMutation({
      mutationKey: ["Delete-Project"],
      mutationFn: async (id: string) => {
        await axiosInstance.delete(`/v1/project/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Project"],
        });
        toast.success("", {
          description: "Success Delete Project",
        });
      },
      onError: () => {
        toast.error("", {
          description: "Cannot Delete Project",
        });
      },
    });
  return { DeleteProject, isPendingDeleteProject };
}
