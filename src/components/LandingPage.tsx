import { copyTextToClipboard } from "@utils/copy-to-clipboard";

export const LandingPage = () => {
  return (
    <div class="relative z-10 flex h-screen w-full bg-white">
      <div class="absolute left-0 bottom-0">
        <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-16 sm:-mb-44 sm:text-[18rem] sm:text-purple-50/70">
          Skills
        </h1>
      </div>
      <div class="absolute flex h-full w-full overflow-hidden pt-14 pb-12 pl-20 font-serif leading-relaxed text-gray-700 sm:relative sm:w-[56.5%] sm:items-center sm:py-0 sm:pl-48">
        <div class="flex flex-col justify-between py-20 sm:block">
          <div>
            <h2 class="mb-3 text-gray-300 sm:text-purple-400/70">
              Hey, my name is
            </h2>
            <h1 class="text-3xl font-bold text-gray-600 sm:text-6xl sm:font-extrabold">
              Shakhruz Rakhmatov.
            </h1>
            <br />
            <div class="flex flex-col gap-1 border-l-4 border-purple-300/70 pl-3 sm:flex-row sm:items-center sm:gap-3 sm:border-0 sm:p-0">
              <h1 class="font-sans text-xl font-bold text-gray-400 sm:text-3xl sm:font-extrabold">
                Software Engineer
              </h1>
              <span class="hidden h-8 w-1 bg-slate-600 sm:block"></span>
              <h1 class="font-anonym text-lg text-gray-500 sm:mt-1 sm:text-xl sm:tracking-wide">
                Based in Uzbekistan
              </h1>
            </div>
            <div class="relative mt-6 hidden h-12 w-fit items-center sm:flex">
              <button class="absolute -right-5 h-12 w-12 rounded-full bg-purple-500/20"></button>
              <h1 class="mr-8 font-sans text-sm text-gray-300 sm:block">
                I write about JavaScript,{" "}
                <span class="text-purple-300">check it out</span>
              </h1>
              <div class="h-0.5 w-20 border-b-2 border-gray-400/70"></div>
              <div class="h-0 w-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-400/70"></div>
            </div>
          </div>
          <p class="mt-32 hidden w-2/3 text-gray-400 sm:mt-14 sm:block">
            Being JavaScript Ecosystem enthusiast and TypeScript Advocate I love
            developing both the Frontend and Backend sides of the tech stack.
          </p>

          <p class="pr-10 text-gray-400 sm:hidden">
            I'm a Full-Stack Engineer, who loves JavaScript{" "}
            <span class="text-purple-300">&</span> TypeScript.
          </p>
        </div>
      </div>
      <div
        class="h-full w-full bg-cover bg-bottom sm:w-[43.5%]"
        style="background-image: url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2836&q=80)"
      ></div>

      {/* Email Address */}
      <div class="absolute bottom-0 left-0 h-16 w-full pr-8 pt-2 sm:block sm:h-20 sm:pr-16">
        <div class="flex items-center justify-end gap-6 sm:gap-8">
          <div class="mt-1 w-full border-t border-gray-300/30"></div>
          <p
            onClick={() => copyTextToClipboard()}
            class="cursor-pointer font-serif text-xs tracking-widest text-gray-400/70 hover:text-purple-300 sm:text-sm"
          >
            iamrakhmatov@gmail.com
          </p>
        </div>
      </div>
      {/* Navigation */}
      <div class="absolute top-0 left-0 flex h-16 w-full items-end justify-end sm:h-20">
        <div class="flex w-full items-center justify-end gap-5 sm:gap-8">
          <div class="h-1 min-w-[60px] border-b border-gray-300/30 sm:w-full"></div>
          <div class="flex gap-8 font-serif text-sm tracking-wider text-gray-400 sm:gap-12">
            <a href="/">Skills</a>
            <a href="/">Career</a>
            <a href="/blog">Blog</a>
          </div>
          <div class="h-1 w-full border-b border-gray-300/30 sm:w-48"></div>
        </div>
      </div>
    </div>
  );
};
