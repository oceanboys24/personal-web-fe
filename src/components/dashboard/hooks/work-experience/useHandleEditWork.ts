import { useForm } from "react-hook-form";
import { WorkExperience } from "../../types/work-experience";
import useHandleGetWorkExperience from "./useHandleGetWork";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";

export default function useHandleEditWork(id: string) {
  const { DataWork, refetch } = useHandleGetWorkExperience();
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
    onSuccess: () => {
      refetch();
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
