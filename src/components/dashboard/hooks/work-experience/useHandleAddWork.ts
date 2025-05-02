import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { WorkExperience } from "../../types/work-experience";
import { axiosInstance } from "@/config/axios";

export default function useHandleAddWork() {
  const { register, handleSubmit, setValue, watch, control } =
    useForm<WorkExperience>();

  const { mutateAsync: addWork, isPending: isPendingAddWork } = useMutation({
    mutationKey: ["Add-Work"],
    mutationFn: async (data: WorkExperience) => {
      const response = await axiosInstance.post("/v1/work-experience", data);

      return response.data;
    },
  });

  const onSubmitAddWork = async (data: WorkExperience) => {
    await addWork(data);
  };

  return {
    onSubmitAddWork,
    register,
    handleSubmit,
    isPendingAddWork,
    setValue,
    watch,
    control,
  };
}
