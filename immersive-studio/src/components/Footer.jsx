import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Sparkles, Terminal, Mail, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { sound } from '../utils/soundEngine';

export const Footer = ({ onOpenInquiry }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      sound.playSuccess();
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    sound.playTactile(700, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-canvas-surface border-t border-border-subtle pt-24 pb-12 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Massive Callout Anchor */}
        <div className="mb-20 pb-16 border-b border-border-subtle flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
              <span>COMMISSIONS OPEN // Q3–Q4 SCHEDULE</span>
            </div>
            <h2 className="type-display font-display font-extrabold uppercase text-text-primary tracking-tightest max-w-4xl">
              Let's engineer something <span className="text-accent-primary">irreversible</span>.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => {
                sound.playTactile(700, 0.05);
                onOpenInquiry();
              }}
              onHoverSound={() => sound.playHover()}
            >
              <span>Initiate Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>

        {/* Studio Grid: Locations, Telemetry Newsletter, Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 text-xs font-mono">
          {/* Col 1: Studio Hubs */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-text-muted uppercase tracking-wider text-[10px]">
              Physical Ateliers & Nodes
            </div>
            <div className="space-y-3 text-text-secondary">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-text-primary font-bold">LONDON //</span> Shoreditch High St, EC1
                  <div className="text-[10px] text-text-muted">51.5229° N, 0.0777° W</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-text-primary font-bold">TOKYO //</span> Minato-ku, Roppongi Hills
                  <div className="text-[10px] text-text-muted">35.6628° N, 139.7314° E</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-violet shrink-0 mt-0.5" />
                <div>
                  <span className="text-text-primary font-bold">NEW YORK //</span> SoHo, Mercer St
                  <div className="text-[10px] text-text-muted">40.7223° N, 73.9987° W</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-text-muted uppercase tracking-wider text-[10px]">
              Directory
            </div>
            <ul className="space-y-2.5 text-text-secondary">
              <li>
                <a href="#work" className="hover:text-accent-primary transition-colors">
                  01 // Selected Work
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent-primary transition-colors">
                  02 // Capabilities
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-accent-primary transition-colors">
                  03 // Scope Engine
                </a>
              </li>
              <li>
                <a href="#radar" className="hover:text-accent-primary transition-colors">
                  04 // Telemetry Radar
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-accent-primary transition-colors">
                  05 // The Lab
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-accent-primary transition-colors">
                  06 // 4-Sprint Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Awards Recognition */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-text-muted uppercase tracking-wider text-[10px]">
              Accolades
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex justify-between">
                <span>Awwwards SOTD</span>
                <span className="text-accent-primary font-bold">14x</span>
              </li>
              <li className="flex justify-between">
                <span>FWA of the Month</span>
                <span className="text-accent-cyan font-bold">09x</span>
              </li>
              <li className="flex justify-between">
                <span>Developer of Year</span>
                <span className="text-text-primary">06x Nom</span>
              </li>
              <li className="flex justify-between">
                <span>Webby Awards</span>
                <span className="text-accent-violet">04x Hon</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Telemetry Radar Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-text-muted uppercase tracking-wider text-[10px]">
              Engineering Telemetry Dispatch
            </div>
            <p className="text-xs text-text-secondary font-sans">
              Quarterly release notes on custom GLSL shaders, WebGPU benchmarks, and headless e-commerce experiments. Zero marketing fluff.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="partner@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-canvas-card border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none flex-grow text-xs font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-accent-primary text-black font-semibold hover:brightness-110 transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-canvas-card border border-accent-primary/40 text-accent-primary flex items-center gap-2 text-xs">
                <Check className="w-4 h-4" />
                <span>Subscribed to Engineering Telemetry.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} IMMERSIVE STUDIO LTD. ALL RIGHTS RESERVED.</span>
            <span>•</span>
            <span className="text-accent-primary">ZERO THIRD-PARTY TRACKING</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors cursor-pointer group"
          >
            <span>BACK TO ZENITH</span>
            <div className="w-7 h-7 rounded-full bg-canvas-card border border-border-subtle flex items-center justify-center group-hover:border-accent-primary transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
