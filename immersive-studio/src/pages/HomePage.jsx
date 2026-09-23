import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  Activity,
  Award,
  ChevronRight,
  TrendingUp,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { KineticCanvas } from '../components/KineticCanvas';
import { TiltCard } from '../components/TiltCard';
import {
  STUDIO_METRICS,
  CLIENT_LOGOS,
  CASE_STUDIES,
  COMPARISON_DATA
} from '../data/studioData';

export const HomePage = ({ setActivePage, onSelectCaseStudy }) => {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-32 sm:space-y-44 pt-28 sm:pt-36">
      {/* 1. HERO SECTION WITH EMBEDDED KINETIC CANVAS */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Haute Editorial Typography */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-border-muted shadow-luxury-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
              <span className="text-xs font-mono tracking-eyebrow text-text-secondary uppercase">
                HAUTE CREATIVE ENGINEERING · SOTD JURY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="type-hero font-display font-bold text-text-primary tracking-tight"
            >
              WE ARCHITECT <span className="font-serif italic font-normal text-accent-electric">INTERACTIVE</span> DIGITAL WORLDS THAT GROW COMMERCE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary type-body max-w-xl font-light leading-relaxed"
            >
              Rejecting generic templates and static corporate sites. We synthesize neuro-perceptual behavioral UX, 60/120fps kinetic motion physics, and sub-second Core Web Vitals to convert visitors into loyal enterprise buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                variant="primary"
                onClick={() => navigateTo('contact')}
                className="py-4 px-8 text-sm"
              >
                <span>Initiate Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => navigateTo('work')}
                className="py-4 px-8 text-sm"
              >
                <span>Selected Work (04)</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Kinetic Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <KineticCanvas />
          </motion.div>
        </div>

        {/* Global Client Marquee */}
        <div className="mt-20 pt-10 border-t border-border-subtle overflow-hidden">
          <p className="text-[11px] font-mono tracking-eyebrow text-text-muted uppercase mb-6 text-center sm:text-left">
            ENGINEERED PLATFORMS FOR AMBITIOUS GLOBAL ENTERPRISES
          </p>
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, i) => (
              <span
                key={i}
                className="font-display font-bold text-sm tracking-widest text-text-secondary whitespace-nowrap hover:text-text-primary transition-colors cursor-default"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm hover:shadow-luxury-md hover:border-border-muted transition-all"
            >
              <div className="type-h2 font-display font-bold text-accent-ink tracking-tight mb-2">
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

      {/* 3. 3D PERSPECTIVE TILT BENTO MATRIX */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
            [ ARCHITECTURAL CAPABILITY MATRIX ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary max-w-3xl">
            Where Haute Visual Art Direction Meets Algorithmic Performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: 3D Tilt Card GPU Kinetics */}
          <TiltCard className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-canvas-muted border border-border-subtle flex items-center justify-center text-accent-ink mb-6 shadow-luxury-sm">
                <Zap className="w-6 h-6 text-accent-electric" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                01 / KINETIC ENGINE
              </span>
              <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                Lenis Scroll Momentum & Centralized GSAP Frame Ticker
              </h3>
              <p className="text-text-secondary type-body max-w-xl mb-6 font-light">
                We decouple scroll momentum from the DOM layout thread, executing quintic deceleration curves at constant 60/120fps. Layout reflows are prevented through strict GPU layer isolation.
              </p>
            </div>

            <div className="pt-6 border-t border-border-subtle grid grid-cols-3 gap-4 font-mono text-xs text-text-muted">
              <div>
                <span className="text-text-primary block font-semibold">120 FPS</span>
                <span>Frame Rate</span>
              </div>
              <div>
                <span className="text-text-primary block font-semibold">lagSmoothing(0)</span>
                <span>Zero Tearing</span>
              </div>
              <div>
                <span className="text-text-primary block font-semibold">WCAG 2.2 AA</span>
                <span>Reduced Motion</span>
              </div>
            </div>
          </TiltCard>

          {/* Bento Card 2: Neuro-Perceptual UX */}
          <TiltCard className="md:col-span-4 p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-canvas-muted border border-border-subtle flex items-center justify-center text-accent-ink mb-6 shadow-luxury-sm">
                <Layers className="w-6 h-6 text-accent-electric" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                02 / COGNITIVE SCIENCE
              </span>
              <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                Neuro-Perceptual UX
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light">
                Employing Gestalt spatial groupings, Fitts’s Law magnetic cursor spring affordance, and Hick-Hyman cognitive minimization to accelerate buyer decision velocity.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-canvas-muted border border-border-subtle text-xs font-mono text-accent-ink font-semibold">
              Average Conversion Lift: +240%
            </div>
          </TiltCard>

          {/* Bento Card 3: 3D Spatial Experiences */}
          <TiltCard className="md:col-span-4 p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-canvas-muted border border-border-subtle flex items-center justify-center text-accent-ink mb-6 shadow-luxury-sm">
                <Sparkles className="w-6 h-6 text-accent-electric" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                03 / SPATIAL WEB
              </span>
              <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                3D WebGL Digital Twins
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-light">
                Real-time interactive architectural configurators, daylight shadow studies, and tactile material shaders that allow clients to physically explore products in the browser.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border-subtle text-xs font-mono text-text-muted">
              THREE.JS · GLSL SHADERS · 60FPS
            </div>
          </TiltCard>

          {/* Bento Card 4: Sub-Second Core Web Vitals */}
          <TiltCard className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-canvas-muted border border-border-subtle flex items-center justify-center text-accent-ink mb-6 shadow-luxury-sm">
                <Activity className="w-6 h-6 text-accent-electric" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                04 / PRODUCTION SPEED
              </span>
              <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                Sub-Second Core Web Vitals SLA
              </h3>
              <p className="text-text-secondary type-body max-w-xl mb-6 font-light">
                Aesthetics mean nothing if an interface stutters or drops frames on mobile devices. We deliver sub-second LCP, zero CLS, and instant sub-50ms INP responsiveness across all global viewports.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-canvas-muted border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block mb-1">LCP TARGET</span>
                <span className="text-accent-ink font-bold text-base">&lt; 0.9s</span>
              </div>
              <div className="p-4 rounded-xl bg-canvas-muted border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block mb-1">CLS SHIFT</span>
                <span className="text-accent-ink font-bold text-base">0.00</span>
              </div>
              <div className="p-4 rounded-xl bg-canvas-muted border border-border-subtle font-mono text-xs">
                <span className="text-text-muted block mb-1">INP RESPONSE</span>
                <span className="text-accent-ink font-bold text-base">&lt; 45ms</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES REEL */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
              [ PROVEN ENTERPRISE IMPACT ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary">
              Featured Case Studies
            </h2>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => navigateTo('work')}
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
              className="group cursor-pointer rounded-3xl bg-white border border-border-subtle hover:border-border-muted hover:shadow-luxury-lg transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-muted">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-xs font-mono text-text-primary font-medium shadow-luxury-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-white text-text-primary flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-luxury-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="type-h3 font-display font-bold text-text-primary mb-3 group-hover:text-accent-electric transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-light">
                  {item.tagline}
                </p>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Primary Result:</span>
                  <span className="text-accent-ink font-bold">{item.results[0].metric} {item.results[0].label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE STUDIO STANDARD COMPARISON */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-border-subtle p-8 sm:p-14 shadow-luxury-md">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
              [ THE ARCHITECTURAL DIFFERENCE ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary mb-4">
              Standard Digital Agency vs. Immersive Studio
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Why high-growth ventures partner with our creative technologists rather than conventional marketing agencies.
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
                  <span className="text-rose-500 mr-2">✕</span>
                  {row.standardAgency}
                </div>
                <div className="md:col-span-4 text-xs font-mono text-text-primary font-semibold">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
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
