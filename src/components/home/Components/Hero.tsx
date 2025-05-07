"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiFileDownloadLine } from "react-icons/ri";
import useHeroLanding from "../hooks/useHeroLanding";
import SpinnerButton from "@/components/login/components/Spinner";

export default function HeroComponent() {
  const { DataHeroLanding, isLoadingHero } = useHeroLanding();
  if (isLoadingHero) {
    return <SpinnerButton />;
  }
  return (
    <div className="lg:flex lg:gap-10 xl:p-10 xl:gap-20 mb-30 items-center lg:flex-row  lg:justify-between lg:items-center xl:">
      {/* Image */}

      <div className="flex w-full justify-center">
        <img
          src={DataHeroLanding?.image_url || ""}
          width={500}
          height={500}
          className="object-cover shadow-lg hover:shadow-purple-700/50 h-[300px] w-[300px] rounded-xl shadow-2xl/30 md:mb-5 mb-5  transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          alt="Picture of the author"
        />
      </div>

      {/* Content Card */}
      <div className="flex flex-col justify-center gap-3 ">
        <p className="font-bold text-4xl lg:text-6xl lg:text-start text-center">
          Hi, I'm {DataHeroLanding?.surname} 👋
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-xl lg:text-2xl lg:text-start text-center font-normal">
          {DataHeroLanding?.profession}
        </p>
        <p className="text-center lg:text-lg lg:text-start dark:text-gray-400 text-gray-500 mb-5">
          {DataHeroLanding?.description}
        </p>
        <p className="flex gap-2 dark:text-gray-400 text-gray-500 justify-center lg:justify-start">
          <CiLocationOn />
          {DataHeroLanding?.location}
        </p>

        <div className="flex gap-2 dark:text-gray-400 text-gray-500 justify-center mb-5 lg:justify-start">
          {DataHeroLanding?.is_available ? (
            <div className="flex items-center gap-2">
              <GoDotFill color="green" />
              <span>Available for new projects</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <GoDotFill color="red" />
              <span>Not Available</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center lg:justify-start ">
          <Button className="bg-green-500 dark:text-white  py-6 px-4 md:py-5 md:px-4 lg:font-semibold hover:bg-green-600 ">
            <a
              className="md:flex gap-2 flex items-center "
              target="_blank"
              href={`https://wa.me/${DataHeroLanding?.handphone}`}
            >
              <FaWhatsapp /> Let's Talk
            </a>
          </Button>
          <Button className="py-6 px-4 md:px-4 md:py-5  dark:hover:bg-gray-300 font-semibold hover:bg-gray-800">
            <RiFileDownloadLine /> Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
