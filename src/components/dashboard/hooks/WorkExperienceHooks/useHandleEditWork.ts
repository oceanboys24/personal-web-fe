import { useForm } from "react-hook-form";
import {
  WorkExperience,
  WorkExperienceSchemaEdit,
  WorkExperienceSchemaValidEdit,
} from "../../types/WorkExperienceTypes";
import useHandleGetWorkExperience from "./useHandleGetWork";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

type ImageUrl = {
  link: string;
};

export default function useHandleEditWork(id: string) {
  const queryClient = useQueryClient();
  const { DataWork } = useHandleGetWorkExperience();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<WorkExperienceSchemaValidEdit>({
    resolver: zodResolver(WorkExperienceSchemaEdit),
    mode: "onChange",
  });

  const { mutateAsync: EditWork, isPending: isPendingEditWork } = useMutation({
    mutationKey: ["Edit-Work"],
    mutationFn: async (data: WorkExperienceSchemaValidEdit) => {
      const response = await axiosInstance.patch(
        `/v1/work-experience/${id}`,
        data
      );
      return response.data;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["Work-Experience"],
      });
      toast.success("", {
        description: "Success Edit Work Experience",
      });
    },
  });
  const imageUrl = queryClient.getQueryData<ImageUrl>(["data-image"]);

  const onSubmitEdit = async (data: WorkExperienceSchemaValidEdit) => {
    if (imageUrl) {
      data.image_url = imageUrl.link;
      console.log(data.image_url);
    }
    await EditWork(data);
  };

  return {
    register,
    handleSubmit,
    DataWork,
    reset,
    onSubmitEdit,
    setValue,
    isPendingEditWork,
    watch,
    errors,
  };
}
