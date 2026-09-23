import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Music, Volume2, VolumeX, Menu, X, Heart, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playingMusic, setPlayingMusic] = useState(false);

  // Play gentle, warm acoustic chime with Web Audio API
  const playGentleChime = (freq = 432) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio fallback
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
    { label: "Our Work", href: "#work" },
    { label: "Meet Us", href: "#humans" },
    { label: "How We Work", href: "#how-it-feels" },
    { label: "Studio Scrapbook", href: "#scrapbook" },
    { label: "Kind Words", href: "#kind-words" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Warm Studio Brand Identity */}
        <a 
          href="#"
          onClick={() => playGentleChime(528)}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-105 group-hover:bg-amber-200 transition-all shadow-xs">
            <span className="text-base">☼</span>
          </div>
          <div className="flex flex-col">
            <span className="font-human font-bold text-lg text-stone-900 leading-tight flex items-center gap-1.5">
              Immersive Studio
            </span>
            <span className="font-handwriting text-stone-500 text-sm -mt-0.5">
              crafted with heart & clean code
            </span>
          </div>
        </a>

        {/* Studio Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>In the studio today • Coffee hot, drafting new ideas</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => playGentleChime(440)}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors hover:underline underline-offset-4 decoration-amber-300 decoration-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Warm CTA Button & Ambient Audio */}
        <div className="hidden sm:flex items-center gap-4">
          
          <button
            onClick={() => {
              playGentleChime(playingMusic ? 300 : 600);
              setPlayingMusic(!playingMusic);
            }}
            title={playingMusic ? "Mute warm studio chime" : "Play warm studio chime"}
            className="p-2 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {playingMusic ? <Volume2 className="w-4 h-4 text-amber-700" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              playGentleChime(587);
              onOpenChat();
            }}
            className="btn-warm-primary px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>Let's Have a Coffee ☕</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 cursor-pointer"
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
            className="md:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    playGentleChime(440);
                    setMobileMenuOpen(false);
                  }}
                  className="text-base font-medium text-stone-800 hover:text-amber-800 py-2 border-b border-stone-100"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenChat();
                  }}
                  className="w-full py-3 rounded-full bg-stone-900 text-amber-50 font-semibold text-center flex items-center justify-center gap-2"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Let's Have a Coffee ☕</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
