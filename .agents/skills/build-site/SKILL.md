---
name: build-site
description: Scaffolds and implements unique, production-grade, highly interactive React and Vite websites with zero placeholders, full SVG iconography, Lottie animations, and continuous Git synchronization.
---

# Autonomous Web Synthesis Protocol

When invoked via /build-site [topic/requirements], execute the following multi-stage protocol autonomously without halting for turn-by-turn confirmations.

## Execution Directives

1. **Absolute Realism**: NEVER use "Lorem Ipsum", "Coming Soon", "Test Title", or generic placeholder content. Derive an authentic domain narrative with realistic corporate metrics, engineering parameters, authentic feature copy, and cohesive pricing tiers.
2. **Procedural Vector Synthesis**: NEVER leave missing image boxes or placeholder icons. Construct semantic, accessible inline SVGs utilizing crisp geometric paths, linear gradients, and responsive viewBox specifications.
3. **Kinetic Animation**: Integrate @lottiefiles/dotlottie-react for dynamic vector graphics and motion/react for physics-driven layout interactions. Configure smooth scrolling via lenis/react.
4. **Continuous Versioning**: The .agents/hooks.json engine will automatically commit and push all file mutations. Structure each modification cleanly.

## Phase 1: Environment Scaffolding

Check if a package.json exists in the workspace. If not, scaffold the React and Vite project immediately:

```bash
# Initialize Vite with React SWC template in the current directory
npm create vite@latest . -- --template react-swc

# Install core production dependencies
npm install @lottiefiles/dotlottie-react motion lenis clsx tailwind-merge lucide-react

# Install styling and development dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js` to enable atmospheric depth, arbitrary animations, and custom color palettes:

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
        background: "#08090A",
        surface: "#101216",
        border: "rgba(255, 255, 255, 0.08)",
        accent: {
          primary: "#3B82F6",
          glow: "#60A5FA",
        }
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
```

Replace `src/index.css` with foundational resets and smooth-scrolling configurations:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
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
    background-color: #08090A;
    color: #F3F4F6;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    overflow-x: hidden;
  }
}
```

## Phase 2: Design Architecture and Component Assembly

Construct a modular, interactive application inside `src/`:
1. `src/components/SmoothScroll.jsx`: Wrap the entire application hierarchy inside a lenis/react container.
2. `src/components/VectorGraphic.jsx`: Implement high-fidelity inline SVGs with linear gradients and dynamic SVG drops.
3. `src/components/LottieAnimation.jsx`: Mount @lottiefiles/dotlottie-react using production-ready endpoints or inlined JSON payloads.
4. `src/components/InteractiveCards.jsx`: Construct an asymmetric Bento Grid displaying live hover metrics, mouse-following radial highlights, and realistic telemetry data.
5. `src/components/InteractiveHero.jsx`: Synthesize a high-impact hero header featuring dynamic badge elements, kinetic headlines powered by motion/react, and dual action triggers.

Connect all components inside `src/App.jsx` with real domain data and responsive dark glassmorphic styling.

## Phase 3: Build Verification and Runtime Health Audit

Execute the static compilation audit:
```bash
npm run build
```

Verify that compilation succeeds and outputs clean production artifacts to `dist/`.
