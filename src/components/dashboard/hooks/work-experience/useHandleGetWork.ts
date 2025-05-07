import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { WorkExperience } from "../../types/WorkExperienceTypes";

export default function useHandleGetWorkExperience() {
  const {
    isLoading: isLoadingWork,
    data: DataWork,
    refetch,
  } = useQuery<WorkExperience[]>({
    queryKey: ["Work-Experience"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/work-experience");
      return response.data.data;
    },
  });

  return { isLoadingWork, DataWork, refetch };
}

export function useHandleGetWorkExperienceById(id: string) {
  const {
    isLoading: isLoadingWorkSingle,
    data: DataWorkSingle,
    refetch,
  } = useQuery<WorkExperience>({
    queryKey: ["Work-Experience-Single"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/work-experience/${id}`);
      return response.data.data[0];
    },
  });

  return { isLoadingWorkSingle, DataWorkSingle, refetch };
}
