"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationController() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".home-scroll, .division-scroll");
    let logo = document.querySelector<HTMLElement>(".home-main-logo, .division-hero-logo");
    const hero = document.querySelector<HTMLElement>(".home-hero, .division-hero");
    const background = document.querySelector<HTMLElement>(".site-logo-background");
    const headings = document.querySelectorAll<HTMLElement>(
      ".home-scroll section h2, .division-page section h2"
    );
    const headingObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-heading-visible");
      }),
      { root, threshold: 0.2 }
    );
    headings.forEach((heading) => {
      heading.classList.add("xelta-heading-reveal");
      headingObserver.observe(heading);
    });
    if (!root) return () => headingObserver.disconnect();
    if (!logo && hero?.closest(".division-page")) {
      const content = hero.querySelector<HTMLElement>(".division-hero-content");
      if (content) {
        const image = document.createElement("img");
        image.className = "division-hero-logo";
        image.src = "/XELTA%20Logo.jpg.jpeg";
        image.alt = "XELTA";
        content.prepend(image);
        content.classList.add("has-runtime-logo");
        logo = image;
      }
    }
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const heroTop = hero?.getBoundingClientRect().top ?? 0;
        const progress = Math.min(1, Math.max(0, -heroTop / Math.max(1, window.innerHeight)));
        const logoDrop = progress * (window.innerHeight + 180);
        logo?.style.setProperty("transform", `translate3d(0, ${logoDrop}px, 0) scale(${1 - progress * .58})`);
        logo?.style.setProperty("opacity", String(1 - progress * .92));
        hero?.style.setProperty("--hero-progress", progress.toFixed(3));
        hero?.style.setProperty("--hero-logo-drop", `${logoDrop}px`);
        root.style.setProperty("--academy-logo-progress", progress.toFixed(3));
        background?.style.setProperty("--home-bg-progress", progress.toFixed(3));
      });
    };
    root.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => { headingObserver.disconnect(); root.removeEventListener("scroll", update); window.removeEventListener("scroll", update); if (frame) cancelAnimationFrame(frame); };
  }, [pathname]);
  return null;
}
