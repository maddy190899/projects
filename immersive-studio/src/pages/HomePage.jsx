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
  Compass,
  ArrowRight
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { KineticCanvas } from '../components/KineticCanvas';
import { ProjectHoverList } from '../components/ProjectHoverList';
import { InteractiveShowreel } from '../components/InteractiveShowreel';
import { ShaderLab } from '../components/ShaderLab';
import {
  STUDIO_METRICS,
  CLIENT_LOGOS,
  CASE_STUDIES,
  COMPARISON_DATA
} from '../data/studioData';
import { sound } from '../lib/soundEngine';

export const HomePage = ({ setActivePage, onSelectCaseStudy }) => {
  const navigateTo = (pageId) => {
    sound.playClick();
    setActivePage(pageId);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-36 sm:space-y-48 pt-28 sm:pt-36">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-border-muted shadow-luxury-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
            <span className="text-xs font-mono tracking-eyebrow text-text-secondary uppercase">
              PARIS · NEW YORK · TOKYO · SOTD ANNUAL JURY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="type-hero font-display font-extrabold text-text-primary tracking-tight"
          >
            WE BUILD DIGITAL EXPERIENCES THAT{' '}
            <span className="font-serif italic font-normal text-accent-electric underline decoration-1 underline-offset-8">
              RIVAL REALITY.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-secondary type-body max-w-2xl font-light leading-relaxed"
          >
            Most corporate websites are digital tombstones: flat, static, and instantly forgotten. We engineer sensory WebGL flagships, tactile micro-kinetics, and sub-second performance that command obsessive attention and turn visitors into cult followings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
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
              <span>Explore Selected Work (05)</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Hero Interactive Kinetic Simulation Canvas */}
        <div className="mt-16">
          <KineticCanvas />
        </div>

        {/* Global Client Marquee */}
        <div className="mt-20 pt-10 border-t border-border-subtle overflow-hidden">
          <p className="text-[11px] font-mono tracking-eyebrow text-text-muted uppercase mb-6 text-center sm:text-left">
            PARTNERING WITH GLOBAL LEADERS DEFINING THE NEXT DECADE
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

      {/* 2. INTERACTIVE SENSORY SHOWREEL DECK */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <InteractiveShowreel onSelectCaseStudy={onSelectCaseStudy} />
      </section>

      {/* 3. VERIFIED BENCHMARK METRICS */}
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

      {/* 4. INTERACTIVE PROJECT HOVER LIST WITH FLOATING IMAGE REVEAL */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
              [ HOVER TO REVEAL VISUAL ARTIFACTS ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary">
              Selected Flagship Builds
            </h2>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => navigateTo('work')}
            className="self-start md:self-auto"
          >
            <span>Full Archive (05)</span>
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        <ProjectHoverList onSelectCaseStudy={onSelectCaseStudy} />
      </section>

      {/* 5. CREATIVE LAB & SHADER PLAYGROUND */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <ShaderLab />
      </section>

      {/* 6. THE STUDIO STANDARD COMPARISON */}
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
              Why high-growth ventures and global luxury houses partner with our creative technologists rather than conventional marketing agencies.
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

      {/* 7. BOTTOM MANIFESTO BANNER */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-accent-ink text-white p-8 sm:p-16 relative overflow-hidden shadow-luxury-lg">
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block">
              [ THE CREATIVE COMMITMENT ]
            </span>
            <h2 className="type-h2 font-display font-bold tracking-tight text-white">
              We only take on four enterprise flagships per quarter.
            </h2>
            <p className="text-white/70 type-body font-light leading-relaxed">
              Every pixel, shader, and kinetic curve is hand-crafted by our senior partners. No junior subcontractors. No template builders. Just pure, obsessive creative digital engineering.
            </p>
            <div className="pt-4">
              <MagneticButton
                variant="electric"
                onClick={() => navigateTo('contact')}
                className="py-4 px-8 text-sm"
              >
                <span>Check Q4 Availability</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
