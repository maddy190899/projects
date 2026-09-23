import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Volume2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { sound } from '../lib/soundEngine';

export const InteractiveShowreel = ({ onSelectCaseStudy }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (idx) => {
    sound.playHover();
    setActiveIndex(idx);
  };

  const activeProject = CASE_STUDIES[activeIndex] || CASE_STUDIES[0];

  return (
    <div className="rounded-3xl bg-white border border-border-muted p-8 sm:p-14 shadow-luxury-lg overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-border-subtle">
        <div>
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-2">
            [ SENSORY 3D SHOWCASE REEL ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary tracking-tight">
            Flagships That Command Cult Followings
          </h2>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {CASE_STUDIES.slice(0, 4).map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelect(idx)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                activeIndex === idx
                  ? 'bg-accent-ink text-white font-medium shadow-luxury-sm'
                  : 'bg-canvas-muted text-text-secondary hover:text-text-primary'
              }`}
            >
              0{idx + 1} / {p.client}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Cinematic Preview Stage */}
        <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden bg-canvas-muted shadow-luxury-md group border border-border-subtle">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProject.id}
              src={activeProject.heroImage}
              alt={activeProject.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

          {/* Overlay info */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-electric bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 inline-block mb-3 shadow-luxury-sm">
                {activeProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onSelectCaseStudy(activeProject);
              }}
              className="px-5 py-3 rounded-full bg-white text-text-primary font-mono text-xs font-semibold uppercase hover:bg-accent-electric hover:text-white transition-all shadow-luxury-md flex items-center gap-2 flex-shrink-0"
            >
              <span>Explore Build</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Technical Telemetry & Impact Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-canvas-muted border border-border-subtle space-y-4">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-text-muted block">
              COMMERCIAL IMPACT
            </span>
            <div className="type-h2 font-display font-bold text-accent-ink tracking-tight">
              {activeProject.results[0].metric}
            </div>
            <p className="text-xs font-mono text-text-secondary">
              {activeProject.results[0].label} in live production deployment.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <span className="text-text-muted uppercase tracking-wider block">Production Stack</span>
            <div className="flex flex-wrap gap-2">
              {activeProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-canvas-muted border border-border-subtle text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-subtle shadow-luxury-sm text-xs font-light text-text-secondary leading-relaxed">
            <span className="font-semibold text-text-primary block font-mono mb-1">Architecture Directive:</span>
            {activeProject.summary}
          </div>
        </div>
      </div>
    </div>
  );
};
