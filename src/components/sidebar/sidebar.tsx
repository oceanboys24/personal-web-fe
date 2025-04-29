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
import { signOut, useSession } from "next-auth/react";

export function AppSidebar() {
  const { data: session } = useSession();

  const HandleSignOut = () => {
    signOut({
      callbackUrl: "/login",
      redirect: true,
    });
  };

  return (
    <Sidebar>
      <SidebarHeader className="text-center text-lg font-bold">
        Dashboard{" "}
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
          <Button onClick={HandleSignOut} variant="default">
            Logout
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
