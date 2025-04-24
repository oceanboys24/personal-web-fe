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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavbarComponent() {
  const { theme, setTheme } = useTheme();
  const scrollToId = (id: string) => {
    const e = document.getElementById(id);
    if (e) {
      e.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };
  return (
    <div className="flex 2xl:px-100   bg-white dark:bg-gray-900 px-3 md:px-6 md:py-4  fixed top-0  z-30 w-full mnb justify-between flex-row py-3 2 xl:px-[97px] mb-10">
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
        <div className="hidden md:flex gap-3 flex-row w-full justify-center  ">
          <button
            onClick={() => scrollToId("tech-stack")}
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Tech Stack
          </button>
          <button
             onClick={() => scrollToId("work-experience")}
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Experience
          </button>
          <button
             onClick={() => scrollToId("projects")}
            className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <div className="hidden md:flex gap-5">
            <Button className="bg-green-500  font-semibold hover:bg-green-600 dark:text-white">
              <a
                className="md:flex gap-2 flex items-center "
                target="_blank"
                href="https://wa.me/6281333143154"
              >
                <FaWhatsapp /> Let's Talk
              </a>
            </Button>
            <Button className=" dark:hover:bg-gray-300 dark:bg-white bg-gray-900 font-semibold hover:bg-gray-800 ">
              <RiFileDownloadLine /> Download CV
            </Button>
          </div>
          {theme === "light" ? (
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <Moon color="#111827" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <Sun />
            </Button>
          )}
          <Drawer direction="bottom">
            <DrawerTrigger>
              <IoMdMenu className=" md:hidden" />
            </DrawerTrigger>
            <DrawerContent className="p-5 flex flex-col gap-5">
              <DrawerClose>
                <a
                  href="#tech-stack"
                  className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
                >
                  Tech Stack
                </a>
              </DrawerClose>
              <DrawerClose>
                <a
                  href="#work-experience"
                  className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
                >
                  Experience
                </a>
              </DrawerClose>
              <DrawerClose>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-black text-sm dark:text-gray-400 dark:hover:text-white"
                >
                  Projects
                </a>
              </DrawerClose>
              <div className="w-full justify-center  flex">
                <Button className=" dark:hover:bg-gray-300 dark:bg-white bg-gray-900 font-semibold hover:bg-gray-800 ">
                  <RiFileDownloadLine /> Download CV
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
