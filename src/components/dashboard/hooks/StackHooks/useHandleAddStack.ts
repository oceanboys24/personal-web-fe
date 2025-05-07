import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { StackSchema, StackSchemaValid } from "../../schema/StackSchema";

export default function useHandleAddStack() {
  const queryClient = useQueryClient();
  const {
    register: RegisterAddStack,
    formState: { errors },
    handleSubmit,
  } = useForm<StackSchemaValid>({
    mode: "onChange",
    resolver: zodResolver(StackSchema),
  });

  const { mutateAsync, isPending: isPendingAddStack } = useMutation({
    mutationKey: ["Add-Stack"],
    mutationFn: async (data: StackSchemaValid) => {
      const response = await axiosInstance.post("/v1/stack", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Stack"],
      });
      toast.success("", {
        description: "Success Create Stack",
      });
    },
    onError: (error: any) => {
      toast.error("", {
        description: "Failed Create Stack",
      });
    },
  });
  const dataImage = queryClient.getQueryData(["data-image"]);

  const onSubmitAddStack = async (data: StackSchemaValid) => {
    try {
      if (dataImage) {
        (data as any).image_url = (dataImage as any).link;
      }
      await mutateAsync(data);
    } catch (error) {
      console.log("Cannot SEND");
    }
  };

  return {
    onSubmitAddStack,
    isPendingAddStack,
    RegisterAddStack,
    handleSubmit,
    errors,
  };
}
