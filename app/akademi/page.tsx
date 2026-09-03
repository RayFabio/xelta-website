import type { Metadata } from "next";
import DivisionExperience from "@/components/DivisionExperience";

export const metadata: Metadata = {
  title: "XELTA Academy | XELTA",
  description: "Transforming people and organizations through practical learning.",
};

export default function Akademi() {
  return <DivisionExperience division={{
    eyebrow: "XELTA / 01 — XELTA ACADEMY",
    title: "SHAPE WHAT",
    accent: "MATTERS",
    intro: "We design learning experiences that help professionals grow, teams perform better, and organizations move forward.",
    panels: [
      ["OUR APPROACH", "Learn from the real world", "Practical programs designed around industry challenges and measurable outcomes."],
      ["PROFESSIONAL TRAINING", "Turn potential into progress", "Experienced instructors, adaptive curricula, and post-training support for a lasting learning journey."],
      ["LEADERSHIP & HR", "People make the difference", "We help organizations develop leaders and workplace cultures ready for the future."],
    ],
    cards: [
      ["Professional Training", "Industry-led programs that build confident capabilities."],
      ["HR Development", "Talent and organizational strategies that deliver real performance."],
      ["Skill Certification", "Certification pathways that unlock new career opportunities."],
    ],
    lightTitle: "Ready to invest in your team?",
    lightCopy: "Let's build capabilities that create lasting change.",
  }} />;
}
