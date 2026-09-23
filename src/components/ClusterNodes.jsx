import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EdgeNodeIcon, TensorFlowIcon } from './VectorGraphic';

export const ClusterNodes = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [filter, setFilter] = useState('all');

  const clusters = [
    { id: 'node-alpha-01', region: 'us-east-va', type: 'Tensor Core FP8', status: 'Healthy', memory: '84.2%', temp: '48°C', load: '1.24 TFLOPS' },
    { id: 'node-alpha-02', region: 'us-east-va', type: 'FlashAttention v3', status: 'Healthy', memory: '72.1%', temp: '44°C', load: '1.81 TFLOPS' },
    { id: 'node-beta-01', region: 'eu-west-fra', type: 'Paged KV-Cache', status: 'Healthy', memory: '91.4%', temp: '52°C', load: '0.95 TFLOPS' },
    { id: 'node-beta-02', region: 'eu-west-fra', type: 'Fused Consensus', status: 'Synchronizing', memory: '64.0%', temp: '42°C', load: '0.88 TFLOPS' },
    { id: 'node-gamma-01', region: 'ap-east-tyo', type: 'Tensor Core FP8', status: 'Healthy', memory: '79.8%', temp: '46°C', load: '1.62 TFLOPS' },
    { id: 'node-gamma-02', region: 'ap-east-tyo', type: 'Zero-Fault Sentinel', status: 'Standby', memory: '18.5%', temp: '36°C', load: '0.02 TFLOPS' },
  ];

  const filteredClusters = filter === 'all'
    ? clusters
    : clusters.filter((c) => c.status.toLowerCase() === filter);

  return (
    <section id="clusters" className="pt-16 pb-28 border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            TOPOLOGY MESH
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Distributed Micro-Cluster Topology
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Decentralized inference execution units running isolated tenant workloads with instantaneous memory isolation.
          </p>
        </div>

        {/* Status filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-white/[0.08] text-xs font-mono">
          {['all', 'healthy', 'synchronizing', 'standby'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                filter === f ? 'bg-white/10 text-white font-medium' : 'text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Node Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClusters.map((node) => (
          <div
            key={node.id}
            onClick={() => setSelectedNode(node)}
            className="group relative cursor-pointer rounded-2xl border border-white/[0.08] bg-surface/40 hover:bg-surface/80 p-5 transition-all duration-200 hover:border-white/20 hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="font-mono text-xs text-gray-400">{node.region}</span>
                <h3 className="text-white font-semibold text-base tracking-tight mt-0.5 group-hover:text-blue-400 transition-colors">
                  {node.id}
                </h3>
              </div>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                  node.status === 'Healthy'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : node.status === 'Synchronizing'
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                    : 'border-blue-500/30 bg-blue-500/10 text-blue-400'
                }`}
              >
                ● {node.status}
              </span>
            </div>

            <div className="text-xs text-gray-400 font-medium mb-4">
              {node.type}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-xs font-mono">
              <div>
                <span className="text-gray-500">MEMORY</span>
                <div className="text-gray-200 mt-0.5">{node.memory}</div>
              </div>
              <div>
                <span className="text-gray-500">THERMAL</span>
                <div className="text-gray-200 mt-0.5">{node.temp}</div>
              </div>
              <div>
                <span className="text-gray-500">LOAD</span>
                <div className="text-blue-400 mt-0.5">{node.load}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Node Telemetry Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
              <div className="flex items-center gap-2">
                <EdgeNodeIcon className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-white">{selectedNode.id} Detailed Telemetry</span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono mb-6">
              <div className="flex justify-between p-2.5 rounded bg-black/40">
                <span className="text-gray-400">Execution Kernel</span>
                <span className="text-white font-semibold">Triton-FP8 v3.2.1-fused</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-black/40">
                <span className="text-gray-400">Consensus Protocol</span>
                <span className="text-emerald-400 font-semibold">Zero-Overhead Raft v2</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-black/40">
                <span className="text-gray-400">DMA Shm Address</span>
                <span className="text-blue-400 font-semibold">0x7ffd9a4e2000</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-black/40">
                <span className="text-gray-400">Heartbeat Interval</span>
                <span className="text-gray-300 font-semibold">500 microseconds</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedNode(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Close Telemetry View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClusterNodes;
