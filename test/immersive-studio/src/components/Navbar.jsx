import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenInquiry, setCursorText }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [studioTime, setStudioTime] = useState('');

  // Subtle analogue tactile click using Web Audio API
  const playClick = (freq = 320) => {
    if (!soundOn) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      const paris = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' });
      setStudioTime(`PAR ${paris}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navItems = [
    { num: "01", label: "SELECTED WORK", href: "#work" },
    { num: "02", label: "INTERACTIVE LAB", href: "#lab" },
    { num: "03", label: "DISCIPLINE", href: "#disciplines" },
    { num: "04", label: "RECOGNITION", href: "#recognition" },
    { num: "05", label: "MANIFESTO", href: "#manifesto" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? "bg-[#09090b]/90 backdrop-blur-md border-b border-chalk py-3.5" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a 
          href="#"
          onClick={() => playClick(440)}
          onMouseEnter={() => setCursorText?.("HOME")}
          onMouseLeave={() => setCursorText?.("")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-widest text-[#f4f3ef] uppercase group-hover:text-white transition-colors">
              IMMERSIVE <span className="font-serif-editorial lowercase text-xs tracking-normal font-normal text-zinc-400">studio</span>
            </span>
            <span className="font-mono-tag text-[9px] text-zinc-500 uppercase tracking-widest">
              PARIS • TOKYO • SF
            </span>
          </div>
        </a>

        {/* Editorial Nav Index */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => playClick(480)}
              onMouseEnter={() => setCursorText?.(item.num)}
              onMouseLeave={() => setCursorText?.("")}
              className="group flex items-center gap-1.5 text-xs font-mono-tag text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Controls & Action */}
        <div className="hidden sm:flex items-center gap-6">
          
          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundOn;
              setSoundOn(next);
              if (next) playClick(520);
            }}
            onMouseEnter={() => setCursorText?.("AUDIO")}
            onMouseLeave={() => setCursorText?.("")}
            className="flex items-center gap-2 text-[11px] font-mono-tag text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
            <span>SOUND: {soundOn ? "ON" : "OFF"}</span>
          </button>

          {/* Timezone Indicator */}
          <span className="font-mono-tag text-[11px] text-zinc-500 border-l border-chalk pl-4">
            {studioTime || "PAR 12:00"}
          </span>

          {/* Commission Button */}
          <button
            onClick={() => {
              playClick(600);
              onOpenInquiry();
            }}
            onMouseEnter={() => setCursorText?.("START")}
            onMouseLeave={() => setCursorText?.("")}
            className="px-4 py-2 border border-chalk hover:border-white text-xs font-mono-tag uppercase tracking-wider text-[#f4f3ef] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>COMMISSION</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white cursor-pointer"
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
            className="lg:hidden bg-[#09090b] border-b border-chalk px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    playClick(440);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-lg font-display text-zinc-200 hover:text-white border-b border-chalk pb-3"
                >
                  <span>{item.label}</span>
                  <span className="font-mono-tag text-xs text-zinc-500">{item.num}</span>
                </a>
              ))}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSoundOn(!soundOn)}
                  className="font-mono-tag text-xs text-zinc-400"
                >
                  AUDIO: {soundOn ? "ENABLED" : "MUTED"}
                </button>
                <span className="font-mono-tag text-xs text-zinc-500">{studioTime}</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 bg-white text-black font-mono-tag text-xs uppercase tracking-widest font-bold text-center mt-2"
              >
                INITIATE COMMISSION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
