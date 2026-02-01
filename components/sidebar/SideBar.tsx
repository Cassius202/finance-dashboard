"use client";

import Image from "next/image";
import NavigationBar from "./NavigationBar";
import GoPremium from "./GoPremium";
import { useSidebar } from "../sidebar-context";
import { cn } from "@/lib/cn";

const SideBar = () => {
  const { isClosed } = useSidebar();

  return (
    <aside className={cn("fixed flex flex-col top-0 left-0 z-50 text-sm h-screen w-54 px-2 transiiton-[width] duration-300", isClosed && "w-16" )} >
      <div className={cn("h-14 flex w-full items-center shrink-0", isClosed && 'justify-center items-center')}>
        <div className={ cn("bg-primary dark:bg-slate-200 rounded mr-2 size-8 p-1.5", isClosed && 'justify-center mr-0' )} >
          <div className="relative h-full w-full overflow-hidden brightness-[10] dark:brightness-100">
            <Image alt="" src="/logo.png" fill className="object-contain" />
          </div>
        </div>
        <span className={cn("text-lg font-semibold", isClosed && "hidden")}>Springer</span>
      </div>

      <NavigationBar isClosed={isClosed} />
      <div className="w-full pr-2 mt-auto">
        <GoPremium isClosed={isClosed} />
      </div>
    </aside>
  );
};

export default SideBar;
