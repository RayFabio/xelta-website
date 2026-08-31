"use client";

import Link from "next/link";
import { useState } from "react";

const divisions = [
  {
    number: "01",
    label: "EDUCATION & HUMAN RESOURCE DEVELOPMENT",
    title: "XELTA Akademi Unggul",
    description:
      "Developing human potential through education, professional training, and comprehensive human resource development.",
    services: [
      "Professional Training",
      "Skill & Competency Development",
      "Corporate Training",
      "Human Resource Development",
    ],
    href: "/akademi",
  },
  {
    number: "02",
    label: "CIVIL CONSTRUCTION & INFRASTRUCTURE",
    title: "XELTA Adikarya Utama",
    description:
      "Delivering professional civil construction and infrastructure solutions with a strong focus on quality, planning, and reliability.",
    services: [
      "Civil Construction",
      "Infrastructure Development",
      "Engineering & Design",
      "Project Management",
    ],
    href: "/adikarya",
  },
];

const values = [
  {
    number: "01",
    title: "Professional",
    description:
      "Maintaining professional standards across every service, process, and collaboration.",
  },
  {
    number: "02",
    title: "Innovative",
    description:
      "Embracing new approaches and ideas to create relevant and meaningful solutions.",
  },
  {
    number: "03",
    title: "Quality Driven",
    description:
      "Committed to quality, precision, and responsible results in everything we do.",
  },
  {
    number: "04",
    title: "Collaborative",
    description:
      "Building long-term relationships through communication, trust, and collaboration.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* =====================================================
    NAVBAR
====================================================== */}
<nav className="xelta-navbar fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

    {/* XELTA */}
    <Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className="text-lg font-bold tracking-[0.18em] text-slate-950"
>
  XELTA
</Link>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 md:flex">

  <Link
    href="/"
    className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
  >
    Home
  </Link>

  <Link
    href="/#about"
    className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
  >
    About
  </Link>

  <Link
    href="/akademi"
    className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
  >
    Akademi Unggul
  </Link>

  <Link
    href="/adikarya"
    className="text-sm font-medium text-white transition-colors hover:text-cyan-400"
  >
    Adikarya Utama
  </Link>

  <Link
    href="/contact"
    className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500"
  >
    Contact
  </Link>

</div>

    {/* Mobile Button */}
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 !text-slate-950 transition hover:border-cyan-500 hover:!text-cyan-600 md:hidden"
    >
      {menuOpen ? (
        <span className="text-2xl leading-none">×</span>
      ) : (
        <div className="flex flex-col gap-1.5">
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </div>
      )}
    </button>
  </div>

  {/* Mobile Navigation */}
  <div
    className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
      menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="mx-auto max-w-7xl px-6 py-5">

      <div className="flex flex-col">

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/10 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          Home
        </Link>

        <Link
          href="/#about"
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/10 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          About
        </Link>

        <Link
          href="/akademi"
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/10 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          Akademi Unggul
        </Link>

        <Link
          href="/adikarya"
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/10 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          Adikarya Utama
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-5 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition-all hover:bg-cyan-400"
        >
          Contact
        </Link>

      </div>
    </div>
  </div>
</nav>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
  className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 bg-cover bg-center"
  style={{ backgroundImage: "url('/XELTA%20Logo.jpg.jpeg')" }}>
    <div className="absolute inset-0 bg-slate-950/70" />
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
                PT XELTA
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Building
              <br />
              <span className="text-slate-500">Human Potential.</span>
              <br />
              <span className="text-white">Shaping the Future.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                PT XELTA operates through two core business areas: education
                and human resource development, as well as civil construction
                and infrastructure development.
              </p>

              <Link
                href="#divisions"
                className="group inline-flex w-fit items-center gap-4 text-sm font-semibold text-white"
              >
                Explore XELTA

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400 group-hover:text-cyan-400">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="border-white/10 py-4 sm:border-r sm:pr-8">
              <p className="text-xs tracking-[0.2em] text-slate-500">
                BUSINESS AREAS
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                02 Core Divisions
              </p>
            </div>

            <div className="border-white/10 py-4 sm:border-r sm:px-8">
              <p className="text-xs tracking-[0.2em] text-slate-500">
                APPROACH
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                Professional & Integrated
              </p>
            </div>

            <div className="py-4 sm:pl-8">
              <p className="text-xs tracking-[0.2em] text-slate-500">
                FOCUS
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                People & Infrastructure
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[9px] tracking-[0.3em] text-slate-500">
            SCROLL
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id="about" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
                One company.
                <br />
                <span className="text-slate-400">
                  Two areas of impact.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-slate-700">
                PT XELTA is a diversified company built around two core
                business divisions with distinct areas of expertise and a
                shared commitment to creating meaningful value.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                Through XELTA Akademi Unggul, we focus on education,
                professional training, and human resource development.
                Meanwhile, XELTA Adikarya Utama focuses on civil construction
                and infrastructure development.
              </p>

              <Link
                href="#divisions"
                className="mt-10 inline-flex items-center gap-3 border-b border-slate-950 pb-2 text-sm font-semibold text-slate-950 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Discover our divisions
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS DIVISIONS
      ====================================================== */}
      <section id="divisions" className="bg-slate-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                OUR BUSINESS
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl">
                Two pillars.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Two specialized business divisions operating within the XELTA
              ecosystem, each with its own expertise and focus.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {divisions.map((division) => (
              <Link
                key={division.number}
                href={division.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl md:p-10"
              >
                <span className="absolute right-8 top-5 select-none text-8xl font-bold tracking-[-0.08em] text-slate-100 transition-colors duration-500 group-hover:text-cyan-50">
                  {division.number}
                </span>

                <div className="relative z-10">
                  <div className="mb-16 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                      {division.label}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                    {division.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
                    {division.description}
                  </p>

                  <div className="mt-10 border-t border-slate-100 pt-7">
                    <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-400">
                      KEY CAPABILITIES
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {division.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section id="values" className="bg-slate-950 py-28 text-white lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
                OUR VALUES
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                What drives
                <br />
                <span className="text-slate-500">XELTA forward.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.number}
                  className={`border-white/10 py-8 sm:px-8 ${
                    index < 2 ? "border-b" : ""
                  } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    {value.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FUTURE / CAPABILITIES
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-600">
            BUILDING THE FUTURE
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
            Ready for the next chapter.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
            XELTA continues to grow by strengthening its capabilities,
            expanding collaboration, and delivering solutions that create
            meaningful value for people, organizations, and communities.
          </p>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white lg:py-36">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
                LET&apos;S CONNECT
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Let&apos;s build
                <br />
                <span className="text-slate-500">
                  something meaningful.
                </span>
              </h2>
            </div>

            <Link
  href="/contact"
  className="group flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-cyan-400"
>
  <span className="text-black">
    Start a conversation
  </span>

  <span className="text-black transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
