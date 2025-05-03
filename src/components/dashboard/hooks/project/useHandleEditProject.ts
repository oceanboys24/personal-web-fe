import { useForm } from "react-hook-form";
import { Project } from "../../types/project";
import { WorkExperience } from "../../types/work-experience";
import useHandleGetProject from "./useHandleGetProject";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";

export default function useHandleEditProject(id: string) {
  const { DataProject, isLoadingProject, refetch } = useHandleGetProject();
  const { register, handleSubmit, reset, setValue, watch } = useForm<Project>();

  const { mutateAsync: EditProject } = useMutation({
    mutationKey: ["Edit-Project"],
    mutationFn: async (data: Project) => {
      const response = await axiosInstance.patch(`/v1/project/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      refetch();
    },
  });

  const onSubmitEdit = async (data: Project) => {
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
