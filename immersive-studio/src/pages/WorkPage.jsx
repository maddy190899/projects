import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, Filter, LayoutGrid, List } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { MagneticButton } from '../components/MagneticButton';
import { ProjectHoverList } from '../components/ProjectHoverList';
import { sound } from '../lib/soundEngine';

export const WorkPage = ({ setActivePage, onSelectCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const CATEGORIES = [
    'All',
    'Haute Luxury & 3D',
    'Spatial & Real Estate',
    'Automotive & WebGL',
    'AI & Fintech',
    'Creative Audio & WebGL'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === selectedFilter);

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
    <div className="space-y-24 pt-28 sm:pt-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
          [ ARCHIVE OF CRITICAL DISTINCTION · 2024—2026 ]
        </span>
        <h1 className="type-hero font-display font-extrabold text-text-primary tracking-tight mb-6">
          SELECTED WORK
        </h1>
        <p className="text-text-secondary type-body max-w-2xl leading-relaxed font-light">
          A curated selection of sensory flagships, 3D WebGL configurators, and high-conversion software platforms engineered for industry-defining enterprises.
        </p>
      </div>

      {/* Control Bar: Categories & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playHover();
                setSelectedFilter(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${
                selectedFilter === cat
                  ? 'bg-accent-ink text-white font-medium shadow-luxury-sm'
                  : 'bg-white border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-white border border-border-subtle rounded-full shadow-luxury-sm self-start sm:self-auto">
          <button
            onClick={() => {
              sound.playClick();
              setViewMode('grid');
            }}
            className={`p-2 rounded-full text-xs font-mono transition-colors ${
              viewMode === 'grid' ? 'bg-accent-ink text-white' : 'text-text-muted hover:text-text-primary'
            }`}
            aria-label="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setViewMode('list');
            }}
            className={`p-2 rounded-full text-xs font-mono transition-colors ${
              viewMode === 'list' ? 'bg-accent-ink text-white' : 'text-text-muted hover:text-text-primary'
            }`}
            aria-label="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* View Mode: List vs Grid */}
      {viewMode === 'list' ? (
        <div className="py-4">
          <ProjectHoverList onSelectCaseStudy={onSelectCaseStudy} />
        </div>
      ) : (
        /* Projects Grid */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  sound.playClick();
                  onSelectCaseStudy(project);
                }}
                className="group cursor-pointer rounded-3xl bg-white border border-border-subtle hover:border-border-muted hover:shadow-luxury-lg transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Preview with Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-canvas-muted">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-xs font-mono text-text-primary font-medium shadow-luxury-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono text-text-muted shadow-luxury-sm">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white text-text-primary flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-luxury-md">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
                    <span>CLIENT: {project.client}</span>
                    <div className="flex items-center gap-1 text-accent-electric font-medium">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.awards?.[0]}</span>
                    </div>
                  </div>

                  <h2 className="type-h3 font-display font-bold text-text-primary mb-3 group-hover:text-accent-electric transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-light">
                    {project.tagline}
                  </p>

                  {/* Empirical Results Row */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-subtle">
                    <div>
                      <span className="text-[11px] font-mono text-text-muted block">PRIMARY LIFT</span>
                      <span className="type-h3 font-display font-bold text-accent-ink">{project.results[0].metric}</span>
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
                        className="px-2.5 py-0.5 rounded-full bg-canvas-muted border border-border-subtle text-[11px] font-mono text-text-secondary"
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
      )}

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-white border border-border-subtle p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-luxury-md">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
          [ START A COLLABORATION ]
        </span>
        <h3 className="type-h2 font-display font-bold text-text-primary mb-4">
          Ready to build your next category-defining flagship?
        </h3>
        <p className="text-text-secondary type-body max-w-xl mx-auto mb-8 font-light">
          We take on a strictly limited number of enterprise clients each quarter to guarantee partner-level focus and award-winning craft.
        </p>
        <MagneticButton
          variant="primary"
          onClick={() => navigateTo('contact')}
          className="py-4 px-8 text-sm"
        >
          <span>Initiate Studio Brief</span>
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </div>
  );
};
