import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Quote, CheckCircle2 } from 'lucide-react';
import { studioStats } from '../data/projectsData';

const TESTIMONIALS = [
  {
    quote: "Immersive Studio turned our theoretical spatial architecture into a kinetic masterpiece that redefined how the industry perceives web capabilities. They are in a league of their own.",
    author: "Eleni Vance",
    role: "VP of Product Experience",
    company: "Horizon Spatial Labs",
    metric: "+340% User Session Duration",
    award: "Awwwards Site of the Day"
  },
  {
    quote: "Our collectors demanded perfection. Immersive Studio achieved a level of tactile finish in 3D WebGL that feels indistinguishable from holding the physical timepiece in Geneva.",
    author: "Henri de Saint-Germain",
    role: "Managing Director",
    company: "Aether Haute Horlogerie",
    metric: "$14.2M Launch Weekend GMV",
    award: "FWA of the Month"
  },
  {
    quote: "The interface solved an existential problem for us: explaining multi-agent reasoning to enterprise buyers in three seconds of pure visual intuition. Blisteringly fast and robust.",
    author: "Dr. Marcus Chen",
    role: "Chief Scientist & Co-Founder",
    company: "Synapse Neural Systems",
    metric: "250,000 Vectors/sec Stream",
    award: "Developer Site of the Year"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Studio Awards Summary Bar */}
      <div className="rounded-3xl bg-canvas-card border border-border-subtle p-8 md:p-12 mb-20 shadow-inner-bevel">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {studioStats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-5xl font-display font-extrabold text-accent-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold text-text-primary mt-1 uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-text-muted mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span>07 // VALIDATED VERIFICATION</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            Client Impact & Proof
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          Global technology innovators and luxury institutions trust our engineers when their digital presence is existential to enterprise valuation.
        </p>
      </div>

      {/* Testimonials Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-canvas-card border border-border-subtle hover:border-border-focus transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-surface border border-border-subtle text-[10px] font-mono text-accent-primary">
                  <Award className="w-3 h-3" /> {item.award}
                </span>
                <span className="text-xs font-mono text-accent-cyan">
                  {item.metric}
                </span>
              </div>

              <Quote className="w-6 h-6 text-text-muted mb-4 opacity-40" />

              <blockquote className="text-sm font-sans text-text-primary leading-relaxed mb-6 font-light">
                "{item.quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
              <div>
                <div className="text-xs font-bold font-display text-text-primary">
                  {item.author}
                </div>
                <div className="text-[11px] font-mono text-text-muted">
                  {item.role}, {item.company}
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
