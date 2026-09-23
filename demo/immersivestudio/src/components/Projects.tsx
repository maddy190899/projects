import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Search,
  Eye,
  Sliders,
  Check,
} from 'lucide-react';
import { CaseStudy } from '../types';
import { CaseStudyDrawer } from './CaseStudyDrawer';
import { KineticDivider } from './SvgAssets';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '01',
    title: 'Aetheria OS',
    subtitle: 'Next-Generation Spatial Computing & Holographic Canvas',
    client: 'Aetheria Systems (Zurich / SF)',
    year: '2026',
    category: 'Spatial Computing · WebGPU OS',
    summary:
      'Engineered an ultra-low latency spatial window manager and WebGPU rendering pipeline capable of 60 FPS multi-window spatial computing directly in the browser.',
    description:
      'Aetheria needed to break out of flat screen limitations. We created a spatial desktop operating system utilizing WebGPU compute shaders, procedural glass refraction, and spatial audio positioning.',
    challenge:
      'Rendering over 20 simultaneous spatial surfaces, dynamic refraction shaders, and hand-pose prediction within an ultra-strict 16ms frame budget on web clients.',
    solution:
      'Built a custom WebAssembly scenegraph engine paired with WebGPU compute pipelines for off-thread physics and frustum culling, achieving zero-jank frame times.',
    impact:
      'Onboarded 14.2M active users in 90 days. Reduced memory consumption by 54% compared to Electron alternatives and won FWA of the Month.',
    deviceType: 'browser',
    coverImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Active Monthly Users', value: '14.2M', change: '+320% QoQ' },
      { label: 'Time-to-Interactive', value: '0.42s', change: '-68% baseline' },
      { label: 'Sustained Frame Rate', value: '60 FPS', change: 'WebGPU Locked' },
    ],
    techStack: ['WebGPU', 'React Server Components', 'Three.js / GLSL', 'Wasm Engine', 'WebAudio API'],
    liveUrl: 'https://aetheria.immersivestudio.space',
    designTokens: [
      { name: 'Spatial Acrylic Blur', value: 'backdrop-blur(32px) saturate(180%)', category: 'spatial' },
      { name: 'Core Cyan Primary', value: '#00F0FF (99.8% gamut)', category: 'color' },
      { name: 'Spring Tension', value: '{ stiffness: 420, damping: 28 }', category: 'motion' },
      { name: 'HUD Modular Scale', value: 'Space Grotesk + JetBrains Mono', category: 'typography' },
    ],
    wireframeNodes: [
      { x: 90, y: 120, label: 'Compute Engine' },
      { x: 230, y: 60, label: 'WebGPU Canvas' },
      { x: 370, y: 160, label: 'Spatial Scenegraph' },
      { x: 510, y: 90, label: 'Wasm Audio Sync' },
    ],
  },
  {
    id: '02',
    title: 'Kroma Financial',
    subtitle: 'Institutional WebGL Real-Time Liquidity Terminal',
    client: 'Kroma Capital Group (London / Singapore)',
    year: '2025',
    category: 'Fintech · High-Frequency WebGL',
    summary:
      'Designed and deployed an institutional execution terminal handling $18B+ daily trading volume with sub-5ms orderbook tick rendering.',
    description:
      'Institutional crypto and FX traders demanded desktop Bloomberg-grade throughput on modern web browsers. We developed custom canvas GPU instancing and zero-garbage collection state pipelines.',
    challenge:
      'Streaming 50,000 orderbook updates per second without triggering Chrome v8 garbage collection pauses or layout shifts.',
    solution:
      'Architected binary WebSocket buffers unpacked directly by Rust-compiled WebAssembly, rendering 100,000 data points concurrently via custom GLSL vertex buffers.',
    impact:
      'Executed $18.4B in average daily transaction volume. Reduced order latency to 3.2ms and achieved a 210% liquidity inflow across Tier-1 institutions.',
    deviceType: 'laptop',
    coverImage:
      'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Daily Trading Volume', value: '$18.4B', change: '+210% Liquidity' },
      { label: 'Order Execution Latency', value: '3.2ms', change: 'Zero Drop' },
      { label: 'Concurrent WebSockets', value: '1.8M', change: '99.999% SLA' },
    ],
    techStack: ['Rust / WebAssembly', 'WebGL 2.0 / WebGPU', 'WebSocket Multiplexing', 'Tailwind CSS', 'SIMD Optimization'],
    liveUrl: 'https://kroma.immersivestudio.space',
    designTokens: [
      { name: 'Terminal Background', value: '#07090E (OLED Dark)', category: 'color' },
      { name: 'Execution Green', value: '#10B981 (High-Contrast)', category: 'color' },
      { name: 'Chart Refresh Rate', value: '120Hz Hardware Sync', category: 'motion' },
      { name: 'Data Grid Font', value: 'JetBrains Mono Tabular', category: 'typography' },
    ],
    wireframeNodes: [
      { x: 80, y: 130, label: 'Binary Socket' },
      { x: 220, y: 70, label: 'Rust Wasm Parser' },
      { x: 380, y: 150, label: 'GLSL Instancing' },
      { x: 520, y: 80, label: 'Zero-GC State' },
    ],
  },
  {
    id: '03',
    title: 'Vanguard Atelier',
    subtitle: 'Luxury 3D Timepiece E-Commerce & Interactive Configurator',
    client: 'Vanguard Horlogerie (Geneva / Paris)',
    year: '2026',
    category: 'Luxury E-Commerce · 3D Configurator',
    summary:
      'Constructed a photorealistic 3D configurator allowing collectors to inspect micro-mechanical movements, customize rare alloy finishes, and checkout in real time.',
    description:
      'Vanguard needed an online shopping experience matching the physical touch of a Geneva watch salon. We created microscopic physical raytraced material shaders and dynamic macro zoom.',
    challenge:
      'Delivering 4K photorealistic watch models with 180 moving tourbillon gears while keeping initial asset downloads under 3.5MB over 4G mobile networks.',
    solution:
      'Pioneered Draco geometry mesh compression with KTX2 / Basis Universal GPU textures and custom physically-based metallic anisotropic sheen shaders.',
    impact:
      '+184% lift in multi-million dollar timepiece reservations, 4.8 minute average session duration, and winner of eCommerce Site of the Year.',
    deviceType: 'zoomable',
    coverImage:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Checkout Conversion Lift', value: '+184%', change: 'Record High' },
      { label: 'Avg Session Duration', value: '4m 48s', change: '+340% Industry Avg' },
      { label: 'Compressed 3D Payload', value: '3.1 MB', change: '-62% vs GLTF' },
    ],
    techStack: ['Three.js / GLSL', 'Draco Compression', 'Headless Shopify GraphQL', 'Framer Motion', 'Post-Processing Bloom'],
    liveUrl: 'https://vanguard.immersivestudio.space',
    designTokens: [
      { name: 'Obsidian Matte Finish', value: '#121418 Roughness 0.2', category: 'color' },
      { name: 'Rose Gold Specular', value: '#ECC0A8 Metallic 0.95', category: 'color' },
      { name: 'Micro-Pan Ease', value: 'cubic-bezier(0.16, 1, 0.3, 1)', category: 'motion' },
      { name: 'Editorial Serif Display', value: 'Italiana + Space Grotesk', category: 'typography' },
    ],
    wireframeNodes: [
      { x: 90, y: 110, label: 'Draco Decompress' },
      { x: 230, y: 60, label: 'PBR Tourbillon' },
      { x: 380, y: 160, label: 'Shader Bloom' },
      { x: 520, y: 100, label: 'Shopify GraphQL' },
    ],
  },
];

interface ProjectsProps {
  onSelectProjectForBrief: (title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForBrief }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Interactive Material Switcher for Vanguard Atelier
  const [activeMaterial, setActiveMaterial] = useState<'obsidian' | 'rosegold' | 'carbon'>('obsidian');

  // Interactive Zoom Lens State for Vanguard Atelier
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50, show: false });
  const zoomContainerRef = useRef<HTMLDivElement | null>(null);

  const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomContainerRef.current) return;
    const rect = zoomContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y, show: true });
  };

  const handleZoomLeave = () => {
    setZoomPos((prev) => ({ ...prev, show: false }));
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Featured Case Studies // Verified Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
            Architecting <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Tomorrow's Web
            </span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-md font-light text-sm sm:text-base leading-relaxed">
          Zero placeholders. Deep architectural transformations for venture-backed unicorns and
          legacy luxury houses with verified production metrics.
        </p>
      </div>

      {/* CASE STUDY 1: AETHERIA OS (Realistic Dark-Mode Browser Window Mockup) */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#0d0f15] border border-white/10 overflow-hidden shadow-2xl shadow-cyan-950/20"
        >
          {/* Realistic Dark Browser Mockup Chrome */}
          <div className="px-4 py-3.5 bg-[#12151c] border-b border-white/10 flex items-center justify-between gap-4">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors inline-block cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors inline-block cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors inline-block cursor-pointer" />

              {/* Navigation Arrows */}
              <div className="hidden sm:flex items-center gap-1 ml-3 text-slate-500">
                <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-slate-300" />
                <ChevronRight className="w-4 h-4 cursor-pointer hover:text-slate-300" />
                <RotateCcw className="w-3.5 h-3.5 cursor-pointer hover:text-slate-300 ml-1" />
              </div>
            </div>

            {/* Browser Address Bar with SSL Lock Icon */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-[#07080a] border border-white/10 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 truncate">
                <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-500 select-none">https://</span>
                <span className="text-cyan-300 truncate">spatial.aetheria.os/workspace/v2.4</span>
              </div>
              <span className="hidden md:inline text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                WebGPU Verified
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => setSelectedCaseStudy(CASE_STUDIES[0])}
                className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Inspect Architecture</span>
              </button>
            </div>
          </div>

          {/* Browser Viewport with Interactive Holographic Surface */}
          <div className="relative p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-b from-[#0b0d12] to-[#07080a]">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
                    {CASE_STUDIES[0].category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Deployed {CASE_STUDIES[0].year}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                  {CASE_STUDIES[0].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {CASE_STUDIES[0].summary}
                </p>

                {/* Metrics Pill Row */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {CASE_STUDIES[0].metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md"
                    >
                      <span className="text-xl sm:text-2xl font-display font-black text-cyan-400 block">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Engineering Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {CASE_STUDIES[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Trigger Drawer Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES[0])}
                    className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
                  >
                    <span>Open Architecture Spec</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Viewport Mockup Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl group">
                  <img
                    src={CASE_STUDIES[0].coverImage}
                    alt="Aetheria OS Spatial Computing Interface"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Holographic Glass HUD Simulation */}
                  <div className="absolute top-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-xl border border-cyan-500/40 text-left font-mono text-[11px] text-slate-300 space-y-1 shadow-lg shadow-cyan-950/50">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>SPATIAL CANVAS 60FPS</span>
                    </div>
                    <div className="text-slate-400">WebGPU: ACTIVE</div>
                    <div className="text-slate-400">Latency: 0.42ms buffer</div>
                  </div>

                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-xl border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Spatial Compositor v2.4</div>
                      <div className="text-[10px] text-slate-400">14.2M Concurrent Nodes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kinetic Wave Divider */}
      <KineticDivider />

      {/* CASE STUDY 2: KROMA FINANCIAL (Realistic Laptop / Bezel Mockup with Screen Reflections) */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#090b10] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Mockup Viewport: MacBook Bezel Simulation */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              {/* Laptop Shell */}
              <div className="relative mx-auto rounded-2xl p-3 bg-gradient-to-b from-[#2a2d34] to-[#121316] shadow-2xl border border-white/15">
                {/* Screen Bezel */}
                <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 aspect-[16/10]">
                  {/* WebGL Crypto Terminal Interface */}
                  <img
                    src={CASE_STUDIES[1].coverImage}
                    alt="Kroma Financial Institutional WebGL Terminal"
                    className="w-full h-full object-cover"
                  />

                  {/* Authentic Glass Glare / Screen Reflection Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 30%, transparent 60%)',
                    }}
                  />

                  {/* Top Notch & Camera */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-black rounded-b-lg flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  </div>

                  {/* Live Terminal Overlay HUD */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/90 backdrop-blur-xl border border-white/10 flex items-center justify-between font-mono text-[11px]">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        BTC/USD $98,420.50
                      </span>
                      <span className="hidden sm:inline text-slate-400">Depth: 18,400 BTC</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>3.2ms EXEC</span>
                    </div>
                  </div>
                </div>

                {/* MacBook Aluminum Lip Notch */}
                <div className="w-24 h-1.5 mx-auto mt-2 rounded-b-md bg-[#3a3e47]" />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider">
                  {CASE_STUDIES[1].category}
                </span>
                <span className="text-xs font-mono text-slate-400">Deployed {CASE_STUDIES[1].year}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                {CASE_STUDIES[1].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {CASE_STUDIES[1].summary}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {CASE_STUDIES[1].metrics.slice(0, 2).map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md"
                  >
                    <span className="text-xl sm:text-2xl font-display font-black text-purple-400 block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {CASE_STUDIES[1].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedCaseStudy(CASE_STUDIES[1])}
                  className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                >
                  <span>Explore Terminal Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kinetic Wave Divider */}
      <KineticDivider reverse />

      {/* CASE STUDY 3: VANGUARD ATELIER (Luxury 3D E-Commerce Platform with Interactive Zoom Loupe) */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#0d0f15] border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider">
                  {CASE_STUDIES[2].category}
                </span>
                <span className="text-xs font-mono text-slate-400">Deployed {CASE_STUDIES[2].year}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                {CASE_STUDIES[2].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {CASE_STUDIES[2].summary}
              </p>

              {/* Interactive Material Swatches Configurator */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="uppercase text-slate-400">Interactive Finish Configurator:</span>
                  <span className="text-emerald-400 font-bold capitalize">{activeMaterial} Alloy</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveMaterial('obsidian')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                      activeMaterial === 'obsidian'
                        ? 'bg-slate-800 border-cyan-400 text-cyan-300'
                        : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-neutral-900 border border-white/30" />
                    <span>Obsidian Black</span>
                    {activeMaterial === 'obsidian' && <Check className="w-3 h-3" />}
                  </button>

                  <button
                    onClick={() => setActiveMaterial('rosegold')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                      activeMaterial === 'rosegold'
                        ? 'bg-slate-800 border-amber-400 text-amber-300'
                        : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-200" />
                    <span>Rose Gold</span>
                    {activeMaterial === 'rosegold' && <Check className="w-3 h-3" />}
                  </button>

                  <button
                    onClick={() => setActiveMaterial('carbon')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                      activeMaterial === 'carbon'
                        ? 'bg-slate-800 border-emerald-400 text-emerald-300'
                        : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-emerald-700 border border-emerald-400" />
                    <span>Carbon Forged</span>
                    {activeMaterial === 'carbon' && <Check className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {CASE_STUDIES[2].metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md"
                  >
                    <span className="text-xl sm:text-2xl font-display font-black text-emerald-400 block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {CASE_STUDIES[2].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedCaseStudy(CASE_STUDIES[2])}
                  className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  <span>Inspect 3D Configurator</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Zoom Viewer */}
            <div className="lg:col-span-6 relative">
              <div
                ref={zoomContainerRef}
                onMouseMove={handleZoomMove}
                onMouseLeave={handleZoomLeave}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 cursor-crosshair group aspect-square select-none"
              >
                {/* Base Image with material tint filter */}
                <img
                  src={CASE_STUDIES[2].coverImage}
                  alt="Vanguard Atelier Luxury 3D Watch"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeMaterial === 'rosegold'
                      ? 'sepia-[0.35] brightness-105'
                      : activeMaterial === 'carbon'
                      ? 'contrast-125 saturate-50'
                      : 'brightness-100'
                  }`}
                />

                {/* Instructions Pill */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 font-mono text-[11px] text-slate-300 flex items-center gap-2 pointer-events-none">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Hover to activate 2.5x macro lens inspection</span>
                </div>

                {/* Dynamic Zoom Loupe Lens */}
                {zoomPos.show && (
                  <div
                    className="absolute w-48 h-48 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.6)] overflow-hidden pointer-events-none hidden sm:block"
                    style={{
                      left: `calc(${zoomPos.x}% - 96px)`,
                      top: `calc(${zoomPos.y}% - 96px)`,
                      backgroundImage: `url(${CASE_STUDIES[2].coverImage})`,
                      backgroundSize: '350%',
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                    }}
                  >
                    {/* Lens Crosshair */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-full h-[1px] bg-cyan-400" />
                      <div className="h-full w-[1px] bg-cyan-400 absolute" />
                    </div>
                  </div>
                )}

                {/* Bottom Spec Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 font-mono text-[11px] text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Draco 3D: 3.1 MB // 60 FPS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProjectForBrief={onSelectProjectForBrief}
      />
    </section>
  );
};
