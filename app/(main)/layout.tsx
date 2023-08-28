import Link from "next/link";

import { mainConfig } from "@/config/main";
import { databaseConnected } from "@/lib/databaseCheck";
import { cn } from "@/lib/utils";
import Attention from "@/components/ui/Attention";
import { MainNav } from "@/components/MainNav";
import { buttonVariants } from "@/components/material-ui/Buttons/Button";
import { SiteFooter } from "@/components/SiteFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full flex-none bg-white/60 backdrop-blur transition-colors duration-500 dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
        <div className="container flex h-16 items-center space-x-4 py-4">
          <MainNav items={mainConfig.mainNav} />
          <Link
            className={cn(buttonVariants({ variant: "tonal" }))}
            href={"/login"}
          >
            {"Login"}
          </Link>
        </div>
      </header>

      {(await databaseConnected()) ? (
        ""
      ) : (
        <Attention text="⚠️ Attention: Database not connected!" />
      )}

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
