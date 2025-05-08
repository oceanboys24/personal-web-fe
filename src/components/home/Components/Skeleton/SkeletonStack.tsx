import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonStackComponent() {
  return (
    <div className="mb-30 lg:px-12" id="tech-stack">
      <div className="flex flex-col justify-center items-center gap-3">
        <Skeleton className="w-[300px] h-[75px] md:h-[75px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1700px]" />
        <div className="relative">
          <Skeleton className="w-[350px] h-[100px] md:h-[150px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1700px]" />
        </div>
      </div>
    </div>
  );
}
