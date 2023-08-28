"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "types";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./material-ui/Buttons/Button";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  buttonVariants({ variant: "elevated", alignText: "left" }),
                  "group flex",
                  path === item.href
                    ? "bg-msecondary-container text-on-secondary-container"
                    : "",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
