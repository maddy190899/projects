import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { ArrowDownRight, Sparkles, Terminal, Play, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const Hero = ({ onOpenInquiry, onOpenCaseStudy }) => {
  const [reelPlaying, setReelPlaying] = useState(false);

  const handleScrollToWork = () => {
    sound.playTactile(600, 0.04);
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-accent-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Top Eyebrow Section */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-canvas-card border border-border-subtle shadow-inner-bevel text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
          <span className="text-text-secondary">STUDIO STATUS:</span>
          <span className="text-accent-primary font-bold">ACCEPTING Q3-Q4 COMMISSIONS</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center gap-6 text-xs font-mono text-text-muted"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-accent-primary" /> 120 FPS WebGL
          </span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" /> Sub-50ms TTFB
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-muted" /> Awwwards SOTD x14
          </span>
        </motion.div>
      </div>

      {/* Main Kinetic Headline */}
      <div className="relative z-10 my-auto py-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="type-display font-display font-extrabold uppercase text-text-primary tracking-tightest max-w-5xl"
        >
          Engineering <span className="text-accent-primary inline-block">sensory</span> web flagships & spatial 3D.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <p className="type-body text-text-secondary max-w-2xl lg:col-span-8 font-sans font-light">
            We are an elite creative engineering laboratory. We synthesize bespoke WebGL & WebGPU shaders, headless composable architectures, and neuro-perceptual kinetics into digital artifacts that define global cultural dominance.
          </p>

          <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap gap-4 justify-start lg:justify-end">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={handleScrollToWork}
              onHoverSound={() => sound.playHover()}
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              size="md"
              onClick={() => {
                sound.playTactile(750, 0.04);
                onOpenInquiry();
              }}
              onHoverSound={() => sound.playHover()}
            >
              <span>Scope Project</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Interactive Reel Teaser / Live Shader Terminal Preview */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-12 pt-8 border-t border-border-subtle"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Reel trigger card */}
          <div
            onClick={() => onOpenCaseStudy('kinetic-os')}
            onMouseEnter={() => sound.playHover()}
            className="group cursor-pointer rounded-2xl bg-canvas-card border border-border-subtle p-5 hover:border-accent-primary/50 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-canvas-surface border border-border-subtle flex items-center justify-center text-accent-primary group-hover:scale-105 group-hover:bg-accent-primary group-hover:text-black transition-all">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-accent-primary uppercase tracking-wider">Featured Release</div>
                <div className="text-sm font-bold text-text-primary">Kinetic OS // Horizon Labs</div>
              </div>
            </div>
            <span className="text-xs font-mono text-text-muted group-hover:text-text-primary transition-colors">
              Inspect →
            </span>
          </div>

          {/* Telemetry Metric pill 1 */}
          <div className="rounded-2xl bg-canvas-card/50 border border-border-subtle/80 p-5 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-text-muted uppercase">Avg Session Velocity</div>
              <div className="text-xl font-display font-bold text-text-primary">+340% Lift</div>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div>
              <div className="text-[10px] font-mono text-text-muted uppercase">Framerate Target</div>
              <div className="text-xl font-display font-bold text-accent-primary">120 FPS Fixed</div>
            </div>
          </div>

          {/* Telemetry Metric pill 2 */}
          <div className="rounded-2xl bg-canvas-card/50 border border-border-subtle/80 p-5 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-text-muted uppercase">Core Web Vitals INP</div>
              <div className="text-xl font-display font-bold text-accent-cyan">14ms Grade A</div>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div>
              <div className="text-[10px] font-mono text-text-muted uppercase">Client Capital Lift</div>
              <div className="text-xl font-display font-bold text-text-primary">$180M+</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
