"use client"; 

import {
  Bell,
  ChevronsLeft,
  ChevronsUpDown,
  MessageCircleMore,
  Search,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./use-theme";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/cn";

const RootHeader = () => {
  const { isClosed, setIsClosed } = useSidebar();
  return (
    <header className={cn("fixed top-0 left-0 z-40 text-sm w-screen pl-52 h-14 flex items-center justify-between pr-2 transition-[padding]", isClosed && "pl-20")} >
      <div className="p-1 bg-slate-100 hover:scale-105 transition-transform cursor-pointer dark:bg-slate-800 rounded"
        onClick={(e) => {
          e.stopPropagation();
          setIsClosed(prev => !prev)
        }}  
        >
          <ChevronsLeft className={cn(isClosed && "transition-transform rotate-180")} size={17} />
        </div>
      <form className="h-9 relative max-md:flex justify-center">
        <Search
          size={18}
          className="absolute top-1/2 left-2.5 dark:text-slate-300 text-slate-800 -translate-y-1/2 cursor-pointer hover:text-primary"
        />
        <input
          type="text"
          placeholder="search"
          className="h-full max-md:hidden bg-slate-100 dark:bg-black rounded-full w-55 text-slate-900 dark:text-slate-100 pl-9 outline-0"
        />
      </form>
      <div className="flex items-center gap-1 mr-2">
        <div className="icon_hover">
          <MessageCircleMore size={17} />
        </div>
        <ThemeToggle />

        <div className="icon_hover">
          <Bell size={17} />
        </div>
        <div className="flex items-center ml-5 gap-1">
          <div className="active_dot size-1.25 bg-green-400 mr-1 rounded-full">
          </div>
          <div className="relative overflow-hidden size-8 rounded-full">
            <Image
              src="/profile.png"
              alt="users profile picture"
              fill
              className="object-cover"
            />
          </div>
          <ChevronsUpDown
            className="text-slate-500 dark:text-slate-300"
            size={16}
          />
        </div>
      </div>
    </header>
  );
};

export default RootHeader;
