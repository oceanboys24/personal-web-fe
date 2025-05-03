import { Hero } from "@/components/dashboard/types/hero";
import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export default function useHeroLanding() {
  const { data: DataHeroLanding, isLoading: isLoadingHero } = useQuery<Hero>({
    queryKey: ["Landing-Hero"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/hero/landing");
      return response.data.data;
    },
  });

  return { DataHeroLanding, isLoadingHero };
}
