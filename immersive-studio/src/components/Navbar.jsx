import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { cn } from '../lib/utils';

export const NAV_LINKS = [
  { id: 'home', label: 'Index' },
  { id: 'work', label: 'Work', badge: '04' },
  { id: 'services', label: 'Services' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink rounded-xl p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-accent-ink text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-luxury-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-electric group-hover:scale-125 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm tracking-tight text-text-primary">
                IMMERSIVE
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/[0.05] text-text-secondary border border-black/[0.08]">
                STUDIO
              </span>
            </div>
            <p className="text-[10px] text-text-muted font-mono tracking-wider">CREATIVE ENGINEERING</p>
          </div>
        </button>

        {/* Desktop Navigation: Hick-Hyman compliant (<= 5 nodes) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-luxury-md"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  'relative px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink',
                  isActive ? 'text-white font-medium' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 bg-accent-ink rounded-full -z-10 shadow-luxury-sm"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span
                      className={cn(
                        'text-[9px] px-1.5 py-0.2 rounded font-mono',
                        isActive ? 'bg-white/20 text-white' : 'bg-black/[0.06] text-text-muted'
                      )}
                    >
                      {link.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Availability Status */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-[11px] font-mono text-text-muted px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-text-secondary">Q4 INQUIRIES OPEN</span>
          </div>

          <MagneticButton
            variant="primary"
            onClick={() => handleNavClick('contact')}
            className="text-xs"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Drawer"
            className="p-2.5 rounded-full bg-white border border-black/[0.08] text-text-primary shadow-luxury-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/[0.1] shadow-luxury-lg z-50 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                Directory
              </span>
              <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Available for Q4
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'flex items-center justify-between p-3.5 rounded-2xl text-left font-display text-lg tracking-tight transition-all',
                    activePage === link.id
                      ? 'bg-accent-ink text-white font-medium'
                      : 'text-text-primary hover:bg-black/[0.04]'
                  )}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs font-mono opacity-60">[{link.badge}]</span>
                  )}
                </button>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 rounded-2xl bg-accent-ink text-white font-medium text-center uppercase tracking-widest text-xs font-mono shadow-luxury-md"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
