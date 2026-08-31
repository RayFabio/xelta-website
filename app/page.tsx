"use client";

import Link from "next/link";
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
    <main className="xelta-scroll h-screen overflow-y-auto bg-slate-950 text-white">

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex h-screen min-h-screen snap-start items-center justify-center overflow-hidden bg-slate-950"
      >

        {/* BACKGROUND LOGO */}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="w-[700px] max-w-[90vw] opacity-[0.025] blur-[1px] grayscale"
          />
        </div>

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 xelta-grid opacity-30" />

        {/* GLOW */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* MAIN LOGO */}

        <div
          className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${
            activeSection === 0
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-10 scale-90 opacity-0"
          }`}
        >

          <div className="xelta-floating xelta-logo-glow">

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[230px] object-contain sm:w-[300px] md:w-[380px]"
            />

          </div>

          <p className="mt-10 text-xs font-bold tracking-[0.4em] text-cyan-400">
            PT XELTA
          </p>

          <p className="mt-4 text-sm tracking-[0.2em] text-slate-500">
            BUILDING TOMORROW
          </p>

        </div>

        {/* SCROLL */}

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
        className="xelta-section relative flex h-screen min-h-screen snap-start items-center overflow-hidden bg-slate-950"
      >

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 xelta-grid opacity-25" />


        {/* =================================================
            LOGO TRANSFORMATION BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">

          {/* SINGLE LOGO */}

          <div
            className={`absolute transition-all duration-1000 ease-in-out ${
              activeSection === 1
                ? "scale-75 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[100px]" />

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                aria-hidden="true"
                className="w-[350px] object-contain opacity-[0.12] grayscale"
              />

            </div>

          </div>


          {/* TWO LOGOS */}

          <div
            className={`flex items-center gap-[180px] transition-all duration-1000 ease-in-out ${
              activeSection === 1
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }`}
          >

            {/* LEFT LOGO */}

            <div
              className={`transition-all duration-1000 ease-out ${
                activeSection === 1
                  ? "translate-x-0"
                  : "translate-x-24"
              }`}
            >

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                aria-hidden="true"
                className="w-[240px] object-contain opacity-[0.08] grayscale"
              />

            </div>


            {/* RIGHT LOGO */}

            <div
              className={`transition-all duration-1000 ease-out ${
                activeSection === 1
                  ? "translate-x-0"
                  : "-translate-x-24"
              }`}
            >

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                aria-hidden="true"
                className="w-[240px] object-contain opacity-[0.08] grayscale"
              />

            </div>

          </div>

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* HEADER */}

          <div className="mb-10 text-center">

            <p className="mb-4 text-xs font-bold tracking-[0.35em] text-cyan-400">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Two pillars.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Two specialized business divisions operating within the
              XELTA ecosystem.
            </p>

          </div>


          {/* TWO PILARS */}

          <div className="grid gap-6 lg:grid-cols-2">

            {divisions.map((division) => (

              <Link
                key={division.number}
                href={division.href}
                className="group relative min-h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 md:p-10"
              >

                {/* BLOCK BACKGROUND LOGO */}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

                  <img
                    src="/XELTA%20Logo.jpg.jpeg"
                    alt=""
                    aria-hidden="true"
                    className="w-[400px] object-contain opacity-[0.035] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]"
                  />

                </div>


                {/* NUMBER */}

                <span className="absolute right-7 top-0 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.025]">
                  {division.number}
                </span>


                {/* CONTENT */}

                <div className="relative z-10 flex h-full flex-col">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                      {division.subtitle}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      ↗
                    </span>

                  </div>


                  <div className="mt-auto">

                    <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                      {division.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                      {division.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-slate-500 transition-colors group-hover:text-cyan-400">
                      EXPLORE DIVISION
                      <span className="text-lg">
                        →
                      </span>
                    </div>

                  </div>

                </div>


                {/* BOTTOM LINE */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

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
        className="xelta-section relative flex h-screen min-h-screen snap-start items-center overflow-hidden bg-white text-slate-950"
      >

        {/* BACKGROUND LOGO */}

        <div className="pointer-events-none absolute right-[-100px] top-1/2 -translate-y-1/2">

          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="w-[650px] opacity-[0.035] grayscale"
          />

        </div>


        {/* CYAN GLOW */}

        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />


        {/* CONTENT */}

        <div
          className={`relative z-10 mx-auto w-full max-w-7xl px-6 transition-all duration-1000 lg:px-8 ${
            activeSection === 2
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >

          {/* SMALL LOGO */}

          <div className="mb-10">

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[110px] object-contain opacity-70 grayscale md:w-[140px]"
            />

          </div>


          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT */}

            <div>

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


            {/* RIGHT */}

            <div>

              <p className="text-xl leading-9 text-slate-700">

                PT XELTA is a diversified company built around two core
                business divisions with distinct areas of expertise and
                a shared commitment to creating meaningful value.

              </p>

              <p className="mt-7 text-base leading-8 text-slate-500">

                Through XELTA Akademi Unggul, we focus on education,
                professional training, and human resource development.
                Meanwhile, XELTA Adikarya Utama focuses on civil
                construction and infrastructure development.

              </p>


              {/* DIVISIONS */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <Link
                  href="/akademi"
                  className="group rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-50"
                >

                  <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-600">
                    01
                  </p>

                  <p className="mt-3 font-semibold">
                    Akademi Unggul
                  </p>

                  <span className="mt-4 block text-sm text-slate-400 transition-colors group-hover:text-cyan-600">
                    Explore →
                  </span>

                </Link>


                <Link
                  href="/adikarya"
                  className="group rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-50"
                >

                  <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-600">
                    02
                  </p>

                  <p className="mt-3 font-semibold">
                    Adikarya Utama
                  </p>

                  <span className="mt-4 block text-sm text-slate-400 transition-colors group-hover:text-cyan-600">
                    Explore →
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}