"use client";

import Link from "next/link";
import { useEffect } from "react";

const panels = [
  ["01", "CIVIL CONSTRUCTION", "Infrastructure built to endure", "We combine technical precision, technology, and on-site delivery to create durable outcomes."],
  ["02", "XELTA ACADEMY", "Learn from the real world", "Practical programs that prepare professionals to lead meaningful change in their industries."],
  ["03", "SUSTAINABLE IMPACT", "Building a better future", "Every decision is made with responsibility toward people and the environment."],
];
const programs = ["Construction Project Management", "BIM Modeling", "Geotechnical & Hydraulic Engineering"];

export default function Home() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".home-scroll");
    const hero = document.querySelector<HTMLElement>(".home-hero");
    const cards = document.querySelectorAll<HTMLElement>(".reveal-card");
    const items = document.querySelectorAll<HTMLElement>(".home-panel");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { root, threshold: 0.15 });
    cards.forEach((card, index) => { card.style.setProperty("--reveal-delay", `${index * 120}ms`); observer.observe(card); });
    let frame = 0;
    let activePanel = -1;
    const onScroll = () => { if (frame) return; frame = requestAnimationFrame(() => { frame = 0; if (!root) return; const progress = Math.min(1, (root.scrollTop || window.scrollY) / Math.max(1, innerHeight)); hero?.style.setProperty("--hero-progress", progress.toFixed(3)); items.forEach((item, index) => { const rect = item.getBoundingClientRect(); if (rect.top < innerHeight * 0.58 && rect.bottom > innerHeight * 0.35 && activePanel !== index) { activePanel = index; items.forEach((candidate, candidateIndex) => candidate.classList.toggle("panel-active", index === candidateIndex)); document.querySelector<HTMLElement>(".home-visual-card")?.setAttribute("data-panel", String(index)); } }); }); };
    root?.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); root?.removeEventListener("scroll", onScroll); window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <main className="home-scroll bg-slate-950 text-white">
    <section className="home-hero relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="home-hero-bg" />
      <div className="home-hero-grid" />
      <div className="home-hero-content relative z-10 max-w-5xl px-6 text-center">
        <img className="home-main-logo" src="/xelta-logo.svg" alt="XELTA" />
        <p className="mb-6 text-xs font-bold uppercase tracking-[.35em] text-amber-400">Building future innovators</p>
        <h1 className="text-5xl font-black leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-9xl">Build Boldly<br /><span className="text-amber-400">Shape What Matters</span></h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">Bringing civil construction and professional learning together to build a stronger future.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/akademi" className="home-button inline-flex">XELTA Academy <span>↗</span></Link>
          <Link href="/adikarya" className="home-button home-button-secondary inline-flex">XELTA Adikarya <span>↗</span></Link>
        </div>
      </div>
      <div className="home-scroll-hint">Scroll to discover <span /></div>
    </section>
    <section id="home-showcase" className="home-showcase bg-slate-900"><div className="mx-auto flex max-w-7xl flex-col md:flex-row"><div className="home-sticky-visual w-full md:w-1/2"><div className="home-visual-card" data-panel="0"><div className="home-visual-glow" /><img src="/xelta-logo.svg" alt="XELTA" /></div></div><div className="w-full px-6 sm:w-1/2 sm:px-16">{panels.map(([number, eyebrow, title, copy]) => <article className="home-panel reveal-card" key={title}><span className="text-sm font-bold text-amber-400">{number} / {eyebrow}</span><h2 className="mt-4 text-3xl font-bold sm:text-5xl">{title}</h2><p className="mt-6 max-w-lg leading-8 text-slate-400">{copy}</p></article>)}</div></div></section>
    <section className="bg-slate-950 py-28"><div className="mx-auto max-w-6xl px-6"><div className="reveal-card mb-16 text-center"><p className="text-sm font-bold uppercase tracking-wider text-amber-400">Featured Programs</p><h2 className="mt-3 text-4xl font-bold sm:text-6xl">Curricula designed for progress.</h2></div><div className="grid gap-6 md:grid-cols-3">{programs.map((program, index) => <article className="home-capability-card reveal-card rounded-2xl border border-slate-800 bg-slate-900 p-8" key={program}><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-xl font-bold text-amber-400">0{index + 1}</div><h3 className="text-xl font-bold">{program}</h3><p className="mt-4 text-sm leading-7 text-slate-400">Practical, measurable learning that stays relevant to today&apos;s industry challenges.</p></article>)}</div></div></section>
    <section className="border-t border-slate-800 bg-amber-400 px-6 py-32 text-slate-950"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.3em] text-amber-950">Start a new chapter</p><h2 className="mt-6 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl">Let&apos;s build<br />what&apos;s next.</h2><Link href="/contact" className="home-dark-button mt-12 inline-flex">Start a conversation ↗</Link></div></section>
  </main>;
}
