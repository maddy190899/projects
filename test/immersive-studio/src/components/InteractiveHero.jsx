import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Play, Pause, Volume2, VolumeX, Sparkles, Compass } from 'lucide-react';

export default function InteractiveHero({ onOpenInquiry, setCursorText }) {
  const canvasRef = useRef(null);
  const [isPlayingReel, setIsPlayingReel] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive Liquid Mesh Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;
    let targetX = width / 2;
    let targetY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onPointerMove);

    const draw = () => {
      time += 0.015;
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle architectural distortion grid
      const cols = 28;
      const rows = 14;
      const cellW = width / cols;
      const cellH = height / rows;

      ctx.strokeStyle = 'rgba(244, 243, 239, 0.07)';
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const x = i * cellW;
          const y = j * cellH;
          const dx = x - currentX;
          const dy = y - currentY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 320;

          let offsetX = 0;
          let offsetY = 0;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 35;
            const angle = Math.atan2(dy, dx);
            offsetX = Math.cos(angle) * force;
            offsetY = Math.sin(angle) * force;
          }

          const wave = Math.sin(time + i * 0.2 + j * 0.2) * 6;
          const px = x + offsetX;
          const py = y + offsetY + wave;

          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Draw interactive floating particle node
      ctx.beginPath();
      ctx.arc(currentX, currentY, 180, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 180);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onPointerMove);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-12 px-6 sm:px-10 max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Interactive Liquid Canvas in Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      />

      {/* Top Editorial Metadata Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-chalk pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-tag text-xs text-zinc-400">VOL. 26 / ISSUE IV</span>
          <span className="text-zinc-600">•</span>
          <span className="font-mono-tag text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            2 SLOTS AVAILABLE FOR Q4 2026
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono-tag text-zinc-500">
          <span>AWWWARDS STUDIO OF THE MONTH</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">34× FWA OF THE DAY</span>
        </div>
      </div>

      {/* Hero Typography Centerpiece */}
      <div className="relative z-10 my-auto py-12 md:py-16">
        <div className="max-w-6xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono-tag text-xs uppercase tracking-widest text-zinc-400 mb-6 block">
              [ INDEPENDENT DIGITAL PRODUCTION PRACTICE ]
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[108px] font-display font-bold leading-[0.92] tracking-tighter text-[#f4f3ef]"
          >
            WE CRAFT <br />
            <span className="font-serif-editorial font-normal tracking-tight text-white pr-4">provocative</span>
            DIGITAL REALITIES.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-chalk"
          >
            <p className="max-w-xl text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              We reject homogeneous website templates. We architect bespoke 3D WebGL worlds, progressive React 19 platforms, and sensory brand flagships that command cultural relevance and measurable growth.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenInquiry}
                onMouseEnter={() => setCursorText?.("INQUIRE")}
                onMouseLeave={() => setCursorText?.("")}
                className="px-8 py-4 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-3 cursor-pointer"
              >
                <span>INITIATE COMMISSION</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <a
                href="#work"
                onMouseEnter={() => setCursorText?.("SCROLL")}
                onMouseLeave={() => setCursorText?.("")}
                className="px-6 py-4 border border-chalk hover:border-white font-mono-tag text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                INDEX (08)
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Studio Reel Showcase Strip */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-8 border-t border-chalk">
        
        {/* Left Column: Authentic Full Reel Video Preview */}
        <div className="lg:col-span-8 group relative aspect-[21/9] rounded-none overflow-hidden border border-chalk bg-zinc-950">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85"
            alt="Immersive Studio Creative Reel 2026"
            className="w-full h-full object-cover img-editorial-zoom opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Reel Overlay Info */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingReel(!isPlayingReel)}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                {isPlayingReel ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
              </button>
              <div className="text-xs font-mono-tag">
                <span className="text-white font-bold">2026 STUDIO SHOWREEL</span>
                <span className="text-zinc-400 block text-[10px]">SPATIAL WEB & CREATIVE ENGINEERING</span>
              </div>
            </div>

            <span className="text-[11px] font-mono-tag text-zinc-400">
              01:42 / 03:00
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Metric Statements */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
          <div className="p-5 border border-chalk flex flex-col justify-between">
            <span className="text-xs font-mono-tag text-zinc-500 uppercase">Core Standard</span>
            <p className="text-2xl font-display font-bold text-white mt-2">Zero Pre-Made Frameworks.</p>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Every shader, camera trajectory, and interaction is engineered to the exact brand DNA.
            </p>
          </div>

          <div className="p-5 border border-chalk flex flex-col justify-between">
            <span className="text-xs font-mono-tag text-zinc-500 uppercase">Speed & Uptime</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-display font-bold text-white">0.24s</span>
              <span className="text-xs font-mono-tag text-emerald-400">AVERAGE GLOBAL FCP</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
