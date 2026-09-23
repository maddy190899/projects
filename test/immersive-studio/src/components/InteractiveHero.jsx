import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Code, Sparkles, Zap, Shield, Globe, Play, Layers } from 'lucide-react';
import { SpatialWireframe } from './VectorGraphic';
import LottieAnimation, { LiveBadge } from './LottieAnimation';

export default function InteractiveHero({ onOpenQuoteModal, onOpenVideoModal }) {
  const [wireframeRotation, setWireframeRotation] = useState(15);
  const containerRef = useRef(null);

  // 3D Card Hover Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 14 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPos = (e.clientX - rect.left) / width - 0.5;
    const yPos = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
    setWireframeRotation((prev) => (prev + 0.4) % 360);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-cyber-grid"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Kinetic Hero Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 flex-wrap justify-center mb-8"
          >
            <LiveBadge label="Q4 Studio Roster: 2 Engineering Slots Active" color="cyan" />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Sub-40ms Global Edge TTFB</span>
            </div>
          </motion.div>

          {/* Main Title with Motion */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 font-heading"
          >
            We Engineer <span className="gradient-text-accent">Spatial Web</span> Experiences That Turn Audiences Into Believers.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            Immersive Studio is an elite web development and creative engineering laboratory. We blend 
            <span className="text-cyan-300 font-medium"> WebGL 3D, physics-driven animations,</span> and 
            <span className="text-purple-300 font-medium"> hyper-performant React architectures</span> for visionary tech brands.
          </motion.p>

          {/* Action Triggers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Initiate Your Build</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore Selected Work</span>
            </a>
          </motion.div>

        </div>

        {/* Interactive 3D Stage / Hero Visual Showpiece */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="mt-16 relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl shadow-cyan-950/40"
        >
          {/* Outer Glass Container */}
          <div className="relative rounded-[22px] bg-[#0C1019]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 overflow-hidden">
            
            {/* Top Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono-code text-slate-400">
                  immersive-studio://runtime/webgl-v4-active
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono-code text-cyan-400">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>60.0 FPS LOCKED</span>
              </div>
            </div>

            {/* Split Interactive Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Interactive Real Project Preview (Real Unsplash image, no placeholders!) */}
              <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                    alt="Aether Spatial 3D Web Platform by Immersive Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-80" />

                  {/* Interactive Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono-code uppercase px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Spatial Audio & WebGL
                      </span>
                      <h4 className="text-lg font-heading font-bold text-white mt-1">
                        Aether 3D Platform
                      </h4>
                    </div>
                    <a 
                      href="#portfolio"
                      className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    >
                      View Live Case
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Spatial Wireframe + Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                
                {/* 3D Kinetic Wireframe Element */}
                <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center justify-center">
                  <SpatialWireframe activeAngle={wireframeRotation} />
                  
                  {/* Floating Telemetry Chips */}
                  <div className="absolute top-3 left-3 bg-[#090A0F]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-mono-code text-cyan-300">
                    Vertex Density: 48,200
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#090A0F]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-mono-code text-purple-300">
                    Shader: GLSL v300
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-xl font-bold font-heading text-cyan-400">+280%</p>
                    <p className="text-[11px] text-slate-400">Conversion Lift</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-xl font-bold font-heading text-emerald-400">0.32s</p>
                    <p className="text-[11px] text-slate-400">First Contentful Paint</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-xl font-bold font-heading text-purple-400">100/100</p>
                    <p className="text-[11px] text-slate-400">Performance Index</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
