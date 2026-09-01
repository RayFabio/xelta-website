"use client";

import { useEffect, useRef, useState } from "react";

const LOGO_SRC = "/XELTA Logo.jpg.jpeg";

export default function HomePage() {
  const page1Ref = useRef<HTMLElement | null>(null);
  const page2Ref = useRef<HTMLElement | null>(null);
  const page3Ref = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateAnimation = () => {
      const page1 = page1Ref.current;
      const page2 = page2Ref.current;
      const page3 = page3Ref.current;

      if (!page1 || !page2 || !page3) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const page1Top = page1.offsetTop;
      const page2Top = page2.offsetTop;
      const page3Top = page3.offsetTop;

      let progress = 0;

      /*
       * PAGE 1 → PAGE 2
       *
       * 0   = logo masih di tengah Page 1
       * 1   = logo sudah terbelah menjadi 2 di Page 2
       */
      if (scrollY >= page1Top && scrollY < page2Top) {
        const distance = page2Top - page1Top;

        if (distance > 0) {
          progress = (scrollY - page1Top) / distance;
        }
      } else if (scrollY >= page2Top && scrollY < page3Top) {
        /*
         * PAGE 2 sudah penuh.
         */
        progress = 1;
      } else if (scrollY >= page3Top) {
        /*
         * PAGE 3
         *
         * 1 → 2
         *
         * Dua logo menyatu kembali menjadi satu
         * dan kemudian menjadi background.
         */
        const distance = viewportHeight;

        if (distance > 0) {
          const page3Progress = Math.min(
            Math.max((scrollY - page3Top) / distance, 0),
            1
          );

          progress = 1 + page3Progress;
        }
      }

      progress = Math.min(Math.max(progress, 0), 2);

      setScrollProgress(progress);
    };

    const handleScroll = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(updateAnimation);
    };

    updateAnimation();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  /*
   * PAGE 1 → PAGE 2
   */

  const page1Progress = Math.min(Math.max(scrollProgress, 0), 1);

  /*
   * PAGE 1 LOGO
   *
   * Besar di tengah.
   * Ketika menuju Page 2:
   * - sedikit membesar
   * - bergerak ke atas
   * - fade out
   */
  const page1LogoScale = 1 + page1Progress * 0.35;

  const page1LogoY = page1Progress * -80;

  const page1LogoOpacity = 1 - page1Progress;

  /*
   * SPLIT LOGO
   *
   * Pada awalnya tidak terlihat.
   *
   * Saat Page 1 → Page 2:
   * dua logo muncul dari posisi tengah
   * lalu bergerak kiri dan kanan.
   */

  const splitOpacity = page1Progress;

  const splitScale = 0.45 + page1Progress * 0.35;

  const splitLeftX = -page1Progress * 360;
  const splitRightX = page1Progress * 360;

  const splitY = 30 - page1Progress * 30;

  /*
   * PAGE 2 → PAGE 3
   */

  const page3Progress =
    scrollProgress > 1 ? scrollProgress - 1 : 0;

  /*
   * Dua logo kembali ke tengah.
   */

  const mergeLeftX = -360 * (1 - page3Progress);
  const mergeRightX = 360 * (1 - page3Progress);

  /*
   * Logo membesar saat menjadi background.
   */

  const backgroundScale = 1 + page3Progress * 7;

  const backgroundOpacity =
    page3Progress < 0.25
      ? 0
      : Math.min((page3Progress - 0.25) / 0.5, 1) * 0.16;

  /*
   * Setelah menyatu, dua logo semakin transparan.
   */

  const mergingOpacity =
    page3Progress < 0.35
      ? 1
      : 1 - (page3Progress - 0.35) / 0.65;

  return (
    <main className="xelta-site">
      {/* =====================================================
          ANIMATED LOGO LAYER
      ====================================================== */}

      <div className="logo-animation-layer" aria-hidden="true">
        {/* PAGE 1 — SINGLE LOGO */}

        <img
          src={LOGO_SRC}
          alt=""
          className="animated-logo page-one-logo"
          style={{
            transform: `
              translate3d(
                0,
                ${page1LogoY}px,
                0
              )
              scale(${page1LogoScale})
            `,
            opacity: page1LogoOpacity,
          }}
        />

        {/* PAGE 2 — LEFT LOGO */}

        <img
          src={LOGO_SRC}
          alt=""
          className="animated-logo split-logo split-logo-left"
          style={{
            transform: `
              translate3d(
                ${splitLeftX}px,
                ${splitY}px,
                0
              )
              scale(${splitScale})
            `,
            opacity:
              splitOpacity * mergingOpacity,
          }}
        />

        {/* PAGE 2 — RIGHT LOGO */}

        <img
          src={LOGO_SRC}
          alt=""
          className="animated-logo split-logo split-logo-right"
          style={{
            transform: `
              translate3d(
                ${splitRightX}px,
                ${splitY}px,
                0
              )
              scale(${splitScale})
            `,
            opacity:
              splitOpacity * mergingOpacity,
          }}
        />

        {/* PAGE 3 — BACKGROUND LOGO */}

        <img
          src={LOGO_SRC}
          alt=""
          className="animated-logo page-three-background-logo"
          style={{
            transform: `
              translate3d(0, 0, 0)
              scale(${backgroundScale})
            `,
            opacity: backgroundOpacity,
          }}
        />
      </div>

      {/* =====================================================
          PAGE 1
      ====================================================== */}

      <section
        ref={page1Ref}
        id="home"
        className="xelta-page page-one"
      >
        <div className="page-background-glow" />

        <div className="page-one-content">
          <p className="company-label">
            PT XELTA
          </p>

          <div className="page-one-title">
            <h1>
              Build the Future,
            </h1>

            <h1 className="title-muted">
              Creating Meaningful Impact.
            </h1>
          </div>

          <div className="page-one-logo-space">
            {/* 
              Ruang ini sengaja dikosongkan.

              Logo utama berada pada
              fixed animation layer sehingga
              dapat bergerak mulus ke Page 2.
            */}
          </div>

          <div className="scroll-explore">
            <span>
              Scroll to Explore
            </span>

            <span className="scroll-arrow">
              ↓
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE 2
      ====================================================== */}

      <section
        ref={page2Ref}
        id="division"
        className="xelta-page page-two"
      >
        <div className="page-two-glow" />

        <div className="page-two-content">
          <p className="section-kicker">
            EXPLORE XELTA
          </p>

          <h2>
            Choose Your Direction
          </h2>

          <p className="section-description">
            Dua bidang utama yang menjadi bagian
            dari perjalanan XELTA.
          </p>

          <div className="division-grid">
            {/* AKADEMI */}

            <a
              href="/akademi"
              className="division-card"
            >
              <div className="division-logo-halo" />

              <div className="division-content">
                <span className="division-number">
                  01
                </span>

                <h3>
                  XELTA
                  <br />
                  <strong>AKADEMI UNGGUL</strong>
                </h3>

                <p>
                  Pendidikan, pengembangan
                  kompetensi, dan sumber daya
                  manusia unggul.
                </p>

                <span className="division-link">
                  Explore
                  <span>→</span>
                </span>
              </div>
            </a>

            {/* ADIKARYA */}

            <a
              href="/adikarya"
              className="division-card"
            >
              <div className="division-logo-halo" />

              <div className="division-content">
                <span className="division-number">
                  02
                </span>

                <h3>
                  XELTA
                  <br />
                  <strong>ADIKARYA UTAMA</strong>
                </h3>

                <p>
                  Konstruksi, infrastruktur,
                  dan karya pembangunan
                  berkelanjutan.
                </p>

                <span className="division-link">
                  Explore
                  <span>→</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE 3
      ====================================================== */}

      <section
        ref={page3Ref}
        id="about"
        className="xelta-page page-three"
      >
        <div className="page-three-background" />

        <div className="page-three-content">
          <p className="section-kicker">
            ABOUT XELTA
          </p>

          <h2>
            Building Tomorrow.
            <br />
            Creating Meaningful Impact.
          </h2>

          <div className="about-line" />

          <div className="about-grid">
            <div className="about-intro">
              <p>
                PT XELTA hadir sebagai perusahaan
                yang berfokus pada penciptaan
                dampak nyata melalui pendidikan,
                pengembangan manusia, dan karya
                pembangunan.
              </p>
            </div>

            <div className="about-text">
              <p>
                Kami percaya bahwa masa depan
                dibangun melalui manusia yang
                unggul dan karya yang memiliki
                manfaat jangka panjang.
              </p>

              <p>
                Melalui XELTA Akademi Unggul dan
                XELTA Adikarya Utama, kami
                menggabungkan pengembangan
                sumber daya manusia dengan
                pembangunan yang memberikan
                nilai bagi masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="xelta-footer">
        <div>
          <span className="footer-logo">
            XELTA
          </span>

          <p>
            Building Tomorrow. Creating Meaningful Impact.
          </p>
        </div>

        <div className="footer-right">
          © {new Date().getFullYear()} PT XELTA
        </div>
      </footer>
    </main>
  );
}