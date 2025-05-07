import {
  
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/config/axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeroSchema, HeroSchemaType } from "../../schema/HeroSchema";
import { Hero } from "../../types/HeroTypes";

export default function useHandleEditHero({
  setIsDirtyImage,
}: {
  setIsDirtyImage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const queryClient = useQueryClient();
  const {
    handleSubmit: HandleSubmitEdit,
    register: registerEdit,
    reset,
    control,
    watch,
    formState: { errors, isDirty },
  } = useForm<HeroSchemaType>({
    resolver: zodResolver(HeroSchema),
    mode: "onChange",
  });

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
      setIsDirtyImage(false);
    },
  });

  const { data: DataHero, isLoading } = useQuery<Hero>({
    queryKey: ["Hero"],
    queryFn: async () => {
      const response = await axios.get("/v1/hero");
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
    isDirty,
    onSubmitEdit,
    HandleSubmitEdit,
    registerEdit,
    isLoading,
    DataHero,
    reset,
    control,
    watch,
    isPendingEdit,
    errors,
  };
}
