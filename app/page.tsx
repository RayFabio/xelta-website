"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".xelta-page")
    );

    let ticking = false;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveSection(closestIndex);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="xelta-home text-white">

      {/* =====================================================
          GLOBAL XELTA LOGO
          SATU LOGO UNTUK SEMUA PAGE
      ====================================================== */}

      <div
        className={`xelta-global-logo ${
          activeSection === 0
            ? "xelta-logo-page-1"
            : activeSection === 1
              ? "xelta-logo-page-2"
              : "xelta-logo-page-3"
        }`}
      >
        <img
          src="/XELTA%20Logo.jpg.jpeg"
          alt="XELTA"
        />
      </div>

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-page xelta-page-locked relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950"
      >

        {/* Grid */}

        <div className="absolute inset-0 xelta-grid opacity-40" />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Content */}

        <div className="relative z-10 flex flex-col items-center text-center">

          <p className="mb-8 text-xs font-semibold tracking-[0.35em] text-cyan-400">
            PT XELTA
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Building Tomorrow,
            <br />
            <span className="text-slate-500">
              Creating Meaningful Impact.
            </span>
          </h1>

          <Link
            href="#divisions"
            className="group mt-12 inline-flex items-center gap-5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
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
          PAGE 2 — BUSINESS DIVISIONS
      ====================================================== */}

      <section
        id="divisions"
        data-index="1"
        className="xelta-page xelta-page-locked relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 py-24"
      >

        {/* Grid */}

        <div className="absolute inset-0 xelta-grid opacity-30" />

        {/* Background glow */}

        <div className="absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Heading */}

          <div
            className={`mb-14 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >

            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Two pillars.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Two specialized business divisions operating within the XELTA
              ecosystem.
            </p>

          </div>

          {/* =================================================
              TWO BUSINESS OPTIONS
          ================================================= */}

          <div
            className={`grid gap-6 lg:grid-cols-2 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >

            {divisions.map((division) => (
              <Link
                key={division.number}
                href={division.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-2xl md:p-10"
              >

                {/* Number */}

                <span className="absolute right-7 top-3 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.03] transition-all duration-700 group-hover:text-cyan-400/[0.06]">
                  {division.number}
                </span>

                <div className="relative z-10">

                  <div className="mb-12 flex items-center justify-between">

                    <span className="max-w-[80%] text-xs font-bold tracking-[0.2em] text-cyan-400">
                      {division.label}
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      ↗
                    </span>

                  </div>

                  <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {division.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                    {division.description}
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-7">

                    <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-500">
                      KEY CAPABILITIES
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {division.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-3 text-sm text-slate-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {service}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Bottom animation */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-700 ease-out group-hover:w-full" />

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PAGE 3 — ABOUT XELTA
          NORMAL SCROLL
      ====================================================== */}

      <section
        id="about"
        data-index="2"
        className="xelta-page relative min-h-[100svh] overflow-hidden bg-white py-32 text-slate-950"
      >

        {/* Subtle background */}

        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[160px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-slate-200/50 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* Label */}

          <div
            className={`mb-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 2
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >

            <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-600">
              ABOUT XELTA
            </p>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl">
              One company.
              <br />
              <span className="text-slate-400">
                Meaningful impact.
              </span>
            </h2>

          </div>

          {/* About */}

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold tracking-[0.25em] text-slate-400">
                OUR STORY
              </p>

              <div className="mt-6 h-px w-24 bg-cyan-500" />

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-700 md:text-2xl">
                PT XELTA is a diversified company built around a commitment
                to developing people, building infrastructure, and creating
                meaningful value for society.
              </p>

              <p className="mt-8 text-base leading-8 text-slate-500">
                Through XELTA Akademi Unggul, the company focuses on education,
                professional training, and human resource development.
                Through XELTA Adikarya Utama, XELTA delivers civil
                construction, infrastructure development, engineering, and
                project management solutions.
              </p>

              <p className="mt-8 text-base leading-8 text-slate-500">
                Both areas operate with the same commitment to professional
                standards, innovation, quality, and collaboration.
              </p>

            </div>

          </div>

          {/* Values */}

          <div className="mt-32 border-t border-slate-200 pt-16">

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

              {values.map((value) => (
                <div key={value.number}>

                  <span className="font-mono text-sm text-cyan-600">
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
          FOOTER
          PAGE 3 TIDAK DI-LOCK
      ====================================================== */}

      <footer className="relative border-t border-white/10 bg-slate-950 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-3xl font-black italic tracking-wider">
                <span className="text-white">x</span>
                <span className="text-red-600">elta</span>
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                Building tomorrow and creating meaningful impact through
                people, infrastructure, and collaboration.
              </p>

            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">

              <Link
                href="/akademi"
                className="transition-colors hover:text-cyan-400"
              >
                Akademi Unggul
              </Link>

              <Link
                href="/adikarya"
                className="transition-colors hover:text-cyan-400"
              >
                Adikarya Utama
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-cyan-400"
              >
                Contact
              </Link>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6">

            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} PT XELTA. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}