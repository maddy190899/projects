import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, Award } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const ProjectGrid = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Spatial Web', 'Headless Commerce', 'AI & Shaders', 'WebGL & 3D'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat) => {
    sound.playTactile(520, 0.03);
    setSelectedCategory(cat);
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Eyebrow & Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>01 // PROVEN FLAGSHIPS</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            Selected Digital Artifacts
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          Each commission represents a sovereign digital realm. Every pixel, shader loop, and latency optimization is calculated for irreversible competitive advantage.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border-subtle pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            onMouseEnter={() => sound.playHover()}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-accent-primary text-black font-semibold shadow-glow-salient/40 scale-105'
                : 'bg-canvas-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-focus'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isFeatured = index % 3 === 0;
            const colSpan = isFeatured
              ? 'col-span-12 lg:col-span-8'
              : 'col-span-12 lg:col-span-4';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={colSpan}
              >
                <div
                  onClick={() => {
                    sound.playTactile(620, 0.04);
                    onSelectProject(project);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative rounded-3xl bg-canvas-card border border-border-subtle overflow-hidden hover:border-border-focus transition-all duration-500 cursor-pointer shadow-card-elevated flex flex-col h-full"
                >
                  {/* Image Presentation */}
                  <div className="relative aspect-[16/10] overflow-hidden w-full bg-canvas-surface">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-quintic group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-canvas-card/20 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-accent-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-text-primary">
                        <Award className="w-3.5 h-3.5 text-accent-primary" />
                        <span>{project.awards[0]}</span>
                      </div>
                    </div>

                    {/* Quick Metric Pill Bottom Right */}
                    <div className="absolute bottom-4 right-4 bg-canvas-card/90 backdrop-blur-md border border-border-subtle rounded-xl px-3.5 py-1.5">
                      <div className="text-[10px] font-mono text-text-muted uppercase">{project.metrics[0].label}</div>
                      <div className="text-sm font-bold font-display text-accent-primary">{project.metrics[0].value}</div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="type-h3 font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-text-secondary font-sans line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Stack tags */}
                    <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center gap-2">
                      {project.stack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-canvas-surface border border-border-subtle text-[10px] font-mono text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-[10px] font-mono text-text-muted">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
