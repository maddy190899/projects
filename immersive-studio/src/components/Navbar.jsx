import React, { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { Volume2, VolumeX, Menu, X, Sparkles, Activity, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const Navbar = ({ onOpenInquiry, soundActive, setSoundActive, motionReduced, setMotionReduced }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studioTimes, setStudioTimes] = useState({
    london: '',
    tokyo: '',
    nyc: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone) => {
        return new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
      };

      setStudioTimes({
        london: formatTime('Europe/London'),
        tokyo: formatTime('Asia/Tokyo'),
        nyc: formatTime('America/New_York')
      });
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleToggleSound = () => {
    const newState = sound.toggleSound();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Scope Engine', href: '#calculator' },
    { label: 'Telemetry Radar', href: '#radar' },
    { label: 'The Lab', href: '#lab' },
    { label: 'Manifesto', href: '#philosophy' },
  ];

  const handleNavClick = (href) => {
    sound.playTactile(550, 0.03);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-canvas-base/80 backdrop-blur-xl border-b border-border-subtle shadow-card-elevated'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Anchor */}
        <a
          href="#"
          className="flex items-center gap-3.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg p-1"
          onClick={() => sound.playTactile(700, 0.05)}
        >
          <div className="relative w-8 h-8 rounded-lg bg-canvas-card border border-border-subtle flex items-center justify-center overflow-hidden group-hover:border-accent-primary transition-colors">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary transform rotate-45 group-hover:scale-125 transition-transform duration-300" />
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-text-primary flex items-center gap-2">
              IMMERSIVE <span className="text-accent-primary font-mono text-xs">// STUDIO</span>
            </span>
            <span className="text-[10px] text-text-muted font-mono tracking-widest hidden sm:inline-block">
              CREATIVE ENGINEERING
            </span>
          </div>
        </a>

        {/* Global World Clocks Ticker (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full bg-canvas-card/60 border border-border-subtle/60 text-[11px] font-mono text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span>LON <strong className="text-text-primary font-semibold">{studioTimes.london || '12:00:00'}</strong></span>
          </div>
          <span className="text-border-subtle">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>TYO <strong className="text-text-primary font-semibold">{studioTimes.tokyo || '20:00:00'}</strong></span>
          </div>
          <span className="text-border-subtle">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span>NYC <strong className="text-text-primary font-semibold">{studioTimes.nyc || '07:00:00'}</strong></span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-mono tracking-wider">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              onMouseEnter={() => sound.playHover()}
              className="text-text-secondary hover:text-accent-primary transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:text-accent-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls: Audio Toggle + Motion + Project CTA */}
        <div className="flex items-center gap-3">
          {/* Audio Engine Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={soundActive ? 'Mute micro-audio engine' : 'Enable micro-audio engine'}
            title={soundActive ? 'Sound is ON' : 'Turn sound ON (Ambient & tactile feedback)'}
            className={`relative p-2.5 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${
              soundActive
                ? 'bg-accent-primary/10 border-accent-primary text-accent-primary shadow-glow-salient/30'
                : 'bg-canvas-card border-border-subtle text-text-muted hover:text-text-primary hover:border-border-focus'
            }`}
          >
            {soundActive ? (
              <div className="flex items-center gap-0.5 h-3.5 w-3.5 px-0.5 justify-center">
                <span className="w-0.5 h-2.5 bg-accent-primary animate-pulse" />
                <span className="w-0.5 h-3.5 bg-accent-primary animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-accent-primary animate-pulse delay-150" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Quick Inquiry Magnetic CTA */}
          <MagneticButton
            variant="primary"
            size="sm"
            onClick={() => {
              sound.playTactile(800, 0.05);
              onOpenInquiry();
            }}
            onHoverSound={() => sound.playHover()}
            className="hidden sm:inline-flex"
          >
            <span>Initiate Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              sound.playTactile(500, 0.04);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2.5 rounded-full bg-canvas-card border border-border-subtle text-text-primary hover:border-border-focus focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[73px] bg-canvas-base/95 backdrop-blur-2xl border-b border-border-subtle p-6 transition-all duration-300">
          <div className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-mono text-text-primary hover:text-accent-primary hover:bg-white/[0.03] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary px-2">
              <span>SOUND ENGINE:</span>
              <span className={soundActive ? 'text-accent-primary font-bold' : 'text-text-muted'}>
                {soundActive ? 'ACTIVE (AMBIENT SYNTH)' : 'MUTED'}
              </span>
            </div>
            <MagneticButton
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full"
            >
              <span>Initiate Project Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      )}
    </header>
  );
};
