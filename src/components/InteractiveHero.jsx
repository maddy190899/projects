import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DynamicMotionGraphic } from './LottieAnimation';

export const InteractiveHero = ({ onDeployClick, onInspectClick }) => {
  const [activeTab, setActiveTab] = useState('fp8');

  return (
    <div className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Dynamic Ambient Glow Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-transparent blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Kinetic Narrative Content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dynamic Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-400 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span>KERNEL v4.19 INLINE ENGINE ACTIVE</span>
            <span className="text-gray-500">|</span>
            <span className="text-emerald-400 font-semibold">42 NODES ONLINE</span>
          </div>

          {/* Kinetic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Sub-millisecond inference across{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              distributed micro-clusters.
            </span>
          </h1>

          {/* Deep Domain Narrative Copy */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl font-normal">
            Eliminate serialization bottlenecks with decentralized execution paths. Built-in FP8 quantization primitives running natively across edge compute runtimes with automated 45-microsecond failover thresholds.
          </p>

          {/* Dual Action Triggers */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDeployClick}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
            >
              <span>Deploy Cluster Instance</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onInspectClick}
              className="px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 font-medium text-sm transition-all backdrop-blur-sm"
            >
              Inspect Telemetry Spec
            </motion.button>
          </div>

          {/* Key Runtime Metric Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">8.42 ms</div>
              <div className="text-xs font-mono text-gray-400 mt-1 uppercase">P99 Tail Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">1,840 TFLOPS</div>
              <div className="text-xs font-mono text-purple-400 mt-1 uppercase">FP8 Peak Compute</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400 tracking-tight">99.998%</div>
              <div className="text-xs font-mono text-gray-400 mt-1 uppercase">Quorum Consensus</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Vector & DotLottie Graphic Surface */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-surface/50 backdrop-blur-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
            {/* Corner Decorative Hairline */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent pointer-events-none" />

            {/* Hardware Telemetry Controller Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-gray-300 font-semibold tracking-wide">NODE SIMULATION</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <button
                  onClick={() => setActiveTab('fp8')}
                  className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'fp8' ? 'bg-white/10 text-white' : 'hover:text-gray-300'}`}
                >
                  FP8
                </button>
                <button
                  onClick={() => setActiveTab('kv')}
                  className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'kv' ? 'bg-white/10 text-white' : 'hover:text-gray-300'}`}
                >
                  KV-Cache
                </button>
              </div>
            </div>

            {/* WebAssembly DotLottie Player Canvas */}
            <div className="w-full h-72 sm:h-80 flex items-center justify-center">
              <DynamicMotionGraphic
                src="https://assets2.lottiefiles.com/packages/lf20_m6cu9zqm.json"
                className="w-full h-full"
                autoplay
                loop
              />
            </div>

            {/* Interactive Live Stream Ticker */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="truncate">Active Tensor Stream: {activeTab === 'fp8' ? 'GEMM-128x256x64' : 'PagedAttention-v2'}</span>
              <span className="text-emerald-400 shrink-0 ml-2">● LIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveHero;
