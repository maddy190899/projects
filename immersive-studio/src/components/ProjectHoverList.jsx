import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight, Award, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { sound } from '../lib/soundEngine';

export const ProjectHoverList = ({ onSelectCaseStudy }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative divide-y divide-border-subtle border-y border-border-subtle"
    >
      {CASE_STUDIES.map((project, idx) => (
        <div
          key={project.id}
          onMouseEnter={() => {
            setHoveredProject(project);
            sound.playHover();
          }}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => {
            sound.playClick();
            onSelectCaseStudy(project);
          }}
          className="group relative py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-colors duration-300 hover:bg-black/[0.02] px-4 -mx-4 rounded-2xl"
        >
          {/* Left: Index & Title */}
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-electric transition-colors">
              0{idx + 1}
            </span>
            <div>
              <h3 className="type-h3 font-display font-bold text-text-primary tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-text-muted mt-1">
                {project.client} · {project.category}
              </p>
            </div>
          </div>

          {/* Right: Primary Metric & Arrow */}
          <div className="flex items-center gap-8 self-end md:self-auto">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono text-accent-electric font-semibold block">
                {project.results[0].metric}
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                {project.results[0].label}
              </span>
            </div>

            <div className="w-11 h-11 rounded-full bg-white border border-border-muted flex items-center justify-center text-text-primary group-hover:bg-accent-ink group-hover:text-white transition-all duration-300 shadow-luxury-sm">
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      ))}

      {/* Floating Cursor Image Reveal with Inertial Spring */}
      {hoveredProject && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute z-30 hidden lg:block w-72 h-44 rounded-2xl overflow-hidden shadow-luxury-lg border border-black/10 bg-canvas-muted"
        >
          <img
            src={hoveredProject.heroImage}
            alt={hoveredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
            <span className="font-semibold uppercase tracking-wider">{hoveredProject.awards?.[0]}</span>
            <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">CLICK TO INSPECT</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
