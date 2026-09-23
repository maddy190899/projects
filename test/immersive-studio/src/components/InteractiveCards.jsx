import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Terminal, 
  Globe, 
  Sliders, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  RefreshCw,
  Gauge
} from 'lucide-react';
import { PerformanceDial } from './VectorGraphic';
import LottieAnimation from './LottieAnimation';

export default function InteractiveCards() {
  // Card 2 State: Code vs Render
  const [activeTab, setActiveTab] = useState('render');
  
  // Card 4 State: Edge Latency Ping Simulator
  const [pinging, setPinging] = useState(false);
  const [latencies, setLatencies] = useState([
    { region: "Tokyo (NRT)", latency: 19, status: "Optimal" },
    { region: "Frankfurt (FRA)", latency: 24, status: "Optimal" },
    { region: "San Francisco (SFO)", latency: 12, status: "Ultra-Fast" },
    { region: "London (LHR)", latency: 21, status: "Optimal" },
    { region: "Singapore (SIN)", latency: 28, status: "Optimal" },
  ]);

  const triggerPing = () => {
    setPinging(true);
    setTimeout(() => {
      setLatencies(prev => prev.map(item => ({
        ...item,
        latency: Math.floor(Math.random() * 15) + 10
      })));
      setPinging(false);
    }, 600);
  };

  // Card 1: Interactive Canvas Particle Wave
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const render = () => {
      step += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1.5;

      const lines = 4;
      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        const hue = 190 + j * 25;
        ctx.strokeStyle = `hsla(${hue}, 85%, 65%, ${0.25 + j * 0.15})`;

        for (let x = 0; x < canvas.width; x += 6) {
          const y = (canvas.height / 2) + Math.sin(step + (x * 0.02) + (j * 0.8)) * (20 + j * 6);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="bento" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>ENGINEERING ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4">
            Built For Uncompromising <span className="gradient-text-accent">Speed & Precision</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every line of code is orchestrated for 60FPS physics, instant global edge routing, and flawless responsive aesthetics.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: 60FPS WebGL & Kinetic Particle Engine (Span 7) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">60FPS WebGL & Shader Engine</h3>
                  <p className="text-xs text-slate-400 font-mono-code">Custom GLSL Fragment Pipelines</p>
                </div>
              </div>
              <span className="text-[11px] font-mono-code px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Hardware Accelerated
              </span>
            </div>

            {/* Interactive Canvas */}
            <div className="relative my-4 rounded-2xl bg-black/60 border border-white/10 overflow-hidden h-48 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono-code text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-white/10">
                GPU Draw Calls: 4 | Memory: 14.8MB
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed z-10">
              We bypass bloated templates and handcraft bespoke 3D canvas shaders that deliver tactile depth without sacrificing battery life or mobile load times.
            </p>
          </div>

          {/* Bento Item 2: 100/100 Lighthouse Performance Dial (Span 5) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Zero Bloat Audit</h3>
                  <p className="text-xs text-slate-400 font-mono-code">Google Core Web Vitals Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-around py-4 bg-white/[0.02] rounded-2xl border border-white/5 my-2">
              <PerformanceDial score={100} label="Performance" />
              <PerformanceDial score={100} label="Accessibility" />
              <PerformanceDial score={100} label="Best Practices" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono-code text-slate-300 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>INP &lt; 50ms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CLS = 0.00</span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Live Code vs Render Interactive Switcher (Span 6) */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Component Architecture</h3>
                  <p className="text-xs text-slate-400 font-mono-code">Clean React 19 & Tailwind Syntax</p>
                </div>
              </div>

              {/* View Switcher Pills */}
              <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code">
                <button
                  onClick={() => setActiveTab('render')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'render' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'code' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Code
                </button>
              </div>
            </div>

            {/* Display Box */}
            <div className="h-52 rounded-2xl bg-black/60 border border-white/10 p-4 font-mono-code text-xs overflow-y-auto">
              {activeTab === 'code' ? (
                <pre className="text-cyan-300 leading-relaxed">
                  <code>{`// Modern React 19 Physics Hook
export function useSpatialHover() {
  const tilt = useSpring(0, { stiffness: 300 });
  const glslUniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_resolution: { value: [1920, 1080] }
  }), []);

  return { tilt, glslUniforms, fps: 60 };
}`}</code>
                </pre>
              ) : (
                <div className="h-full flex flex-col justify-center items-center text-center p-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30 shadow-lg max-w-sm w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white font-heading">Interactive Module</span>
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                    </div>
                    <p className="text-xs text-slate-300">Live compiled reactive state in production</p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-slate-300 text-sm mt-4">
              Modern state-driven architecture with zero spaghetti code. Built for maintainability and seamless handover.
            </p>
          </div>

          {/* Bento Item 4: Global Edge Mesh Telemetry (Span 6) */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Edge CDN Mesh Routing</h3>
                  <p className="text-xs text-slate-400 font-mono-code">Global Multi-Cloud Deployment</p>
                </div>
              </div>

              <button
                onClick={triggerPing}
                disabled={pinging}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-300 text-xs font-mono-code transition-all text-slate-300 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${pinging ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{pinging ? 'Pinging...' : 'Test Latency'}</span>
              </button>
            </div>

            {/* Edge Latency List */}
            <div className="space-y-2 my-2">
              {latencies.map((node) => (
                <div key={node.region} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono-code">
                  <span className="text-slate-300">{node.region}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-semibold">{node.latency} ms</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-sm mt-3">
              Assets cached on 310+ edge locations globally. Your visitors load content in milliseconds regardless of geography.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
