import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Hero } from "../types/hero";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";

export default function useHandleEditHero() {
  const queryClient = useQueryClient();

  const {
    handleSubmit: HandleSubmitEdit,
    register: registerEdit,
    reset,
    control,
  } = useForm<Hero>();
  const { mutateAsync, isPending: isPendingEdit } = useMutation({
    mutationKey: ["Edit-Hero"],
    mutationFn: async (data: Hero) => {
      const response = await axiosInstance.patch("/v1/hero", data);
      return response.data;
    },
    onError: (error: any) => {
      const messageError = error.response.data.error;
      toast.error("", {
        description: messageError,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Hero"],
      });
      toast.success("", {
        description: "Success Edit",
      });
    },
  });

  const { data: DataHero, isLoading } = useQuery<Hero>({
    queryKey: ["Hero"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/v1/hero");
      return response.data.data;
    },
  });

  const dataImage = queryClient.getQueryData(["data-image"]);

  const onSubmitEdit = async (data: Hero) => {
    if (dataImage) {
      data.image_url = (dataImage as any).link;
    }
    await mutateAsync(data);
  };

  return {
    onSubmitEdit,
    HandleSubmitEdit,
    registerEdit,
    isLoading,
    DataHero,
    reset,
    control,
    isPendingEdit,
  };
}
