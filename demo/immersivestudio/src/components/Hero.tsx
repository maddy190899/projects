import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { SoundwavePulse } from './SvgAssets';

interface HeroProps {
  onStartBrief: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartBrief, onOpenShowreel }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Magnetic button physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.35);
    mouseY.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Interactive Particle Fluid Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      phase: number;
    }

    const particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 14000), 85);
    const colors = ['#00F0FF', '#8B5CF6', '#3B82F6', '#EC4899', '#10B981'];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        ox: x,
        oy: y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
      active: false,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      pointer.active = true;
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      pointer.targetX = clientX;
      pointer.targetY = clientY;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Autonomous drift
        p.ox += p.vx;
        p.oy += p.vy;
        if (p.ox < 0 || p.ox > width) p.vx *= -1;
        if (p.oy < 0 || p.oy > height) p.vy *= -1;

        // Interactive fluid repulsion / attraction
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pointer.radius) {
          const force = (1 - dist / pointer.radius) * 18;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force;
          p.y -= Math.sin(angle) * force;
        } else {
          // Physics-based spring return to origin
          p.x += (p.ox - p.x) * 0.05;
          p.y += (p.oy - p.y) * 0.05;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Proximity lines (Spatial Mesh)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist2 / 110) * 0.18;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Fluid Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-70"
      />

      {/* Atmospheric Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status / Activity Pulse */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <SoundwavePulse />
        </motion.div>

        {/* Studio Subheading Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400"
        >
          <span className="w-6 h-[1px] bg-cyan-400/50" />
          <span>Spatial Computing · GLSL 3D · High-Frequency UX</span>
          <span className="w-6 h-[1px] bg-cyan-400/50" />
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] max-w-5xl uppercase mb-8"
        >
          We Architect{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy decoration-1 underline-offset-8">
            Living Digital
          </span>{' '}
          Experiences
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10"
        >
          An elite collective of creative technologists, 3D engineers, and brand strategists.
          We engineer award-winning digital flagships for category-defining pioneers.
        </motion.p>

        {/* Dual Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary Magnetic CTA: Start Brief */}
          <motion.button
            style={{ x: magneticX, y: magneticY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onStartBrief}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-shadow duration-300"
          >
            <span className="relative z-10">Start An Interactive Brief</span>
            <div className="relative z-10 w-6 h-6 rounded-full bg-slate-950 text-cyan-400 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              {/* Dynamic SVG Arrow that slides and tracks */}
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.button>

          {/* Secondary CTA: View Showreel */}
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/40 text-slate-200 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-3 backdrop-blur-xl transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
              <Play className="w-3.5 h-3.5 text-cyan-400 ml-0.5" />
            </div>
            <span>View 2026 Showreel</span>
            <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
              [01:42]
            </span>
          </button>
        </motion.div>

        {/* Real Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              $4.2B+
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
              Client Valuation Created
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-400 tracking-tight">
              0.42s
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
              Avg Time-to-Interactive
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-purple-400 tracking-tight">
              14+
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
              FWA &amp; Awwwards Honors
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 tracking-tight">
              99.99%
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
              Real-time Spatial SLA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
