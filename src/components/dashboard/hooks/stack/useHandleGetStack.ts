import { useQuery } from "@tanstack/react-query";
import { Stack } from "../../types/stack";
import { axiosInstance } from "@/config/axios";

export default function useHandleGetStack() {
  const { isLoading: isLoadingStack, data: DataStack } = useQuery<Stack[]>({
    queryKey: ["Stack"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/stack");
      return response.data.data;
    },
  });

  return { isLoadingStack, DataStack };
}


