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

import { buttonVariants } from "./material-ui/Buttons/Button"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="relative flex items-center py-4 w-full">
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
        <Link href="/" className="ml-7 inline-flex items-center space-x-2 md:mr-10">
          {/* <Icons.logo /> */}
          <span className="text-2xl font-bold">{siteConfig.name}</span>
        </Link>
        {items?.length ? (
          <nav className="relative ml-auto mr-3 hidden items-center md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  item.href.startsWith(`/${segment}`)
                    ? buttonVariants({ variant: "filled" })
                    : buttonVariants({ variant: "text" }),
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
