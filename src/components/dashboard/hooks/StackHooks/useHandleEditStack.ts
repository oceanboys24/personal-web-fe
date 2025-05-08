import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { StackSchema, StackSchemaValid } from "../../schema/StackSchema";
import { axiosInstance } from "@/config/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface ImageEditUrl {
  link: string;
}
export default function useHandleEditStack(id: string) {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(StackSchema),
    mode: "onChange",
  });

  const { mutateAsync: EditStack, isPending: isPendingEditStack } = useMutation(
    {
      mutationKey: ["Edit-Stack"],
      mutationFn: async (data: StackSchemaValid) => {
        const response = await axiosInstance.patch(`/v1/stack/${id}`, data);

        return response.data.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Stack"],
        });
        toast.success("", {
          description: "Success Edit Stack",
        });
      },
      onError: () => {
        toast.error("", {
          description: "Error Edit Stack",
        });
      },
    }
  );
  const imageUrl = queryClient.getQueryData<ImageEditUrl>(["data-image"]);

  const onSubmitEditStack = async (data: StackSchemaValid) => {
    if (imageUrl) {
      data.image_url = imageUrl.link;
    }

    await EditStack(data);
  };

  return {
    isPendingEditStack,
    onSubmitEditStack,
    handleSubmit,
    register,
    setValue,
    errors,
  };
}
