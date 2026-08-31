"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const [activePage, setActivePage] = useState(0);
  const isScrolling = useRef(false);

  /*
   * PAGE 1 & PAGE 2 = LOCKED
   * PAGE 3 = NORMAL SCROLL
   */
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;

      /*
       * Menentukan halaman berdasarkan posisi scroll.
       */
      let currentPage = Math.round(scrollY / viewport);

      /*
       * Page 3 tidak dikunci.
       * Kalau sudah masuk Page 3, biarkan browser
       * melakukan scroll normal.
       */
      if (currentPage >= 2) {
        setActivePage(2);
        return;
      }

      /*
       * LOCK SCROLL PAGE 1 & PAGE 2
       */
      event.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;

      if (event.deltaY > 0) {
        /*
         * Scroll DOWN
         */
        if (currentPage < 2) {
          const nextPage = currentPage + 1;

          setActivePage(nextPage);

          window.scrollTo({
            top: nextPage * viewport,
            behavior: "smooth",
          });
        }
      } else {
        /*
         * Scroll UP
         */
        if (currentPage > 0) {
          const previousPage = currentPage - 1;

          setActivePage(previousPage);

          window.scrollTo({
            top: previousPage * viewport,
            behavior: "smooth",
          });
        }
      }

      /*
       * Cooldown supaya mouse wheel tidak
       * langsung melewati beberapa halaman.
       */
      setTimeout(() => {
        isScrolling.current = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * Update halaman ketika user berada di Page 3
   * atau menggunakan scrollbar.
   */
  useEffect(() => {
    const handleScroll = () => {
      const viewport = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY >= viewport * 2 - 100) {
        setActivePage(2);
      } else if (scrollY >= viewport - 100) {
        setActivePage(1);
      } else {
        setActivePage(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Klik tombol Explore
   */
  const goToPage2 = () => {
    setActivePage(1);

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="xelta-site">

      {/* =====================================================
          GLOBAL LOGO TRANSITION
      ====================================================== */}

      <div
        className={`xelta-logo-transition ${
          activePage === 0
            ? "logo-page-1"
            : activePage === 1
            ? "logo-page-2"
            : "logo-page-3"
        }`}
      >
        <img
          src="/XELTA%20Logo.jpg.jpeg"
          alt="XELTA"
        />
      </div>


      {/* =====================================================
          PAGE 1
      ====================================================== */}

      <section className="xelta-page page-one">

        {/* Background Grid */}
        <div className="xelta-grid-background" />

        {/* Background Glow */}
        <div className="hero-glow" />

        <div className="page-one-content">

          <p className="page-label">
            PT XELTA
          </p>

          <div className="page-one-logo-space">
            {/* Logo diambil dari global animated logo */}
          </div>

          <h1>
            Building Tomorrow,
            <br />
            <span>
              Creating Meaningful Impact.
            </span>
          </h1>

          <button
            onClick={goToPage2}
            className="explore-button"
          >
            <span>
              Scroll to Explore
            </span>

            <span className="explore-arrow">
              ↓
            </span>
          </button>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div />
        </div>

      </section>


      {/* =====================================================
          PAGE 2
      ====================================================== */}

      <section className="xelta-page page-two">

        {/* Background Grid */}
        <div className="xelta-grid-background" />

        {/* Background Glow */}
        <div className="division-glow glow-left" />
        <div className="division-glow glow-right" />

        <div className="page-two-content">

          <div className="division-heading">

            <p>
              XELTA / BUSINESS
            </p>

            <h2>
              Two pillars.
            </h2>

            <span>
              Choose a division to explore.
            </span>

          </div>


          {/* PILARS */}

          <div className="division-container">

            {divisions.map((division) => (
              <Link
                key={division.number}
                href={division.href}
                className="division-card"
              >

                {/* Number */}
                <span className="division-number">
                  {division.number}
                </span>

                {/* Logo background */}
                <div className="division-card-logo">
                  <img
                    src="/XELTA%20Logo.jpg.jpeg"
                    alt=""
                  />
                </div>

                <div className="division-card-content">

                  <p className="division-subtitle">
                    {division.subtitle}
                  </p>

                  <h3>
                    {division.title}
                  </h3>

                  <p className="division-description">
                    {division.description}
                  </p>

                  <div className="division-enter">
                    <span>
                      Explore
                    </span>

                    <span>
                      ↗
                    </span>
                  </div>

                </div>

                <div className="division-line" />

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE 3
          NORMAL SCROLL — NO LOCK
      ====================================================== */}

      <section className="page-three">

        <div className="xelta-grid-background" />

        <div className="about-glow" />

        <div className="about-container">

          <div className="about-header">

            <p>
              ABOUT XELTA
            </p>

            <h2>
              One company.
              <br />
              <span>
                Two areas of impact.
              </span>
            </h2>

          </div>


          <div className="about-content">

            <p className="about-main-text">
              PT XELTA is a diversified company built around
              two core business divisions with distinct areas
              of expertise and a shared commitment to creating
              meaningful value.
            </p>

            <p className="about-secondary-text">
              Through XELTA Akademi Unggul, we focus on
              education, professional training, and human
              resource development. Meanwhile, XELTA
              Adikarya Utama focuses on civil construction
              and infrastructure development.
            </p>

          </div>


          {/* ABOUT DETAILS */}

          <div className="about-details">

            <div>
              <span>01</span>

              <h3>
                Akademi Unggul
              </h3>

              <p>
                Education, professional training, and
                human resource development.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                Adikarya Utama
              </h3>

              <p>
                Civil construction, engineering, and
                infrastructure development.
              </p>
            </div>

          </div>


          {/* FOOTER */}

          <footer className="xelta-footer">

            <div className="footer-logo">
              <img
                src="/XELTA%20Logo.jpg.jpeg"
                alt="XELTA"
              />
            </div>

            <div className="footer-info">

              <p>
                PT XELTA
              </p>

              <span>
                Building tomorrow, creating meaningful impact.
              </span>

            </div>

            <div className="footer-links">

              <Link href="/akademi">
                Akademi Unggul
              </Link>

              <Link href="/adikarya">
                Adikarya Utama
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </footer>

        </div>

      </section>

    </main>
  );
}