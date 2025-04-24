"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function NavbarComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex dark:bg-gray-900 px-3 md:px-6 md:py-4 bg-white fixed top-0 z-5 w-full mnb justify-between flex-row py-3 2 xl:px-[80px] mb-10">
      <div className="flex justify-start">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Logo"
          className="rounded-lg transform delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </div>

      <div className="flex gap-3  justify-center items-center">
        <div className="hidden md:flex gap-5 flex-row w-full justify-center  ">
          <a
            href="#tech-stack"
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Tech Stack
          </a>
          <a
            href="#work-experience"
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <div className="hidden md:flex gap-5">
            <Button className="bg-green-500 font-semibold hover:bg-green-600 dark:text-white">
              <FaWhatsapp /> Let's Talk
            </Button>
            <Button className=" dark:hover:bg-gray-300 dark:bg-white bg-gray-900 font-semibold hover:bg-gray-800 ">
              <RiFileDownloadLine /> Download CV
            </Button>
          </div>
          {theme === "light" ? (
            <Button variant="ghost" onClick={() => setTheme("dark")}>
              <Moon color="#111827" />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setTheme("light")}>
              <Sun />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoMdMenu className=" md:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Tech Stack</DropdownMenuItem>
              <DropdownMenuItem>Experience</DropdownMenuItem>
              <DropdownMenuItem>Projects</DropdownMenuItem>
              <DropdownMenuItem className="font-bold">
                Download CV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
