import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play subtle futuristic cyber beep using Web Audio API on click if sound is enabled
  const playSfx = (freq = 440, type = 'sine', duration = 0.08) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Audio context fallback
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Bento Stack", href: "#bento" },
    { label: "Estimator", href: "#estimator" },
    { label: "Studio", href: "#studio" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={() => playSfx(600, 'triangle')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#090A0F] rounded-[10px] flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-5 h-5 text-cyan-400 fill-none stroke-current stroke-2 group-hover:rotate-12 transition-transform duration-300">
                <path d="M6 8L16 2L26 8V24L16 30L6 24V8Z" />
                <path d="M16 2V16M16 16L26 24M16 16L6 24" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              IMMERSIVE <span className="text-cyan-400">STUDIO</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono-code tracking-wider uppercase">
              Web & Spatial Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => playSfx(480, 'sine')}
              className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls & Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playSfx(520, 'triangle');
            }}
            title={soundEnabled ? "Disable UI Audio Feedback" : "Enable Futuristic Audio Feedback"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code transition-all ${
              soundEnabled 
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" 
                : "bg-white/5 text-slate-400 border border-white/10 hover:text-slate-200"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>SFX: {soundEnabled ? "ON" : "OFF"}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              playSfx(700, 'sine');
              onOpenQuoteModal();
            }}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#090A0F]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    playSfx(480, 'sine');
                    setMobileMenuOpen(false);
                  }}
                  className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="flex items-center gap-2 text-xs font-mono-code text-slate-300 bg-white/5 px-3 py-2 rounded-lg"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
                  <span>Audio SFX: {soundEnabled ? "Enabled" : "Disabled"}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white text-center shadow-lg"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
