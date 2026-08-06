"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/sections/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname.startsWith("/demo");

  return (
    <>
      {!isDemo ? <Navbar /> : null}
      <main className="flex-1">{children}</main>
      {!isDemo ? <Footer /> : null}
    </>
  );
}
