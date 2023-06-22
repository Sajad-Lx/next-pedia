"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/useLockBody";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import Link from "next/link";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-2 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-slate-700 p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-lg font-medium hover:underline",
                item.href.startsWith(`/${segment}`)
                  ? "text-white bg-black dark:text-black dark:bg-white animate-pulse"
                  : "text-black dark:text-white",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
