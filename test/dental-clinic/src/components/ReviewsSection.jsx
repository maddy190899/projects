import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Designer • Hayes Valley, SF',
    treatment: 'Porcelain Veneers',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    title: 'Dr. Sterling completely restored my confidence without looking fake.',
    text: 'I avoided smiling with my teeth in photos for almost 8 years because of severe fluorosis and chipping. Dr. Sterling created hand-crafted feldspathic veneers that look so translucent and authentic that even my closest friends just thought I had a great whitening session. The 3D preview made the entire process so reassuring.'
  },
  {
    id: 2,
    name: 'Marcus Brody',
    role: 'Venture Partner • Pacific Heights',
    treatment: 'Dental Implants',
    rating: 5,
    date: '1 month ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    title: 'Zero pain during guided Swiss Straumann implant surgery.',
    text: 'I broke my lower molar during a cycling mishap. Dr. Marcus Chen used the 3D surgical guide, and the implant was placed in under 40 minutes. The computerized Wand anesthesia meant I felt literally zero pain—no pinching, no throbbing. The monolithic zirconia crown feels just like my natural tooth.'
  },
  {
    id: 3,
    name: 'Maya Lin',
    role: 'Software Architect • Mission District',
    treatment: 'Invisalign',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    title: 'Straight teeth in 7 months with remote virtual checkups.',
    text: 'Dr. Vance and her team made Invisalign effortless. The Dental Monitoring app allowed me to scan my teeth using my phone on Sunday nights instead of taking time off work to visit the office every two weeks. My deep bite and crowding are completely corrected!'
  },
  {
    id: 4,
    name: 'David Zhao',
    role: 'Financial Analyst • Financial District',
    treatment: 'Emergency Care',
    rating: 5,
    date: '2 months ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    title: 'Same-day emergency visit on a Sunday afternoon saved my tooth.',
    text: 'Woke up with an excruciating infected tooth nerve. Aura Dental took me in within 45 minutes of calling their hotline. The microscope root canal was completely gentle, and I walked out relieved of all pressure and pain. Incredible dedication and clinical empathy.'
  }
];

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Porcelain Veneers', 'Dental Implants', 'Invisalign', 'Emergency Care'];

  const filteredReviews = activeFilter === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.treatment === activeFilter);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Verified Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Stories of Transformed Smiles
            </h2>
          </div>

          {/* Google Review Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-slate-900 text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="font-extrabold text-slate-900 text-sm ml-1">4.98</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Based on 2,450+ Google & Yelp reviews</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-[11px] font-semibold">
                      {rev.treatment}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif leading-snug mb-3">
                    &ldquo;{rev.title}&rdquo;
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {rev.text}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs sm:text-sm font-bold text-slate-900">{rev.name}</p>
                        {rev.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" title="Verified Patient" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">{rev.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
