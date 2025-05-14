"use client";
import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import TokenChecker from "@/hooks/tokenChecker";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import ToggleTheme from "@/components/home/Components/Toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <TokenChecker />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full ">
          <div className="p-2 w-full flex flex-row justify-between">
            <SidebarTrigger />
            <ToggleTheme />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
