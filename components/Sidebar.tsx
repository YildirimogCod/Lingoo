import { cn } from "@/lib/utils";
import Image from "next/image";

type ClassName = {
  className?: string;
};
const Sidebar = ({ className }: ClassName) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col w-full",
        className
      )}
    >
      <div className="pt-8 pl-4 pb-7 flex justify-between items-center gap-x-3">
        <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingoo
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
