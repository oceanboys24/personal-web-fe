import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { WorkExperience } from "../../types/work-experience";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";

export default function useHandleAddWork() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, setValue, watch, control } =
    useForm<WorkExperience>();

  const { mutateAsync: addWork, isPending: isPendingAddWork } = useMutation({
    mutationKey: ["Add-Work"],
    mutationFn: async (data: WorkExperience) => {
      const response = await axiosInstance.post("/v1/work-experience", data);

      return response.data;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["Work-Experience"],
      });
      toast.success("", {
        description: "Success Create Work Experience",
      });
    },
    onError: (error: any) => {
      toast.error("", {
        description: "Cannot Create Work Experience",
      });
    },
  });
  
  const dataImage = queryClient.getQueryData(["data-image"]);

  const onSubmitAddWork = async (data: WorkExperience) => {
    try {
      if (dataImage) {
        data.image_url = (dataImage as any).link;
      }
      await addWork(data);
    } catch (error) {
      console.log("Cannot SEND");
    }
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
