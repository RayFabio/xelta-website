"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const divisions = [
  {
    number: "01",
    title: "XELTA Akademi Unggul",
    label: "EDUCATION & HUMAN RESOURCE DEVELOPMENT",
    description:
      "Developing human potential through education, professional training, and comprehensive human resource development.",
    href: "/akademi",
  },
  {
    number: "02",
    title: "XELTA Adikarya Utama",
    label: "CIVIL CONSTRUCTION & INFRASTRUCTURE",
    description:
      "Delivering professional civil construction and infrastructure solutions with a strong focus on quality, planning, and reliability.",
    href: "/adikarya",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".xelta-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );

            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="xelta-scroll bg-slate-950 text-white">

      <Navbar />

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background XELTA Logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="xelta-background-logo"
          />
        </div>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-slate-950/65" />

        {/* Grid */}
        <div className="xelta-grid pointer-events-none absolute inset-0 opacity-30" />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Main Content */}
        <div
          className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-1000 ${
            activeSection === 0
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main Logo */}
          <div className="xelta-floating xelta-logo-glow">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[220px] object-contain sm:w-[280px] md:w-[360px]"
            />
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.35em] text-cyan-400">
            PT XELTA
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Building Tomorrow,
            <br />
            <span className="text-slate-500">
              Creating Meaningful Impact.
            </span>
          </h1>

          {/* Button */}
          <Link
            href="#divisions"
            className="group mt-10 inline-flex items-center gap-5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            <span>Explore XELTA</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:border-slate-950">
              →
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.35em] text-slate-500">
            SCROLL
          </span>

          <div className="xelta-scroll-line h-10 w-px" />
        </div>
      </section>

      {/* =====================================================
          PAGE 2 — DIVISIONS
      ====================================================== */}

      <section
        id="divisions"
        data-index="1"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-slate-950"
      >
        {/* Background grid */}
        <div className="xelta-grid pointer-events-none absolute inset-0 opacity-30" />

        {/* Background glow kiri */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Background glow kanan */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        {/* =================================================
            LOGO TRANSITION
            1 LOGO → 2 LOGO
        ================================================== */}

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 ${
            activeSection === 1
              ? "xelta-logo-split-active"
              : "xelta-logo-split-hidden"
          }`}
        >
          {/* Logo kiri */}
          <div className="xelta-split-logo xelta-split-logo-left">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>

          {/* Logo kanan */}
          <div className="xelta-split-logo xelta-split-logo-right">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Center logo awal */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeSection === 1
              ? "scale-0 opacity-0"
              : "scale-100 opacity-20"
          }`}
        >
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="w-[320px] object-contain blur-[1px] md:w-[430px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

          {/* Heading */}
          <div
            className={`mb-12 text-center transition-all duration-1000 ease-out md:mb-16 ${
              activeSection === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-cyan-400">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Two pillars.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Two specialized business divisions operating within the
              XELTA ecosystem.
            </p>
          </div>

          {/* =================================================
              TWO PILARS
          ================================================== */}

          <div className="grid gap-6 lg:grid-cols-2">

            {divisions.map((division, index) => (
              <Link
                key={division.number}
                href={division.href}
                className={`xelta-division-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-10 ${
                  activeSection === 1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  transitionDelay:
                    activeSection === 1
                      ? `${index * 180 + 250}ms`
                      : "0ms",
                }}
              >
                {/* Background logo di dalam blok */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/XELTA%20Logo.jpg.jpeg"
                    alt=""
                    aria-hidden="true"
                    className="w-[330px] object-contain opacity-[0.035] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]"
                  />
                </div>

                {/* Dark gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-cyan-950/20" />

                {/* Number */}
                <span className="absolute right-6 top-1 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.025] transition-all duration-500 group-hover:text-cyan-400/[0.07]">
                  {division.number}
                </span>

                {/* Content */}
                <div className="relative z-10">

                  <div className="mb-14 flex items-center justify-between">
                    <span className="max-w-[75%] text-[10px] font-bold tracking-[0.2em] text-cyan-400 md:text-xs">
                      {division.label}
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {division.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 md:text-base">
                    {division.description}
                  </p>

                  {/* Explore */}
                  <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-white">
                    <span>Explore division</span>

                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE 3 — ABOUT XELTA
      ====================================================== */}

      <section
        id="about"
        data-index="2"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-white text-slate-950"
      >
        {/* Background logo */}
        <div className="pointer-events-none absolute right-[-120px] top-1/2 -translate-y-1/2 opacity-[0.035]">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="w-[650px] grayscale"
          />
        </div>

        {/* Cyan glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

          {/* Logo */}
          <div
            className={`mb-14 flex justify-center transition-all duration-1000 ease-out md:mb-20 ${
              activeSection === 2
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-90 opacity-0"
            }`}
          >
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[120px] object-contain opacity-80 grayscale md:w-[160px]"
            />
          </div>

          {/* About */}
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* Left */}
            <div
              className={`transition-all duration-1000 ease-out ${
                activeSection === 2
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                One company.
                <br />

                <span className="text-slate-400">
                  Two areas of impact.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div
              className={`transition-all delay-150 duration-1000 ease-out ${
                activeSection === 2
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <p className="text-xl leading-9 text-slate-700 md:text-2xl">
                PT XELTA is a diversified company built around two core
                business divisions with distinct areas of expertise and a
                shared commitment to creating meaningful value.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                Through XELTA Akademi Unggul, we focus on education,
                professional training, and human resource development.
                Meanwhile, XELTA Adikarya Utama focuses on civil
                construction and infrastructure development.
              </p>

              <div className="mt-10 h-px w-24 bg-cyan-500" />

              <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-slate-950">
                BUILDING TOMORROW.
              </p>

              <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-slate-400">
                CREATING MEANINGFUL IMPACT.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}