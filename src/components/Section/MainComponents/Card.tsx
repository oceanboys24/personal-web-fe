import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiFileDownloadLine } from "react-icons/ri";

export default function CardComponent() {
  return (
    <div className=" flex flex-row  w-full">
      {/* Image */}
      <div>
        <Image
          src="/profile.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      {/* Content Card */}
      <div>
        <p>Hi, I'm Vian</p>
        <p>Tech Enthusiast </p>
        <p>
          I build and ship digital products from scratch to production.
          Passionate about creating end-to-end solutions and turning ideas into
          fully functional applications. With expertise in both frontend and
          backend development, I handle everything from initial concept to
          deployment and maintenance.
        </p>
        <p>
          <CiLocationOn />
          Mojokerto, Sambiroto ,Indonesia
        </p>

        <p>
          <GoDotFill />
          Available for new projects
        </p>
        <Button className="bg-green-500">
          <FaWhatsapp /> Let's Talk
        </Button>
        <Button>
          <RiFileDownloadLine /> Download CV
        </Button>
      </div>
    </div>
  );
}
