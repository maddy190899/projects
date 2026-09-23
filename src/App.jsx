import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CyberShieldIcon, CosmicGridBackground } from './components/VectorGraphic';
import { InteractiveHero } from './components/InteractiveHero';
import { InteractiveCards } from './components/InteractiveCards';
import { ClusterNodes } from './components/ClusterNodes';

export default function App() {
  const [modalState, setModalState] = useState(null); // 'deploy' | 'spec' | 'gateway' | null
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleDeploySubmit = (e) => {
    e.preventDefault();
    setModalState(null);
    showToast('Deployment initiated: Cluster instance provisioning across US-East & EU-West.');
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-gray-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
        {/* Procedural Vector Grid & Glows */}
        <CosmicGridBackground />
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

        {/* Global Navigation */}
        <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CyberShieldIcon className="w-8 h-8" />
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                AetherNet Engine
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                v4.19
              </span>
            </div>

            <nav className="flex items-center gap-6 text-sm text-gray-400 font-medium">
              <a href="#metrics" className="hover:text-white transition-colors">Telemetry</a>
              <a href="#clusters" className="hover:text-white transition-colors">Clusters</a>
              <a href="#architecture" className="hover:text-white transition-colors hidden md:inline-block">Architecture</a>
              <button
                onClick={() => setModalState('gateway')}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 transition-all shadow-sm"
              >
                Access Gateway
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <InteractiveHero
            onDeployClick={() => setModalState('deploy')}
            onInspectClick={() => setModalState('spec')}
          />

          {/* Bento Grid Telemetry Metrics */}
          <InteractiveCards />

          {/* Distributed Micro-Clusters Topology */}
          <ClusterNodes />

          {/* Technical Architecture Protocol Section */}
          <section id="architecture" className="py-20 border-t border-white/[0.06]">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400 mb-3">
                SYSTEM SCHEMATIC
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
                Decentralized Memory Bus & Quantization Architecture
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
                Hardware-accelerated FP8 matrix multiplications bypass userland context switches by binding shared memory segments directly through direct memory access (DMA) ring buffers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-surface/40">
                <div className="font-mono text-xs text-blue-400 mb-2">01 / QUANTIZATION PIPELINE</div>
                <h3 className="text-lg font-semibold text-white mb-2">FP8 Tensor Core Fusion</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Dynamic scaling factors maintain numerical precision within dynamic dynamic-range limits. Automated clip thresholds eliminate activation outlier clipping.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-surface/40">
                <div className="font-mono text-xs text-purple-400 mb-2">02 / CONSENSUS ENGINE</div>
                <h3 className="text-lg font-semibold text-white mb-2">45μs Quorum Failover</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Asynchronous heartbeats detect intermittent hardware drops without stalling inference pipelines. Memory pages hot-swap instantly across standby sentinels.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-surface/40">
                <div className="font-mono text-xs text-emerald-400 mb-2">03 / TRANSPORT LAYER</div>
                <h3 className="text-lg font-semibold text-white mb-2">Direct Shared-Memory DMA</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Zero-copy telemetry streaming pushes metric events directly to visualization listeners, achieving sub-millisecond tail latency across concurrent users.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Global Footer */}
        <footer className="border-t border-white/[0.08] bg-surface/50 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
            <div className="flex items-center gap-3">
              <CyberShieldIcon className="w-5 h-5 text-blue-500" />
              <span className="text-gray-400 font-sans font-medium text-sm">AetherNet Telemetry Platform</span>
            </div>
            <div>
              <span>ANTIGRAVITY AGENT HARNESS</span>
              <span className="mx-2">|</span>
              <span className="text-gray-400">REACT-SWC + VITE + TAILWIND + LENIS</span>
            </div>
            <div>
              <span>GIT CONTINUOUS SYNC ACTIVE</span>
              <span className="mx-2">●</span>
              <span className="text-emerald-400">STATUS 200 OK</span>
            </div>
          </div>
        </footer>

        {/* Interactive Modals */}
        {modalState === 'deploy' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-surface p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Deploy Cluster Instance</h3>
              <p className="text-xs text-gray-400 mb-6">
                Configure runtime allocation for autonomous neural inference on distributed edge micro-nodes.
              </p>
              <form onSubmit={handleDeploySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">CLUSTER SPEC</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500">
                    <option>FP8 Fused Attention (64 TFLOPS)</option>
                    <option>Tensor Parallel High-Density (128 TFLOPS)</option>
                    <option>Zero-Fault Ultra-Low Latency Sentinel</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">TARGET REGION</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500">
                    <option>us-east-va (Virginia - 8.42ms)</option>
                    <option>eu-west-fra (Frankfurt - 11.18ms)</option>
                    <option>ap-east-tyo (Tokyo - 14.05ms)</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setModalState(null)}
                    className="px-4 py-2 rounded-lg text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30"
                  >
                    Launch Node
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {modalState === 'spec' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-surface p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <h3 className="text-base font-bold text-white">Full Telemetry Technical Specification</h3>
                <button onClick={() => setModalState(null)} className="text-gray-400 hover:text-white text-sm">✕</button>
              </div>
              <div className="space-y-2.5 text-xs font-mono mb-6 max-h-80 overflow-y-auto pr-2">
                <div className="p-2.5 rounded bg-black/40 flex justify-between">
                  <span className="text-gray-400">P99 Latency Profile</span>
                  <span className="text-blue-400 font-semibold">8.42 ms (+/- 0.12ms)</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 flex justify-between">
                  <span className="text-gray-400">Quantization Format</span>
                  <span className="text-purple-400 font-semibold">FP8 E4M3 / E5M2 hybrid</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 flex justify-between">
                  <span className="text-gray-400">Peak Attention Bandwidth</span>
                  <span className="text-white font-semibold">3.8 TB/s per cluster socket</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 flex justify-between">
                  <span className="text-gray-400">Failover Recovery Window</span>
                  <span className="text-emerald-400 font-semibold">&lt; 45 microseconds</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 flex justify-between">
                  <span className="text-gray-400">Consensus Quorum</span>
                  <span className="text-white font-semibold">32/32 Raft Heartbeat nodes</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setModalState(null)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}

        {modalState === 'gateway' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-sm rounded-2xl border border-white/20 bg-surface p-6 shadow-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                <CyberShieldIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Access Gateway Authenticated</h3>
              <p className="text-xs text-gray-400 mb-6">
                Connected to internal cluster gateway via Antigravity authenticated session token.
              </p>
              <button
                onClick={() => {
                  setModalState(null);
                  showToast('Gateway session verified and token refreshed.');
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Enter Control Plane
              </button>
            </div>
          </div>
        )}

        {/* Live Toast Notification */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-surface border border-white/20 text-white text-xs font-mono shadow-2xl flex items-center gap-3 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toast}</span>
          </div>
        )}
      </div>
    </SmoothScroll>
  );
}
