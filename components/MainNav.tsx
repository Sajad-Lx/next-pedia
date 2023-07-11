"use client"

import React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import { MobileNav } from "@/components/MobileNav"
import { ModeToggle } from "@/components/ModeToggle"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="relative mx-8 flex items-center py-4 w-full xl:mx-0 xl:mr-5">
      {/* For Mobile */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {/* {showMobileMenu ? <Icons.close /> : <Icons.logo />} */}
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="sr-only">Menu</span>
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}

      {/* For Desktop */}
      <div className="flex w-full flex-row justify-between">
        <Link href="/" className="ml-7 items-center space-x-2 md:mr-10">
          {/* <Icons.logo /> */}
          <span className="text-2xl font-bold">{siteConfig.name}</span>
        </Link>
        {items?.length ? (
          <nav className="relative ml-auto mr-3 hidden items-center gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center rounded-full px-4 text-lg font-medium transition-colors hover:ring-2",
                  item.href.startsWith(`/${segment}`)
                    ? "bg-foreground text-background"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <ModeToggle />
      </div>
    </div>
  )
}
