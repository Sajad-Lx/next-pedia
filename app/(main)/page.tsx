export default async function MainPage() {
  return (
    <>
      <section className="mx-5">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Welcome to the Blog Creation Site!
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
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
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <a
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-base text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-emerald-500 dark:highlight-white/20 dark:hover:bg-emerald-400"
              href="/register"
            >
              Get started
            </a>
            <a
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-base text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-emerald-500 dark:highlight-white/20 dark:hover:bg-emerald-400"
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
