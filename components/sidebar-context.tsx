// context/SidebarContext.tsx
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  isInitialized: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isClosed, setIsClosed] = useState<boolean>(true); 
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Logic: Force closed if screen is smaller than 640px
      if (window.innerWidth < 640) {
        setIsClosed(true);
      }
    };

    // 1. Initial Load Logic
    try {
      const saved = localStorage.getItem("nav-state");
      const isSmallScreen = window.innerWidth < 640;

      if (isSmallScreen) {
        setIsClosed(true); // Always start closed on screens < 640px
      } else if (saved !== null) {
        setIsClosed(JSON.parse(saved));
      } else {
        setIsClosed(false); // Default to open on large screens if no save exists
      }
    } catch (error) {
      console.error("Sidebar state error:", error);
    } finally {
      setIsInitialized(true);
    }

    // 2. Listen for window resizing
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Persistent Save Logic
  useEffect(() => {
    // Only save the user's preference if they are on a screen wider than 640px
    if (isInitialized && window.innerWidth >= 640) {
      localStorage.setItem("nav-state", JSON.stringify(isClosed));
    }
  }, [isClosed, isInitialized]);

  return (
    <SidebarContext.Provider value={{ isClosed, setIsClosed, isInitialized }}>
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