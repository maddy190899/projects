import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  Activity,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import {
  STUDIO_METRICS,
  CLIENT_LOGOS,
  CASE_STUDIES,
  COMPARISON_DATA
} from '../data/studioData';

export const HomePage = ({ setActivePage, onSelectCaseStudy }) => {
  return (
    <div className="space-y-32 sm:space-y-44 pt-28 sm:pt-36">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-volt/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          {/* Eyebrow metadata badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-border-subtle mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-volt animate-pulse" />
            <span className="text-xs font-mono tracking-eyebrow text-text-secondary uppercase">
              CREATIVE DIGITAL ENGINEERING · AWWWARDS SOTD JURY
            </span>
          </motion.div>

          {/* Primary Fluid Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="type-hero font-display font-bold text-text-primary tracking-tight mb-8"
          >
            WE ARCHITECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-volt via-white to-text-secondary">INTERACTIVE WEBSITES</span> THAT HELP ANY BUSINESS GROW ONLINE.
          </motion.h1>

          {/* Narrative Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-secondary type-body max-w-2xl leading-relaxed mb-10"
          >
            Rejecting static templates and clichéd layouts. We combine neuro-perceptual behavioral UX, 60/120fps kinetic motion physics, and sub-second Core Web Vitals to convert passive visitors into committed commercial buyers.
          </motion.p>

          {/* Dual Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              variant="primary"
              onClick={() => setActivePage('contact')}
              className="py-4 px-8 text-sm"
            >
              <span>Initiate Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              onClick={() => setActivePage('work')}
              className="py-4 px-8 text-sm"
            >
              <span>Explore Selected Work (06)</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Global Client Marquee */}
        <div className="mt-20 pt-10 border-t border-border-subtle overflow-hidden">
          <p className="text-[11px] font-mono tracking-eyebrow text-text-muted uppercase mb-6 text-center sm:text-left">
            ENGINEERED DIGITAL PLATFORMS FOR VISIONARY ENTERPRISES
          </p>
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar opacity-60 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, i) => (
              <span
                key={i}
                className="font-display font-bold text-sm tracking-widest text-text-secondary whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VERIFIED BENCHMARK METRICS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDIO_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-canvas-card border border-border-subtle shadow-inner-bevel hover:border-border-focus transition-colors"
            >
              <div className="type-h2 font-display font-bold text-accent-volt tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-display font-semibold text-sm text-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-xs font-mono text-text-muted leading-relaxed">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO GRID ARCHITECTURE */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-3">
            [ ARCHITECTURAL CAPABILITY MATRIX ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary max-w-3xl">
            Where Cinematic Art Direction Meets Computational Performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Kinetic Physics Engine */}
          <div className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-canvas-card border border-border-subtle shadow-card-elevated relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-volt/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-volt/10 transition-colors" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-canvas-base border border-border-subtle flex items-center justify-center text-accent-volt mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                  01 / GPU KINETICS
                </span>
                <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                  Lenis Scroll Transport & GSAP Frame Synchronization
                </h3>
                <p className="text-text-secondary type-body max-w-xl mb-6">
                  We decouple scroll momentum from the main UI thread, executing quintic deceleration curves at constant 60/120fps. Layout thrashing is eliminated through strict GPU layer isolation.
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle grid grid-cols-3 gap-4 font-mono text-xs text-text-muted">
                <div>
                  <span className="text-text-primary block font-semibold">120 FPS</span>
                  <span>Frame Budget</span>
                </div>
                <div>
                  <span className="text-text-primary block font-semibold">lagSmoothing(0)</span>
                  <span>Zero Desync</span>
                </div>
                <div>
                  <span className="text-text-primary block font-semibold">WCAG 2.2 AA</span>
                  <span>Reduced Motion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Neuro-Perceptual UX */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-canvas-card border border-border-subtle shadow-card-elevated relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-canvas-base border border-border-subtle flex items-center justify-center text-accent-volt mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
              02 / COGNITIVE ERGONOMICS
            </span>
            <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
              Neuro-Perceptual UX Science
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Leveraging Gestalt spatial groupings, Fitts’s Law magnetic cursor affordance, and Hick-Hyman cognitive minimization to accelerate buyer decision velocity.
            </p>
            <div className="p-4 rounded-xl bg-canvas-base border border-border-subtle text-xs font-mono text-accent-volt">
              Average Conversion Lift: +240%
            </div>
          </div>

          {/* Bento Card 3: 3D WebGL Configurator */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-canvas-card border border-border-subtle shadow-card-elevated relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-canvas-base border border-border-subtle flex items-center justify-center text-accent-volt mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
              03 / SPATIAL WEB
            </span>
            <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
              3D WebGL & Custom Shaders
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Real-time interactive digital twins, lighting simulations, and material configurators that allow customers to physically experience products directly in the browser.
            </p>
          </div>

          {/* Bento Card 4: Sub-Second Core Web Vitals */}
          <div className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-canvas-card border border-border-subtle shadow-card-elevated relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-canvas-base border border-border-subtle flex items-center justify-center text-accent-volt mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
              04 / PRODUCTION RESILIENCE
            </span>
            <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
              Uncompromising Core Web Vitals Performance
            </h3>
            <p className="text-text-secondary type-body max-w-xl mb-6">
              High-craft animations mean nothing if your site drops frames or lags on mobile. We engineer sub-second LCP, zero CLS, and instant sub-50ms INP across all global viewports.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-canvas-base border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block">LCP TARGET</span>
                <span className="text-accent-volt font-bold text-base">&lt; 0.9s</span>
              </div>
              <div className="p-3.5 rounded-xl bg-canvas-base border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block">CLS SHIFT</span>
                <span className="text-accent-volt font-bold text-base">0.00</span>
              </div>
              <div className="p-3.5 rounded-xl bg-canvas-base border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block">INP RESPONSIVENESS</span>
                <span className="text-accent-volt font-bold text-base">&lt; 50ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES REEL */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-3">
              [ PROVEN ENTERPRISE IMPACT ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary">
              Featured Case Studies
            </h2>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => setActivePage('work')}
            className="self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCaseStudy(item)}
              className="group cursor-pointer rounded-3xl bg-canvas-card border border-border-subtle hover:border-border-focus transition-all duration-500 overflow-hidden shadow-card-elevated flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-surface">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-accent-volt">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-accent-volt text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="type-h3 font-display font-bold text-text-primary mb-3 group-hover:text-accent-volt transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {item.tagline}
                </p>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Primary Result:</span>
                  <span className="text-accent-volt font-bold">{item.results[0].metric} {item.results[0].label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE STUDIO STANDARD COMPARISON */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-canvas-card border border-border-subtle p-8 sm:p-14 shadow-card-elevated">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-3">
              [ THE ARCHITECTURAL DIFFERENCE ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary mb-4">
              Standard Digital Agency vs. Immersive Studio
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Why high-growth ventures partner with us rather than conventional marketing agencies.
            </p>
          </div>

          <div className="divide-y divide-border-subtle">
            {COMPARISON_DATA.map((row, i) => (
              <div
                key={i}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-4 font-display font-semibold text-sm text-text-primary">
                  {row.metric}
                </div>
                <div className="md:col-span-4 text-xs font-mono text-text-muted">
                  <span className="text-red-400/80 mr-2">✕</span>
                  {row.standardAgency}
                </div>
                <div className="md:col-span-4 text-xs font-mono text-accent-volt font-medium">
                  <span className="text-accent-volt mr-2">✓</span>
                  {row.immersiveStudio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
