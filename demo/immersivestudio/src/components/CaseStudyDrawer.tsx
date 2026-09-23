import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, Sparkles, Layers, Sliders, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyDrawerProps {
  project: CaseStudy | null;
  onClose: () => void;
  onSelectProjectForBrief: (projectTitle: string) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  project,
  onClose,
  onSelectProjectForBrief,
}) => {
  // Listen for Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative z-10 w-full max-w-3xl h-full bg-[#0d0f14] border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto"
        >
          {/* Sticky Drawer Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#0d0f14]/90 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                Case Study #{project.id}
              </span>
              <span className="text-slate-400 font-mono text-xs">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Client Banner */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                <span>{project.client}</span>
                <span>•</span>
                <span>Deployed {project.year}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-400 text-lg mt-2 font-light">{project.subtitle}</p>
            </div>

            {/* Main Visual Cover */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300 bg-slate-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
                  {project.deviceType.toUpperCase()} ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-slate-950/80 px-3 py-1 rounded-lg border border-emerald-500/30">
                  PRODUCTION VERIFIED
                </span>
              </div>
            </div>

            {/* Performance Metrics Grid */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Verified Production Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-2xl font-display font-black text-cyan-300">
                      {m.value}
                    </span>
                    <span className="text-xs text-slate-400 font-medium mt-1">{m.label}</span>
                    {m.change && (
                      <span className="text-[11px] font-mono text-emerald-400 mt-2">
                        {m.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-Dive Narrative: Challenge / Solution / Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block mb-2">
                  01 // The Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                  02 // Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-2">
                  03 // Market Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Animated Wireframe & System Architecture SVG */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                Living Subsystem Architecture (Real-Time Mesh)
              </h3>
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 relative overflow-hidden">
                <svg viewBox="0 0 600 240" className="w-full h-auto">
                  <defs>
                    <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>

                  {/* Dynamic circuit paths */}
                  <motion.path
                    d="M 60,120 C 180,40 240,200 360,120 C 440,60 500,160 540,120"
                    fill="none"
                    stroke="url(#wireGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    animate={{ strokeDashoffset: [0, -48] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />

                  <motion.path
                    d="M 60,60 L 180,60 L 300,180 L 480,180 L 540,60"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />

                  {/* Wireframe Nodes */}
                  {project.wireframeNodes.map((node, i) => (
                    <g key={i}>
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="9"
                        fill="#07080a"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        animate={{ r: [8, 11, 8] }}
                        transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                      />
                      <circle cx={node.x} cy={node.y} r="3.5" fill="#8B5CF6" />
                      <text
                        x={node.x}
                        y={node.y + 24}
                        fill="#94a3b8"
                        fontSize="11"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Design System Tokens */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                Design System Tokens &amp; Spec
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.designTokens.map((token, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col"
                  >
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {token.category}
                    </span>
                    <span className="text-xs font-medium text-slate-200 mt-0.5">{token.name}</span>
                    <span className="text-[11px] font-mono text-cyan-400 mt-1">{token.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Production Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom CTA within Drawer */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Want similar engineering for your company?
              </span>
              <button
                onClick={() => {
                  onSelectProjectForBrief(project.title);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Scope Similar Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
