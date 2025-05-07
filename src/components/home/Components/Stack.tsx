"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import useHandleGetStack from "@/components/dashboard/hooks/StackHooks/useHandleGetStack";
import SpinnerButton from "@/components/login/components/Spinner";

export default function StackComponent() {
  const { DataStack, isLoadingStack } = useHandleGetStack();

  if (isLoadingStack) {
    return <SpinnerButton />;
  }

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
            {DataStack?.map((stack) => (
              <div key={stack.id}>
                <div className="mx-8 flex items-center border p-2 bg-white/30 backdrop-blur-sm rounded-2xl w-16 h-16 mb-3">
                  <Image
                    src={stack.image_url}
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
