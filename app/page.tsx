"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const logo = "/XELTA%20Logo.jpg.jpeg";

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
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  /*
   * ============================================================
   * SECTION TRACKING
   * ============================================================
   */

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".xelta-section"
    );

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

  /*
   * ============================================================
   * LOCKED SCROLL
   * 1 WHEEL = 1 PAGE
   * ============================================================
   */

  useEffect(() => {
    const goToSection = (direction: number) => {
      if (isScrolling.current) return;

      const nextSection = Math.max(
        0,
        Math.min(2, activeSection + direction)
      );

      if (nextSection === activeSection) return;

      const sections = document.querySelectorAll<HTMLElement>(
        ".xelta-section"
      );

      const target = sections[nextSection];

      if (!target) return;

      isScrolling.current = true;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (Math.abs(event.deltaY) < 10) return;

      if (event.deltaY > 0) {
        goToSection(1);
      } else {
        goToSection(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        event.preventDefault();
        goToSection(1);
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();
        goToSection(-1);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;

      const difference = touchStartY.current - touchEndY;

      if (Math.abs(difference) < 50) return;

      if (difference > 0) {
        goToSection(1);
      } else {
        goToSection(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("keydown", handleKeyDown);

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection]);

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <main className="xelta-scroll">

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white"
      >

        {/* BIG BACKGROUND LOGO */}

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="xelta-background-logo"
          />
        </div>

        {/* GRID */}

        <div className="absolute inset-0 xelta-grid opacity-40" />

        {/* GLOW */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* MAIN LOGO */}

        <div
          className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${
            activeSection === 0
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-20 scale-75 opacity-0"
          }`}
        >

          <div className="xelta-logo-glow xelta-floating">
            <img
              src={logo}
              alt="XELTA"
              className="w-[230px] object-contain sm:w-[300px] md:w-[380px]"
            />
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.4em] text-cyan-400">
            PT XELTA
          </p>

          <h1 className="mt-5 text-center text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Building Tomorrow.
          </h1>

          <p className="mt-4 text-center text-sm tracking-wide text-slate-500 md:text-base">
            Creating Meaningful Impact.
          </p>

          <button
            onClick={() => {
              document
                .querySelectorAll<HTMLElement>(".xelta-section")[1]
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="group mt-12 flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            <span>Explore XELTA</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:translate-y-1 group-hover:border-slate-950">
              ↓
            </span>
          </button>

        </div>

        {/* SCROLL */}

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.35em] text-slate-500">
            SCROLL
          </span>

          <div className="xelta-scroll-line" />
        </div>

      </section>


      {/* =====================================================
          PAGE 2 — CHOOSE DIVISION
      ====================================================== */}

      <section
        data-index="1"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-20 text-white"
      >

        {/* BACKGROUND */}

        <div className="absolute inset-0 xelta-grid opacity-30" />

        <div className="absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />


        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* =================================================
              LOGO ANIMATION
          ================================================= */}

          <div className="relative mb-14 flex h-[170px] items-center justify-center">

            {/* CENTRAL LOGO */}

            <div
              className={`absolute transition-all duration-1000 ease-out ${
                activeSection === 1
                  ? "scale-0 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            >
              <div className="xelta-logo-glow">
                <img
                  src={logo}
                  alt="XELTA"
                  className="w-[180px] object-contain md:w-[230px]"
                />
              </div>
            </div>


            {/* LEFT LOGO */}

            <div
              className={`absolute transition-all duration-1000 ease-out ${
                activeSection === 1
                  ? "-translate-x-[125px] scale-100 opacity-100 md:-translate-x-[190px]"
                  : "translate-x-0 scale-50 opacity-0"
              }`}
            >
              <img
                src={logo}
                alt="XELTA Akademi"
                className="w-[130px] object-contain md:w-[180px]"
              />
            </div>


            {/* DIVIDER */}

            <div
              className={`absolute h-20 w-px bg-white/20 transition-all duration-1000 ${
                activeSection === 1
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0"
              }`}
            />


            {/* RIGHT LOGO */}

            <div
              className={`absolute transition-all duration-1000 ease-out ${
                activeSection === 1
                  ? "translate-x-[125px] scale-100 opacity-100 md:translate-x-[190px]"
                  : "translate-x-0 scale-50 opacity-0"
              }`}
            >
              <img
                src={logo}
                alt="XELTA Adikarya"
                className="w-[130px] object-contain md:w-[180px]"
              />
            </div>

          </div>


          {/* TITLE */}

          <div className="mb-12 text-center">

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-cyan-400">
              CHOOSE YOUR PATH
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Two pillars.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Explore the two specialized divisions operating within
              the XELTA ecosystem.
            </p>

          </div>


          {/* =================================================
              DIVISION CARDS
          ================================================= */}

          <div className="grid gap-6 md:grid-cols-2">

            {divisions.map((division, index) => (
              <Link
                key={division.number}
                href={division.href}
                className={`xelta-division-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-700 md:p-10 ${
                  activeSection === 1
                    ? index === 0
                      ? "translate-x-0 opacity-100"
                      : "translate-x-0 opacity-100"
                    : index === 0
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }`}
              >

                {/* BACKGROUND LOGO */}

                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="absolute -right-10 -top-4 w-[280px] rotate-[-8deg] opacity-[0.025] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.06]"
                />


                {/* BIG NUMBER */}

                <span className="absolute right-7 top-1 text-[100px] font-bold tracking-[-0.08em] text-white/[0.025]">
                  {division.number}
                </span>


                <div className="relative z-10">

                  <div className="mb-10 flex items-center justify-between">

                    <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-400">
                      {division.subtitle}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      ↗
                    </span>

                  </div>


                  <h3 className="max-w-md text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {division.title}
                  </h3>


                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                    {division.description}
                  </p>


                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold tracking-[0.15em] text-slate-500 transition-colors group-hover:text-cyan-400">
                    EXPLORE DIVISION
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
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
        data-index="2"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-white py-20 text-slate-950"
      >

        {/* BACKGROUND LOGO */}

        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="w-[600px] opacity-[0.035] grayscale"
          />
        </div>


        {/* GLOW */}

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />


        <div
          className={`relative z-10 mx-auto w-full max-w-7xl px-6 transition-all duration-1000 lg:px-8 ${
            activeSection === 2
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >

          {/* LOGO */}

          <div className="mb-14 flex justify-center">

            <div className="xelta-logo-glow">

              <img
                src={logo}
                alt="XELTA"
                className="w-[140px] object-contain grayscale opacity-70 md:w-[180px]"
              />

            </div>

          </div>


          {/* ABOUT */}

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                One company.
                <br />

                <span className="text-slate-400">
                  Meaningful impact.
                </span>
              </h2>

            </div>


            <div>

              <p className="text-xl leading-9 text-slate-700">
                PT XELTA is a diversified company built around
                expertise, professionalism, innovation, and a
                commitment to creating meaningful value.
              </p>


              <p className="mt-7 text-base leading-8 text-slate-500">
                XELTA continues to develop its capabilities through
                education, human resource development, construction,
                infrastructure, and professional services.
              </p>


              <p className="mt-7 text-base leading-8 text-slate-500">
                With a focus on quality, collaboration, and
                responsible growth, XELTA strives to create
                sustainable impact for people, organizations,
                and communities.
              </p>


              <div className="mt-10 flex items-center gap-4">

                <div className="h-px w-12 bg-cyan-500" />

                <span className="text-xs font-bold tracking-[0.25em] text-slate-500">
                  XELTA INDONESIA
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* PAGE INDICATOR */}

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">

          <span className="h-1.5 w-8 rounded-full bg-slate-200" />

          <span className="h-1.5 w-8 rounded-full bg-slate-200" />

          <span className="h-1.5 w-8 rounded-full bg-cyan-500" />

        </div>

      </section>

    </main>
  );
}