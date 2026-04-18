"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile: left menu button */}
          <div className="flex w-10 items-center justify-start md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-muted"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile: centered brand */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              M.A
            </Link>
          </div>

          {/* Mobile: right placeholder to keep brand centered */}
          <div className="w-10 md:hidden" />

          {/* Desktop: left brand */}
          <Link
            href="/"
            className="hidden font-semibold text-lg tracking-tight md:block"
          >
            M.A
          </Link>

          {/* Desktop: center nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop: right socials */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="https://linkedin.com/in/am-awaludinmuhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-70"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={26}
                height={26}
              />
            </Link>
            <Link
              href="https://github.com/am-awaludinmuhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-70"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-6 text-center">
            <nav className="flex flex-col items-center gap-5 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex items-center justify-center gap-5 border-t pt-5">
              <Link
                href="https://linkedin.com/in/am-awaludinmuhammad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={26}
                  height={26}
                />
              </Link>
              <Link
                href="https://github.com/am-awaludinmuhammad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={22}
                  height={22}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;