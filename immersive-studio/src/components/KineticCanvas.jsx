import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, RefreshCw, Eye } from 'lucide-react';

export const KineticCanvas = () => {
  const canvasRef = useRef(null);
  const [activeMode, setActiveMode] = useState('mesh'); // 'mesh' | 'wave' | 'torus'
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const logicalWidth = canvas.offsetWidth;
    const logicalHeight = canvas.offsetHeight;

    // Mouse coordinates with spring damping
    let mouse = {
      x: logicalWidth / 2,
      y: logicalHeight / 2,
      targetX: logicalWidth / 2,
      targetY: logicalHeight / 2,
      isHovered: false,
      rippleRadius: 0,
      rippleAlpha: 0,
    };

    // Node particle cluster
    const nodeCount = 52;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        baseX: (Math.random() * 0.8 + 0.1) * logicalWidth,
        baseY: (Math.random() * 0.8 + 0.1) * logicalHeight,
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02,
      });
      nodes[i].x = nodes[i].baseX;
      nodes[i].y = nodes[i].baseY;
    }

    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = logicalWidth / 2;
      mouse.targetY = logicalHeight / 2;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.rippleRadius = 1;
      mouse.rippleAlpha = 0.6;
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const render = (now) => {
      // FPS measurement
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      time += 0.015;

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // Render mode 1: Kinetic Neural Topography & Spring Mesh
      if (activeMode === 'mesh') {
        // Draw ripple shockwave if active
        if (mouse.rippleAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, mouse.rippleRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 85, 255, ${mouse.rippleAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          mouse.rippleRadius += 4;
          mouse.rippleAlpha *= 0.96;
        }

        // Update nodes with organic harmonic noise
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.phase += n.speed;

          // Organic float
          const floatX = Math.cos(n.phase + time) * 16;
          const floatY = Math.sin(n.phase * 1.3 + time) * 16;

          // Mouse gravitational influence
          const dx = mouse.x - (n.baseX + floatX);
          const dy = mouse.y - (n.baseY + floatY);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          let pullX = 0;
          let pullY = 0;
          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 35;
            pullX = (dx / dist) * force;
            pullY = (dy / dist) * force;
          }

          n.x = n.baseX + floatX + pullX;
          n.y = n.baseY + floatY + pullY;
        }

        // Draw spring connection webs
        ctx.lineWidth = 0.8;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 110) {
              const alpha = (1 - d / 110) * 0.22;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(18, 18, 22, ${alpha})`;
              ctx.stroke();
            }
          }
        }

        // Draw nodes and cursor connection
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const cDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          if (cDist < 120) {
            ctx.fillStyle = '#0055FF'; // Klein blue highlight when near cursor
          } else {
            ctx.fillStyle = 'rgba(18, 18, 22, 0.45)';
          }
          ctx.fill();

          // Tether to mouse if close
          if (cDist < 120) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 85, 255, ${(1 - cDist / 120) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render mode 2: Harmonic Flow Waves
      else if (activeMode === 'wave') {
        const waveCount = 5;
        for (let w = 0; w < waveCount; w++) {
          ctx.beginPath();
          const amp = 30 + w * 12;
          const freq = 0.006 + w * 0.002;
          const yOffset = logicalHeight * 0.4 + w * 25;

          ctx.moveTo(0, yOffset);
          for (let x = 0; x <= logicalWidth; x += 8) {
            const mDist = Math.abs(x - mouse.x);
            const mFactor = Math.max(0, 1 - mDist / 180) * 40;
            const y = yOffset + Math.sin(x * freq + time * (1 + w * 0.3)) * amp - mFactor;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = w === 2 ? '#0055FF' : `rgba(18, 18, 22, ${0.12 + w * 0.05})`;
          ctx.lineWidth = w === 2 ? 2 : 1;
          ctx.stroke();
        }
      }

      // Render mode 3: 3D Kinetic Geometric Polyhedron
      else if (activeMode === 'torus') {
        const cx = logicalWidth / 2;
        const cy = logicalHeight / 2;
        const radius = Math.min(logicalWidth, logicalHeight) * 0.28;
        const points = 36;

        ctx.save();
        ctx.translate(cx, cy);
        const rotY = time * 0.6 + (mouse.x - cx) * 0.003;
        const rotX = Math.sin(time * 0.4) * 0.4 + (mouse.y - cy) * 0.003;

        for (let ring = 0; ring < 6; ring++) {
          const rAngle = (ring / 6) * Math.PI;
          ctx.beginPath();
          for (let p = 0; p <= points; p++) {
            const theta = (p / points) * Math.PI * 2;
            const x3d = radius * Math.cos(theta) * Math.sin(rAngle);
            const y3d = radius * Math.sin(theta);
            const z3d = radius * Math.cos(theta) * Math.cos(rAngle);

            // Rotate around Y
            const xRot = x3d * Math.cos(rotY) + z3d * Math.sin(rotY);
            const zRot = -x3d * Math.sin(rotY) + z3d * Math.cos(rotY);

            // Rotate around X
            const yRot = y3d * Math.cos(rotX) - zRot * Math.sin(rotX);

            const scale = 250 / (250 + zRot);
            const projX = xRot * scale;
            const projY = yRot * scale;

            if (p === 0) ctx.moveTo(projX, projY);
            else ctx.lineTo(projX, projY);
          }
          ctx.strokeStyle = ring === 2 ? '#0055FF' : 'rgba(18, 18, 22, 0.15)';
          ctx.lineWidth = ring === 2 ? 1.8 : 1;
          ctx.stroke();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [activeMode]);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] rounded-3xl bg-canvas-muted/60 border border-border-subtle shadow-luxury-md overflow-hidden group">
      {/* Interactive Canvas Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair block"
      />

      {/* Top telemetry badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono text-text-primary shadow-luxury-sm">
          <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
          <span>KINETIC COMPUTATION · {fps} FPS</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono text-text-muted shadow-luxury-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent-electric" />
          <span>DRAG / CLICK TO DISTORT</span>
        </div>
      </div>

      {/* Bottom Mode Switcher */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-luxury-sm">
        <button
          onClick={() => setActiveMode('mesh')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            activeMode === 'mesh'
              ? 'bg-accent-ink text-white font-medium'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Neural Mesh
        </button>
        <button
          onClick={() => setActiveMode('wave')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            activeMode === 'wave'
              ? 'bg-accent-ink text-white font-medium'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Harmonic Waves
        </button>
        <button
          onClick={() => setActiveMode('torus')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            activeMode === 'torus'
              ? 'bg-accent-ink text-white font-medium'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          3D Torus
        </button>
      </div>
    </div>
  );
};
