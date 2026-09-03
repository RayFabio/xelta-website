import type { Metadata } from "next";
import DivisionExperience from "@/components/DivisionExperience";

export const metadata: Metadata = {
  title: "XELTA Adikarya | XELTA",
  description: "Professional civil construction and infrastructure development by XELTA.",
};

export default function Adikarya() {
  return <DivisionExperience division={{
    eyebrow: "XELTA / 02 — XELTA ADIKARYA",
    title: "Build What",
    accent: "Matters",
    intro: "We combine engineering, precision, and delivery to create infrastructure that serves communities and businesses.",
    panels: [
      ["CIVIL CONSTRUCTION", "Foundations for the future", "From foundations to structures, every detail is designed to stand strong and endure."],
      ["INFRASTRUCTURE", "Scale with confidence", "Roads, bridges, utilities, and public facilities delivered to high safety and quality standards."],
      ["ENGINEERING & DESIGN", "Precision in every detail", "Modern engineering solutions that are efficient, responsible, and ready for complex challenges."],
    ],
    cards: [
      ["Civil Construction", "End-to-end civil construction, from foundations through completion."],
      ["Infrastructure Development", "Large-scale infrastructure development that creates lasting impact."],
      ["Project Management", "Professional management of time, cost, quality, and risk."],
    ],
    lightTitle: "Have a project in mind?",
    lightCopy: "Let's deliver structures that create meaningful impact for the next generation.",
  }} />;
}
