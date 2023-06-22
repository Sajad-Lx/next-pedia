"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@/types";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { MobileNav } from "@/components/MobileNav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="relative flex h-20 items-center py-4 mx-8 xl:mx-0">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo /> */}
        <span className="hidden text-2xl font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className="relative hidden items-center ml-auto gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:ring-2 ring-black dark:ring-white rounded-full px-4",
                item.href.startsWith(`/${segment}`)
                  ? "text-white bg-black dark:text-black dark:bg-white"
                  : "text-black dark:text-white",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {/* {showMobileMenu ? <Icons.close /> : <Icons.logo />} */}
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}

      <Link href="/" className="relative flex items-center ml-auto md:hidden">
        {/* <Icons.logo /> */}
        <span className="font-bold text-xl md:hidden">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
