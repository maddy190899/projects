export const STUDIO_METRICS = [
  { value: "14×", label: "Awwwards SOTD", detail: "Site of the Day & Developer Honors" },
  { value: "19×", label: "FWA of the Day", detail: "Global Cutting-Edge Web Production" },
  { value: "+310%", label: "Average Client ROI", detail: "Empirically measured commercial lift" },
  { value: "0.78s", label: "Global Edge LCP", detail: "60/120fps GPU layer isolation" },
];

export const CLIENT_LOGOS = [
  "KURA GENÈVE",
  "AETHER SPATIAL",
  "CHRONOS HYPERCARS",
  "NEUROPULSE LABS",
  "VALKYRIE AUDIO",
  "MONOLITH ARCHITECTURE"
];

export const CASE_STUDIES = [
  {
    id: "kura-geneve",
    title: "Kura Genève — The Escapement of Time",
    client: "Kura Haute Horlogerie",
    category: "Haute Luxury & 3D",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    tagline: "Swiss watchmaking micro-mechanics simulated in real-time WebGL with tactile escapement physics.",
    summary: "For a 180-year-old Swiss maison, we built an interactive digital flagship where collectors can dissemble tourbillon calibers down to the gear teeth, customize rose gold alloys, and reserve one-of-one allocations.",
    results: [
      { metric: "$42M+", label: "Q1 Private Reservations" },
      { metric: "+340%", label: "Average Session Duration" },
      { metric: "120 FPS", label: "Micro-Gear Simulation" },
      { metric: "0.81s", label: "Largest Contentful Paint" }
    ],
    techStack: ["WebGL / Three.js", "GLSL Shaders", "GSAP ScrollTrigger", "Lenis Momentum", "Tailwind CSS"],
    awards: ["Awwwards Site of the Day (8.62)", "FWA of the Month Nominee", "CSSDA Best UI/UX"],
    testimonial: {
      quote: "Most agencies offered us a flat e-commerce storefront. Immersive Studio built an interactive cathedral of mechanical watchmaking that sold out our entire annual allocation within four weeks.",
      author: "Henri Laurent",
      role: "Creative Director",
      company: "Kura Genève"
    }
  },
  {
    id: "aether-spatial",
    title: "Aether — Architectural Spatial Twin",
    client: "Aether Architectural Systems",
    category: "Spatial & Real Estate",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Ultra-prime architectural configurator with live daylight raycasting and material acoustics.",
    summary: "An interactive spatial platform engineered for ultra-high-net-worth real estate buyers. Clients walk through architectural elevations, test sunrise-to-sunset lighting studies, and inspect cantilevered glass facades from Tokyo to Zurich.",
    results: [
      { metric: "+310%", label: "Qualified Buyer Inquiries" },
      { metric: "$78M", label: "Compound Reservations" },
      { metric: "0.75s", label: "Global Edge LCP" },
      { metric: "0.00", label: "Cumulative Layout Shift" }
    ],
    techStack: ["React 19", "Three.js Raycasting", "Procedural Lighting", "Lenis", "GSAP"],
    awards: ["Awwwards Developer Award", "FWA of the Day", "Webby Honoree"],
    testimonial: {
      quote: "The interactive spatial fidelity eliminated physical distance for our billionaire buyers. It feels less like a website and more like standing inside the physical architecture.",
      author: "Julian Thorne",
      role: "CEO & Principal Architect",
      company: "Aether Systems"
    }
  },
  {
    id: "chronos-hypercars",
    title: "Chronos — Aerodynamic Hypercar Studio",
    client: "Chronos Motorwerks",
    category: "Automotive & WebGL",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tagline: "Photorealistic WebGL vehicle configurator with procedural paint shaders and wind-tunnel physics.",
    summary: "We engineered a GPU-accelerated interactive showroom allowing exotic vehicle buyers to sculpt custom carbon-fiber aero packages, adjust active spoilers, and simulate wind-tunnel aerodynamic vortexes in real time.",
    results: [
      { metric: "2.4M", label: "Interactive Config Sessions" },
      { metric: "100%", label: "Production Run Sold Out" },
      { metric: "60 FPS", label: "Mobile WebGL Frame Rate" },
      { metric: "+290%", label: "Press & Social Viral Lift" }
    ],
    techStack: ["Custom GLSL Shaders", "WebGL", "Framer Motion", "Lenis", "Web Audio API"],
    awards: ["FWA of the Day", "Awwwards SOTD", "Cutting Edge Project of the Year"],
    testimonial: {
      quote: "The car looks and sounds alive. The paint shaders react to cursor light sources with optical accuracy that shocked our automotive design studio.",
      author: "Alexander Vance",
      role: "Head of Design",
      company: "Chronos Motorwerks"
    }
  },
  {
    id: "neuropulse-labs",
    title: "NeuroPulse — Swarm Intelligence Console",
    client: "NeuroPulse Systems",
    category: "AI & Fintech",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    tagline: "Autonomous neural agent orchestration suite with real-time topological node physics.",
    summary: "Translating multi-agent cognitive reasoning into a visceral, sci-fi command console. We turned dense machine learning metrics into responsive interactive particle node graphs that captivated Fortune 50 enterprise procurement teams.",
    results: [
      { metric: "4.8×", label: "Daily Active User Retention" },
      { metric: "+420%", label: "Enterprise Inquiries" },
      { metric: "38ms", label: "Interaction to Next Paint" },
      { metric: "100k+", label: "Live Node Graph Objects" }
    ],
    techStack: ["Canvas 2D Engine", "React 19", "WebSockets", "GSAP Ticker", "Tailwind CSS"],
    awards: ["Awwwards Site of the Day", "FWA of the Day", "Webby Winner"],
    testimonial: {
      quote: "Most AI interfaces look like sterile developer terminals. Immersive Studio gave our neural agents a cinematic presence that made enterprise buyers immediately understand the power of our tech.",
      author: "Dr. Aris Thorne",
      role: "VP of Product",
      company: "NeuroPulse Systems"
    }
  },
  {
    id: "valkyrie-audio",
    title: "Valkyrie — Generative Spatial Sound",
    client: "Valkyrie Sound Labs",
    category: "Creative Audio & WebGL",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    tagline: "In-browser procedural synthesizer with real-time reactive 3D acoustic waveforms.",
    summary: "Built for Grammy-winning sound designers and avant-garde producers. Visitors sculpt acoustic frequencies directly in the browser with real-time Web Audio API synthesis and responsive 3D harmonic mesh distortions.",
    results: [
      { metric: "820k+", label: "Synthesizer Creations" },
      { metric: "+480%", label: "Hardware Pre-Orders" },
      { metric: "0.72s", label: "Largest Contentful Paint" },
      { metric: "99.9%", label: "Audio Thread Stability" }
    ],
    techStack: ["Web Audio API", "Three.js Particle Cloud", "Lenis", "React 19", "GSAP"],
    awards: ["Awwwards Experimental Site of the Month", "FWA of the Day"],
    testimonial: {
      quote: "They didn't just build our site—they engineered an interactive musical instrument that became the centerpiece of our global product launch.",
      author: "Mikael Voss",
      role: "Founder & Chief Acoustician",
      company: "Valkyrie Sound Labs"
    }
  }
];

export const SERVICES = [
  {
    id: "creative-direction",
    number: "01",
    title: "Haute Creative Direction & Brand Architecture",
    description: "We don't do templates. We craft unforgettable visual identities that command category leadership through monumental typography, visceral composition, and editorial distinction.",
    deliverables: [
      "Custom Typographic Systems & Monoline Glyphs",
      "Cinematic Art Direction & Spatial Layouts",
      "Asymmetric Bento Grids & Specular Depth",
      "Motion Design Guidelines & Brand Bible"
    ],
    impact: "Dominant Brand Salience & Cult Followings"
  },
  {
    id: "kinetic-engineering",
    number: "02",
    title: "WebGL 3D & GPU Kinetic Engineering",
    description: "Bridging the gap between software engineering and visceral cinema. We construct GPU-composited 60/120fps motion systems, virtualized momentum scrolling, and custom GLSL shaders.",
    deliverables: [
      "Lenis Smooth Scroll + Centralized GSAP Ticker",
      "Custom Three.js & GLSL Shader Pipelines",
      "Interactive 3D Product Configurators",
      "Hardware Layer Isolation & Zero Layout Thrashing"
    ],
    impact: "Buttery 120 FPS Fluidity Across All Devices"
  },
  {
    id: "conversion-science",
    number: "03",
    title: "Neuro-Perceptual UX & Conversion Science",
    description: "Aesthetics without conversion is vanity. We map cognitive visual pathways using Gestalt grouping, Fitts's Law magnetic cursor spring affordance, and Hick-Hyman cognitive minimization.",
    deliverables: [
      "Progressive Disclosure Funnel Engineering",
      "Zeigarnik Milestone Intake Wizards (01/04)",
      "Magnetic Hit-Box Expansion (≥12px)",
      "Peak-End Interaction Choreography"
    ],
    impact: "+310% Average Multi-Stage Conversion Lift"
  },
  {
    id: "creative-lab",
    number: "04",
    title: "Creative Technologist Lab & Audio Synthesis",
    description: "Pushing the browser to its absolute technological frontier. From procedural Web Audio API soundscapes to generative particle physics and interactive spatial tools.",
    deliverables: [
      "Procedural Web Audio Engine (Zero Assets)",
      "Real-time Generative Particle Simulations",
      "Interactive Shader Controls & Sandboxes",
      "Sub-Second Core Web Vitals (LCP < 0.8s, CLS 0.00)"
    ],
    impact: "Websites That Win SOTD & Redefine Categories"
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    law: "Websites Should Feel Alive",
    concept: "Static flat pages are digital brochures from 2012. Modern humans expect digital surfaces to respond with organic physics, tactile haptics, and cinematic rhythm.",
    implementation: "Every button, card, and scroll delta is wired to physical spring deceleration and instant audio-visual feedback."
  },
  {
    law: "The 70% Evaluative Rule",
    concept: "Design (40%) and Usability (30%) decide whether visitors stay or bounce within 3 seconds. Visual novelty cannot save an interface that drops frames or confuses the user.",
    implementation: "Strict W3C semantics, sub-second LCP, WCAG 2.2 AA accessibility, and zero layout shift."
  },
  {
    law: "Hick-Hyman Cognitive Velocity",
    concept: "Every unnecessary choice burns mental CPU cycles. Cognitive friction kills high-ticket conversions faster than bad copy.",
    implementation: "We restrict immediate root choices to ≤ 5, staging operational depth behind contextual progressive drawers."
  },
  {
    law: "Kinematics Over Cosmetics",
    concept: "Linear CSS animations look mechanical and cheap. Natural motion follows extended braking curves that communicate mass and inertia.",
    implementation: "Standardizing on quintic deceleration cubic-bezier(0.16, 1, 0.3, 1) and exponential damping."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Elena Rostova",
    role: "Founding Partner & Executive Creative Director",
    credentials: "Ex-Locomotive · Awwwards Jury Member",
    bio: "Obsessed with typographic tension, editorial layout rhythm, and building digital flagships that command cultural respect.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Head of WebGL & Creative Technology",
    credentials: "Ex-Active Theory · 19x FWA Winner",
    bio: "Pioneering GPU-accelerated web experiences, custom raycasting shaders, and real-time physical simulation in the browser.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kai Tanaka",
    role: "Principal Shader Artisan & Audio Engineer",
    credentials: "Ex-Monopo Tokyo · Webby Winner",
    bio: "Crafting procedural audio synthesis, generative canvas mathematics, and organic liquid visual effects.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Soren Lindqvist",
    role: "Principal Behavioral UX Scientist",
    credentials: "Cognitive Ergonomics Researcher",
    bio: "Applying pre-attentive neuro-perceptual models and Gestalt grouping to maximize conversion velocity in multi-million dollar funnels.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  }
];

export const COMPARISON_DATA = [
  {
    metric: "Visitor Retention & First Impression",
    standardAgency: "Generic template, static text blocks, instant bounce (< 15s avg session)",
    immersiveStudio: "Cinematic interactive world, sensory physics, 3.5+ minute avg session"
  },
  {
    metric: "Creative Technology & 3D",
    standardAgency: "Standard Webflow/WordPress sliders and stock icon packs",
    immersiveStudio: "Custom WebGL shaders, interactive 3D configurators, Lenis momentum"
  },
  {
    metric: "Audio & Tactile Feedback",
    standardAgency: "Mute, sterile, lifeless interaction states",
    immersiveStudio: "Procedural Web Audio synthesis, magnetic cursor pull, spring haptics"
  },
  {
    metric: "Core Web Vitals & Engineering",
    standardAgency: "Bloated plugin scripts (LCP > 3.5s, CLS > 0.15)",
    immersiveStudio: "Sub-second LCP (<0.8s), zero CLS, 60/120fps GPU layer isolation"
  }
];
