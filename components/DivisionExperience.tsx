"use client";

import Link from "next/link";
import { useEffect } from "react";

type Division = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  panels: [string, string, string][];
  cards: [string, string][];
  lightTitle: string;
  lightCopy: string;
};

export default function DivisionExperience({ division }: { division: Division }) {
  const isAcademy = division.eyebrow.includes("ACADEMY");
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".division-scroll");
    const hero = document.querySelector<HTMLElement>(".division-hero");
    const reveals = document.querySelectorAll<HTMLElement>(".division-reveal");
    const panels = document.querySelectorAll<HTMLElement>(".division-panel");
    const visual = document.querySelector<HTMLElement>(".division-visual");
    const images = document.querySelectorAll<HTMLElement>(".division-image");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { root, threshold: .15 });
    reveals.forEach((el, i) => { el.style.setProperty("--reveal-delay", `${Math.min(i * 100, 360)}ms`); observer.observe(el); });
    let frame = 0;
    const changeVisual = (index: number) => { images.forEach((image, i) => image.classList.toggle("active", i === index)); const number = visual?.querySelector<HTMLElement>(".division-image-number span"); if (number) number.textContent = String(index + 1).padStart(2, "0"); };
    const onScroll = () => { if (frame) return; frame = requestAnimationFrame(() => { frame = 0; if (!root) return; const scrollTop = root.scrollTop || window.scrollY; const progress = Math.min(1, scrollTop / Math.max(1, innerHeight)); hero?.style.setProperty("--hero-progress", progress.toFixed(3)); root.style.setProperty("--academy-logo-progress", progress.toFixed(3)); panels.forEach((panel, i) => { const rect = panel.getBoundingClientRect(); if (rect.top < innerHeight * .58 && rect.bottom > innerHeight * .35) { panels.forEach((el, j) => el.classList.toggle("panel-active", i === j)); visual?.setAttribute("data-panel", String(i)); changeVisual(i); } }); }); };
    root?.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); root?.removeEventListener("scroll", onScroll); window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <main className={`division-scroll division-page bg-slate-950 text-white ${isAcademy ? "division-academy" : "division-adikarya"}`}>
    <section className={`division-hero relative flex min-h-screen items-center justify-center overflow-hidden ${isAcademy ? "division-hero--academy" : ""}`}>{!isAcademy && <><div className="division-hero-bg" /><div className="division-grid" /></>}<div className="division-hero-content relative z-10 max-w-5xl px-6 text-center division-reveal">{isAcademy && <img className="division-hero-logo" src="/XELTA%20Logo.jpg.jpeg" alt="XELTA" />}<p className="mb-6 text-xs font-bold uppercase tracking-[.35em] text-amber-400">{division.eyebrow}</p><h1 className="text-6xl font-black leading-[.88] tracking-[-.075em] sm:text-8xl lg:text-[9rem]">{division.title}<br /><span className="text-amber-400">{division.accent}</span></h1><p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">{division.intro}</p><Link href="#division-showcase" className="division-button mt-10 inline-flex">Explore division ↓</Link></div><div className="division-scroll-hint">Scroll to discover <span /></div></section>
    <section id="division-showcase" className="division-showcase bg-slate-900"><div className="mx-auto flex max-w-7xl flex-col md:flex-row"><div className="division-sticky w-full md:w-1/2"><div className="division-visual" data-panel="0"><div className="division-image-stack"><img className="division-image active" src="/xelta-logo.svg" alt="XELTA project visual 1" /><img className="division-image" src="/xelta-logo.svg" alt="XELTA project visual 2" /><img className="division-image" src="/xelta-logo.svg" alt="XELTA project visual 3" /></div><div className="division-glow" /><div className="division-image-number"><span>01</span><small>/ 03</small></div></div></div><div className="w-full px-6 sm:w-1/2 sm:px-16">{division.panels.map(([label, heading, copy], i) => <article className="division-panel division-reveal" key={heading}><span className="text-sm font-bold text-amber-400">0{i + 1} / {label}</span><h2 className="mt-4 text-3xl font-bold sm:text-5xl">{heading}</h2><p className="mt-6 max-w-lg leading-8 text-slate-400">{copy}</p></article>)}</div></div></section>
    <section className="bg-slate-950 py-28"><div className="mx-auto max-w-6xl px-6"><div className="division-reveal mb-16"><p className="text-sm font-bold uppercase tracking-wider text-amber-400">Core capabilities</p><h2 className="mt-3 max-w-3xl text-4xl font-bold sm:text-6xl">Expertise that creates impact.</h2></div><div className="grid gap-6 md:grid-cols-3">{division.cards.map(([title, copy], i) => <article className="division-card division-reveal" key={title}><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-xl font-bold text-amber-400">0{i + 1}</div><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{copy}</p></article>)}</div></div></section>
    <section className="border-t border-slate-800 bg-amber-400 px-6 py-32 text-slate-950"><div className="mx-auto max-w-6xl division-reveal"><p className="text-xs font-bold uppercase tracking-[.3em] text-amber-950">Let&apos;s work together</p><h2 className="mt-6 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl">{division.lightTitle}</h2><p className="mt-8 max-w-xl text-lg text-amber-950/75">{division.lightCopy}</p><Link href="/contact" className="division-dark-button mt-10 inline-flex">Start a conversation ↗</Link></div></section>
  </main>;
}
