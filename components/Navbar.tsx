"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-black italic tracking-wider text-white transition-colors duration-300 group-hover:text-cyan-400">
            x
          </span>

          <span className="text-2xl font-black italic tracking-wider text-red-600 transition-colors duration-300 group-hover:text-cyan-400">
            elta
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            href="/akademi"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
          >
            Akademi Unggul
          </Link>

          <Link
            href="/adikarya"
            className="text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
          >
            Adikarya Utama
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/akademi"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
            >
              Akademi Unggul
            </Link>

            <Link
              href="/adikarya"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
            >
              Adikarya Utama
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}