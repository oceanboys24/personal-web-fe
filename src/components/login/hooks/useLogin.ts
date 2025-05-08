import { useForm } from "react-hook-form";
import { AdminUserZod, LoginSchemaAdmin } from "../types/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/config/axios";

export default function useLogin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminUserZod>({
    resolver: zodResolver(LoginSchemaAdmin),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["LoginAuth"],
    mutationFn: async (data: AdminUserZod) => {
      const response = await axiosInstance.post("/v1/login", data);
      Cookies.set("token", response.data.token);
      return response.data.token;
    },
    onError: (error: any) => {
      const messageError = error.response.data.error;
      toast.error("", {
        description: messageError,
        descriptionClassName: "dark:text-md",
      });
    },
    onSuccess: () => {
      toast.success("", {
        description: "Success Login",
        descriptionClassName: "dark:text-md",
      });
      router.push("/dashboard");
    },
  });

  const onSubmit = async (data: AdminUserZod) => {
    mutateAsync(data);
  };

  return { onSubmit, handleSubmit, register, errors, isPending };
}
