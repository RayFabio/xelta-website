"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const divisions = [
  {
    number: "01",
    title: "XELTA Akademi Unggul",
    subtitle: "EDUCATION & HUMAN RESOURCE DEVELOPMENT",
    href: "/akademi",
  },
  {
    number: "02",
    title: "XELTA Adikarya Utama",
    subtitle: "CIVIL CONSTRUCTION & INFRASTRUCTURE",
    href: "/adikarya",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".xelta-section")
    );

    /*
     * PAGE 1 & PAGE 2
     * Scroll dikunci satu section sekali.
     *
     * PAGE 3
     * Tidak dikunci agar user bisa terus scroll
     * sampai footer.
     */
    const handleWheel = (event: WheelEvent) => {
      const current = activeSection;

      // Kalau sudah page 3, biarkan browser scroll normal.
      if (current >= 2) {
        return;
      }

      event.preventDefault();

      if (isScrolling.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      let next = current + direction;

      if (next < 0) next = 0;
      if (next > 2) next = 2;

      if (next === current) return;

      isScrolling.current = true;

      setActiveSection(next);

      sections[next]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1100);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const current = activeSection;

      // Page 3 bebas scroll
      if (current >= 2) return;

      if (isScrolling.current) return;

      const touchEndY = event.changedTouches[0].clientY;
      const difference = touchStartY.current - touchEndY;

      // Abaikan swipe kecil
      if (Math.abs(difference) < 50) return;

      const direction = difference > 0 ? 1 : -1;

      let next = current + direction;

      if (next < 0) next = 0;
      if (next > 2) next = 2;

      if (next === current) return;

      isScrolling.current = true;

      setActiveSection(next);

      sections[next]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1100);
    };

    /*
     * Observer hanya digunakan untuk mengetahui
     * section mana yang sedang terlihat.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          if (!isScrolling.current || index >= 2) {
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      observer.disconnect();

      window.removeEventListener("wheel", handleWheel);

      window.removeEventListener("touchstart", handleTouchStart);

      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection]);

  return (
    <main className="xelta-scroll bg-slate-950 text-white">

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Grid */}
        <div className="absolute inset-0 xelta-grid opacity-40" />

        {/* Background XELTA */}
        <div className="xelta-background-logo absolute inset-0 flex items-center justify-center">
          <img
            src="/XELTA%20Logo.jpg.jpeg"
            alt=""
            aria-hidden="true"
            className="xelta-bg-logo-image"
          />
        </div>

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Main Logo */}
        <div
          className={`relative z-10 flex flex-col items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeSection === 0
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-10 scale-90 opacity-0"
          }`}
        >
          <div className="xelta-floating xelta-logo-glow">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="h-auto w-[260px] object-contain sm:w-[360px] md:w-[480px]"
            />
          </div>

          <p className="mt-10 text-[10px] font-semibold tracking-[0.5em] text-cyan-400 sm:text-xs">
            PT XELTA
          </p>

          <p className="mt-4 text-center text-xs tracking-[0.25em] text-slate-500">
            BUILDING TOMORROW · CREATING IMPACT
          </p>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[9px] tracking-[0.45em] text-slate-500">
            SCROLL
          </span>

          <div className="mt-3 h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          PAGE 2 — TWO PILLARS
      ====================================================== */}

      <section
        data-index="1"
        className="xelta-section relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Grid */}
        <div className="absolute inset-0 xelta-grid opacity-30" />

        {/* Glow kiri */}
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Glow kanan */}
        <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

        {/* =================================================
            LOGO BESAR DI BELAKANG
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* LOGO BESAR 1 */}
          <div
            className={`absolute transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 1
                ? "scale-[1.35] opacity-[0.08]"
                : "scale-100 opacity-0"
            }`}
          >
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt=""
              aria-hidden="true"
              className="xelta-big-logo"
            />
          </div>

          {/* LOGO 2 */}
          <div
            className={`absolute flex items-center gap-[8vw] transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 1
                ? "scale-100 opacity-[0.055]"
                : "scale-50 opacity-0"
            }`}
          >
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt=""
              aria-hidden="true"
              className="xelta-big-logo-small"
            />

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt=""
              aria-hidden="true"
              className="xelta-big-logo-small"
            />
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className={`relative z-10 mx-auto w-full max-w-7xl px-6 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-8 ${
            activeSection === 1
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-5 text-[10px] font-bold tracking-[0.4em] text-cyan-400 sm:text-xs">
              OUR BUSINESS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Choose your path.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Explore the two specialized divisions operating within the
              XELTA ecosystem.
            </p>
          </div>

          {/* =================================================
              TWO PILARS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2">
            {divisions.map((division) => (
              <Link
                key={division.number}
                href={division.href}
                className="xelta-pillar group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_30px_100px_rgba(6,182,212,0.12)] md:p-10"
              >
                {/* Number */}
                <span className="absolute -right-2 -top-8 select-none text-[130px] font-black tracking-[-0.1em] text-white/[0.025] transition-all duration-700 group-hover:text-cyan-400/[0.06]">
                  {division.number}
                </span>

                {/* Logo kecil */}
                <div className="relative z-10 mb-10">
                  <div className="absolute -inset-8 rounded-full bg-cyan-400/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                  <img
                    src="/XELTA%20Logo.jpg.jpeg"
                    alt="XELTA"
                    className="relative h-auto w-[130px] object-contain opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p className="text-[9px] font-bold tracking-[0.3em] text-cyan-400">
                    {division.subtitle}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {division.title}
                  </h3>

                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
                    Explore division

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:translate-x-2 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
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

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[9px] tracking-[0.45em] text-slate-500">
            SCROLL
          </span>

          <div className="mt-3 h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          PAGE 3 — ABOUT XELTA
          TIDAK DI-LOCK
      ====================================================== */}

      <section
        id="about"
        data-index="2"
        className="relative min-h-[100svh] overflow-hidden bg-white py-28 text-slate-950"
      >
        {/* Background */}
        <div className="absolute right-[-200px] top-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.35]">
          <div className="h-full w-full bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Logo */}
          <div
            className={`mb-20 flex justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeSection === 2
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-90 opacity-0"
            }`}
          >
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="w-[150px] object-contain opacity-80 grayscale sm:w-[180px]"
            />
          </div>

          {/* About */}
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.35em] text-cyan-600 sm:text-xs">
                ABOUT XELTA
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
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

              <p className="mt-8 text-base leading-8 text-slate-500">
                Through XELTA Akademi Unggul, we focus on education,
                professional training, and human resource development.
                Meanwhile, XELTA Adikarya Utama focuses on civil construction
                and infrastructure development.
              </p>

              <div className="mt-12 h-px w-full bg-slate-200" />

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-600">
                    AKADEMI UNGGUL
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Education, professional training, and human resource
                    development.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-600">
                    ADIKARYA UTAMA
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Civil construction, infrastructure development, and
                    engineering solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer agar page 3 terasa sebagai section */}
          <div className="mt-32 border-t border-slate-200 pt-12">
            <p className="text-center text-[10px] tracking-[0.4em] text-slate-400">
              XELTA · BUILDING TOMORROW · CREATING MEANINGFUL IMPACT
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}