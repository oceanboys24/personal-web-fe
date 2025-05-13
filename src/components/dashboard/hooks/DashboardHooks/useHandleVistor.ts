import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

interface Visitor {
  count: number;
  ip: string;
}

export default function useHandleVisitor() {
  const { data: DataVisitor, isLoading } = useQuery<Visitor>({
    queryKey: ["Visitor"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/visitor/count");

      return response.data;
    },
  });

  return { DataVisitor, isLoading };
}
