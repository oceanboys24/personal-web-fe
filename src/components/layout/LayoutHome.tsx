import { useQuery } from "@tanstack/react-query";
import FooterComponent from "../home/Footer";
import MainContent from "../home/MainContent";
import NavbarComponent from "../home/Navbar";
import { axiosInstance } from "@/config/axios";
import { useEffect } from "react";

export default function LayoutComponent() {
  const { refetch } = useQuery({
    queryKey: ["Count"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/visitor/");
      return response.data;
    },
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="bg-white w-screen min-h-screen  dark:bg-gray-900 ">
      <NavbarComponent />
      <MainContent />
      <FooterComponent />
    </div>
  );
}
