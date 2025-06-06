import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProjectValidEdit,
  ProjectSchemaEdit,
} from "../../schema/ProjectSchema";
import useHandleGetProject from "./useHandleGetProject";

interface ImageEditUrl {
  link: string;
}

export default function useHandleEditProject(id: string, idProject: number) {
  const { DataProject } = useHandleGetProject();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProjectValidEdit>({
    resolver: zodResolver(ProjectSchemaEdit),
    mode: "onChange",
  });
  const queryClient = useQueryClient();

  const { mutateAsync: EditProject, isPending: isPendingEdit } = useMutation({
    mutationKey: ["Edit-Project"],
    mutationFn: async (data: ProjectValidEdit) => {
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
  const imageUrl = queryClient.getQueryData<ImageEditUrl>(["data-image"]);

  const onSubmitEdit = async (data: ProjectValidEdit) => {
    if (imageUrl) {
      data.image_url = imageUrl.link;
    } else {
      data.image_url = DataProject?.[idProject]?.image_url || "";
    }

    await EditProject(data);
  };

  return {
    register,
    handleSubmit,
    DataProject,
    reset,
    errors,
    onSubmitEdit,
    setValue,
    watch,
    isPendingEdit,
  };
}
