import { useForm } from "react-hook-form";
import { Project } from "../../types/project";
import { WorkExperience } from "../../types/work-experience";
import useHandleGetProject from "./useHandleGetProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { useEffect } from "react";

export default function useHandleEditProject(id: string) {
  const { DataProject, isLoadingProject } = useHandleGetProject();
  const { register, handleSubmit, reset, setValue, watch } = useForm<Project>();
  const queryClient = useQueryClient();

  const { mutateAsync: EditProject } = useMutation({
    mutationKey: ["Edit-Project"],
    mutationFn: async (data: Project) => {
      const response = await axiosInstance.patch(`/v1/project/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Project"],
      });
      toast.success("", {
        description: "Success Edit Project",
      });
    },
  });
  const imageUrl = queryClient.getQueryData(["data-image"]);

  const onSubmitEdit = async (data: Project) => {
    if (imageUrl) {
      data.image_url = (imageUrl as any).link;
    }
    console.log(data.image_url);
    await EditProject(data);
  };

  return {
    register,
    handleSubmit,
    DataProject,
    reset,
    onSubmitEdit,
    setValue,
    watch,
  };
}
