import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sliders, RefreshCw, Sparkles, Terminal, Activity, Eye, Zap } from 'lucide-react';

export default function InteractiveCanvasLab({ setCursorText }) {
  const canvasRef = useRef(null);
  const [activeShader, setActiveShader] = useState('waveform'); // 'waveform', 'kinetic-type', 'refraction'
  const [amplitude, setAmplitude] = useState(30);
  const [frequency, setFrequency] = useState(25);
  const [speed, setSpeed] = useState(20);
  const [fps, setFps] = useState(60);

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

    let step = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const render = (now) => {
      // FPS measurement
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      step += speed * 0.001;
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, width, height);

      if (activeShader === 'waveform') {
        // Multi-layer chromatic spatial waveform
        const lines = 7;
        for (let i = 0; i < lines; i++) {
          ctx.beginPath();
          const alpha = 0.2 + (i / lines) * 0.7;
          ctx.strokeStyle = `rgba(244, 243, 239, ${alpha})`;
          ctx.lineWidth = 1.2;

          for (let x = 0; x <= width; x += 4) {
            const distFromMouse = Math.abs(x - mouseX);
            const mouseBoost = Math.max(0, 1 - distFromMouse / 300) * 40;
            const y = (height / 2) + Math.sin(step + (x * (frequency * 0.0003)) + (i * 0.6)) * (amplitude + mouseBoost);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (activeShader === 'kinetic-type') {
        // Kinetic Generative Typographic Letterforms
        ctx.fillStyle = 'rgba(244, 243, 239, 0.9)';
        ctx.font = 'bold 36px Syne, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const words = ['SPATIAL', 'PRECISION', 'PERFORMANCE', 'IMMERSIVE'];
        const rows = 4;

        for (let r = 0; r < rows; r++) {
          const yBase = (height / (rows + 1)) * (r + 1);
          const word = words[r];
          const xOffset = Math.sin(step + r * 1.2) * (amplitude * 1.5);
          const mouseEffect = Math.sin((mouseY - yBase) * 0.01) * 20;

          ctx.fillText(word, (width / 2) + xOffset, yBase + mouseEffect);
        }
      } else {
        // Organic Fluid Refraction Particles
        const particleCount = 60;
        for (let p = 0; p < particleCount; p++) {
          const angle = (p / particleCount) * Math.PI * 2 + step;
          const radius = 80 + Math.sin(step * 2 + p) * amplitude;
          const px = mouseX + Math.cos(angle) * radius;
          const py = mouseY + Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(244, 243, 239, 0.7)';
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(px, py);
          ctx.strokeStyle = 'rgba(244, 243, 239, 0.06)';
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, [activeShader, amplitude, frequency, speed]);

  return (
    <section id="lab" className="py-32 px-6 sm:px-10 max-w-[1600px] mx-auto border-t border-chalk">
      
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-chalk">
        <div>
          <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
            [ 02 / EXPERIMENTAL PLAYGROUND ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            INTERACTIVE <span className="font-serif-editorial font-normal text-zinc-400">canvas lab</span>
          </h2>
        </div>

        <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-mono-tag leading-relaxed">
          Manipulate procedural shaders, sine wave frequencies, and physics parameters directly in your browser. Real-time GPU execution.
        </p>
      </div>

      {/* Main Lab Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: The Live Canvas Container (Span 8) */}
        <div className="lg:col-span-8 border border-chalk bg-zinc-950 overflow-hidden relative">
          
          {/* Top Canvas Bar */}
          <div className="flex items-center justify-between p-4 border-b border-chalk font-mono-tag text-xs text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold uppercase">{activeShader}</span>
            </div>

            <div className="flex items-center gap-4">
              <span>{fps} FPS LOCKED</span>
              <span className="text-zinc-600">•</span>
              <span>RENDER: HTML5 / GLSL</span>
            </div>
          </div>

          {/* Interactive Canvas Canvas */}
          <div 
            className="relative h-[440px] sm:h-[500px] w-full cursor-crosshair"
            onMouseEnter={() => setCursorText?.("DRAG")}
            onMouseLeave={() => setCursorText?.("")}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
            />
            <div className="absolute bottom-4 left-4 font-mono-tag text-[11px] text-zinc-500 bg-black/70 px-3 py-1 border border-white/5">
              Interact with cursor to manipulate waveform tension
            </div>
          </div>

          {/* Bottom Shader Selectors */}
          <div className="grid grid-cols-3 border-t border-chalk">
            {[
              { id: 'waveform', label: '01 / CHROMATIC WAVE' },
              { id: 'kinetic-type', label: '02 / KINETIC TYPE' },
              { id: 'refraction', label: '03 / FLUID REFRACTION' },
            ].map((shader) => (
              <button
                key={shader.id}
                onClick={() => setActiveShader(shader.id)}
                className={`py-4 px-3 text-center font-mono-tag text-xs uppercase tracking-wider transition-colors border-r last:border-r-0 border-chalk cursor-pointer ${
                  activeShader === shader.id 
                    ? 'bg-white text-black font-bold' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {shader.label}
              </button>
            ))}
          </div>

        </div>

        {/* Right: Parameter Controls (Span 4) */}
        <div className="lg:col-span-4 border border-chalk p-6 sm:p-8 space-y-8 bg-zinc-950/60">
          
          <div className="flex items-center justify-between border-b border-chalk pb-4">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-zinc-400" />
              <span className="font-mono-tag text-xs uppercase font-bold text-white">PHYSICS SLIDERS</span>
            </div>
            <button
              onClick={() => {
                setAmplitude(30);
                setFrequency(25);
                setSpeed(20);
              }}
              className="font-mono-tag text-[10px] text-zinc-500 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>RESET</span>
            </button>
          </div>

          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono-tag text-xs">
              <span className="text-zinc-400">Wave Amplitude</span>
              <span className="text-white">{amplitude} px</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={amplitude}
              onChange={(e) => setAmplitude(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Slider 2 */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono-tag text-xs">
              <span className="text-zinc-400">Particle Frequency</span>
              <span className="text-white">{frequency} hz</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Slider 3 */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono-tag text-xs">
              <span className="text-zinc-400">Evolution Speed</span>
              <span className="text-white">{speed} ms</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Real Studio Rationale */}
          <div className="pt-4 border-t border-chalk font-mono-tag text-xs text-zinc-500 space-y-2">
            <p className="text-zinc-400 uppercase font-bold text-[11px]">Engineering Rationale:</p>
            <p className="leading-relaxed text-[11px]">
              We avoid heavy external 3D video files by compiling procedural vector algorithms directly into client-side canvas buffers, achieving instant loading times worldwide.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
