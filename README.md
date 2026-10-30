# VueData Website Recreation

A high-fidelity, production-grade recreation of the official **[VueData](https://www.vuedata.com/)** website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Production Build & Start
```bash
npm run build
npm start
```

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline Brand SVGs
- **Motion**: [Framer Motion](https://www.framer.com/motion/) & CSS keyframe animations
- **Typography**: Google Fonts (`Montserrat`, `Roboto`)

---

## 📂 Project Architecture

```
├── public/
│   ├── assets/              # Authentic VueData brand images, logos, video loop, badges
│   │   ├── Vuedata website logos/   # Enterprise client logos (Microsoft, DocuSign, Samsung, etc.)
│   │   ├── vuedata-intro-6.mp4      # Hero background video
│   │   └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Global root layout with metadata & fonts
│   │   ├── page.tsx         # Main VueData Homepage
│   │   ├── globals.css      # Custom styling, animations, button mask effects
│   │   ├── careers/         # Dedicated Careers portal with interactive filtering & application modal
│   │   ├── privacy-policy/  # Comprehensive Privacy Policy & ISO Security Guidelines
│   │   ├── sitemap/         # Full site map directory
│   │   ├── services/
│   │   │   ├── ai-ml/                  # AI & Machine Learning Services
│   │   │   ├── cloud-solutions/        # Cloud Architecture & Migration
│   │   │   ├── analytics/              # Analytics & Big Data
│   │   │   ├── application-services/   # Custom App Development & QA
│   │   │   ├── digital-marketing/      # Digital Marketing & Email Automation
│   │   │   └── service-management/     # ITIL Service Management
│   │   └── solutions/[slug]/           # Dynamic case study pages (E-commerce, Data Integration, etc.)
│   └── components/
│       ├── Navbar.tsx           # Sticky responsive navbar with dual logos & multi-tier dropdowns
│       ├── Hero.tsx             # Video background banner with dual-layer animated hover button
│       ├── ServicesSection.tsx  # 6-card services grid
│       ├── ProductsSection.tsx  # Alternating enterprise products showcase (Go-BOSS, DB-DaaS, etc.)
│       ├── SolutionsSection.tsx # Interactive tabbed case study showcase
│       ├── ClientsSection.tsx   # Infinite marquee logo slider
│       ├── CareersSection.tsx   # Culture banner & jobs trigger
│       ├── ContactSection.tsx   # Functional contact form with dynamic captcha & global office locations
│       └── Footer.tsx           # Certifications (Microsoft Gold Partner, ISO) & social links
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## ✨ Implemented Features

1. **Sticky Adaptive Navbar**:
   - Switches between light logo on transparent hero and blue logo on solid white sticky header with shadow.
   - Interactive dropdown menus for **Services** and **Enterprise Products**.
   - Responsive off-canvas mobile navigation drawer with touch-friendly links.
2. **Hero Video Banner**:
   - Autoplaying looping background video (`vuedata-intro-6.mp4`) with dark gradient overlay.
   - Custom VueData dual-text sliding mask hover effect on CTA button.
3. **End-to-End Expertise (Services)**:
   - 6 service categories with authentic imagery, descriptions, hover zoom effects, and dedicated subpage routes.
4. **Enterprise Products Showcase**:
   - Detailed product cards with alternating layout for Go-BOSS, DB-DaaS, Perchat.ai, ShipKasa, and PageRank.ai.
5. **Interactive Solutions & Case Studies**:
   - Tab-based case study switcher with real metrics, architectural diagrams, and direct links to full case studies.
6. **Enterprise Clients Marquee**:
   - Seamless infinite scrolling carousel featuring Microsoft, DocuSign, Samsung, Blue Nile, Aspen Dental, Rad Power Bikes, and more.
7. **Careers Portal**:
   - Culture pillars (*Care, Commit, Commune*).
   - Filterable open job positions by location (Chennai, Bengaluru, Seattle).
   - Interactive modal with role requirements and functional application form.
8. **Contact Us & Global Offices**:
   - Real-time client-side input validation.
   - Dynamic 5-character alphanumeric Captcha generation with refresh button.
   - Interactive submission feedback state.
   - Office location cards for Seattle (USA HQ), California, Chennai, and Bengaluru.
9. **Compliance & Legal**:
   - Privacy Policy & Data Security Guidelines.
   - Site Map directory with internal and external links.
   - Microsoft Gold Partner and ISO Certified badge integration.
