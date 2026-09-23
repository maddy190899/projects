import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Sparkles, Brain, Cpu, ShieldCheck } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES, TEAM_MEMBERS } from '../data/studioData';
import { MagneticButton } from '../components/MagneticButton';

export const PhilosophyPage = ({ setActivePage }) => {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-32 pt-28 sm:pt-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Manifesto Header */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
          [ THE STUDIO MANIFESTO ]
        </span>
        <h1 className="type-hero font-display font-bold text-text-primary tracking-tight mb-8">
          AESTHETIC DISCIPLINE. COMPUTATIONAL RIGOR.
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed font-light max-w-3xl">
          Digital design has evolved from static content packaging into dynamic, narrative-driven digital ecosystems. We reject the false dichotomy between visual beauty and engineering performance.
        </p>
      </div>

      {/* The 70% Evaluative Rule Section */}
      <div className="rounded-3xl bg-white border border-border-subtle p-8 sm:p-14 shadow-luxury-md">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
            [ INTERNATIONAL JURY BENCHMARK ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary mb-6">
            The 70% Usability & Design Imperative
          </h2>
          <p className="text-text-secondary type-body leading-relaxed mb-8 font-light">
            Empirical data from international evaluation juries (Awwwards, FWA, Webbys) reveals that 70% of aggregate project scoring is dictated by Design (40%) and Usability (30%). Visual novelty or experimental WebGL shaders cannot compensate for layout shifts, dropped frames, or cognitive wayfinding friction.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            <div className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle">
              <span className="text-2xl font-bold text-accent-ink block">40%</span>
              <span className="text-xs text-text-muted">Visual Art Direction</span>
            </div>
            <div className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle">
              <span className="text-2xl font-bold text-accent-ink block">30%</span>
              <span className="text-xs text-text-muted">Usability & Ergonomics</span>
            </div>
            <div className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle">
              <span className="text-2xl font-bold text-text-primary block">20%</span>
              <span className="text-xs text-text-muted">Original Creativity</span>
            </div>
            <div className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle">
              <span className="text-2xl font-bold text-text-primary block">10%</span>
              <span className="text-xs text-text-muted">Content & Typography</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cognitive & Kinetic Principles */}
      <div>
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
            [ NEURO-PERCEPTUAL ENGINE ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary">
            Psychological UX & Physics Heuristics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm hover:shadow-luxury-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase text-accent-electric block mb-2 font-medium">
                  HEURISTIC 0{idx + 1}
                </span>
                <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
                  {principle.law}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-light">
                  {principle.concept}
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-[11px] font-mono uppercase text-text-muted block mb-1">
                  IMMERSIVE STUDIO EXECUTION:
                </span>
                <p className="text-xs font-mono text-text-primary font-medium">
                  {principle.implementation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team / The Creative Technologists */}
      <div>
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
            [ LEADERSHIP COLLECTIVE ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary">
            The Creative Technologists
          </h2>
          <p className="text-text-secondary type-body max-w-2xl mt-4 font-light">
            A multidisciplinary collective of international jury members, former studio directors, and performance architects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white border border-border-subtle hover:border-border-muted transition-all duration-300 overflow-hidden shadow-luxury-sm hover:shadow-luxury-md flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-canvas-muted relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-104 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-white/90 uppercase tracking-wider block">
                    {member.credentials}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-text-muted mb-4">{member.role}</p>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Page Bottom CTA */}
      <div className="rounded-3xl bg-white border border-border-subtle p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-luxury-md">
        <h3 className="type-h3 font-display font-bold text-text-primary mb-4">
          Align your digital presence with international design standards.
        </h3>
        <p className="text-sm text-text-secondary mb-8 max-w-lg mx-auto font-light">
          Contact our partners to discuss your brand narrative, engineering requirements, and timeline.
        </p>
        <MagneticButton
          variant="primary"
          onClick={() => navigateTo('contact')}
          className="py-4 px-8 text-sm"
        >
          <span>Initiate Briefing</span>
        </MagneticButton>
      </div>
    </div>
  );
};
