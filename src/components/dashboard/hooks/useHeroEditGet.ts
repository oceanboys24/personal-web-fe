import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Hero } from "../types/hero";

export default function useHeroEditGet() {
  const { register, reset } = useForm();
  const { data: DataHero, isLoading } = useQuery<Hero>({
    queryKey: ["Hero"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/v1/hero");
      return response.data.data;
    },
  });

  return { DataHero, isLoading, register, reset };
}
