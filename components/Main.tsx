'use client'

import { cn } from "@/lib/cn";
import { useSidebar } from "./sidebar-context";

const Main = ({ children }: { children: React.ReactNode }) => {

  const { isClosed } = useSidebar();
  return (
    <main
      className={cn(
        "w-screen pl-52 h-[calc(100vh-56px-8px)] mt-14 text-sm transition-[padding] overflow-x-hidden",
        isClosed && "pl-16",
      )}
    >
      {children}
    </main>
  );
};

export default Main;
