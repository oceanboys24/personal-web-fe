import { useForm } from "react-hook-form";
import { Project } from "../../types/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";

export default function useHandleAddProject() {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<Project>();

  const { mutateAsync } = useMutation({
    mutationKey: ["Add-Project"],
    mutationFn: async (data: Project) => {
      const response = await axiosInstance.post("/v1/project", data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Project"],
      });
      toast.success("", {
        description: "Success Create Project",
      });
    },
    onError: (error: any) => {
      toast.error("", {
        description: "Failed Create Project",
      });
    },
  });

  const onSubmitAddProject = async (data: Project) => {
    await mutateAsync(data);
  };

  return { register, handleSubmit, onSubmitAddProject };
}
