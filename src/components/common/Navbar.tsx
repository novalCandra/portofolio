"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModelToggle } from "./ModeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-transparent  px-4 py-4 backdrop-blur-md sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <h2 className="text-xl font-mono sm:text-2xl">
          Novel
          <span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Candra
          </span>
        </h2>

        {/* Desktop / small-laptop menu */}
        <ul className="hidden items-center gap-6 cursor-pointer md:flex lg:gap-10 xl:gap-16">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-black duration-200 hover:text-sky-500 lg:text-base dark:text-white"
            >
              {l.label}
            </Link>
          ))}
          <li>
            <ModelToggle />
          </li>
        </ul>

        {/* Mobile controls: theme toggle always visible + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ModelToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card shadow-sm"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="mx-auto mt-3 flex w-full max-w-7xl flex-col gap-1 rounded-xl border border-border bg-card p-2 shadow-lg md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
