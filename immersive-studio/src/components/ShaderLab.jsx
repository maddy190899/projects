import React, { useRef, useEffect, useState } from 'react';
import { Sliders, Cpu, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { sound } from '../lib/soundEngine';

export const ShaderLab = () => {
  const canvasRef = useRef(null);
  const [params, setParams] = useState({
    density: 45,
    speed: 1.2,
    gravity: 0.6,
    distortion: 35,
    colorScheme: 'klein', // 'klein' | 'vermillion' | 'emerald'
  });

  const [particlesCount, setParticlesCount] = useState(45);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const logW = canvas.offsetWidth;
    const logH = canvas.offsetHeight;

    let mouse = { x: logW / 2, y: logH / 2, targetX: logW / 2, targetY: logH / 2, isDown: false };

    // Particles array
    const count = params.density;
    setParticlesCount(count);
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * logW,
        y: Math.random() * logH,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1.5,
        phase: Math.random() * Math.PI * 2,
        trail: [],
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseDown = () => {
      mouse.isDown = true;
      sound.playClick();
    };

    const handleMouseUp = () => {
      mouse.isDown = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let time = 0;

    const render = () => {
      time += 0.015 * params.speed;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Soft trail clearing
      ctx.fillStyle = 'rgba(250, 249, 246, 0.28)';
      ctx.fillRect(0, 0, logW, logH);

      const colorMap = {
        klein: { primary: '#0047FF', subtle: 'rgba(0, 71, 255, 0.15)', ink: '#0B0B0D' },
        vermillion: { primary: '#E63B2E', subtle: 'rgba(230, 59, 46, 0.15)', ink: '#0B0B0D' },
        emerald: { primary: '#059669', subtle: 'rgba(5, 150, 105, 0.15)', ink: '#0B0B0D' },
      };
      const palette = colorMap[params.colorScheme] || colorMap.klein;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += 0.02 * params.speed;

        // Mouse attraction/repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180 && dist > 1) {
          const force = ((180 - dist) / 180) * (mouse.isDown ? -8 : 3.5) * params.gravity;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Natural organic harmonic flow
        p.vx += Math.cos(p.phase + time) * 0.25;
        p.vy += Math.sin(p.phase * 1.2 + time) * 0.25;

        // Friction dampening
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (p.x < 0) p.x = logW;
        if (p.x > logW) p.x = 0;
        if (p.y < 0) p.y = logH;
        if (p.y > logH) p.y = 0;

        // Draw particle trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 8) p.trail.shift();

        ctx.beginPath();
        for (let t = 0; t < p.trail.length; t++) {
          const pt = p.trail[t];
          if (t === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = palette.subtle;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Node head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dist < 120 ? palette.primary : palette.ink;
        ctx.fill();
      }

      // Inter-particle elastic spring web
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < params.distortion * 2.5) {
            const alpha = (1 - d / (params.distortion * 2.5)) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(11, 11, 13, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [params]);

  const updateParam = (key, value) => {
    sound.playHover();
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="rounded-3xl bg-white border border-border-muted p-6 sm:p-10 shadow-luxury-md overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-subtle">
        <div>
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-1">
            [ CREATIVE TECHNOLOGIST R&D LAB ]
          </span>
          <h3 className="type-h3 font-display font-bold text-text-primary">
            Procedural Physics & Fluid Distortion Playground
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-text-muted">COLOR MATRIX:</span>
          {['klein', 'vermillion', 'emerald'].map((c) => (
            <button
              key={c}
              onClick={() => updateParam('colorScheme', c)}
              className={`w-6 h-6 rounded-full border transition-transform ${
                params.colorScheme === c ? 'scale-125 ring-2 ring-black/20' : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: c === 'klein' ? '#0047FF' : c === 'vermillion' ? '#E63B2E' : '#059669',
              }}
              aria-label={`Switch color to ${c}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Canvas */}
        <div className="lg:col-span-8 relative h-[380px] sm:h-[440px] rounded-2xl bg-canvas-base border border-border-subtle overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing block" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono shadow-luxury-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>REAL-TIME PHYSICS · CLICK/DRAG TO REPEL</span>
          </div>

          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono text-text-muted shadow-luxury-sm">
            <span>{particlesCount} NODES ACTIVE</span>
          </div>
        </div>

        {/* Live Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-text-secondary">Node Tension:</span>
              <span className="font-semibold text-text-primary">{params.distortion}px</span>
            </div>
            <input
              type="range"
              min="15"
              max="70"
              value={params.distortion}
              onChange={(e) => updateParam('distortion', Number(e.target.value))}
              className="w-full accent-accent-ink cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-text-secondary">Harmonic Velocity:</span>
              <span className="font-semibold text-text-primary">{params.speed.toFixed(1)}×</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={params.speed}
              onChange={(e) => updateParam('speed', Number(e.target.value))}
              className="w-full accent-accent-ink cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-text-secondary">Gravitational Attraction:</span>
              <span className="font-semibold text-text-primary">{params.gravity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="1.5"
              step="0.1"
              value={params.gravity}
              onChange={(e) => updateParam('gravity', Number(e.target.value))}
              className="w-full accent-accent-ink cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-canvas-muted border border-border-subtle text-xs font-mono text-text-muted space-y-1">
            <div className="flex items-center gap-1.5 text-text-primary font-semibold">
              <Zap className="w-3.5 h-3.5 text-accent-electric" />
              <span>Computational Subsystem</span>
            </div>
            <p className="font-light text-[11px] leading-relaxed">
              Every production experience we deploy utilizes custom procedural mathematics, GPU-accelerated frame loops, and responsive kinetic physics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
