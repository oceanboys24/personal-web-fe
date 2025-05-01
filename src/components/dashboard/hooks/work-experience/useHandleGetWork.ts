import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { WorkExperience } from "../../types/work-experience";

export default function useHandleGetWorkExperience() {
  const { isLoading: isLoadingWork, data: DataWork } = useQuery<
    WorkExperience[]
  >({
    queryKey: ["Work-Experience"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/work-experience");
      return response.data.data;
    },
  });

  return { isLoadingWork, DataWork };
}
