"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Stack {
  name: string;
  img: string;
}

const stacks: Stack[] = [
  { name: "Golang", img: "/stack/go.png" },
  { name: "React", img: "/stack/react.png" },
  { name: "Linux", img: "/stack/linux.png" },
  { name: "TypeScript", img: "/stack/ts.png" },
  { name: "Git", img: "/stack/git.png" },
  { name: "Tailwind", img: "/stack/tailwind.png" },
  { name: "Express", img: "/stack/express.png" },
  { name: "Next JS", img: "/stack/nextjs.png" },
  { name: "Mikrotik", img: "/stack/mikrotik.jpg" },
  { name: "Javascript", img: "/stack/js.png" },
  { name: "Docker", img: "/stack/docker.png" },
  { name: "Postgres SQL", img: "/stack/postgres.png" },
  { name: "Nginx", img: "/stack/nginx.svg" },
];

export default function StackComponent() {
  return (
    <div className=" mb-32 lg:px-12" id="tech-stack">
      <div className="md:h-20"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Tech Stack - Tools I Use Everyday
      </h2>
      <div className="relative">
        {/* Left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        {/* Right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        <div>
          <Marquee>
            {stacks.map((stack, k) => (
              <div key={k}>
                <div className="mx-8 flex items-center border p-2 bg-white/30 backdrop-blur-sm rounded-2xl w-16 h-16 mb-3">
                  <Image
                    src={stack.img}
                    alt="icons"
                    width={100}
                    height={100}
                    className="hover:scale-110 cursor-pointer rounded-md"
                  />
                </div>
                <h3 className="text-center">{stack.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
