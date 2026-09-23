import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Award } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer = ({ setActivePage }) => {
  const [clocks, setClocks] = useState({
    nyc: '--:--:--',
    lon: '--:--:--',
    tyo: '--:--:--',
  });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatTime = (timeZone) =>
        new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setClocks({
        nyc: formatTime('America/New_York'),
        lon: formatTime('Europe/London'),
        tyo: formatTime('Asia/Tokyo'),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-canvas-muted/80 border-t border-border-subtle pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Massive Call to Action Terminal Moment */}
        <div className="rounded-3xl bg-white border border-border-muted p-8 md:p-16 mb-20 relative overflow-hidden shadow-luxury-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-electric/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-mono tracking-eyebrow text-accent-electric mb-3 block">
                [ ENGAGEMENT INQUIRY ]
              </span>
              <h2 className="type-h2 font-display text-text-primary mb-6 font-bold tracking-tight">
                Have a vision that demands world-class execution?
              </h2>
              <p className="text-text-secondary type-body max-w-xl font-light">
                We partner with select global enterprises and audacious ventures to architect high-performance interactive platforms that redefine category leadership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => navigateTo('contact')}
                className="py-4 px-8 text-sm"
              >
                <span>Initiate Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => navigateTo('services')}
                className="py-4 px-8 text-sm"
              >
                <span>Scope Estimator</span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Global Clocks & Office Status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12 mb-12 border-b border-border-subtle">
          <div className="p-5 rounded-2xl bg-white border border-border-subtle shadow-luxury-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-text-muted uppercase">NEW YORK / EST</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="font-mono text-xl text-text-primary font-medium tracking-tight">
              {clocks.nyc} <span className="text-xs text-text-muted">UTC-4</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-subtle shadow-luxury-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-text-muted uppercase">LONDON / BST</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="font-mono text-xl text-text-primary font-medium tracking-tight">
              {clocks.lon} <span className="text-xs text-text-muted">UTC+1</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-subtle shadow-luxury-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-text-muted uppercase">TOKYO / JST</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="font-mono text-xl text-text-primary font-medium tracking-tight">
              {clocks.tyo} <span className="text-xs text-text-muted">UTC+9</span>
            </div>
          </div>
        </div>

        {/* Studio Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-subtle">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded bg-accent-ink" />
              <span className="font-display font-bold text-lg text-text-primary tracking-tight">
                IMMERSIVE STUDIO
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-sm font-light">
              Creative digital engineering collective synthesizing neuro-perceptual behavioral UX, 60/120fps kinetic motion, and high-conversion design systems.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
              <Award className="w-4 h-4 text-accent-electric" />
              <span>Awwwards Jury Member 2026</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-mono text-text-secondary">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-text-primary transition-colors"
                >
                  Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('work')}
                  className="hover:text-text-primary transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-text-primary transition-colors"
                >
                  Capabilities & Scope
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('philosophy')}
                  className="hover:text-text-primary transition-colors"
                >
                  Manifesto & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-text-primary transition-colors"
                >
                  Initiate Brief
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">Certifications</h4>
            <ul className="space-y-2.5 text-xs font-mono text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-accent-ink font-semibold">8×</span> Awwwards SOTD
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-ink font-semibold">12×</span> FWA of the Day
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-ink font-semibold">2×</span> Webby Honoree
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-ink font-semibold">WCAG</span> 2.2 AA Certified
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">
              Intelligence Dispatch
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed mb-4 font-light">
              Quarterly analytical whitepapers on neuro-perceptual web engineering, WebGL performance budgets, and conversion architecture.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs font-mono text-emerald-800">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                <span>Subscribed. Welcome to the Immersive Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="executive@enterprise.com"
                  className="flex-1 bg-white border border-border-muted rounded-xl px-4 py-3 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-accent-ink text-white font-medium text-xs font-mono uppercase hover:bg-black transition-colors shadow-luxury-sm"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} IMMERSIVE STUDIO LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>WCAG 2.2 LEVEL AA</span>
            <span>60/120 FPS COMPLIANT</span>
            <span>ZERO SYNTHETIC PLACEHOLDERS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
