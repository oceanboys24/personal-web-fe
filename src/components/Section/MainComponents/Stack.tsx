"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

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
];

export default function StackComponent() {
  return (
    <div className="px-15 mb-32 " id="tech-stack">
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
              <div className="mx-8 w-32 h-40" key={k}>
                <div className="flex w-full h-32 dark:bg-gray-700 dark:rounded-xl mb-2 p-3 justify-center transform delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110">
                  <img src={stack.img} className="w-full" alt="Stack" />
                </div>
                <span className="flex justify-center">{stack.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
