"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <main className="xelta-scroll h-screen overflow-y-scroll bg-slate-950 text-white">

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex h-screen min-h-screen snap-start items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background logo besar */}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            className="w-[800px] max-w-none opacity-[0.025] grayscale"
          />
        </div>

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 xelta-grid opacity-30" />

        {/* Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Main Logo */}

        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="xelta-floating xelta-logo-glow">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="h-auto w-[240px] object-contain sm:w-[300px] md:w-[380px]"
            />
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.4em] text-cyan-400">
            PT XELTA
          </p>

          <p className="mt-4 text-sm tracking-[0.2em] text-slate-500">
            BUILDING TOMORROW · CREATING IMPACT
          </p>

          {/* Tombol ke Page 2 */}

          <Link
            href="#divisions"
            className="group mt-12 inline-flex items-center gap-5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            <span>Explore XELTA</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:border-slate-950">
              →
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.35em] text-slate-600">
            SCROLL
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>


      {/* =====================================================
          PAGE 2 — TWO PILARS
      ====================================================== */}

      <section
        id="divisions"
        data-index="1"
        className="xelta-section relative flex h-screen min-h-screen snap-start items-center overflow-hidden bg-slate-950"
      >
        {/* Background */}

        <div className="pointer-events-none absolute inset-0 xelta-grid opacity-30" />

        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />


        {/* =================================================
            ANIMASI LOGO
            1 LOGO → 2 LOGO
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-0">

          {/* LOGO AWAL — 1 */}

          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-out ${
              activeSection === 1
                ? "scale-0 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[100px]" />

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                className="relative w-[260px] opacity-20 grayscale"
              />
            </div>
          </div>


          {/* LOGO KIRI */}

          <div
            className={`absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-out ${
              activeSection === 1
                ? "translate-x-0 scale-100 opacity-20"
                : "scale-0 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[100px]" />

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                className="w-[300px] grayscale"
              />
            </div>
          </div>


          {/* LOGO KANAN */}

          <div
            className={`absolute right-[25%] top-1/2 -translate-y-1/2 translate-x-1/2 transition-all duration-[1200ms] ease-out ${
              activeSection === 1
                ? "translate-x-0 scale-100 opacity-20"
                : "scale-0 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[100px]" />

              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt=""
                className="w-[300px] grayscale"
              />
            </div>
          </div>

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Heading */}

          <div
            className={`mb-14 text-center transition-all duration-1000 ${
              activeSection === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Choose your path.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Explore the two core divisions of XELTA.
            </p>
          </div>


          {/* TWO PILARS */}

          <div className="grid gap-6 lg:grid-cols-2">

            {/* AKADEMI */}

            <Link
              href="/akademi"
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/80 md:p-10 ${
                activeSection === 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >

              {/* Logo background */}

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/XELTA%20Logo.jpg.jpeg"
                  alt=""
                  className="w-[330px] max-w-none opacity-[0.035] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]"
                />
              </div>

              {/* Number */}

              <span className="absolute right-7 top-3 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.03]">
                01
              </span>

              <div className="relative z-10">

                <div className="mb-12 flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    EDUCATION & HUMAN RESOURCE DEVELOPMENT
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    ↗
                  </span>

                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  XELTA Akademi Unggul
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                  Developing human potential through education,
                  professional training, and comprehensive human resource
                  development.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">

                  <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-500">
                    EXPLORE
                  </p>

                  <p className="text-sm text-slate-400">
                    Professional Training · HR Development · Certification
                  </p>

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

            </Link>


            {/* ADIKARYA */}

            <Link
              href="/adikarya"
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur-md transition-all duration-700 delay-100 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/80 md:p-10 ${
                activeSection === 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >

              {/* Logo background */}

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/XELTA%20Logo.jpg.jpeg"
                  alt=""
                  className="w-[330px] max-w-none opacity-[0.035] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.07]"
                />
              </div>

              {/* Number */}

              <span className="absolute right-7 top-3 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.03]">
                02
              </span>

              <div className="relative z-10">

                <div className="mb-12 flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    CIVIL CONSTRUCTION & INFRASTRUCTURE
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    ↗
                  </span>

                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  XELTA Adikarya Utama
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                  Delivering professional civil construction and
                  infrastructure solutions with a strong focus on quality,
                  planning, and reliability.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">

                  <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-500">
                    EXPLORE
                  </p>

                  <p className="text-sm text-slate-400">
                    Construction · Infrastructure · Engineering
                  </p>

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

            </Link>

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

        {/* Background logo */}

        <div className="pointer-events-none absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-[0.035]">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            className="w-[700px] grayscale"
          />
        </div>

        {/* Cyan glow */}

        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />


        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Logo */}

          <div
            className={`mb-12 flex justify-center transition-all duration-1000 ${
              activeSection === 2
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-90 opacity-0"
            }`}
          >
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[120px] opacity-70 grayscale md:w-[150px]"
            />
          </div>


          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT */}

            <div
              className={`transition-all duration-1000 delay-200 ${
                activeSection === 2
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
                One company.
                <br />

                <span className="text-slate-400">
                  Meaningful impact.
                </span>
              </h2>

            </div>


            {/* RIGHT */}

            <div
              className={`transition-all duration-1000 delay-300 ${
                activeSection === 2
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >

              <p className="text-xl leading-9 text-slate-700">
                PT XELTA is a diversified company built around expertise,
                innovation, and a shared commitment to creating meaningful
                value.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                XELTA continues to develop through professional capabilities,
                strong collaboration, and responsible solutions that create
                lasting impact for people, organizations, and communities.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                With a focus on excellence and sustainable growth, XELTA
                strives to build a future where knowledge, capability, and
                infrastructure can contribute to meaningful progress.
              </p>

            </div>

          </div>


          {/* Bottom indicator */}

          <div className="mt-16 flex items-center gap-4">

            <div className="h-px w-16 bg-slate-300" />

            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400">
              XELTA INDONESIA
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}