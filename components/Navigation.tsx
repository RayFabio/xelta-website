"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/akademi", label: "Akademi Unggul" },
  { href: "/adikarya", label: "Adikarya Utama" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="container-xelta flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/xelta-logo.svg"
            alt="XELTA Logo"
            width={42}
            height={42}
            priority
            className="rounded-xl"
          />
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-white">XELTA</p>
            <p className="text-[9px] tracking-[0.3em] text-slate-500">INDONESIA</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="container-xelta flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-cyan-400 px-3 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
