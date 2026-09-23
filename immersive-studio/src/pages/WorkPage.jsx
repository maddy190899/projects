import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, ExternalLink, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { MagneticButton } from '../components/MagneticButton';

export const WorkPage = ({ setActivePage, onSelectCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const CATEGORIES = ['All', 'Spatial / 3D', 'Haute Luxury', 'Fintech & SaaS'];

  const filteredProjects = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === selectedFilter);

  return (
    <div className="space-y-24 pt-28 sm:pt-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-3">
          [ ARCHIVE OF CRITICAL DISTINCTION ]
        </span>
        <h1 className="type-hero font-display font-bold text-text-primary tracking-tight mb-6">
          SELECTED WORK
        </h1>
        <p className="text-text-secondary type-body max-w-2xl leading-relaxed">
          Explore our portfolio of award-winning digital flagships, 3D WebGL configurators, and high-conversion software platforms engineered for global scale.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-border-subtle">
        <span className="text-xs font-mono text-text-muted mr-3 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" />
          FILTER:
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${
              selectedFilter === cat
                ? 'bg-text-primary text-black font-semibold'
                : 'bg-canvas-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-focus'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectCaseStudy(project)}
              className="group cursor-pointer rounded-3xl bg-canvas-card border border-border-subtle hover:border-border-focus transition-all duration-500 overflow-hidden shadow-card-elevated flex flex-col justify-between"
            >
              {/* Image Preview with Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-surface">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-accent-volt">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-text-muted">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-accent-volt text-black flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-glow-volt">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-8">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
                  <span>CLIENT: {project.client}</span>
                  <div className="flex items-center gap-1 text-accent-volt">
                    <Award className="w-3.5 h-3.5" />
                    <span>{project.awards?.[0]}</span>
                  </div>
                </div>

                <h2 className="type-h3 font-display font-bold text-text-primary mb-3 group-hover:text-accent-volt transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Empirical Results Row */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-subtle">
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">PRIMARY LIFT</span>
                    <span className="type-h3 font-display font-bold text-accent-volt">{project.results[0].metric}</span>
                    <span className="text-xs font-mono text-text-secondary block">{project.results[0].label}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">SCALE IMPACT</span>
                    <span className="type-h3 font-display font-bold text-text-primary">{project.results[1].metric}</span>
                    <span className="text-xs font-mono text-text-secondary block">{project.results[1].label}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-canvas-base border border-border-subtle text-[11px] font-mono text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-canvas-card border border-border-subtle p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-inner-bevel">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-3">
          [ START A COLLABORATION ]
        </span>
        <h3 className="type-h2 font-display font-bold text-text-primary mb-4">
          Ready to build your next category-defining flagship?
        </h3>
        <p className="text-text-secondary type-body max-w-xl mx-auto mb-8">
          We take on a limited number of clients each quarter to ensure obsessive attention to detail and 100% award-caliber execution.
        </p>
        <MagneticButton
          variant="primary"
          onClick={() => setActivePage('contact')}
          className="py-4 px-8 text-sm"
        >
          <span>Initiate Studio Brief</span>
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </div>
  );
};
