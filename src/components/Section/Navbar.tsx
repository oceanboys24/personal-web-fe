import Image from "next/image";
import { Button } from "../ui/button";
import { Moon } from "lucide-react";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function NavbarComponent() {
  return (
    <div className="flex py-4 px-6 mx-8">
      <div className="flex w-full flex-row justify-between">
        <div className="flex">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="margin-"
          />
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="flex gap-5 flex-row w-full justify-center">
            <p>Tech Stack</p>
            <p>Experience</p>
            <p>Projects</p>
          </div>

          <Button className="bg-green-500">
            <FaWhatsapp /> Let's Talk
          </Button>
          <Button>
            <RiFileDownloadLine /> Download CV
          </Button>
          <Button variant="ghost">
            <Moon />
          </Button>
        </div>
      </div>
    </div>
  );
}
