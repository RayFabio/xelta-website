import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-xelta py-12 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-white">XELTA</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Building human potential and shaping the future through education,
              human resource development, civil construction, and infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <Link href="/#about" className="hover:text-cyan-400">About XELTA</Link>
              <Link href="/akademi" className="hover:text-cyan-400">Akademi Unggul</Link>
              <Link href="/adikarya" className="hover:text-cyan-400">Adikarya Utama</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/contact" className="hover:text-cyan-400">Contact XELTA</Link>
              <a href="mailto:info@xelta.com" className="hover:text-cyan-400">info@xelta.com</a>
              <a href="tel:+1234567890" className="hover:text-cyan-400">+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PT XELTA. All rights reserved.</p>
          <p>Education • Human Development • Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
