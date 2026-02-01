// context/SidebarContext.tsx
"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface SidebarContextType {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isClosed, setIsClosed] = useLocalStorage("sidebar-state" ,false);

  return (
    <SidebarContext.Provider value={{ isClosed, setIsClosed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  
  return context;
};