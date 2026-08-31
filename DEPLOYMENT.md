# XELTA Website - Deployment Guide

## Files Required for Deployment

### Core Application Files
```
app/
├── layout.tsx              ✓ Root layout
├── page.tsx                ✓ Homepage
├── globals.css             ✓ Global styles
├── akademi/page.tsx        ✓ Akademi division page
├── adikarya/page.tsx       ✓ Adikarya division page
└── contact/page.tsx        ✓ Contact page

components/
├── Navigation.tsx          ✓ Header navigation
└── Footer.tsx              ✓ Footer component

public/
├── xelta-logo.svg          ✓ XELTA Logo
├── robots.txt              ✓ SEO robots config
└── sitemap.xml             ✓ XML sitemap
```

### Configuration Files
```
tailwind.config.ts          ✓ Tailwind CSS design tokens
next.config.ts              ✓ Next.js configuration
tsconfig.json               ✓ TypeScript configuration
postcss.config.mjs          ✓ PostCSS setup for Tailwind
eslint.config.mjs           ✓ ESLint rules
package.json                ✓ Dependencies (DO NOT INCLUDE package-lock.json)
.gitignore                  ✓ Git ignore rules
```

### Optional Documentation
```
README.md                   ✓ Project documentation (helpful for developers)
```

---

## Files to Exclude from Version Control

### Build Artifacts (Auto-generated, DO NOT COMMIT)
```
.next/                      - Next.js build cache
node_modules/               - Dependencies (recreated from package.json)
dist/                       - Build output
build/                      - Build artifacts
.env.local                  - Local environment variables
.env.*.local                - Local env overrides
```

### Development Files (Optional to exclude)
```
AGENTS.md                   - Custom agent config (mattpocock skills - optional)
CLAUDE.md                   - Claude AI config (optional)
package-lock.json           - Use npm ci instead (optional preference)
```

---

## Deployment Checklist

### Step 1: Prepare Repository
1. Ensure `package-lock.json` is included OR use `npm ci` on deployment
2. Remove `.next/` folder if present
3. Remove `node_modules/` folder if present
4. Verify `.gitignore` contains:
   ```
   node_modules/
   .next/
   .env.local
   .env.*.local
   ```

### Step 2: Install Dependencies
```bash
npm install
# OR (recommended for CI/CD)
npm ci --omit=dev
```

### Step 3: Build for Production
```bash
npm run build
```

### Step 4: Test Build Locally
```bash
npm run start
# Visit http://localhost:3000
```

### Step 5: Deploy to Vercel

#### Option A: Via GitHub (Recommended)
1. Push code to GitHub repository
2. Connect repo to Vercel dashboard
3. Vercel auto-detects Next.js
4. Click "Deploy"
5. Website live!

#### Option B: CLI Deploy
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Option C: Docker Deploy
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

---

## Environment Variables (If Needed)

Create `.env.local` in root for local development:
```
# Analytics (future)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email Service (future)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

For Vercel deployment:
1. Go to Project Settings → Environment Variables
2. Add variables there (they auto-apply to deployments)

---

## Production Optimizations

### Before Deployment:
1. ✓ Run `npm run lint` to check code quality
2. ✓ Run `npm run build` to verify no build errors
3. ✓ Test locally with `npm run start`
4. ✓ Check Lighthouse scores (DevTools)
5. ✓ Test on mobile devices
6. ✓ Verify all links work
7. ✓ Test contact form (when implemented)

### Next.js Automatic Optimizations:
- Image optimization via `next/image`
- Code splitting per route
- CSS minimization
- JavaScript minification
- Tree-shaking of unused code
- Automatic font optimization

---

## Troubleshooting

### Build fails with "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run start -- -p 3001
```

### Tailwind classes not showing
- Ensure `tailwind.config.ts` is valid
- Run `npm run build` to regenerate CSS
- Check `app/globals.css` is imported in layout

### Logo not loading
- Verify `xelta-logo.svg` exists in `public/` folder
- Check `Image` component import in `Navigation.tsx`
- Verify alt text and dimensions

---

## Performance Metrics

Target scores (Vercel Analytics):
- **Lighthouse Performance**: > 90
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

Monitor via:
- Vercel Analytics dashboard
- Google PageSpeed Insights
- Lighthouse (DevTools)

---

## Post-Deployment

### Monitor
- Vercel Analytics: https://vercel.com/dashboard
- Error tracking (implement Sentry if needed)
- Uptime monitoring

### Maintain
- Update dependencies monthly: `npm update`
- Security audit: `npm audit`
- Backup content/data regularly
- Monitor error logs

---

## Support for Next Phases

### Phase 1: Akademi & Adikarya Pages (Ticket 05-06)
- No deployment changes needed
- Add more content and services list
- Update with real images and descriptions

### Phase 2: Contact Form (Ticket 07)
- Add email service integration (Formspree/SendGrid)
- Add environment variables for API keys
- Update form validation if needed

### Phase 3: Animations (Ticket 08)
- Install Framer Motion: `npm install framer-motion`
- Add animation components
- No deployment config changes

### Phase 4: SEO & Analytics (Ticket 09)
- Install Google Analytics: `npm install next-gtag`
- Add GA4 tag ID to environment variables
- No deployment changes

### Phase 5: Testing & Optimization (Ticket 10)
- Install testing tools: `npm install -D @testing-library/react playwright`
- Add tests to CI/CD pipeline in Vercel
- No deployment config changes

---

## Quick Deployment Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Test production build locally
npm start

# Deploy to Vercel (using CLI)
vercel --prod

# Check for issues
npm run lint

# Security audit
npm audit

# Update dependencies
npm update
```

---

**Ready to deploy? Start with "Step 1" in the Deployment Checklist above!**
