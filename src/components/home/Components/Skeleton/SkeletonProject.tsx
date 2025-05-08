import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonProjectComponent() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-[40px] mb-[50px] ">
      <Skeleton className="w-[350px] h-[50px] md:w-[700px] lg:w-[900px] xl:w-[1300px] 2xl:w-[1700px] " />
      <Skeleton className="w-[350px] h-[150px] md:w-[700px] lg:w-[900px] xl:w-[1300px] 2xl:w-[1700px] 2xl:h-[200px]" />
    </div>
  );
}
