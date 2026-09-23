import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, Layers, LayoutGrid, List, X, ExternalLink } from 'lucide-react';

export const studioProjects = [
  {
    num: "01",
    client: "BALENCIAGA",
    title: "The Spatial Digital Runway",
    year: "2026",
    discipline: "WebGL / Spatial Fashion / Three.js",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    awards: "Awwwards Site of the Month • FWA of the Day",
    impact: "+380% Time On Page",
    overview: "An uncompromising WebGL digital runway environment built for Paris Fashion Week. Visitors navigate dynamic volumetric light beams, photorealistic textile drape physics, and seamless soundscapes synchronized with cursor motion.",
    tech: ["WebGPU Fragment Shaders", "Cloth Simulation", "React 19", "Spatial Audio DSP"]
  },
  {
    num: "02",
    client: "POLESTAR",
    title: "Cinematic Vehicle Configurator",
    year: "2026",
    discipline: "Real-time 3D / Automotive / Raymarching",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    awards: "FWA of the Month • Cannes Cyber Shortlist",
    impact: "$34M Pre-Order Inquiries",
    overview: "Engineered to dismantle traditional automotive configurator lag. We achieved real-time metallic flake reflection probes and procedural aerodynamic airflow lines running at solid 60FPS on iOS Safari and mobile Chrome.",
    tech: ["Three.js", "PBR Material Pipeline", "Cloudflare Workers Edge", "TypeScript"]
  },
  {
    num: "03",
    client: "RIMOWA",
    title: "Exploration Archive & Spatial Heritage",
    year: "2025",
    discipline: "Interactive Archive / E-Commerce Flagship",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    awards: "D&AD Graphite Pencil • Site of the Year Nominee",
    impact: "+240% Direct Sales Lift",
    overview: "A digital tactile archive translating 120 years of German aluminum engineering into an interactive web monolith. Featuring 360-degree exploded luggage views and bespoke typography.",
    tech: ["Headless Shopify", "Custom WebGL Renderer", "Lenis Smooth Scroll", "Tailwind"]
  },
  {
    num: "04",
    client: "SPOTIFY",
    title: "Soundscape Neural Visualizer",
    year: "2025",
    discipline: "Web Audio Synthesizer / Generative Art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    awards: "Awwwards Best Sound Design • FWA of the Day",
    impact: "2.1M Active Sessions",
    overview: "A browser-based generative synthesizer transforming real-time listener telemetry into harmonic acoustic ripples and interactive GLSL liquid fields.",
    tech: ["Web Audio API", "GLSL Shaders", "Canvas 2D", "FastAPI"]
  },
  {
    num: "05",
    client: "THORNE CAPITAL",
    title: "Algorithmic Market Intelligence",
    year: "2025",
    discipline: "High-Frequency FinTech / Canvas Engine",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    awards: "FinTech Design Excellence Honor",
    impact: "$1.8B Streamed Daily",
    overview: "Eliminated rendering lag for institutional high-frequency traders. We built a custom multi-threaded WebAssembly and HTML5 Canvas pipeline capable of handling 250,000 tick updates per second.",
    tech: ["Rust WebAssembly", "Canvas 2D", "WebSockets", "Tailwind"]
  },
  {
    num: "06",
    client: "MAISON KROMA",
    title: "Architectural Spatial Walkthrough",
    year: "2024",
    discipline: "Architectural VR & Web / PBR Lighting",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    awards: "Awwwards Developer Site of the Day",
    impact: "88% Pre-Sale Conversion",
    overview: "High-end luxury real estate spatial platform allowing buyers worldwide to interact with daylight angles, structural material finishes, and volumetric interiors in real time.",
    tech: ["Three.js", "PBR Shaders", "Vite", "Motion"]
  }
];

export default function SelectedWork({ setCursorText, onOpenInquiry }) {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Floating cursor image follow physics
  const springX = useSpring(0, { stiffness: 350, damping: 25 });
  const springY = useSpring(0, { stiffness: 350, damping: 25 });

  const handleMouseMove = (e) => {
    springX.set(e.clientX + 30);
    springY.set(e.clientY - 120);
  };

  return (
    <section 
      id="work" 
      onMouseMove={handleMouseMove}
      className="py-32 px-6 sm:px-10 max-w-[1600px] mx-auto border-t border-chalk relative"
    >
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-chalk">
        <div>
          <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
            [ 01 / REPOSITORY OF COMMISSIONS ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            SELECTED <span className="font-serif-editorial font-normal text-zinc-400">works</span>
          </h2>
        </div>

        {/* View Switcher & Counter */}
        <div className="flex items-center gap-6">
          <span className="font-mono-tag text-xs text-zinc-400">
            TOTAL INDEX: (06)
          </span>

          <div className="flex items-center border border-chalk">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              title="Editorial Index List View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              title="Curated Visual Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Dynamic Image Follower (Visible in List Mode) */}
      <AnimatePresence>
        {viewMode === 'list' && hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            style={{ x: springX, y: springY }}
            className="fixed pointer-events-none z-30 w-80 h-52 overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 hidden lg:block"
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-tag text-white flex justify-between">
              <span>{hoveredProject.client}</span>
              <span className="text-emerald-400">{hoveredProject.impact}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIEW MODE A: Editorial Index List */}
      {viewMode === 'list' ? (
        <div className="border-t border-chalk">
          {studioProjects.map((project) => (
            <div
              key={project.num}
              onMouseEnter={() => {
                setHoveredProject(project);
                setCursorText?.("EXPLORE");
              }}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCursorText?.("");
              }}
              onClick={() => setSelectedCaseStudy(project)}
              className="group border-b border-chalk py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4"
            >
              {/* Left Identity */}
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono-tag text-xs text-zinc-500 group-hover:text-white transition-colors">
                  {project.num}
                </span>
                <div>
                  <span className="font-mono-tag text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">
                    {project.client} • {project.year}
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white group-hover:translate-x-3 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Right Discipline & Honors */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6 lg:gap-12">
                <div className="text-left lg:text-right">
                  <span className="text-xs font-mono-tag text-zinc-300 block mb-0.5">
                    {project.discipline}
                  </span>
                  <span className="text-[11px] font-mono-tag text-zinc-500 block">
                    {project.awards}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-chalk group-hover:border-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* VIEW MODE B: Curated Visual Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {studioProjects.map((project) => (
            <div
              key={project.num}
              onClick={() => setSelectedCaseStudy(project)}
              onMouseEnter={() => setCursorText?.("INSPECT")}
              onMouseLeave={() => setCursorText?.("")}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Full-bleed photography */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border border-chalk mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-editorial-zoom"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 font-mono-tag text-xs text-white border border-white/10">
                  {project.client}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 font-mono-tag text-xs text-emerald-400 border border-white/10">
                  {project.impact}
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-chalk pb-4">
                <div>
                  <span className="font-mono-tag text-xs text-zinc-500">{project.num} / {project.year}</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-300 transition-colors mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono-tag text-zinc-400 mt-1">{project.discipline}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Editorial Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-[#0e0e11] border border-chalk max-w-5xl w-full my-auto overflow-hidden relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 z-20 p-2.5 bg-black/80 border border-chalk text-zinc-300 hover:text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Case Study Header Banner */}
              <div className="relative aspect-[21/9] w-full bg-zinc-950 overflow-hidden">
                <img
                  src={selectedCaseStudy.accentImage || selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-black/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono-tag text-xs text-emerald-400 bg-black/60 px-3 py-1 border border-white/10 uppercase">
                    {selectedCaseStudy.client} • {selectedCaseStudy.year}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-2">
                    {selectedCaseStudy.title}
                  </h2>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 sm:p-10 space-y-8">
                
                {/* Metrics & Awards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 border border-chalk bg-black/40">
                  <div>
                    <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">Measured Outcome</span>
                    <span className="text-2xl font-display font-bold text-emerald-400">{selectedCaseStudy.impact}</span>
                  </div>
                  <div>
                    <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">Industry Honors</span>
                    <span className="text-sm font-mono-tag text-zinc-200">{selectedCaseStudy.awards}</span>
                  </div>
                  <div>
                    <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">Discipline</span>
                    <span className="text-sm font-mono-tag text-zinc-200">{selectedCaseStudy.discipline}</span>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest mb-3">
                    [ ARCHITECTURAL OVERVIEW ]
                  </h4>
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                    {selectedCaseStudy.overview}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest mb-3">
                    [ TECHNICAL PIPELINE ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.tech.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 border border-chalk text-xs font-mono-tag text-zinc-300 bg-white/[0.02]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-chalk flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-mono-tag text-xs text-zinc-400">
                    Interested in engineering a comparable experience?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      onOpenInquiry();
                    }}
                    className="px-6 py-3 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    DISCUSS A COMMISSION
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
