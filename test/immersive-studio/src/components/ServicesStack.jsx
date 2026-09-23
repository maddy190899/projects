import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  Code2, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Zap,
  Layers,
  Wand2
} from 'lucide-react';

const services = [
  {
    id: "spatial",
    title: "Spatial 3D & WebGL Experiences",
    icon: Box,
    badge: "Hardware-Accelerated",
    headline: "Immersive 3D environments that operate at 60FPS on any browser.",
    description: "We translate high-poly industrial CAD and 3D architectural models into lightweight, progressive WebGL assets. Our custom GLSL shaders create refractive glass, realistic materials, and real-time lighting without bogging down devices.",
    capabilities: [
      "Custom GLSL Fragment & Vertex Shaders",
      "Interactive 360° CAD & Product Exploders",
      "Progressive GLTF / GLB Asset Compression",
      "WebAudio & Spatial Acoustic Integration"
    ],
    metric: "0 Frame Drops on Mobile",
    techStack: ["Three.js", "WebGPU", "GLSL", "React Three Fiber", "Blender Pipeline"]
  },
  {
    id: "webapp",
    title: "High-Frequency Web Applications",
    icon: Code2,
    badge: "Sub-40ms TTFB",
    headline: "Mission-critical web apps engineered for sheer responsiveness and reliability.",
    description: "We build enterprise-grade platforms utilizing React 19, streaming Server Components, and globally distributed edge workers. Designed for financial terminals, SaaS dashboards, and high-concurrency platforms.",
    capabilities: [
      "Server-Driven UI & Streaming Token State",
      "Bi-directional WebSockets & Canvas Graphing",
      "Multi-Region Edge Compute via Cloudflare / Vercel",
      "Automated End-to-End Test Harnesses"
    ],
    metric: "99.99% Reliability SLA",
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers"]
  },
  {
    id: "ecommerce",
    title: "Headless Luxury Digital Commerce",
    icon: ShoppingBag,
    badge: "Conversion Engineered",
    headline: "Digital flagship stores that convert cold traffic into loyal brand patrons.",
    description: "Break free from cookie-cutter theme constraints. We design and engineer headless Shopify and custom Stripe architectures that boast sub-second page switches, dynamic bundling, and 3D spatial product try-on.",
    capabilities: [
      "Headless Shopify Storefront API Integration",
      "Custom One-Click Stripe Checkout Funnels",
      "Instantaneous Client-Side Navigation",
      "Dynamic Multi-Currency & Geolocation Routing"
    ],
    metric: "+240% Checkout Completion",
    techStack: ["Shopify Storefront API", "Stripe Custom Elements", "Algolia Search", "Klaviyo"]
  },
  {
    id: "motion",
    title: "Design Systems & Motion Choreography",
    icon: Wand2,
    badge: "Pixel-Accurate",
    headline: "Living design systems with fluid physics and micro-interactions.",
    description: "A great brand isn't static. We design systemic motion languages using spring physics, gesture tracking, and tactile haptic feedback that turn standard interactions into memorable sensory moments.",
    capabilities: [
      "Tokenized Figma-to-Code Design Systems",
      "Physics-Driven Spring Interactions",
      "Accessible WCAG 2.1 AAA Compliant Animations",
      "Complete Component Storybooks & Handover Docs"
    ],
    metric: "100% Design Token Fidelity",
    techStack: ["Motion / React", "Lenis Smooth Scroll", "Tailwind CSS", "Storybook", "Figma"]
  }
];

const technologies = [
  "React 19", "Three.js", "WebGL", "TypeScript", "Tailwind CSS", "Vite", 
  "Next.js", "WebAudio API", "GLSL Shaders", "Shopify Headless", "Stripe", 
  "Cloudflare Workers", "Supabase", "Motion", "Docker", "Rust Wasm"
];

export default function ServicesStack({ onSelectService }) {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono-code mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DISCIPLINARY MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white mb-4">
            Our Core <span className="gradient-text-accent">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't do generic websites. We build category-defining digital flagships engineered to command attention.
          </p>
        </div>

        {/* Interactive Capability Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isActive = svc.id === activeServiceId;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-950/40"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <div>
                  <p className={`text-xs font-mono-code uppercase mb-1 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {svc.badge}
                  </p>
                  <p className={`font-heading font-bold text-sm line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {svc.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep Dive Pane */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-cyan-400">
                <span>{activeService.badge}</span>
                <span>•</span>
                <span className="text-emerald-400">{activeService.metric}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {activeService.headline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Capabilities checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeService.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <p className="text-xs uppercase font-mono-code text-slate-400 mb-2">Architectural Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono-code bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Graphic */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono-code text-slate-400">
                  <span>SYSTEM SPECIFICATION</span>
                  <span className="text-emerald-400">STATUS: PRODUCTION</span>
                </div>

                <div className="space-y-4 text-xs font-mono-code">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 block mb-1">Target Framerate</span>
                    <span className="text-lg font-bold text-white font-heading">60.0 FPS Stable</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 block mb-1">Rendering Engine</span>
                    <span className="text-sm font-semibold text-cyan-300">WebGL 2.0 / WebGPU Pipeline</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 block mb-1">Delivery Edge</span>
                    <span className="text-sm font-semibold text-purple-300">Distributed Multi-Region Edge Workers</span>
                  </div>
                </div>

                <a
                  href="#estimator"
                  className="mt-6 w-full py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 text-xs font-bold text-cyan-300 text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build with this Discipline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Infinite Tech Stack Marquee */}
        <div className="mt-16 overflow-hidden py-4 border-y border-white/5 relative">
          <div className="flex gap-6 animate-pulse-slow">
            <div className="flex items-center gap-4 flex-wrap justify-center w-full">
              {technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full text-xs font-mono-code bg-white/[0.03] text-slate-400 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
