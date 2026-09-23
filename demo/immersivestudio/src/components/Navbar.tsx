import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, Shield, Terminal } from 'lucide-react';
import { StudioLogo, SoundwavePulse } from './SvgAssets';

interface NavbarProps {
  onOpenBrief: () => void;
  onOpenShowreel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief, onOpenShowreel }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      setUtcTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Studio DNA', href: '#studio-dna' },
    { label: 'Inquiry', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#07080a]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-cyan-950/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <StudioLogo />
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions & Clock */}
          <div className="hidden md:flex items-center gap-4">
            {/* UTC Clock & Hub Coordinates */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-white/5 font-mono text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-300 font-semibold">{utcTime} UTC</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">TYO · LDN · NYC</span>
            </div>

            {/* Quick Showreel trigger */}
            <button
              onClick={onOpenShowreel}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors px-2 py-1"
            >
              Reel '26
            </button>

            {/* CTA Button */}
            <motion.button
              onClick={onOpenBrief}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Initiate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#07080a]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>{utcTime} UTC · GLOBAL</span>
                <span className="text-slate-400">ONLINE</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShowreel();
                  }}
                  className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white"
                >
                  View Showreel '26
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrief();
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <span>Initiate Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
