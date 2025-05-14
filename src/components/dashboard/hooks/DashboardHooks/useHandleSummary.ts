import { useQuery } from "@tanstack/react-query";
import { WorkExperience } from "../../types/WorkExperienceTypes";
import { axiosInstance } from "@/config/axios";
import { Stack } from "../../types/StackTypes";
import { Project } from "../../types/ProjectTypes";

export default function useHandleSummar() {
  // Fetch Work Experience
  const { data: summaryWork, isLoading: isLoadingWork } = useQuery<
    WorkExperience[]
  >({
    queryKey: ["summary-work"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/work-experience");
      return response.data.data;
    },
  });
  // Fetch Stack
  const { data: summaryStack, isLoading: isLoadingStack } = useQuery<Stack[]>({
    queryKey: ["summary-stack"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/stack");
      return response.data.data;
    },
  });
  // Fetch Project
  const { data: summaryProject, isLoading: isLoadingProject } = useQuery<
    Project[]
  >({
    queryKey: ["summary-project"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/project");
      return response.data.data;
    },
  });

  return {
    summaryProject,
    summaryWork,
    summaryStack,
    isLoadingProject,
    isLoadingStack,
    isLoadingWork,
  };
}
