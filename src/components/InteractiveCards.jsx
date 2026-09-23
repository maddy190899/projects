import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { NeuralCoreIcon, TensorFlowIcon, EdgeNodeIcon } from './VectorGraphic';

export const BentoSpotlightCard = ({ children, className = "", colSpan = "col-span-1" }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl border border-white/[0.08] bg-surface/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/5 ${colSpan} ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(96, 165, 250, 0.15), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const InteractiveCards = () => {
  const [activeZone, setActiveZone] = useState('us-east-va');
  const [copiedMetric, setCopiedMetric] = useState(null);

  const telemetryZones = [
    { id: 'us-east-va', name: 'US-East (Virginia)', latency: '8.42 ms', status: 'Optimal', throughput: '1,840 TFLOPS', nodes: 64 },
    { id: 'eu-west-fra', name: 'EU-Central (Frankfurt)', latency: '11.18 ms', status: 'Optimal', throughput: '1,620 TFLOPS', nodes: 48 },
    { id: 'ap-east-tyo', name: 'AP-East (Tokyo)', latency: '14.05 ms', status: 'Synchronized', throughput: '1,490 TFLOPS', nodes: 36 },
  ];

  const currentZoneData = telemetryZones.find((z) => z.id === activeZone) || telemetryZones[0];

  const handleCopy = (metricName, val) => {
    navigator.clipboard?.writeText?.(`${metricName}: ${val}`);
    setCopiedMetric(metricName);
    setTimeout(() => setCopiedMetric(null), 2000);
  };

  return (
    <section id="metrics" className="pt-24 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            TELEMETRY TELEKINETICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Real-Time Distributed Telemetry
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl">
            Continuous sub-millisecond telemetry dispatches stream directly from decentralized neural inference kernels across global edge topologies.
          </p>
        </div>

        {/* Region filter switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-surface border border-white/[0.08]">
          {telemetryZones.map((z) => (
            <button
              key={z.id}
              onClick={() => setActiveZone(z.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeZone === z.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {z.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Bento Card 1: P99 Latency (Large col-span-2) */}
        <BentoSpotlightCard colSpan="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <NeuralCoreIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                P99 Latency Benchmark
              </span>
            </div>
            <button
              onClick={() => handleCopy('P99 Latency', currentZoneData.latency)}
              className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors"
            >
              {copiedMetric === 'P99 Latency' ? '✓ Copied' : 'Copy Spec'}
            </button>
          </div>

          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-5xl font-extrabold text-white tracking-tight">
              {currentZoneData.latency}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              -1.4% jitter
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Benchmarked against 2.4 million continuous concurrent payload dispatches across 42 availability zones with zero pipeline serialization stalls.
          </p>

          {/* Micro Telemetry Graph */}
          <div className="h-16 w-full flex items-end gap-1.5 pt-2 border-t border-white/[0.06]">
            {[45, 52, 48, 60, 55, 42, 38, 49, 53, 44, 40, 48, 42, 36, 41, 39, 42].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-600/40 to-blue-400 rounded-t-sm transition-all duration-500 hover:to-white"
                style={{ height: `${height}%` }}
                title={`Sample #${i + 1}: ${((height / 100) * 12).toFixed(2)}ms`}
              />
            ))}
          </div>
        </BentoSpotlightCard>

        {/* Bento Card 2: FP8 Tensor Core Throughput */}
        <BentoSpotlightCard colSpan="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <TensorFlowIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                FP8 Tensor Throughput
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Active Quorum
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-5xl font-extrabold text-white tracking-tight">
              {currentZoneData.throughput}
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Fused multi-head attention kernels operating without precision loss, quantization degradation, or thermal throttling constraints.
          </p>

          {/* Cluster Status Telemetry Pill */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-gray-500">EDGE NODES</span>
              <div className="text-white font-semibold text-sm mt-0.5">{currentZoneData.nodes} Units Active</div>
            </div>
            <div>
              <span className="text-gray-500">PRECISION</span>
              <div className="text-purple-400 font-semibold text-sm mt-0.5">E4M3 / E5M2 Native</div>
            </div>
          </div>
        </BentoSpotlightCard>

        {/* Bento Card 3: Zero-Fault Tolerance */}
        <BentoSpotlightCard colSpan="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <EdgeNodeIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Zero-Fault Tolerance
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400">SLA Guaranteed</span>
          </div>

          <div className="text-4xl font-extrabold text-white tracking-tight mb-2">
            99.998%
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Automated failover protocol re-routing active memory pages in under 45 microseconds upon edge-node drop or network partitioning.
          </p>

          <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[99.998%]" />
          </div>
        </BentoSpotlightCard>

        {/* Bento Card 4: Memory Migration Ledger */}
        <BentoSpotlightCard colSpan="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-xs uppercase tracking-wider text-gray-400">
              Distributed Execution Paths
            </div>
            <span className="text-xs font-mono text-blue-400">Live Telemetry Ledger</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {[
              { path: 'shm://node-va-01/fp8_weights', size: '2.4 GB', time: '12μs', status: 'Mounted' },
              { path: 'shm://node-fra-04/kv_cache', size: '890 MB', time: '18μs', status: 'Hot-Synced' },
              { path: 'shm://node-tyo-02/flash_attn', size: '1.2 GB', time: '9μs', status: 'Direct DMA' },
            ].map((entry, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-gray-300 truncate">{entry.path}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-gray-500">{entry.size}</span>
                  <span className="text-blue-400">{entry.time}</span>
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    {entry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BentoSpotlightCard>
      </div>
    </section>
  );
};

export default InteractiveCards;
