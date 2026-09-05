# XELTA Website

Website resmi PT XELTA yang memperkenalkan dua divisi utama: pendidikan profesional dan konstruksi sipil/infrastruktur.

## Divisi

- **Akademi Unggul**: program pendidikan, pelatihan profesional, dan pengembangan SDM.
- **Adikarya Utama**: layanan konstruksi sipil dan pengembangan infrastruktur.

## Teknologi

- Next.js `16.3.3` dengan App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9
- Deployment: Vercel atau platform Node.js yang kompatibel

## Struktur Proyek

```text
app/
├── layout.tsx                  # Layout global, metadata, navbar, dan footer
├── page.tsx                    # Homepage
├── globals.css                 # Style global dan animasi
├── akademi/page.tsx            # Halaman Akademi Unggul
├── adikarya/page.tsx           # Halaman Adikarya Utama
├── contact/page.tsx            # Halaman kontak
└── favicon.ico
components/
├── ContactForm.tsx             # Form kontak
├── DivisionExperience.tsx      # Pengalaman halaman divisi
├── Footer.tsx                  # Footer global
├── Navbar.tsx                  # Navigasi global
└── ScrollAnimationController.tsx
lib/
└── constants.ts                # Informasi perusahaan dan navigasi
public/
├── Logo-Xelta-no-bg.png
├── xelta-logo.svg
├── robots.txt
└── sitemap.xml
```

## Persiapan

Pastikan Node.js dan npm sudah terpasang. Versi yang digunakan saat ini dapat dilihat di `package.json`.

```bash
npm install
```

## Menjalankan Lokal

Mode development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build production:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Route

| Route | Keterangan |
| --- | --- |
| `/` | Homepage XELTA |
| `/akademi` | Akademi Unggul |
| `/adikarya` | Adikarya Utama |
| `/contact` | Form dan informasi kontak |

## Deployment

Untuk deployment ke Vercel:

1. Push repository ke GitHub.
2. Import repository tersebut di Vercel.
3. Gunakan perintah build `npm run build`.
4. Deploy tanpa environment variable tambahan, kecuali kebutuhan baru ditambahkan di kemudian hari.

Sebelum deployment, jalankan:

```bash
npm run lint
npm run build
```

## Catatan

- Asset publik disimpan di folder `public/` dan dipanggil menggunakan path `/nama-file`.
- Layout global otomatis menampilkan `Navbar`, `Footer`, dan kontrol animasi pada setiap halaman.
- Informasi perusahaan, kontak, divisi, dan tautan navigasi berada di `lib/constants.ts`.
