import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonHeroComponent() {
  return (
    <div className="lg:flex lg:gap-10 xl:p-10 xl:gap-20 mb-30 items-center lg:flex-row  lg:justify-between lg:items-center ">
      {/* Image */}

      <div className="flex w-full justify-center">
        <Skeleton className="object-cover shadow-lg hover:shadow-purple-700/50 h-[300px] w-[300px] rounded-xl shadow-2xl/30 md:mb-5 mb-5  transform transition duration-500 hover:scale-105 hover:shadow-2xl" />
      </div>

      {/* Content Card */}
      <div className="flex flex-col gap-4 md:justify-center md:items-center justify-center items-center">
        <Skeleton className="2xl:w-[1200px] 2xl:h-[100px] xl:w-[800px] xl:h-[75px] lg:w-[600px] lg:h-[50px] md:w-[400px] md:h-[100px] w-[300px] h-[75px] " />
        <Skeleton className="2xl:w-[1200px] 2xl:h-[300px] xl:w-[800px] xl:h-[200px] lg:w-[600px] lg:h-[150px]  md:w-[600px] md:h-[300px]  w-[350px] h-[125px] " />
        <Skeleton className="2xl:w-[1200px] 2xl:h-[100px] xl:w-[800px] xl:h-[75px] lg:w-[600px] lg:h-[50px]  md:w-[400px] md:h-[100px]  w-[300px] h-[75px] " />
      </div>
    </div>
  );
}
