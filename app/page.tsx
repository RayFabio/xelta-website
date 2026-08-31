"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
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
        threshold: 0.55,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="xelta-scroll min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* =====================================================
          PAGE 1 — OPENING
      ====================================================== */}

      <section
        data-index="0"
        className="xelta-section relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background */}
        <div className="absolute inset-0 xelta-grid opacity-40" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Logo */}
        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="xelta-floating xelta-logo-glow mb-12">
            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="h-auto w-[220px] object-contain sm:w-[280px] md:w-[360px]"
            />
          </div>

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

          {/* BUTTON */}
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
          <span className="text-[9px] tracking-[0.35em] text-slate-500">
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
  className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-24"
>
  {/* Background */}
  <div className="absolute inset-0 xelta-grid opacity-30" />

  <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

  <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

    {/* =================================================
        LOGO TRANSFORMATION
    ================================================= */}

    <div className="mb-16 flex justify-center">

      <div className="relative flex h-[150px] w-[350px] items-center justify-center">

        {/* LOGO AWAL */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            activeSection === 1
              ? "scale-50 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA"
              className="relative w-[180px] object-contain md:w-[220px]"
            />
          </div>
        </div>

        {/* DUA LOGO */}
        <div
          className={`flex items-center gap-8 transition-all duration-1000 ease-in-out ${
            activeSection === 1
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }`}
        >

          {/* LOGO KIRI */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              activeSection === 1
                ? "translate-x-0"
                : "translate-x-20"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA Akademi Unggul"
              className="relative w-[90px] object-contain md:w-[120px]"
            />
          </div>

          {/* GARIS PEMISAH */}
          <div
            className={`h-16 w-px bg-white/20 transition-all duration-700 ${
              activeSection === 1
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0"
            }`}
          />

          {/* LOGO KANAN */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              activeSection === 1
                ? "translate-x-0"
                : "-translate-x-20"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

            <img
              src="/XELTA%20Logo.jpg.jpeg"
              alt="XELTA Adikarya Utama"
              className="relative w-[90px] object-contain md:w-[120px]"
            />
          </div>

        </div>

      </div>

    </div>

    {/* =================================================
        HEADING
    ================================================= */}

    <div className="mb-14 text-center">

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
        TWO DIVISIONS
    ================================================= */}

    <div className="grid gap-6 lg:grid-cols-2">

      {divisions.map((division) => (
        <Link
          key={division.number}
          href={division.href}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-2xl md:p-10"
        >

          {/* Number */}
          <span className="absolute right-7 top-3 select-none text-8xl font-bold tracking-[-0.08em] text-white/[0.03] transition-colors duration-500 group-hover:text-cyan-400/[0.06]">
            {division.number}
          </span>

          <div className="relative z-10">

            {/* Label + Arrow */}
            <div className="mb-12 flex items-center justify-between">

              <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                {division.label}
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                ↗
              </span>

            </div>

            {/* Title */}
            <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              {division.title}
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              {division.description}
            </p>

            {/* Services */}
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
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

        </Link>
      ))}

    </div>

  </div>
</section>

      {/* =====================================================
          PAGE 3 — ABOUT
      ====================================================== */}

      <section
        id="about"
        data-index="2"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-white py-24 text-slate-950"
      >

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Logo */}
          <div className="mb-16 flex justify-center">

            <div
              className={`transition-all duration-1000 ${
                activeSection === 2
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-90 opacity-0"
              }`}
            >
              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt="XELTA"
                className="h-auto w-[120px] object-contain opacity-80 grayscale md:w-[150px]"
              />
            </div>

          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

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
                href="#values"
                className="mt-10 inline-flex items-center gap-3 border-b border-slate-950 pb-2 text-sm font-semibold text-slate-950 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Discover our values
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PAGE 4 — VALUES
      ====================================================== */}

      <section
        id="values"
        data-index="3"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-24 text-white"
      >

        <div className="absolute inset-0 xelta-grid opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
                OUR VALUES
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
                What drives
                <br />

                <span className="text-slate-500">
                  XELTA forward.
                </span>
              </h2>

            </div>

            <div className="grid sm:grid-cols-2">

              {values.map((value, index) => (
                <div
                  key={value.number}
                  className={`border-white/10 py-8 sm:px-8 ${
                    index < 2 ? "border-b" : ""
                  } ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  }`}
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
          PAGE 5 — CTA
      ====================================================== */}

      <section
        data-index="4"
        className="xelta-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-24 text-white"
      >

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
                LET&apos;S CONNECT
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
                Let&apos;s build
                <br />

                <span className="text-slate-500">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400">
                XELTA continues to grow by strengthening its capabilities,
                expanding collaboration, and delivering solutions that create
                meaningful value for people, organizations, and communities.
              </p>

            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-cyan-400"
            >

              <span>
                Start a conversation
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}