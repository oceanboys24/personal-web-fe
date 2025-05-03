"use client";
import LayoutComponent from "@/components/layout/LayoutHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Pages() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-x-hidden transition-colors duration-900 ease-in-out">
        <LayoutComponent />
      </div>
    </QueryClientProvider>
  );
}
