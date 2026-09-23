import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../data/projectsData';
import { Terminal, Shield, Sparkles, Compass, Cpu, Layers } from 'lucide-react';
import { BentoCard } from './BentoCard';

const PROTOCOL_STEPS = [
  {
    step: 'SPRINT 01',
    phase: 'Sensory Architecture & 3D Prototyping',
    desc: 'Rapid interactive WebGL wireframing, lighting tests, and math verification. Zero static Figma mockups where dynamic physics cannot be evaluated.',
    icon: Compass,
    accent: 'text-accent-primary'
  },
  {
    step: 'SPRINT 02',
    phase: 'Shader Synthesis & Instanced Rigs',
    desc: 'Writing low-level GLSL shaders, vertex deformations, and Draco-compressed geometry pipelines guaranteed under 10MB memory ceiling.',
    icon: Cpu,
    accent: 'text-accent-cyan'
  },
  {
    step: 'SPRINT 03',
    phase: 'Kinetic Motion & Web Audio Engine',
    desc: 'Locking Lenis smooth scrolling into GSAP ticker with lagSmoothing(0). Synthesizing micro-soundscapes and ergonomic Fitts hitboxes.',
    icon: Layers,
    accent: 'text-accent-violet'
  },
  {
    step: 'SPRINT 04',
    phase: 'Core Web Vitals & Global Edge Deploy',
    desc: 'Surgical sub-millisecond TTFB edge caching, automated asset pipelines, and zero cumulative layout shift verification across 40+ viewports.',
    icon: Shield,
    accent: 'text-accent-primary'
  }
];

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-muted uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-muted" />
            <span>06 // THE CREATIVE METHOD</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            The 4-Sprint Protocol
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          We reject the sluggish bureaucracy of legacy agencies. Our production engine executes with military velocity and surgical craft.
        </p>
      </div>

      {/* Protocol Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {PROTOCOL_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.step}
              className="p-8 rounded-3xl bg-canvas-card border border-border-subtle hover:border-border-focus transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono font-bold ${step.accent}`}>
                    {step.step}
                  </span>
                  <Icon className={`w-5 h-5 ${step.accent}`} />
                </div>
                <h3 className="text-base font-display font-bold text-text-primary mb-3">
                  {step.phase}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>PHASE 0{idx + 1}</span>
                <span>PRODUCTION MILESTONE</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Studio Leadership */}
      <div>
        <div className="mb-12">
          <span className="text-xs font-mono text-accent-primary uppercase tracking-wider">
            STUDIO CORE TEAM
          </span>
          <h3 className="type-h3 font-display font-bold text-text-primary uppercase mt-1">
            Engineers & Creative Directors
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-canvas-card border border-border-subtle overflow-hidden group hover:border-border-focus transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-canvas-surface">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-[10px] font-mono text-accent-primary uppercase">
                  {member.location}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-base font-display font-bold text-text-primary">
                    {member.name}
                  </h4>
                  <div className="text-xs font-mono text-accent-cyan mt-0.5 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-text-secondary font-sans leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
