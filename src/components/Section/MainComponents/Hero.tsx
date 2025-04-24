import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiFileDownloadLine } from "react-icons/ri";

export default function HeroComponent() {
  return (
    <div className="lg:flex lg:gap-10 xl:p-10 xl:gap-20 mb-30 items-center lg:flex-row  lg:justify-between lg:items-center xl:">
      {/* Image */}

      <div className="flex w-full justify-center">
        <Image
          src="/profile.jpg"
          width={500}
          height={500}
          className="object-cover shadow-lg hover:shadow-purple-700/50 h-[300px] w-[300px] rounded-xl shadow-2xl/30 md:mb-5 mb-5  transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          alt="Picture of the author"
        />
      </div>

      {/* Content Card */}
      <div className="flex flex-col justify-center gap-3 ">
        <p className="font-bold text-4xl lg:text-6xl lg:text-start text-center">
          Hi, I'm Vian 👋
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-xl lg:text-2xl lg:text-start text-center font-normal">
          Web Developer & SysAdmin
        </p>
        <p className="text-center lg:text-lg lg:text-start dark:text-gray-400 text-gray-500 mb-5">
          I build and ship digital products from scratch to production.
          Passionate about creating end-to-end solutions and turning ideas into
          fully functional applications. With expertise in both frontend and
          backend development, I handle everything from initial concept to
          deployment and maintenance.
        </p>
        <p className="flex gap-2 dark:text-gray-400 text-gray-500 justify-center lg:justify-start">
          <CiLocationOn />
          Mojokerto, Sambiroto ,Indonesia
        </p>

        <p className="flex gap-2 dark:text-gray-400 text-gray-500 justify-center mb-5 lg:justify-start">
          <GoDotFill color="green" />
          Available for new projects
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center lg:justify-start ">
          <Button className="bg-green-500 dark:text-white  py-6 px-4 md:py-6 md:px-4 lg:font-semibold hover:bg-green-600 ">
            <FaWhatsapp /> Let's Talk
          </Button>
          <Button className="py-6 px-4 md:px-4 md:py-6  dark:hover:bg-gray-300 font-semibold hover:bg-gray-800">
            <RiFileDownloadLine /> Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
