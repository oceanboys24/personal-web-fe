"use client";
import LayoutLogin from "@/components/layout/LayoutLogin";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


export default function LoginPage() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <LayoutLogin />
      </div>
    </QueryClientProvider>
  );
}
