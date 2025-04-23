import Image from "next/image";
import { Button } from "../ui/button";
import { Moon } from "lucide-react";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

export default function NavbarComponent() {
  return (
    <div className="flex px-3 md:px-6 md:py-4  w-full justify-between flex-row py-3 2 xl:px-[80px] mb-10">
      <div className="flex justify-start">
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
      </div>

      <div className="flex gap-3  justify-center items-center">
        <div className="hidden md:flex gap-5 flex-row w-full justify-center  ">
          <Link href="#" className="text-gray-400 hover:text-black text-sm">
            Tech Stack
          </Link>
          <Link href="#" className="text-gray-400 hover:text-black text-sm">
            Experience
          </Link>
          <Link href="#" className="text-gray-400 hover:text-black text-sm">
            Project
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <div className="hidden md:flex gap-5">
            <Button className="bg-green-500 font-semibold">
              <FaWhatsapp /> Let's Talk
            </Button>
            <Button>
              <RiFileDownloadLine /> Download CV
            </Button>
          </div>

          <Button variant="ghost">
            <Moon color="#111827" />
          </Button>
          <Button className="md:hidden" variant="ghost">
            <IoMdMenu size="30px" color="#111827" />
          </Button>
        </div>
      </div>
    </div>
  );
}
