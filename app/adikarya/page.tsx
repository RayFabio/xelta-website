import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adikarya Utama | XELTA",
  description:
    "XELTA Adikarya Utama - Professional civil construction, infrastructure development, and project management services.",
  keywords: [
    "civil construction",
    "infrastructure",
    "project management",
    "engineering",
    "construction services",
  ],
};

const services = [
  {
    title: "Civil Construction",
    description:
      "Full-service civil construction including foundations, structural design, and infrastructure development.",
  },
  {
    title: "Infrastructure Development",
    description:
      "Large-scale infrastructure projects including roads, bridges, utilities, and public facilities.",
  },
  {
    title: "Project Management",
    description:
      "Professional project management from planning through completion with budget and timeline oversight.",
  },
  {
    title: "Engineering & Design",
    description:
      "Expert engineering services with innovative design solutions for complex construction challenges.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control and testing to ensure all projects meet industry standards and specifications.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Post-construction maintenance, repairs, and ongoing support services for long-term asset preservation.",
  },
];

const specialties = [
  "Commercial building construction",
  "Infrastructure and public works",
  "Sustainable construction practices",
  "Advanced engineering solutions",
  "Construction safety management",
  "Timely project delivery",
];

export default function Adikarya() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <p className="mb-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
                XELTA / 02
              </p>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                Adikarya
                <br />
                <span className="text-slate-500">
                  Utama.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                Building excellence through professional civil construction
                and infrastructure development.
              </p>

              <Link
                href="#about"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                Explore Adikarya
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
                  alt="XELTA Adikarya Utama"
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
                ABOUT ADIKARYA
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                Building today.
                <br />
                <span className="text-slate-500">
                  Shaping tomorrow.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-300">
                XELTA Adikarya Utama is a premier construction and
                infrastructure development company committed to delivering
                world-class projects that stand the test of time.
              </p>

              <p className="mt-7 text-base leading-8 text-slate-500">
                We combine modern engineering practices with deep industry
                expertise to build infrastructure that serves communities
                and businesses.
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

      {/* SPECIALTIES */}
      <section className="bg-white py-28 text-slate-950">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-cyan-600">
                OUR SPECIALTIES
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Precision.
                <br />
                <span className="text-slate-400">
                  Quality.
                </span>
                <br />
                Reliability.
              </h2>

            </div>

            <div>

              <div className="divide-y divide-slate-200">

                {specialties.map((specialty, index) => (
                  <div
                    key={specialty}
                    className="flex gap-5 py-5"
                  >

                    <span className="font-mono text-sm text-cyan-600">
                      0{index + 1}
                    </span>

                    <span className="text-slate-600">
                      {specialty}
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
            ADIKARYA UTAMA
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Let&apos;s build
            <br />
            <span className="text-slate-500">
              something great together.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400">
            Discuss your construction and infrastructure needs with our
            expert team. We are ready to turn your vision into reality.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold !text-black transition-all duration-300 hover:bg-cyan-400"
          >
            Get a Project Quote →
          </Link>

        </div>
      </section>

    </main>
  );
}
