"use client";
import LayoutLogin from "@/components/layout/LayoutLogin";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function LoginPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
        <LayoutLogin />
      </div>
    </QueryClientProvider>
  );
}
