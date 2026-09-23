import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenInquiry, setCursorText }) {
  const [clocks, setClocks] = useState({ paris: '', sf: '', tokyo: '' });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClocks({
        paris: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }),
        sf: now.toLocaleTimeString('en-GB', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' })
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060608] text-zinc-400 border-t border-chalk pt-28 pb-14 px-6 sm:px-10 max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Top Banner Call to Action */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-20 border-b border-chalk">
        <div className="max-w-2xl">
          <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            [ NEXT ADVENTURE ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.05]">
            Have a bold project in mind? <br />
            <span className="font-serif-editorial font-normal text-zinc-400">Let's build the benchmark.</span>
          </h2>
        </div>

        <button
          onClick={onOpenInquiry}
          onMouseEnter={() => setCursorText?.("START")}
          onMouseLeave={() => setCursorText?.("")}
          className="px-10 py-5 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-3 cursor-pointer self-start lg:self-end"
        >
          <span>INITIATE COMMISSION</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Studio Global Ledger */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 border-b border-chalk font-mono-tag text-xs">
        
        <div>
          <span className="text-zinc-500 uppercase block mb-2">STUDIO LOCATIONS</span>
          <p className="text-white">Paris • San Francisco • Tokyo</p>
          <p className="text-zinc-500 mt-1">Independent since 2018</p>
        </div>

        <div>
          <span className="text-zinc-500 uppercase block mb-2">LIVE TIMEZONES</span>
          <div className="space-y-1 text-zinc-300">
            <p>PARIS {clocks.paris} CET</p>
            <p>SAN FRANCISCO {clocks.sf} PST</p>
            <p>TOKYO {clocks.tokyo} JST</p>
          </div>
        </div>

        <div>
          <span className="text-zinc-500 uppercase block mb-2">DIRECT CONTACT</span>
          <a href="mailto:partners@immersivestudio.com" className="text-white hover:underline block">
            partners@immersivestudio.com
          </a>
          <span className="text-zinc-500 mt-1 block">General Inquiries & Press</span>
        </div>

        <div>
          <span className="text-zinc-500 uppercase block mb-2">EDITORIAL ARCHIVE</span>
          <p className="text-zinc-300">All code authored in-house.</p>
          <p className="text-zinc-500 mt-1">Zero pre-fabricated themes.</p>
        </div>

      </div>

      {/* Massive Typographic Wordmark */}
      <div className="py-12 border-b border-chalk select-none">
        <h1 className="text-[12vw] font-display font-extrabold text-white/10 tracking-tighter leading-none text-center">
          IMMERSIVE
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tag text-xs text-zinc-600">
        <div>
          © {new Date().getFullYear()} IMMERSIVE STUDIO PRACTICE. ALL RIGHTS RESERVED.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>TOP OF ARCHIVE</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
