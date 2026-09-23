import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Immersive Studio felt like gaining three close friends who happened to be absolute design wizards. They cared about the crust on our sourdough and the warmth of our cafe as much as we did. Our customers literally walk into our bakery just to tell us how beautiful the website is.",
    author: "Sarah & Leo Jenkins",
    role: "Founders & Head Bakers",
    company: "Bloom & Folk Bakery",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    note: "Collaborators since 2022"
  },
  {
    quote: "I was terrified that moving my pottery studio online would make my handmade clay feel cheap and sterile. Julian and Maya spent hours getting the lighting and 3D rotation on our stoneware mugs exactly right. It's the first time digital has felt truly tactile.",
    author: "Marcus Thorne",
    role: "Potter & Sculptor",
    company: "Kinship Ceramics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    note: "4 seasonal drops sold out"
  },
  {
    quote: "Every agency I talked to pitched me cold AI automations and bloated enterprise subscriptions. Immersive Studio just listened. They created a quiet, peaceful web presence that actually matches the meditative ritual of drinking organic tea.",
    author: "Claire Davies",
    role: "Herbalist & Founder",
    company: "Solace Botanicals",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    note: "Customer retention up 45%"
  }
];

export default function KindWords() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[index];

  return (
    <section id="kind-words" className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-200/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Kind Words From Friends</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-human font-bold text-stone-900 tracking-tight">
            Notes from people we've <br />
            <span className="italic font-normal text-stone-500 font-human">loved working alongside.</span>
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="clay-card rounded-3xl p-8 sm:p-14 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <p className="font-human text-xl sm:text-3xl text-stone-900 leading-snug font-normal">
                "{current.quote}"
              </p>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-6 border-t border-stone-100 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-100"
                  />
                  <div>
                    <h4 className="font-human font-bold text-lg text-stone-900 leading-tight">
                      {current.author}
                    </h4>
                    <p className="text-xs text-stone-500">
                      {current.role} • {current.company}
                    </p>
                  </div>
                </div>

                <span className="font-handwriting text-amber-800 text-lg">
                  {current.note} ♡
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}
