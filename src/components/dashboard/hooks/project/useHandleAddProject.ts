import { useForm } from "react-hook-form";
import { Project } from "../../types/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProjectSchema,
  ProjectValid,
} from "@/components/dashboard/types/project";

export default function useHandleAddProject() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProjectValid>({
    resolver: zodResolver(ProjectSchema),
  });

  const { mutateAsync, isPending: isPendingAddProject } = useMutation({
    mutationKey: ["Add-Project"],
    mutationFn: async (data: ProjectValid) => {
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
  const dataImage = queryClient.getQueryData(["data-image"]);
  const onSubmitAddProject = async (data: ProjectValid) => {
    try {
      if (dataImage) {
        data.image_url = (dataImage as any).link;
      }
      await mutateAsync(data);
    } catch (error) {
      console.log("Cannot SEND");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmitAddProject,
    isPendingAddProject,
    errors,
    setValue,
  };
}
