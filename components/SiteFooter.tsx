import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "pb-16 text-sm leading-6 flex-none")}>
      <div className="mt-16 pt-10">
        <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
            {/* <Icons.logo />    or */}{" "}
            <div className="text-2xl font-bold">{siteConfig.name}</div>
            <div className="text-center text-sm leading-loose md:relative md:text-left md:ml-auto">
              <p>
                Built by{" "}
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  OrionXD
                </a>
                . Hosted on{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Vercel
                </a>
                .
              </p>
            </div>
          </div>
      </div>
    </footer>
  );
}
