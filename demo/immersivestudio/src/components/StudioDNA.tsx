import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap, Code2, Globe2, Sparkles, Binary, Award } from 'lucide-react';

export const StudioDNA: React.FC = () => {
  const principles = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Hardware-Accelerated UX',
      description:
        'We do not treat browsers like document viewers. Every interaction is mapped to GPU vertex buffers, SIMD primitives, and 120Hz display refresh cycles.',
      tag: 'GLSL & WebGPU',
    },
    {
      icon: <Binary className="w-5 h-5 text-purple-400" />,
      title: 'Zero-Bloat Engineering',
      description:
        'We enforce strict sub-100kb critical bundle paths. Heavy operations are delegated to compiled WebAssembly or Web Worker pipelines.',
      tag: 'Rust & WebAssembly',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      title: 'Living Kinetic Motion',
      description:
        'No linear transitions. Every surface moves with authentic mass, spring dampening, and aerodynamic inertia inspired by mechanical watchmaking.',
      tag: 'Physics Engines',
    },
    {
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      title: 'Hardened Security & SLA',
      description:
        'Built for financial institutions and spatial platforms where downtime is measured in millions. Real-time edge failovers and end-to-end auditability.',
      tag: '99.999% Availability',
    },
  ];

  const clients = [
    { name: 'Aetheria Systems', domain: 'Spatial OS' },
    { name: 'Kroma Capital Group', domain: 'Fintech WebGL' },
    { name: 'Vanguard Horlogerie', domain: 'Luxury 3D' },
    { name: 'Synthetix Dynamics', domain: 'AI Compute' },
    { name: 'OmniChain Labs', domain: 'Protocol Terminal' },
    { name: 'Sovereign Motors', domain: 'EV Configurator' },
  ];

  return (
    <section id="studio-dna" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Studio DNA // Architectural Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
            Built on <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              First Principles
            </span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-md font-light text-sm sm:text-base leading-relaxed">
          We reject superficial aesthetics in favor of deep technical craftsmanship.
          Below are the four non-negotiable laws that govern every project we ship.
        </p>
      </div>

      {/* 4 Architectural Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {principles.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-[#0c0e15]/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>LAW 0{idx + 1} OF IMMERSIVE</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trusted Client Roster Carousel / Ticker */}
      <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            Partner Roster &amp; Institutional Backing
          </span>
          <span className="text-xs font-mono text-emerald-400">
            $4.2B+ Total Partner Market Cap
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col items-center text-center hover:border-white/20 transition-colors"
            >
              <span className="font-display font-bold text-xs text-white truncate max-w-full">
                {c.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase mt-1">
                {c.domain}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
