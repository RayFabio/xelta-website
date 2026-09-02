import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akademi Unggul | XELTA",
  description:
    "XELTA Akademi Unggul - Professional education, training, and human resource development.",
  keywords: [
    "professional training",
    "HR development",
    "education",
    "skill certification",
    "corporate training",
  ],
};

const services = [
  {
    title: "Professional Training Programs",
    description:
      "Comprehensive, industry-focused training programs designed to develop professional competencies across various sectors.",
  },
  {
    title: "HR Development & Consulting",
    description:
      "Strategic HR solutions including organizational development, talent management, and workforce planning.",
  },
  {
    title: "Skill Certification Courses",
    description:
      "Accredited certification programs in technical and soft skills to enhance career prospects.",
  },
  {
    title: "Corporate Training Solutions",
    description:
      "Customized in-house training programs tailored to organizational needs and industry standards.",
  },
  {
    title: "Leadership Development",
    description:
      "Executive coaching and leadership programs for developing future organizational leaders.",
  },
  {
    title: "Compliance & Regulatory Training",
    description:
      "Specialized training to ensure organizational compliance with industry regulations and standards.",
  },
];

const capabilities = [
  "Certified training instructors with industry expertise",
  "Comprehensive curriculum development and customization",
  "Modern training facilities and e-learning platforms",
  "Industry partnerships and collaborations",
  "Flexible scheduling (on-site, online, hybrid)",
  "Post-training support and performance tracking",
];

export default function Akademi() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
                XELTA / 01
              </p>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                Akademi
                <br />
                <span className="text-slate-500">
                  Unggul.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                Empowering professionals through excellence in education,
                training, and human resource development.
              </p>

              <Link
                href="#about"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                Explore Akademi
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </Link>

            </div>

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[100px]" />

                <img
                  src="/XELTA%20Logo.jpg.jpeg"
                  alt="XELTA Akademi Unggul"
                  className="relative w-[220px] opacity-90 grayscale transition duration-700 hover:grayscale-0 md:w-[300px]"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10 bg-slate-900 py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
                ABOUT AKADEMI
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                Developing people.
                <br />
                <span className="text-slate-500">
                  Building capability.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-300">
                XELTA Akademi Unggul is dedicated to transforming careers and
                organizational capabilities through innovative,
                industry-relevant education and training solutions.
              </p>

              <p className="mt-7 text-base leading-8 text-slate-500">
                We partner with businesses to develop their most valuable
                asset—their people. With a commitment to excellence and
                measurable outcomes, we deliver training programs that bridge
                the gap between current skills and industry demands.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-950 py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14">

            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-400">
              WHAT WE DO
            </p>

            <h2 className="text-4xl font-semibold md:text-6xl">
              Our Services.
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >

                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white py-28 text-slate-950">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                OUR CAPABILITIES
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Designed for
                <br />
                <span className="text-slate-400">
                  real impact.
                </span>
              </h2>

            </div>

            <div>

              <div className="divide-y divide-slate-200">

                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex gap-5 py-5"
                  >

                    <span className="font-mono text-sm text-cyan-600">
                      0{index + 1}
                    </span>

                    <span className="text-slate-600">
                      {capability}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
            AKADEMI UNGGUL
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Ready to invest in
            <br />
            <span className="text-slate-500">
              your team&apos;s future?
            </span>
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold !text-black transition-all duration-300 hover:bg-cyan-400"
          >
            Schedule a Consultation →
          </Link>

        </div>
      </section>

    </main>
  );
}
