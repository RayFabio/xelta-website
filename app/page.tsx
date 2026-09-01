"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const page1Ref = useRef<HTMLElement | null>(null);
  const page2Ref = useRef<HTMLElement | null>(null);
  const page3Ref = useRef<HTMLElement | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);

  /*
  ============================================================
  PAGE DETECTION
  ============================================================
  */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      /*
       * Page 1
       */
      if (scrollY < viewportHeight * 0.5) {
        setCurrentPage(0);
        return;
      }

      /*
       * Page 2
       */
      if (scrollY < viewportHeight * 1.5) {
        setCurrentPage(1);
        return;
      }

      /*
       * Page 3
       */
      setCurrentPage(2);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  ============================================================
  SMOOTH PAGE NAVIGATION
  ============================================================
  */

  const goToPage = (page: number) => {
    if (isAnimating.current) return;

    const viewportHeight = window.innerHeight;

    let target = 0;

    if (page === 0) {
      target = 0;
    }

    if (page === 1) {
      target = viewportHeight;
    }

    if (page === 2) {
      target = viewportHeight * 2;
    }

    isAnimating.current = true;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });

    /*
     * Berikan waktu agar scroll animation selesai.
     */
    window.setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  };

  /*
  ============================================================
  MOUSE WHEEL
  ============================================================
  PAGE 1 + PAGE 2 = LOCKED
  PAGE 3 = NORMAL SCROLL
  ============================================================
  */

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      /*
       * PAGE 1
       */
      if (scrollY < viewportHeight * 0.5) {
        event.preventDefault();

        if (event.deltaY > 0) {
          goToPage(1);
        }

        return;
      }

      /*
       * PAGE 2
       */
      if (
        scrollY >= viewportHeight * 0.5 &&
        scrollY < viewportHeight * 1.5
      ) {
        event.preventDefault();

        if (event.deltaY > 0) {
          goToPage(2);
        } else if (event.deltaY < 0) {
          goToPage(0);
        }

        return;
      }

      /*
       * PAGE 3
       *
       * TIDAK DI-LOCK.
       *
       * User bebas scroll sampai footer.
       *
       * Hanya ketika benar-benar berada di paling atas
       * Page 3 dan scroll ke atas, kembali ke Page 2.
       */
      if (scrollY >= viewportHeight * 1.5) {
        const page3Top = viewportHeight * 2;

        if (scrollY <= page3Top + 5 && event.deltaY < 0) {
          event.preventDefault();
          goToPage(1);
        }

        return;
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
  ============================================================
  TOUCH SUPPORT
  ============================================================
  */

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;

      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = event.changedTouches[0].clientY;
      const difference = touchStartY.current - touchEndY;

      touchStartY.current = null;

      /*
       * Swipe terlalu kecil → abaikan
       */
      if (Math.abs(difference) < 50) {
        return;
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      /*
       * PAGE 1
       */
      if (scrollY < viewportHeight * 0.5) {
        if (difference > 0) {
          goToPage(1);
        }

        return;
      }

      /*
       * PAGE 2
       */
      if (
        scrollY >= viewportHeight * 0.5 &&
        scrollY < viewportHeight * 1.5
      ) {
        if (difference > 0) {
          goToPage(2);
        } else {
          goToPage(0);
        }

        return;
      }

      /*
       * PAGE 3
       */
      if (scrollY >= viewportHeight * 1.5) {
        const page3Top = viewportHeight * 2;

        if (scrollY <= page3Top + 5 && difference < 0) {
          goToPage(1);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  /*
  ============================================================
  KEYBOARD SUPPORT
  ============================================================
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      /*
       * PAGE 1
       */
      if (scrollY < viewportHeight * 0.5) {
        if (
          event.key === "ArrowDown" ||
          event.key === "PageDown" ||
          event.key === " "
        ) {
          event.preventDefault();
          goToPage(1);
        }

        return;
      }

      /*
       * PAGE 2
       */
      if (
        scrollY >= viewportHeight * 0.5 &&
        scrollY < viewportHeight * 1.5
      ) {
        if (
          event.key === "ArrowDown" ||
          event.key === "PageDown" ||
          event.key === " "
        ) {
          event.preventDefault();
          goToPage(2);
        }

        if (
          event.key === "ArrowUp" ||
          event.key === "PageUp"
        ) {
          event.preventDefault();
          goToPage(0);
        }

        return;
      }

      /*
       * PAGE 3
       *
       * Jangan lock keyboard di sini.
       * Page 3 tetap normal.
       */
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
  ============================================================
  LOGO
  ============================================================
  */

  return (
    <main className="xelta-site">

      {/* ======================================================
          SINGLE XELTA LOGO
          ======================================================

          INI ADALAH SATU-SATUNYA LOGO.

          Logo ini tidak dibuat ulang di Page 2 atau Page 3.

          CSS akan mengubah:
          - ukuran
          - posisi
          - opacity
          - blur

          berdasarkan page.
      ====================================================== */}

      <div
        className={`global-logo global-logo-page-${currentPage + 1}`}
        aria-hidden="true"
      >
        <img
          src="/XELTA logo.jpg.jpeg"
          alt=""
        />
      </div>


      {/* ======================================================
          PAGE 1
      ====================================================== */}

      <section
        ref={page1Ref}
        className="xelta-page page-one"
      >

        <div className="page-one-content">

          <div className="eyebrow">
            PT XELTA
          </div>

          <div className="hero-title">
            <span>Build</span>
            <span>Tomorrow,</span>
          </div>

          <div className="hero-subtitle">
            Creating Meaningful Impact.
          </div>

          <button
            type="button"
            className="scroll-button"
            onClick={() => goToPage(1)}
          >
            <span>Scroll to Explore</span>

            <span className="scroll-button-icon">
              ↓
            </span>
          </button>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <span className="scroll-line" />
        </div>

      </section>


      {/* ======================================================
          PAGE 2
      ====================================================== */}

      <section
        ref={page2Ref}
        className="xelta-page page-two"
      >

        <div className="page-two-content">

          <div className="section-label">
            XELTA INDONESIA
          </div>

          <h2 className="page-two-title">
            Where ideas become
            <span> meaningful impact.</span>
          </h2>

          <div className="division-container">

            {/* ==================================================
                AKADEMI UNGGUL
            ================================================== */}

            <a
              href="/akademi"
              className="division-card division-card-left"
            >

              <div className="division-number">
                01
              </div>

              <div className="division-content">

                <p className="division-small">
                  XELTA
                </p>

                <h3>
                  AKADEMI
                  <br />
                  UNGGUL
                </h3>

                <p className="division-description">
                  Pendidikan dan pengembangan sumber
                  daya manusia untuk membangun generasi
                  unggul.
                </p>

                <span className="division-arrow">
                  Explore
                  <span>↗</span>
                </span>

              </div>

            </a>


            {/* ==================================================
                ADIKARYA UTAMA
            ================================================== */}

            <a
              href="/adikarya"
              className="division-card division-card-right"
            >

              <div className="division-number">
                02
              </div>

              <div className="division-content">

                <p className="division-small">
                  XELTA
                </p>

                <h3>
                  ADIKARYA
                  <br />
                  UTAMA
                </h3>

                <p className="division-description">
                  Karya sipil dan pembangunan infrastruktur
                  untuk menciptakan ruang yang bernilai.
                </p>

                <span className="division-arrow">
                  Explore
                  <span>↗</span>
                </span>

              </div>

            </a>

          </div>

        </div>

        <div className="page-two-bottom">
          <span>02</span>
          <span>OF</span>
          <span>03</span>
        </div>

      </section>


      {/* ======================================================
          PAGE 3
          
          PAGE INI TIDAK DI-LOCK.
          Jadi content bisa panjang dan footer tetap bisa
          diakses.
      ====================================================== */}

      <section
        ref={page3Ref}
        id="about"
        className="page-three"
      >

        <div className="page-three-content">

          <div className="about-label">
            ABOUT XELTA
          </div>

          <div className="about-grid">

            <div className="about-heading">

              <span className="about-small">
                PT XELTA
              </span>

              <h2>
                Building
                <br />
                <span>Meaningful</span>
                <br />
                Impact.
              </h2>

            </div>


            <div className="about-text">

              <p className="about-lead">
                XELTA Indonesia hadir untuk menciptakan
                karya yang memberikan dampak nyata bagi
                masyarakat dan masa depan.
              </p>

              <p>
                Melalui dua bidang utama, XELTA Akademi
                Unggul dan XELTA Adikarya Utama, kami
                mengembangkan pendidikan, sumber daya
                manusia, serta karya pembangunan yang
                berorientasi pada kualitas dan keberlanjutan.
              </p>

              <p>
                Kami percaya bahwa sebuah karya bukan hanya
                tentang hasil akhir, tetapi juga tentang
                bagaimana karya tersebut memberikan nilai
                dan menciptakan perubahan yang berarti.
              </p>

            </div>

          </div>


          {/* ==================================================
              VALUES
          ================================================== */}

          <div className="about-values">

            <div className="value-item">
              <span>01</span>
              <h3>VISION</h3>
              <p>
                Menjadi bagian dari pembangunan Indonesia
                melalui karya yang berkualitas dan berdampak.
              </p>
            </div>

            <div className="value-item">
              <span>02</span>
              <h3>MISSION</h3>
              <p>
                Mengembangkan manusia, ide, dan karya untuk
                menghasilkan masa depan yang lebih baik.
              </p>
            </div>

            <div className="value-item">
              <span>03</span>
              <h3>VALUES</h3>
              <p>
                Integritas, kualitas, kolaborasi, inovasi,
                dan keberlanjutan.
              </p>
            </div>

          </div>

        </div>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <footer className="xelta-footer">

          <div className="footer-top">

            <div className="footer-logo">
              <span>x</span>
              <span>elta</span>
            </div>

            <p>
              Build Tomorrow.
              <br />
              Create Meaningful Impact.
            </p>

          </div>

          <div className="footer-line" />

          <div className="footer-bottom">

            <span>
              © 2026 PT XELTA. All Rights Reserved.
            </span>

            <span>
              INDONESIA
            </span>

          </div>

        </footer>

      </section>

    </main>
  );
}