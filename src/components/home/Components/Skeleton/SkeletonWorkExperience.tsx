import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonWorkExperienceComponent() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-[-50px] mb-10">
      <Skeleton className="w-[350px] h-[50px] md:w-[700px] lg:w-[900px] xl:w-[1300px] 2xl:w-[1700px]" />
      <Skeleton className="w-[350px] h-[150px] md:w-[700px] lg:w-[900px] xl:w-[1300px] 2xl:w-[1700px]" />
    </div>
  );
}
