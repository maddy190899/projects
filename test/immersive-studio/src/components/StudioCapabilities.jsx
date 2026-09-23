import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles, Layers, Box, Code, ShoppingBag, Volume2 } from 'lucide-react';

const disciplines = [
  {
    num: "01",
    title: "SPATIAL WEB & GLSL SHADERS",
    tagline: "Volumetric 3D experiences operating at native 60FPS on any mobile viewport.",
    description: "We don't drop pre-baked 3D models into your page. We author custom GLSL fragment and vertex shaders, progressive mesh loaders, and compressed WebGPU assets that feel tactile, responsive, and immediate.",
    deliverables: [
      "Procedural GLSL Shaders & Raymarching",
      "Interactive 3D Product & CAD Deconstructors",
      "Progressive GLTF / Draco Mesh Optimization",
      "WebGPU Hardware Acceleration Pipelines"
    ],
    benchmark: "Sub-10 draw calls per scene"
  },
  {
    num: "02",
    title: "REACT 19 & HIGH-FREQUENCY WEB",
    tagline: "Enterprise web platforms engineered for zero-latency execution.",
    description: "For quantitative finance, mission-critical SaaS, and high-concurrency platforms, we build on React 19 with streaming server architecture and multi-threaded WebAssembly to guarantee zero layout shifts and instant interactions.",
    deliverables: [
      "Server-Driven UI & Streaming Token State",
      "Multi-Threaded Wasm Compute Engines",
      "Bi-directional WebSockets & Canvas 2D",
      "Edge Routing via Cloudflare & Fastly"
    ],
    benchmark: "Under 30ms Time to First Byte"
  },
  {
    num: "03",
    title: "LUXURY HEADLESS FLAGSHIPS",
    tagline: "Bespoke digital storefronts that turn casual traffic into devoted brand collectors.",
    description: "We dismantle the constraints of cookie-cutter themes. By coupling Shopify Storefront APIs with bespoke React frontends, we create editorial shopping experiences featuring 360-degree spatial inspection and sub-second page transitions.",
    deliverables: [
      "Headless Shopify & Custom Cart Middleware",
      "Tailored Stripe Elements Checkout Flows",
      "Spatial Product Try-on & Disassembly",
      "Global Multi-Currency & Geo-Routing"
    ],
    benchmark: "+210% Average Order Value lift"
  },
  {
    num: "04",
    title: "SOUND ARCHITECTURE & MOTION",
    tagline: "Tactile micro-interactions and interactive acoustic identity.",
    description: "The modern web is sensory. We compose generative soundscapes through the browser Web Audio API, synchronized with spring physics and kinetic typography, elevating routine clicks into memorable moments of craft.",
    deliverables: [
      "Browser Web Audio API Synthesizers",
      "Spring Physics Motion Choreography",
      "Zero-Drift Figma Token Synchronization",
      "WCAG 2.1 AAA Accessible Motion Standards"
    ],
    benchmark: "100% Token-to-Code Fidelity"
  }
];

export default function StudioCapabilities({ setCursorText, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="disciplines" className="py-32 px-6 sm:px-10 max-w-[1600px] mx-auto border-t border-chalk">
      
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-chalk">
        <div>
          <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
            [ 03 / CAPABILITIES & ARCHITECTURE ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            DISCIPLINARY <span className="font-serif-editorial font-normal text-zinc-400">mastery</span>
          </h2>
        </div>

        <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-mono-tag leading-relaxed">
          Four interconnected disciplines. No agency bloated bureaucracy. An agile pod of senior creative technologists dedicated to your milestone.
        </p>
      </div>

      {/* Accordion / Tabbed Architectural Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Numbered Disciplines Selector (Span 5) */}
        <div className="lg:col-span-5 space-y-3">
          {disciplines.map((d, index) => {
            const isActive = activeTab === index;
            return (
              <div
                key={d.num}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setCursorText?.("SELECT")}
                onMouseLeave={() => setCursorText?.("")}
                className={`p-6 border transition-all cursor-pointer ${
                  isActive 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent border-chalk hover:border-zinc-500 text-zinc-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tag text-xs font-bold">DISCIPLINE {d.num}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">
                  {d.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Breakdown (Span 7) */}
        <div className="lg:col-span-7 border border-chalk p-8 sm:p-12 bg-zinc-950 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-chalk pb-4 mb-6">
              <span className="font-mono-tag text-xs text-zinc-500 uppercase">
                SPECIFICATION MATRIX / {disciplines[activeTab].num}
              </span>
              <span className="font-mono-tag text-xs text-emerald-400">
                BENCHMARK: {disciplines[activeTab].benchmark}
              </span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              {disciplines[activeTab].tagline}
            </h4>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-8">
              {disciplines[activeTab].description}
            </p>

            <div className="space-y-3 pt-4 border-t border-chalk">
              <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                CORE DELIVERABLES:
              </span>
              {disciplines[activeTab].deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-zinc-200 font-mono-tag">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-chalk flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono-tag text-xs text-zinc-500">
              Deliverable Timeline: 4 - 8 Weeks
            </span>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>COMMISSION THIS DISCIPLINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
