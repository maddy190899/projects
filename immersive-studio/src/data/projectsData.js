export const projectsData = [
  {
    id: "kinetic-os",
    slug: "kinetic-os",
    title: "Kinetic OS",
    client: "Horizon Spatial Labs",
    year: "2025",
    category: "Spatial Web",
    tagline: "Next-generation browser-based spatial computing interface & 3D gesture system",
    description: "Horizon Labs required an uncompromising browser OS for spatial audio and visual telepresence. We engineered a custom WebGL render pipeline capable of instancing 45,000 interactive nodes at 120fps with zero layout latency and sub-50ms glass physics transitions.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    awards: ["Awwwards SOTD", "FWA of the Month", "Site of the Year Nominee"],
    metrics: [
      { label: "GPU Framerate", value: "120 FPS" },
      { label: "Avg Session Duration", value: "4m 52s" },
      { label: "Engagement Lift", value: "+340%" },
      { label: "First Contentful Paint", value: "0.58s" }
    ],
    stack: ["WebGL", "Three.js", "GLSL Shaders", "React 19", "WebAudio API", "Tailwind CSS"],
    deliverables: ["Spatial UI Design System", "Custom Shaders Engine", "Audio Synthesizer", "Full-Stack WebGL Platform"],
    testimonial: {
      quote: "Immersive Studio turned our theoretical spatial architecture into a kinetic masterpiece that redefined how the industry perceives web capabilities.",
      author: "Eleni Vance",
      title: "VP of Product Experience, Horizon Labs"
    },
    liveSimulation: {
      status: "Production Edge",
      region: "Global Anycast CDN",
      bandwidth: "4.8 Gbps Peak",
      uptime: "99.99%"
    }
  },
  {
    id: "aether-paris",
    slug: "aether-paris",
    title: "Aether Paris",
    client: "Aether Haute Horlogerie",
    year: "2025",
    category: "Headless Commerce",
    tagline: "Physically-based rendering 3D watch configurator & high-conversion flagship",
    description: "A luxury Parisian horology maison commissioning a tactile digital flagship. Customers configure bespoke sapphire crystals, tourbillon complications, and ceramic cases in photorealistic real-time ray-traced WebGL, driving 7-figure transactional volumes directly in-browser.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    awards: ["Awwwards SOTD", "FWA of the Day", "CSSDA Best UI/UX"],
    metrics: [
      { label: "Launch Weekend GMV", value: "$14.2M" },
      { label: "Configurator Conversion", value: "8.4%" },
      { label: "PBR Texture Memory", value: "< 24 MB" },
      { label: "Interaction Latency", value: "16ms" }
    ],
    stack: ["Three.js PBR", "Shopify Storefront API", "Next.js 15", "GSAP Ticker", "Stripe Custom Elements"],
    deliverables: ["3D CAD to WebGL Optimization", "Headless Storefront", "Bespoke Engraving Studio", "Global Multi-Currency"],
    testimonial: {
      quote: "Our collectors demanded perfection. Immersive Studio achieved a level of tactile finish that feels indistinguishable from holding the timepiece in Geneva.",
      author: "Henri de Saint-Germain",
      title: "Managing Director, Aether Paris"
    },
    liveSimulation: {
      status: "High Availability",
      region: "EU-West / US-East",
      bandwidth: "12.4 Gbps Peak",
      uptime: "100.0%"
    }
  },
  {
    id: "synapse-ai",
    slug: "synapse-ai",
    title: "Synapse Cognition",
    client: "Synapse Neural Systems",
    year: "2024",
    category: "AI & Shaders",
    tagline: "Live multi-agent neural graph observatory & data telemetry visualization",
    description: "Translating millions of multi-agent LLM parameter vectors into an intuitive 3D neural topography. We built real-time WebSocket stream ingestion rendering dynamic point-cloud tensors with custom compute-shader particle dispersion.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    awards: ["Awwwards Developer Site", "Webby Nominee: Best Visual Design"],
    metrics: [
      { label: "Real-time Data Points", value: "250K/sec" },
      { label: "Socket Latency", value: "12ms" },
      { label: "Active Researchers", value: "84,000+" },
      { label: "Lighthouse Performance", value: "99/100" }
    ],
    stack: ["WebGPU Shaders", "React 19", "WebSockets", "Rust WASM", "Tailwind CSS"],
    deliverables: ["Tensor Visualizer", "Real-Time WebSocket Pipeline", "Interactive Vector Playground", "Enterprise SDK Documentation"],
    testimonial: {
      quote: "The interface solved an existential problem for us: explaining multi-agent reasoning to enterprise buyers in three seconds of pure visual intuition.",
      author: "Dr. Marcus Chen",
      title: "Chief Scientist & Co-Founder, Synapse"
    },
    liveSimulation: {
      status: "Real-time Streaming",
      region: "US-West Cluster",
      bandwidth: "9.1 Gbps",
      uptime: "99.98%"
    }
  },
  {
    id: "volt-hypercars",
    slug: "volt-hypercars",
    title: "Volt Racing GT",
    client: "Volt Autonomous Mobility",
    year: "2024",
    category: "WebGL & 3D",
    tagline: "Hypercar aerodynamic CFD wind tunnel simulator & soundscape configurator",
    description: "An aerodynamic interactive experience allowing users to simulate computational fluid dynamics (CFD) airflow over the Volt GT hypercar chassis. Integrated dynamic Web Audio synthesizer modulating exhaust frequencies based on virtual RPM.",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
    awards: ["FWA of the Day", "Awwwards SOTD", "Lovie Gold Winner"],
    metrics: [
      { label: "Aerodynamic Mesh Polygons", value: "180,000" },
      { label: "Audio Synthesizer Nodes", value: "64 Voice" },
      { label: "Pre-orders Generated", value: "1,240 Units" },
      { label: "Core Web Vitals INP", value: "14ms" }
    ],
    stack: ["Three.js", "Web Audio API", "GLSL Flow Shaders", "GSAP ScrollTrigger", "Lenis"],
    deliverables: ["Wind Tunnel CFD Simulation", "Web Audio V8 Engine Synth", "VIP Reservation Portal", "Interactive Telemetry HUD"],
    testimonial: {
      quote: "Our electric hypercar required an encounter that stimulated the senses before rubber touched asphalt. Immersive Studio delivered an unmitigated triumph.",
      author: "Julian Thorne",
      title: "Chief Brand Architect, Volt Mobility"
    },
    liveSimulation: {
      status: "Active Telemetry",
      region: "Global Edge",
      bandwidth: "18.3 Gbps",
      uptime: "99.995%"
    }
  },
  {
    id: "chrono-archive",
    slug: "chrono-archive",
    title: "Chrono Archive",
    client: "Swiss Horology Foundation",
    year: "2024",
    category: "Spatial Web",
    tagline: "Interactive 300-year mechanical escapement museum & micro-mechanics timeline",
    description: "A digital sanctuary documenting three centuries of mechanical escapements. Users dismount microscopic balance wheels, hairsprings, and tourbillon cages with sub-millimeter zoom precision and kinetic haptic feedback.",
    heroImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1600&q=80",
    awards: ["Awwwards Site of the Month", "FWA SOTD"],
    metrics: [
      { label: "Interactive Components", value: "450 3D Parts" },
      { label: "Global Museum Visitors", value: "3.2M" },
      { label: "Average Time on Site", value: "6m 18s" },
      { label: "Bounce Rate", value: "18.4%" }
    ],
    stack: ["WebGL", "Three.js", "Custom Physics Engine", "Lenis", "Tailwind CSS"],
    deliverables: ["3D Exploded Assemblies", "Historical Interactive Timeline", "Sound FX Micro-Engine", "Curatorial CMS"],
    testimonial: {
      quote: "The delicate beauty of 18th-century horological artistry translated into the digital medium with reverence and surgical technical precision.",
      author: "Claire Dupont",
      title: "Curatorial Director, Swiss Horology Foundation"
    },
    liveSimulation: {
      status: "Archival Edge",
      region: "Zurich / London",
      bandwidth: "3.4 Gbps",
      uptime: "100.0%"
    }
  },
  {
    id: "nexus-capital",
    slug: "nexus-capital",
    title: "Nexus Liquidity",
    client: "Nexus Global Capital",
    year: "2024",
    category: "Headless Commerce",
    tagline: "High-frequency visual trading terminal & institutional asset liquidity console",
    description: "Redefining institutional wealth interfaces through dark-mode kinetic telemetry, multi-exchange depth order charts, and sub-10ms instantaneous WebGL order book visualizations for quantitative asset managers.",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    awards: ["Fintech Design Award 2024", "Awwwards Honorable Mention"],
    metrics: [
      { label: "Order Execution Sync", value: "< 8ms" },
      { label: "AUM Managed via Terminal", value: "$4.8B" },
      { label: "User Task Completion", value: "3.8x Faster" },
      { label: "Core Web Vitals CLS", value: "0.000" }
    ],
    stack: ["React 19", "WebGL Canvas", "WebSocket Protocol", "Tailwind CSS", "Framer Motion"],
    deliverables: ["Institutional Terminal UX", "WebGL Order-Book Visualizer", "Compliance Telemetry Suite", "Multi-Seat Dashboard"],
    testimonial: {
      quote: "Our trading partners describe it as the Bloomberg Terminal for the spatial era: razor sharp, zero distraction, and blisteringly fast.",
      author: "Arthur Sterling",
      title: "Managing Partner, Nexus Global"
    },
    liveSimulation: {
      status: "Financial Grade Edge",
      region: "Frankfurt / London / NYC",
      bandwidth: "24.6 Gbps",
      uptime: "99.999%"
    }
  }
];

export const capabilitiesData = [
  {
    code: "01 // GRAPHICS",
    title: "WebGL, WebGPU & GLSL Shaders",
    description: "We write bespoke fragment and vertex shaders, physically-based materials, and GPU-accelerated particle fields running fluidly at 60/120fps on modern mobile and desktop browsers.",
    deliverables: ["Custom GLSL Shaders", "Three.js / WebGL Architecture", "PBR Material Pipelines", "Instanced Mesh Rendering", "Photorealistic Raymarching"],
    metric: "120 FPS Benchmark",
    accent: "volt"
  },
  {
    code: "02 // KINETICS",
    title: "Neuro-Perceptual Motion & Spatial Audio",
    description: "Micro-interactions grounded in Fitts's law, spring physics, and Lenis smooth scrolling directly synced into GSAP render ticks. Synthesized Web Audio API soundscapes that make every interaction tactile.",
    deliverables: ["Lenis + GSAP Synchronization", "Fitts's Law Hitbox Extension", "Web Audio API Micro-Soundscapes", "Page Morph Transitions", "Reduced-Motion Compliant"],
    metric: "< 16ms Frame Budget",
    accent: "cyan"
  },
  {
    code: "03 // ARCHITECTURE",
    title: "Headless Composable & Next.js Systems",
    description: "Ultra-fast headless architectures built on React 19, Next.js, and edge networks with sub-millisecond TTFB, automated CDN asset pipelines, and atomic design token governance.",
    deliverables: ["Edge Compute & Cloudflare Workers", "Shopify Hydrogen / Headless Commerce", "Sanity / Contentful Enterprise CMS", "Multi-region Caching", "Zero Layout Shift (CLS < 0.01)"],
    metric: "100/100 Core Web Vitals",
    accent: "violet"
  },
  {
    code: "04 // STRATEGY",
    title: "Creative Direction & Digital Flagships",
    description: "We don't build generic marketing sites. We conceive world-class digital artifacts, editorial narratives, bespoke typography, and luxury digital identities that demand global recognition.",
    deliverables: ["Digital Flagship Strategy", "Editorial Copywriting & Tone", "Custom Typography & 3D Assets", "Awwwards SOTD Engineering", "Brand Immersion Experiences"],
    metric: "14x SOTD Accolades",
    accent: "volt"
  }
];

export const studioStats = [
  { value: "14", label: "Awwwards Site of the Day", detail: "Global Excellence" },
  { value: "09", label: "FWA of the Day / Month", detail: "Cutting-edge Tech" },
  { value: "99.8", label: "Avg Lighthouse Performance", detail: "Strict Optimization" },
  { value: "$180M+", label: "Client Revenue Impact", detail: "Commercial Proven" }
];

export const teamData = [
  {
    name: "Aiden Vance",
    role: "Founding Partner & Creative Technologist",
    bio: "Ex-Active Theory lead technologist. Pioneer of WebGL raymarching and sensory kinetic interfaces for Fortune 500 digital flagships.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    location: "London / Zurich"
  },
  {
    name: "Sora Takahashi",
    role: "Principal Shader & Graphics Architect",
    bio: "Specializing in WebGPU compute pipelines, physically-based rendering (PBR), and mathematical generative visual art.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    location: "Tokyo"
  },
  {
    name: "Mira Solis",
    role: "Head of Kinetic Motion & Behavioral UX",
    bio: "Former design director at Pentagram and BASIC/DEPT. Obsessed with Fitts's law ergonomics, typographic tension, and spring physics.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    location: "New York"
  },
  {
    name: "Klaus Lindqvist",
    role: "Head of Composable Systems & Cloud Edge",
    bio: "Distributed systems engineer focused on sub-50ms global TTFB, edge SSR caching, and headless e-commerce architectures.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    location: "Stockholm"
  }
];
