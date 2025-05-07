import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { Project } from "../../types/ProjectTypes";

export default function useHandleGetProject() {
  const {
    isLoading: isLoadingProject,
    data: DataProject,
    refetch,
  } = useQuery<Project[]>({
    queryKey: ["Project"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/project");
      return response.data.data;
    },
  });
  return { isLoadingProject, DataProject, refetch };
}
