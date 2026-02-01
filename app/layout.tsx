
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import RootHeader from "@/components/RootHeader";
import SideBar from "@/components/sidebar/SideBar";
import { SidebarProvider } from "@/components/sidebar-context";
import Main from "@/components/Main";
import { useSidebar } from "@/components/sidebar-context";
const interSans = Inter({
  variable: "--font-inter", // CSS variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Springer Finance Dashboard",
  description: "Manage money with Springer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <RootHeader />
            <SideBar />
            <Main>
              {children}
            </Main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
