import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { Project } from "../../types/project";

export default function useHandleGetProject() {
  const { isLoading: isLoadingProject, data: DataProject } = useQuery<
    Project[]
  >({
    queryKey: ["Project"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/project");
      return response.data.data;
    },
  });
  return { isLoadingProject, DataProject };
}
