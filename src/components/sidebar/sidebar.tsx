"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { CgProfile } from "react-icons/cg";
import { GoStack } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import Link from "next/link";

import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const router = useRouter();

  async function OnLogout() {
    Cookies.remove("token");

    toast.success("", {
      description: "Success Logout",
      duration: 3000,
    });

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }

  return (
    <Sidebar>
      <SidebarHeader className="text-center text-lg font-bold">
        <Link href="/dashboard">
          <span>Dashboard Admin</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/edit-hero">
                <CgProfile />
                <span>Edit Hero</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard/stack">
                <GoStack />
                <span>Stack</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard/work-experience">
                <MdOutlineWorkOutline />
                <span>Work Experience</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard/project">
                <GoProjectRoadmap />
                <span>Project</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <form className="text-center mb-5">
          <Button
            variant="default"
            className="cursor-pointer"
            onClick={OnLogout}
          >
            Logout
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
