"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/useLockBody"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  const segment = useSelectedLayoutSegment()
  useLockBody()

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
                item.href.startsWith(`/${segment}`) ? "animate-pulse" : "",
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
  )
}

export function SideNav({ items, children }: MobileNavProps) {
  const segment = useSelectedLayoutSegment()
  useLockBody()

  return (
    <div
      className={cn(
        "fixed left-0 top-16 z-10 flex h-full w-2/3 transform flex-col justify-between overflow-y-hidden bg-teal-300/10 shadow-lg backdrop-blur-xl duration-300 ease-in-out md:hidden"
      )}
    >
      <nav className="inset-0 mt-10 flex flex-col items-center space-y-8 font-medium">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "group text-base tracking-wider active:translate-y-0.5 md:bg-transparent md:p-0",
              item.href.startsWith(`/${segment}`) ? "" : ""
            )}
            aria-current="page"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children}
      {/* <div className="text-center">
          <div className="text-gray-600 mb-20 mt-2 dark:text-gray-300">
            {version}
          </div>
        </div> */}
    </div>
  )
}
