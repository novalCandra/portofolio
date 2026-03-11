import React from "react";

export default function FooterPage() {
  return (
    <>
      <footer className="w-full py-20 space-y-3 md:py-16 sm:py-10 bg-gray-400  dark:bg-[#131111] rounded-lg">
        <h1 className="text-center text-2xl">Noval Candra</h1>
        <div className="flex justify-center">
          <ul className="flex justify-between space-x-3">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
