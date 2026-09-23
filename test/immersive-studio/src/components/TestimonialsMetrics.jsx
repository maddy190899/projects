import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "Immersive Studio took our spatial audio concept and transformed it into a WebGL showpiece that fundamentally changed how venture capitalists and enterprise clients perceived our product. Our conversion rate tripled in 60 days.",
    author: "Sarah Jenkins",
    role: "VP of Product",
    company: "Aether Sound Technologies",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    stats: "+320% Average Session Time",
    award: "Site of the Day Winner"
  },
  {
    quote: "In high-frequency quantitative finance, every millisecond of lag costs millions. Immersive Studio engineered a bespoke canvas streaming terminal that outpaced every traditional web application we tested. The code quality was immaculate.",
    author: "Alexander Thorne",
    role: "Founder & Chief Investment Officer",
    company: "Thorne Capital Partners",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    stats: "$1.4B Volume Routed Without Hitch",
    award: "FinTech Innovation Honor"
  },
  {
    quote: "Their mastery over WebGL lighting and luxury micro-interactions gave our horological timepieces the tactile reverence they deserve. They are not merely developers; they are master digital artisans.",
    author: "Maya Lin",
    role: "Chief Creative Officer",
    company: "Maison Noir Geneva",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    stats: "+210% AOV on Flagship Products",
    award: "E-Commerce Excellence Award"
  }
];

export default function TestimonialsMetrics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Quantitative Studio Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-3xl glass-panel border border-white/10">
          <div className="text-center md:text-left">
            <span className="text-3xl sm:text-5xl font-extrabold font-heading text-cyan-400 block mb-1">
              $140M+
            </span>
            <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
              Client Enterprise Value Generated
            </span>
          </div>

          <div className="text-center md:text-left">
            <span className="text-3xl sm:text-5xl font-extrabold font-heading text-purple-400 block mb-1">
              100%
            </span>
            <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
              Core Web Vitals Pass Rate
            </span>
          </div>

          <div className="text-center md:text-left">
            <span className="text-3xl sm:text-5xl font-extrabold font-heading text-emerald-400 block mb-1">
              &lt; 35ms
            </span>
            <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
              Global Edge TTFB Response
            </span>
          </div>

          <div className="text-center md:text-left">
            <span className="text-3xl sm:text-5xl font-extrabold font-heading text-amber-400 block mb-1">
              26+
            </span>
            <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
              International Design & Tech Honors
            </span>
          </div>
        </div>

        {/* Testimonial Interactive Showcase */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col justify-between">
            
            {/* Header controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-mono-code text-slate-400">
                  VERIFIED EXECUTIVE TESTIMONIAL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quote Body with Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <p className="text-lg sm:text-2xl md:text-3xl text-slate-100 font-heading font-semibold leading-relaxed">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-14 h-14 rounded-2xl object-cover border border-cyan-500/40 shadow-md"
                    />
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white">{current.author}</h4>
                      <p className="text-xs font-mono-code text-cyan-400">{current.role}, {current.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-right">
                      <span className="text-xs font-mono-code text-emerald-400 block font-bold">
                        {current.stats}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {current.award}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
