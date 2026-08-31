"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const divisions = [
  {
    number: "01",
    title: "XELTA Akademi Unggul",
    subtitle: "EDUCATION & HUMAN RESOURCE DEVELOPMENT",
    description:
      "Developing human potential through education, professional training, and comprehensive human resource development.",
    href: "/akademi",
  },
  {
    number: "02",
    title: "XELTA Adikarya Utama",
    subtitle: "CIVIL CONSTRUCTION & INFRASTRUCTURE",
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
    <main className="xelta-page bg-slate-950 text-white">
      <Navbar />

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section xelta-snap relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background logo */}
        <div className="xelta-background-logo">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
          />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 xelta-grid opacity-30" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Main logo */}
        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="xelta-opening-logo xelta-logo-glow">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[240px] object-contain sm:w-[300px] md:w-[380px]"
            />
          </div>

          <p className="mt-12 text-xs font-semibold tracking-[0.4em] text-cyan-400">
            PT XELTA
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Building Tomorrow,
            <br />
            <span className="text-slate-500">
              Creating Meaningful Impact.
            </span>
          </h1>

          <Link
            href="#divisions"
            className="group mt-12 inline-flex items-center gap-5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            <span>Explore XELTA</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:border-slate-950">
              →
            </span>
          </Link>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.35em] text-slate-500">
            SCROLL
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          PAGE 2 — TWO PILLARS
      ====================================================== */}

      <section
        id="divisions"
        data-index="1"
        className="xelta-section xelta-snap relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-24"
      >
        {/* Background */}
        <div className="absolute inset-0 xelta-grid opacity-25" />

        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* =================================================
              LOGO TRANSFORMATION
          ================================================= */}

          <div className="relative mb-14 flex h-[150px] items-center justify-center">

            {/* LOGO 1 */}
            <div
              className={`
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                transition-all
                duration-[1400ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  activeSection === 1
                    ? "-translate-x-[150px] scale-[0.82] opacity-100"
                    : "-translate-x-1/2 scale-100 opacity-100"
                }
              `}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[70px]" />

                <img
                  src="/XELTA%20Logo.jpg.jpeg"
                  alt="XELTA"
                  className="relative w-[120px] object-contain md:w-[150px]"
                />
              </div>
            </div>

            {/* LOGO 2 */}
            <div
              className={`
                absolute left-1/2 top-1/2
                -translate-y-1/2
                transition-all
                duration-[1400ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  activeSection === 1
                    ? "translate-x-[50px] scale-[0.82] opacity-100"
                    : "-translate-x-1/2 scale-75 opacity-0"
                }
              `}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[70px]" />

                <img
                  src="/XELTA%20Logo.jpg.jpeg"
                  alt="XELTA"
                  className="relative w-[120px] object-contain md:w-[150px]"
                />
              </div>
            </div>

            {/* Divider */}
            <div
              className={`
                absolute left-1/2 top-1/2
                h-16 w-px
                -translate-y-1/2
                bg-white/20
                transition-all
                duration-[1200ms]
                ${
                  activeSection === 1
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />
          </div>

          {/* Heading */}
          <div
            className={`
              mb-12 text-center
              transition-all
              duration-1000
              ease-out
              ${
                activeSection === 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Choose your path.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Two specialized business divisions operating within the
              XELTA ecosystem.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid gap-6 md:grid-cols-2">

            {divisions.map((division, index) => (
              <Link
                key={division.number}
                href={division.href}
                className={`
                  xelta-pillar
                  group relative overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:bg-white/[0.06]
                  md:p-10
                  ${
                    activeSection === 1
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Background logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]">
                  <img
                    src="/XELTA%20Logo.jpg.jpeg"
                    alt=""
                    className="w-[280px] object-contain"
                  />
                </div>

                {/* Number */}
                <span className="absolute right-7 top-3 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.03]">
                  {division.number}
                </span>

                <div className="relative z-10">

                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                      {division.subtitle}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {division.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                    {division.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white transition-all duration-500 group-hover:text-cyan-400">
                    Explore division
                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE 3 — ABOUT
          NO SCROLL LOCK HERE
      ====================================================== */}

      <section
        id="about"
        data-index="2"
        className="xelta-section xelta-about relative min-h-screen overflow-hidden bg-white py-28 text-slate-950"
      >
        {/* Background logo */}
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-[0.035]">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            className="w-[600px] object-contain"
          />
        </div>

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Logo */}
          <div className="mb-16 flex justify-center">

            <div
              className={`
                transition-all
                duration-1000
                ${
                  activeSection === 2
                    ? "translate-y-0 scale-100 opacity-80"
                    : "translate-y-10 scale-90 opacity-0"
                }
              `}
            >
              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt="XELTA"
                className="w-[130px] object-contain grayscale md:w-[160px]"
              />
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
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
                business divisions with distinct areas of expertise and
                a shared commitment to creating meaningful value.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                Through XELTA Akademi Unggul, we focus on education,
                professional training, and human resource development.
                Meanwhile, XELTA Adikarya Utama focuses on civil
                construction and infrastructure development.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/akademi"
                  className="rounded-full border border-slate-950 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  Akademi Unggul →
                </Link>

                <Link
                  href="/adikarya"
                  className="rounded-full border border-slate-950 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  Adikarya Utama →
                </Link>

              </div>
            </div>
          </div>

          {/* About details */}
          <div className="mt-28 grid gap-6 md:grid-cols-3">

            <div className="border-t border-slate-200 pt-7">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Professional
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Maintaining professional standards across every service,
                process, and collaboration.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Innovative
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Embracing new approaches and ideas to create relevant
                and meaningful solutions.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Quality Driven
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Committed to quality, precision, and responsible results
                in everything we do.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}