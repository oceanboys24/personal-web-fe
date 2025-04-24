"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
interface Stack {
  name: string;
  img: string;
}

const stacks: Stack[] = [
  { name: "Golang", img: "/stack/go.png" },
  { name: "React", img: "/stack/react.png" },
  { name: "Linux", img: "/stack/linux.png" },
  { name: "TypeScript", img: "/stack/ts.png" },
  { name: "Docker", img: "/stack/docker.png" },
];

export default function StackComponent() {
  return (
    <div className=" px-15 mb-32" id="tech-stack">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Tech Stack - Tools I Use Everyday
      </h2>
      <div className="w-full  ">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          speed={2700}
          loop={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {stacks.map((stack, key) => (
            <SwiperSlide>
              <div className="flex flex-col pt-3 items-center">
                <div className="rounded-2xl mb-2 dark:bg-gray-700  p-2 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                  <img
                    src={stack.img}
                    className="w-20 "
                    alt="Golang Logo"
                  />
                </div>
                <span className="text-center">{stack.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
