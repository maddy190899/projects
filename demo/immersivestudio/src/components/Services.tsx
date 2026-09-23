import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ServiceIconBrackets,
  ServiceIconNeural,
  ServiceIconCube,
  ServiceIconRadar,
} from './SvgAssets';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export const SERVICES: ServiceItem[] = [
  {
    id: 'spatial-webgpu',
    title: 'Spatial Computing & WebGPU Systems',
    tagline: 'Transforming browsers into infinite spatial canvases.',
    description:
      'We engineer production WebGPU compute pipelines, custom GLSL refraction shaders, and Apple Vision Pro spatial web experiences with real-time hand-pose responsiveness.',
    features: [
      'WebGPU Compute Shader Pipelines',
      'Spatial Scenegraph & Acrylic Refractions',
      'Zero-Latency Spatial Audio Positioning',
      'Adaptive Frustum Culling Engine',
    ],
    deliverables: ['Custom WebGPU Engine', 'Spatial UI Component Library', '60 FPS Mobile Optimization'],
    iconType: 'brackets',
    metrics: '60 FPS Locked on Mobile & Spatial Web',
  },
  {
    id: 'creative-ai',
    title: 'Creative Intelligence & Generative Canvas',
    tagline: 'Living digital interfaces that learn and morph in real-time.',
    description:
      'We merge neural networks with GPU shaders to produce dynamic responsive canvases, conversational spatial agents, and algorithmic data generative systems.',
    features: [
      'Real-Time WebGL Generative Shaders',
      'Autonomous Visual Agent Telemetry',
      'Local-First Edge Model Inference',
      'Algorithmic Motion Synthesis',
    ],
    deliverables: ['Neural Shader Core', 'Interactive Data Visualizer', 'Dynamic Persona Engine'],
    iconType: 'neural',
    metrics: 'Sub-15ms Dynamic Inference Latency',
  },
  {
    id: '3d-configurators',
    title: '3D Configurator Engines & Photorealism',
    tagline: 'Museum-grade physical rendering with microscopic precision.',
    description:
      'We craft luxury e-commerce 3D configurators with physical raymarched materials, Draco compression, and real-time lighting switches for global luxury ateliers.',
    features: [
      'Draco & KTX2 Texture Stream Pipelines',
      'Physically-Based Micro-Sheen Shaders',
      'Headless Shopify / Medusa Integration',
      'Touch-Optimized Orbit & Pan Controls',
    ],
    deliverables: ['PBR 3D Engine', 'Shopify Custom App Layer', 'Asset Compression Pipeline'],
    iconType: 'cube',
    metrics: '-62% Asset Payload vs Standard GLTF',
  },
  {
    id: 'fintech-performance',
    title: 'High-Frequency Fintech & Terminal UX',
    tagline: 'Sub-millisecond execution for institutional capital.',
    description:
      'We develop desktop Bloomberg-grade web terminals handling billions in daily trading volume with Rust WebAssembly, zero-garbage collection, and WebSocket streams.',
    features: [
      'Rust-to-Wasm Binary Stream Parsers',
      'GLSL Instanced Candlestick Buffers',
      'Zero Garbage Collection Layout Engines',
      'Multi-Monitor Window Sync Protocol',
    ],
    deliverables: ['Terminal Web App', 'High-Speed Orderbook Canvas', 'Binary Protocol Bridge'],
    iconType: 'radar',
    metrics: '3.2ms Order Execution Render Latency',
  },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Studio Capabilities // Deep Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
            Specialized <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Disciplines
            </span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-md font-light text-sm sm:text-base leading-relaxed">
          We don't do cookie-cutter sites. We build customized, high-performance digital engines
          at the intersection of computer graphics, financial precision, and avant-garde brand design.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SERVICES.map((service) => {
          const isHovered = hoveredCard === service.id;

          return (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between border ${
                isHovered
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_0_35px_-5px_rgba(0,240,255,0.25)]'
                  : 'bg-[#0c0e14]/80 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Corner accent glow */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                  isHovered ? 'opacity-30 bg-cyan-400' : 'opacity-0'
                }`}
              />

              {/* Card Top: Animated Icon + Metric Pill */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Service Animated SVG Icon */}
                  {service.iconType === 'brackets' && (
                    <ServiceIconBrackets isHovered={isHovered} />
                  )}
                  {service.iconType === 'neural' && (
                    <ServiceIconNeural isHovered={isHovered} />
                  )}
                  {service.iconType === 'cube' && (
                    <ServiceIconCube isHovered={isHovered} />
                  )}
                  {service.iconType === 'radar' && (
                    <ServiceIconRadar isHovered={isHovered} />
                  )}

                  {/* Benchmark pill */}
                  <span className="text-[11px] font-mono font-medium px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-cyan-300">
                    {service.metrics}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400/90 mb-4">{service.tagline}</p>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8 border-t border-white/5 pt-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                    Technical Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Deliverables & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-slate-400"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 group shrink-0"
                >
                  <span>Scope Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
