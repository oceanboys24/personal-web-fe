import { useForm } from "react-hook-form";
import { WorkExperience } from "../../types/work-experience";
import useHandleGetWorkExperience from "./useHandleGetWork";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";

export default function useHandleEditWork(id: string, index?: number) {
  const queryClient = useQueryClient();
  const { DataWork } = useHandleGetWorkExperience();
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<WorkExperience>();

  const { mutateAsync: EditWork } = useMutation({
    mutationKey: ["Edit-Work"],
    mutationFn: async (data: WorkExperience) => {
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

  const onSubmitEdit = async (data: WorkExperience) => {
    await EditWork(data);
  };

  return {
    register,
    handleSubmit,
    DataWork,
    reset,
    onSubmitEdit,
    setValue,
    watch,
  };
}
