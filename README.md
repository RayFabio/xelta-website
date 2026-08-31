# XELTA Website

A modern, premium corporate website for PT XELTA showcasing education and civil construction divisions.

## Project Overview

XELTA is building a unified online presence across two business divisions:
- **Akademi Unggul**: Professional education, HR development, and training solutions
- **Adikarya Utama**: Civil construction and infrastructure development

## Technology Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS 3+ with custom design tokens
- **Deployment**: Vercel
- **Package Manager**: npm with Node.js v24.19.0

## Project Structure

```
xelta-website/
├── app/
│   ├── layout.tsx              # Root layout with Navigation & Footer
│   ├── page.tsx                # Homepage with hero and divisions overview
│   ├── globals.css             # Global styles with design system
│   ├── akademi/
│   │   └── page.tsx            # Akademi Unggul division page
│   ├── adikarya/
│   │   └── page.tsx            # Adikarya Utama division page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navigation.tsx          # Header with responsive menu
│   └── Footer.tsx              # Footer with contact & links
├── public/                     # Static assets (images, logo)
├── tailwind.config.ts          # Tailwind design tokens configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS configuration for Tailwind
└── eslint.config.mjs           # ESLint rules
```

## Design System

### Colors

**Primary Colors** (Navy Spectrum)
- Primary 950: `#0f172a` (Darkest - primary text, headers)
- Primary 900: `#1e293b` (Buttons, accents)
- Primary 700: `#334155` (Secondary text)
- Primary 200: `#e2e8f0` (Light backgrounds)
- Primary 50: `#f8fafc` (Lightest backgrounds)

**Accent Colors** (Steel Blue)
- Accent 600: `#0369a1` (CTAs, hover states)
- Accent 500: `#0ea5e9` (Lighter accent)
- Accent 400: `#38bdf8` (Light accent)

### Typography

- **H1**: 4xl-6xl (responsive), bold, tight tracking
- **H2**: 3xl-4xl, bold
- **H3**: 2xl-3xl, semibold
- **Body**: Base size with relaxed line height
- **Font**: System fonts (ui-sans-serif, system-ui, etc.)

### Spacing

Built on 4px unit base:
- 1 = 4px, 2 = 8px, 4 = 16px, 6 = 24px, 8 = 32px, 12 = 48px, etc.

### Button Variants

- `.btn-primary`: Navy background, white text, rounded-lg
- `.btn-secondary`: White background, navy border
- `.btn-accent`: Steel blue background, white text

### Utilities

- `.container-xelta`: Centered container, max-w-7xl, responsive padding
- `.section`: Responsive vertical padding (py-12 to py-24)
- `.gradient-dark`: Dark gradient background for hero sections

## Setup & Development

### Prerequisites

- Node.js v24.19.0 or later
- npm 11.17.0 or later

### Installation

```bash
cd xelta-website
npm install --legacy-peer-deps
```

### Running Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Pages & Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage with hero, about, divisions overview | ✓ Basic layout |
| `/akademi` | Akademi Unggul division page | ✓ Placeholder |
| `/adikarya` | Adikarya Utama division page | ✓ Placeholder |
| `/contact` | Contact page with form | ✓ Placeholder |

## Implementation Roadmap

### Ticket 01: Project Foundation ✓ COMPLETE
- Next.js scaffold with TypeScript & Tailwind
- Design system with tailwind.config.ts
- Global styles (globals.css)
- Layout wrapper with Navigation & Footer
- Basic routing structure
- Development server running

### Ticket 02: Global Navigation & Routing (NEXT)
- Enhanced Navigation component with active states
- Mobile-responsive menu
- Route structure for all pages
- SEO metadata per page

### Ticket 03: Homepage Hero Section
- Hero component with tagline
- Division CTA buttons
- Responsive hero image placeholder

### Ticket 04: Homepage Content Sections
- About section
- Why Choose XELTA
- Division pillars showcase

### Ticket 05: Akademi Page Details
- Services list
- Training programs
- Capabilities & expertise
- Contact CTA

### Ticket 06: Adikarya Page Details
- Construction services
- Project portfolio
- Infrastructure expertise
- Contact CTA

### Ticket 07: Contact Form
- Form component with validation
- Email integration (Formspree/SendGrid)
- Success/error messages

### Ticket 08: Animations & Polish
- Framer Motion integration
- Fade-in animations
- Scroll-triggered effects
- Parallax effects

### Ticket 09: SEO & Analytics
- Meta tags optimization
- Open Graph integration
- Structured data (JSON-LD)
- Google Analytics 4 integration

### Ticket 10: Testing & Launch
- E2E testing (Playwright)
- Performance optimization
- Cross-browser testing
- Vercel deployment checklist

## Development Tips

### Tailwind Classes

Use the design system classes throughout:
- Text colors: `text-primary-950`, `text-accent-600`
- Background: `bg-primary-50`, `bg-accent-600`
- Buttons: `btn-primary`, `btn-secondary`, `btn-accent`
- Spacing: `section`, `container-xelta`

### Component Patterns

- All interactive components use `'use client'` directive
- Use Next.js `Link` for internal navigation
- Use `className` for Tailwind styles
- Keep components in `/components` folder

### Adding New Pages

1. Create folder: `app/new-page/`
2. Create `page.tsx` with TypeScript React component
3. Use layout components (Navigation/Footer automatically included from root layout)

## Deployment

The project is configured for Vercel deployment:

1. Push to GitHub repository
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on commits
4. Environment variables configured in Vercel dashboard

## Notes

- ESLint warnings about deprecated packages can be safely ignored
- Legacy peer deps flag used in npm install for compatibility
- Next.js telemetry collects anonymous usage data (can be disabled)

## Contact

For questions about the project structure or technical decisions, refer to SPEC.md in the parent XELTA directory.
