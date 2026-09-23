import React from 'react';
import { StudioLogo } from './SvgAssets';
import { ArrowUpRight, Github, Twitter, Linkedin, Terminal, Globe2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Studio Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <StudioLogo size={42} />
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              We architect living digital experiences for pioneering enterprises at the frontier of
              spatial computing, WebGPU graphics, and high-frequency financial interfaces.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Production Nodes: Online &amp; Synchronized</span>
            </div>
          </div>

          {/* Column 2: Global Hubs */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              Global Deployment Hubs
            </span>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">TOKYO</span>
                  <span className="text-slate-500 text-[11px]">Roppongi Hills Mori Tower</span>
                </div>
                <span className="text-cyan-400 text-[11px]">UTC+9</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">LONDON</span>
                  <span className="text-slate-500 text-[11px]">Shoreditch High St, EC2A</span>
                </div>
                <span className="text-cyan-400 text-[11px]">UTC+0</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">NEW YORK</span>
                  <span className="text-slate-500 text-[11px]">Mercer St, SoHo 10012</span>
                </div>
                <span className="text-cyan-400 text-[11px]">UTC-5</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              System Map
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  01 // Case Studies &amp; Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  02 // Disciplines &amp; Shaders
                </a>
              </li>
              <li>
                <a href="#estimator" className="text-slate-400 hover:text-white transition-colors">
                  03 // Investment Estimator
                </a>
              </li>
              <li>
                <a href="#studio-dna" className="text-slate-400 hover:text-white transition-colors">
                  04 // Studio DNA &amp; Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  05 // Transmit Project Brief
                </a>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Giant Typographic Watermark & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 immersivestudio Inc. All rights reserved. Zero-garbage architecture.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">React + Vite + WebGPU + Tailwind</span>
            <span>Security: SHA-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
