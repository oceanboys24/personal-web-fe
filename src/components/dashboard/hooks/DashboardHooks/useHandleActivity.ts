import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

interface RecentActivity {
  action: string;
  endpoint: string;
  created_at: string;
}

export default function useHandleActivity() {
  const { data: DataActivity, isLoading: isLoadingActivity } =
    useQuery<RecentActivity[]>({
      queryKey: ["Recent-Activity"],
      queryFn: async () => {
        const response = await axiosInstance.get("/v1/activity/");
        return response.data.data;
      },
    });

  return { DataActivity, isLoadingActivity };
}
