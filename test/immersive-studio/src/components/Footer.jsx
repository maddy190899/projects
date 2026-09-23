import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Globe, Mail, Check } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  return (
    <footer className="relative bg-[#06070B] text-slate-400 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Call to Action Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 glass-panel border border-white/15 overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono-code text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-block mb-3">
                LET'S SHIFT THE DIGITAL PARADIGM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
                Have a bold vision? <br />
                <span className="gradient-text-accent">Let's build the benchmark.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a complete spatial 3D experience, a high-frequency financial platform, or a luxury flagship web store, our engineering pod is ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Schedule Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#090A0F] rounded-[6px] flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-4 h-4 text-cyan-400 fill-none stroke-current stroke-2">
                    <path d="M6 8L16 2L26 8V24L16 30L6 24V8Z" />
                    <path d="M16 2V16M16 16L26 24M16 16L6 24" />
                  </svg>
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                IMMERSIVE <span className="text-cyan-400">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent creative engineering practice crafting category-defining 3D WebGL experiences and hyper-performant digital flagships.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono-code text-slate-500">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Studio Master Clock: {time || '12:00:00 UTC'}</span>
            </div>
          </div>

          {/* Navigation Columns (Span 2 each) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-code font-bold uppercase text-white tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Client Creations</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Core Capabilities</a></li>
              <li><a href="#bento" className="hover:text-cyan-400 transition-colors">Bento Engine</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Scope Estimator</a></li>
              <li><a href="#studio" className="hover:text-cyan-400 transition-colors">Studio Pod</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Process & FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-code font-bold uppercase text-white tracking-wider">Locations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="text-white font-medium">San Francisco</li>
              <li className="text-[11px] font-mono-code">540 Howard St, Suite 400</li>
              <li className="text-white font-medium pt-1">Zurich</li>
              <li className="text-[11px] font-mono-code">Technoparkstrasse 1</li>
            </ul>
          </div>

          {/* Newsletter / Dispatch (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-code font-bold uppercase text-white tracking-wider">
              Spatial Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Bi-weekly engineering notes on WebGPU shaders, Core Web Vitals optimizations, and motion design theory.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@company.com"
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500 flex-1"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors cursor-pointer shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4" /> : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] font-mono-code text-cyan-400 block">
                ✓ Registered for the next Spatial Dispatch.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <div>
            © {new Date().getFullYear()} Immersive Studio LLC. All rights reserved. Zero templates.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Whitepaper</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer p-2 rounded-lg hover:bg-white/5"
            title="Scroll to top"
          >
            <span>Top of Canvas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
