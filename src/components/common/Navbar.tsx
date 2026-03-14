import Link from "next/link";
import { ModelToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <>
      <nav className="px-10 py-10 items-center">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-2xl font-mono">
              Novel
              <span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                Candra
              </span>
            </h2>
          </div>
          <ul className="hidden sm:flex lg:flex-row gap-16 items-center cursor-pointer">
            <Link
              href={"#home"}
              className="text-black dark:text-white hover:text-sky-500 duration-200"
            >
              Home
            </Link>
            <Link
              href={"#profile"}
              className="text-black dark:text-white hover:text-sky-500 duration-200"
            >
              About
            </Link>
            <Link
              href={"#project"}
              className="text-black dark:text-white hover:text-sky-500 duration-200"
            >
              Project
            </Link>
            <Link
              href={"#skills"}
              className="text-black dark:text-white hover:text-sky-500 duration-200"
            >
              Skills
            </Link>
            <li>
              <ModelToggle />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
