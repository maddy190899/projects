---
name: build-site
description: Scaffolds and implements world-class, award-caliber digital experiences synthesizing design systems, neuro-perceptual behavioral UX, kinetic orchestration (Lenis + GSAP/Framer Motion), zero placeholders, curated CDN asset pipelines, and strict Core Web Vitals.
---

# Universal Master Creative Engineering Protocol

When invoked via `/build-site [topic/requirements]`, execute this multi-stage architectural engineering protocol autonomously without halting for turn-by-turn confirmations.

Every interface generated must function as an award-caliber digital artifact (Awwwards SOTD / FWA standard) balancing visual tension, functional usability (70% scoring weight), cognitive behavioral ergonomics, and 60/120fps GPU performance.

---

## Non-Negotiable Directives

1. **Dedicated Project Isolation**: NEVER build directly in the root workspace directory. Every new project MUST be created inside its own dedicated, clean subfolder derived from the topic/requirements (e.g., `spatial-architecture/`, `ai-telemetry/`, `luxury-atelier/`). All scaffolding, code, build artifacts, and dependencies must reside strictly within this subfolder.
2. **Absolute Zero-Placeholder Standard**: NEVER output "Lorem Ipsum", "Coming Soon", "Test Title", or generic synthetic copy. Derive deep, authentic domain narratives with realistic metrics, technical parameters, and professional editorial copywriting.
3. **Curated CDN Photography Pipeline**: NEVER use broken or generic stock placeholders. Dynamically integrate themed high-resolution photography via Unsplash CDN configured with explicit parameters (`?auto=format&fit=crop&w=1600&q=80`).
4. **Bespoke Vector & Monoline Graphics**: NEVER use generic multi-colored asset packs. Use unified monoline SVGs (e.g., Lucide React or crafted inline SVG) with uniform stroke profiles (`stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`).
5. **GPU Kinetic Orchestration**: Synchronize Lenis smooth scrolling directly into the GSAP ticker with `lagSmoothing(0)`. Restrict animations to GPU-composited properties (`transform`, `opacity`). Standardize on quintic deceleration (`cubic-bezier(0.16, 1, 0.3, 1)` or `power4.out`). Always gate animations behind `prefers-reduced-motion`.
6. **Continuous Versioning**: The `.agents/hooks.json` engine commits mutations automatically. Structure each file creation and edit cleanly.

---

## Phase 1: Environment Scaffolding

Derive a clean, descriptive kebab-case project folder name `<project-name>` (e.g. `zenith-spatial`, `lumina-luxury`, `neural-foundry`).

Scaffold the project inside its dedicated directory using Vite with React SWC and install the production creative stack:

```bash
# 1. Create and enter the dedicated project directory
mkdir -p <project-name>
cd <project-name>

# 2. Initialize Vite with React SWC template
npm create vite@latest . -- --template react-swc

# 3. Install core creative engineering runtime dependencies
npm install lenis gsap @gsap/shockingly framer-motion clsx tailwind-merge lucide-react @lottiefiles/dotlottie-react || \
npm install lenis gsap framer-motion clsx tailwind-merge lucide-react @lottiefiles/dotlottie-react

# 4. Install styling and build tooling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Phase 2: Design System & Architectural Tokens

### 1. Visual Art Direction & Color Tokens
Configure `<project-name>/tailwind.config.js` with complex chromatic undertones (avoid raw saturated primaries; adopt a 60-30-10 distribution):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: "#08080A",
          surface: "#101114",
          card: "#14161B",
          highlight: "rgba(255, 255, 255, 0.03)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          focus: "rgba(255, 255, 255, 0.22)",
        },
        accent: {
          primary: "#D2FF00", // Volt / Electric Accent or domain-adapted tone
          glow: "rgba(210, 255, 0, 0.25)",
          muted: "#9EAA74",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#8E8E93",
          muted: "#636366",
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.18em',
      },
      boxShadow: {
        'inner-bevel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
        'glow-salient': '0 0 35px -5px rgba(210, 255, 0, 0.3)',
      },
      transitionTimingFunction: {
        'quintic-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
```

### 2. Foundational CSS, Tactile Grain & Fluid Typography
Replace `<project-name>/src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: dark;
  }

  html.lenis, html.lenis body {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  body {
    background-color: #08080A;
    color: #F5F5F7;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Fluid typography clamp utility classes */
  .type-display {
    font-size: clamp(2.75rem, 6.5vw + 1rem, 7.5rem);
    line-height: 0.92;
    letter-spacing: -0.04em;
  }

  .type-h2 {
    font-size: clamp(2rem, 3.5vw + 0.5rem, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .type-h3 {
    font-size: clamp(1.25rem, 1.8vw + 0.4rem, 2rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .type-body {
    font-size: clamp(0.95rem, 0.4vw + 0.85rem, 1.125rem);
    line-height: 1.6;
  }
}

/* Atmospheric tactile grain overlay */
.tactile-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
}
```

---

## Phase 3: Kinetic Engine & Behavioral UX Components

Construct the core interactive foundation inside `<project-name>/src/components/`:

### 1. Smooth Scroll Virtualization (`SmoothScroll.jsx`)
Integrate Lenis directly into GSAP's central render ticker with reduced-motion protection:

```jsx
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isMotionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMotionReduced) {
      gsap.globalTimeline.timeScale(1000);
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    const updateRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  return <div className="min-h-screen relative">{children}</div>;
};
```

### 2. Ergonomic Magnetic Button with Fitts's Law Hitbox (`MagneticButton.jsx`)
Combines spring physics, cursor pull, and invisible hitbox extension ($\ge 12\text{px}$):

```jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({ children, className = '', onClick, variant = 'primary' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 160, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = variant === 'primary'
    ? 'bg-accent-primary text-black font-semibold shadow-glow-salient hover:brightness-110'
    : 'bg-canvas-card text-text-primary border border-border-subtle hover:border-border-focus hover:bg-canvas-surface';

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs uppercase tracking-widest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${baseStyles} ${className}`}
    >
      {/* Expanded Fitts's Law Hitbox */}
      <span className="absolute -inset-3" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
```

### 3. Asymmetric Bento Grid Card with Specular Highlight (`BentoCard.jsx`)
```jsx
import React from 'react';
import { motion } from 'framer-motion';

export const BentoCard = ({ children, className = '', colSpan = 'col-span-12 md:col-span-6' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl bg-canvas-card/80 backdrop-blur-md border border-border-subtle shadow-inner-bevel p-8 overflow-hidden group hover:border-border-focus transition-colors duration-500 ${colSpan} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
```

---

## Phase 4: Curated Asset & Editorial Guidelines

Map visual assets and typography to the specific target domain:

| Domain | Typography (Display / Sans) | Chromatic Palette | Curated Unsplash Pipeline |
|---|---|---|---|
| **Architecture & Spatial Design** | `Syne` / `Inter` | Basalt `#141517`, Bone `#F4F3EF`, Terracotta `#C85A32` | `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80` |
| **Haute Luxury & Fashion** | `Playfair Display` / `Neue Haas Grotesk` | Deep Onyx `#0C0C0E`, Champagne `#D6C5B3`, Off-White `#FAFAFA` | `https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80` |
| **High-Performance SaaS & AI** | `Space Grotesk` / `Inter Tight` | Obsidian `#08080A`, Slate `#141419`, Volt Lime `#D2FF00` | `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80` |
| **Fintech & Private Wealth** | `Cinzel` / `Plus Jakarta Sans` | Deep Forest `#081711`, Chalk `#F4F3EE`, Brass Gold `#C3A35E` | `https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80` |
| **Bespoke Creative Studio** | `Clash Display` / `General Sans` | Pure Black `#000000`, Bright White `#FFFFFF`, Volt `#CCFF00` | `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80` |

---

## Phase 5: Verification & Production Audit

Once all components and pages are assembled:

1. **Compilation Audit**:
   ```bash
   cd <project-name>
   npm run build
   ```
2. **Quality Assurance Check**:
   - [ ] No layout shifts on scroll ([CLS](file:///root/projects/.agents/skills/build-site/SKILL.md) $< 0.02$).
   - [ ] Lenis and GSAP ticking harmoniously with zero console warnings.
   - [ ] All interactive elements accessible via Tab with `focus-visible` rings.
   - [ ] Tested with `prefers-reduced-motion: reduce` for instant animation resolution.
   - [ ] Zero placeholder text ("Lorem", "Sample", "Test") across all views.
