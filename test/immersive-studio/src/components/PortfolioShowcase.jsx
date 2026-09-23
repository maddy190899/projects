import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Monitor, 
  Smartphone, 
  X, 
  CheckCircle,
  Code2,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const portfolioProjects = [
  {
    id: "aether-spatial",
    title: "Aether Spatial Web Experience",
    client: "Aether Sound Technologies",
    category: "Spatial & 3D",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "An interactive spatial audio browser platform featuring 3D dynamic fluid mesh audio visualizers, WebAudio synthesizers, and WebGL physics.",
    metrics: "+320% Session Length",
    secondaryMetric: "60 FPS on Mobile",
    tags: ["Three.js", "WebGL", "React 19", "Web Audio API", "Tailwind"],
    fullStory: "Aether approached Immersive Studio to replace their traditional marketing site with a full browser-based spatial sound laboratory. We created a custom GLSL fluid shader that vibrates according to real-time audio frequencies, maintaining 60 frames per second even on battery-saving mobile devices.",
    deliverables: ["Custom GLSL Shaders", "Spatial Headphone Calibration UI", "WebAudio DSP Pipeline", "Next.js Headless CMS"]
  },
  {
    id: "pulse-capital",
    title: "Pulse Capital Algorithmic Terminal",
    client: "Pulse Global Macro Fund",
    category: "FinTech & Web3",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    description: "Ultra-low latency institutional trading platform with real-time WebSockets, sub-millisecond chart rendering, and biometrically secured wallet integrations.",
    metrics: "$1.4B Volume Routed",
    secondaryMetric: "12ms Stream Latency",
    tags: ["WebSockets", "Canvas 2D", "TypeScript", "Tailwind", "Rust WebAssembly"],
    fullStory: "High-frequency traders cannot tolerate lag. Immersive Studio engineered a bespoke Canvas-based charting engine that renders 200,000 tick updates per second without dropping frames, completely outpacing traditional SVG libraries.",
    deliverables: ["Wasm Order Execution Engine", "Low-latency WebSocket Gateway", "Bespoke Canvas Financial Charts", "SOC-2 Compliant UI"]
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir Haute Horlogerie",
    client: "Maison Noir Geneva",
    category: "Luxury E-Commerce",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    description: "A digital flagship showroom for Swiss horology featuring 360-degree interactive timepiece disassembly, bespoke typography, and headless Shopify checkout.",
    metrics: "+210% AOV Lift",
    secondaryMetric: "0.29s Page Transitions",
    tags: ["Headless Shopify", "3D Product Viewer", "Motion", "Tailwind", "Stripe"],
    fullStory: "To convey the precision of mechanical watches in a browser, we engineered a custom 3D model inspector with lighting simulation that reacts to the user's cursor tilt, paired with instantaneous headless cart mutations.",
    deliverables: ["Interactive 3D Horology Exploded View", "Headless Shopify Storefront", "Global Multi-currency Checkout", "Luxury Motion Micro-interactions"]
  },
  {
    id: "synapse-ai",
    title: "Synapse Cognitive Canvas",
    client: "Synapse Neural Inc.",
    category: "AI Intelligence",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    description: "A generative UI dashboard orchestrating multimodal AI agents, neural network visualization graphs, and continuous model telemetry.",
    metrics: "480k Monthly Active Engineers",
    secondaryMetric: "99.99% Reliability",
    tags: ["AI Streaming UI", "Node Mesh SVG", "React 19", "FastAPI Integration"],
    fullStory: "Synapse needed a UI that could visualize complex multi-agent reasoning steps in real time. We built a dynamic node graph with physics simulation, streaming token completions with zero layout shifts.",
    deliverables: ["Multimodal Prompt Visualizer", "Dynamic Agent Flow Canvas", "Token Streaming Optimizations", "Dark Cyber UI Design System"]
  },
  {
    id: "kroma-spatial",
    title: "Kroma Architectural Spatial Walkthrough",
    client: "Kroma Design Collective",
    category: "Spatial & 3D",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A virtual architectural exhibition environment with interactive daylight simulation, material swatches, and floorplan spatial transitions.",
    metrics: "+410% Lead Conversion",
    secondaryMetric: "Under 1.2MB Total Initial Payload",
    tags: ["WebGL", "Three.js", "PBR Materials", "Tailwind", "Vite"],
    fullStory: "Architects and luxury buyers can explore planned estates before a single foundation is laid. Immersive Studio compressed high-fidelity photorealistic interiors into progressive web assets loading in under a second.",
    deliverables: ["PBR Photorealistic Material Shaders", "Interactive Daylight Slider", "Spatial Floorplan Navigation", "Instant Lead Generation Suite"]
  },
  {
    id: "veloce-hypercar",
    title: "Veloce Hypercar 3D Configurator",
    client: "Veloce Automobili",
    category: "Spatial & 3D",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    description: "Next-generation automotive 3D configurator with metallic paint shader reflection probes, carbon fiber weaves, and real-time aerodynamics simulation.",
    metrics: "$28M Pre-orders Booked",
    secondaryMetric: "Zero Plugin Dependency",
    tags: ["WebGPU Ready", "GLSL Raymarch", "React", "Cloudflare Workers"],
    fullStory: "Veloce requested an ultra-luxury car configurator that operates without lag on mobile phones. We implemented custom environment maps and real-time reflections directly in the browser.",
    deliverables: ["Real-time Metallic Flake Paint Shader", "Custom Interior Stitching Selector", "Audio Engine Revving Simulation", "VIP Bespoke Order Concierge"]
  }
];

export default function PortfolioShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [previewDevice, setPreviewDevice] = useState("desktop");

  const categories = ["All", "Spatial & 3D", "FinTech & Web3", "Luxury E-Commerce", "AI Intelligence"];

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT ENGAGEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Selected <span className="gradient-text-accent">Creations</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Real Photography Image Container (Zero placeholders) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedModalProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1019] via-transparent to-transparent opacity-70" />
                
                {/* Metric Overlay */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-full text-[11px] font-mono-code text-cyan-300 font-semibold shadow-lg">
                  {project.metrics}
                </div>

                <div className="absolute bottom-4 left-4 text-xs font-mono-code text-slate-300 uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {project.client}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-500 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inspect Deep Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0C1019] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Hero Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedModalProject.image}
                  alt={selectedModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1019] via-[#0C1019]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {selectedModalProject.category}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400">
                      Client: {selectedModalProject.client}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                    {selectedModalProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div>
                    <p className="text-xs font-mono-code text-slate-400">Primary Impact</p>
                    <p className="text-xl font-bold font-heading text-cyan-400">{selectedModalProject.metrics}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono-code text-slate-400">Technical Metric</p>
                    <p className="text-xl font-bold font-heading text-emerald-400">{selectedModalProject.secondaryMetric}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs font-mono-code text-slate-400">Core SLA</p>
                    <p className="text-xl font-bold font-heading text-purple-400">99.98% Uptime</p>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2">
                    Engineering Strategy & Architecture
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedModalProject.fullStory}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-3">
                    Shipped Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedModalProject.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-200">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono-code bg-white/5 text-cyan-300 border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action in Modal */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono-code">
                    Ready to build something equally daring?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedModalProject(null);
                      document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
                  >
                    Estimate Similar Project
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
