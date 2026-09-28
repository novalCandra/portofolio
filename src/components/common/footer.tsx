import React from "react";

export default function FooterPage() {
  return (
    <footer className="w-full rounded-lg bg-gray-400 px-4 py-10 sm:py-12 md:py-16 dark:bg-[#131111]">
      <div className="mx-auto w-full max-w-7xl space-y-4">
        <h1 className="text-center text-xl sm:text-2xl">Noval Candra</h1>
        <div className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:space-x-3 sm:text-base">
            <li>
              <a href="#home" className="transition-colors hover:text-sky-500">
                Home
              </a>
            </li>
            <li>
              <a href="#profile" className="transition-colors hover:text-sky-500">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="transition-colors hover:text-sky-500">
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
