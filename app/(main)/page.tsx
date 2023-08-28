import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/material-ui/Buttons/FAB";

export default async function MainPage() {
  return (
    <>
      <section className="mx-5">
        <div className="relative mx-auto max-w-5xl pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-black drop-shadow-xl dark:text-white sm:text-5xl lg:text-6xl">
            Welcome to the Blog Creation Site!
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
            This site is all about helping you create and manage your own blog.
            We offer a variety of features to make it easy for you to get
            started.
          </p>
          <div className="pt-10 text-center">
            <div>
              <h2 className="text-lg font-bold">How to use</h2>
              <ul>
                <li>Login or create an account.</li>
                <li>Start writing a blog post.</li>
                <li>Publish your blog post.</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "w-full px-6 text-base font-semibold sm:w-auto"
              )}
              href="/register"
            >
              Get started
            </a>
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "default" }),
                "w-full px-6 text-base font-semibold sm:w-auto"
              )}
              href="/blog"
            >
              See blog posts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
