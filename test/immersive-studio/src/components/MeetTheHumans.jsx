import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Coffee, Sparkles, Smile, RotateCw } from 'lucide-react';

const humans = [
  {
    name: "Maya Lin",
    role: "Visual Design & Illustration",
    favoriteThing: "Matcha lattes & film photography",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    frontBio: "I design websites that make you feel like you just walked into a cozy neighborhood bookstore.",
    backNote: "I hand-draw custom SVG illustrations and test every single color palette on real paper under natural sunlight before coding it."
  },
  {
    name: "Julian Vance",
    role: "Frontend & Micro-interactions",
    favoriteThing: "Aeropress coffee & mechanical keyboards",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    frontBio: "I obsess over button clicks, smooth scrolls, and making sure your site feels fast even on a 5-year-old phone.",
    backNote: "If an animation drops below 60fps or stutters on an iPhone battery saver mode, I stay up until it runs buttery smooth."
  },
  {
    name: "Elena Rostova",
    role: "Creative 3D & Canvas Art",
    favoriteThing: "Baking sourdough & botanical gardens",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    frontBio: "I turn cold math into organic, fluid interactive 3D art that responds to your gentle cursor moves.",
    backNote: "3D on the web shouldn't feel like a noisy video game; it should feel like touching smooth polished river stones."
  },
  {
    name: "David Chen",
    role: "Performance & Architecture",
    favoriteThing: "Hiking the coastal redwoods",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    frontBio: "I make sure your site never crashes, passes every accessibility test, and loads in less than half a second.",
    backNote: "I believe the web should be accessible to everyone—including people with screen readers and slow mobile data connections."
  }
];

export default function MeetTheHumans() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="humans" className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-200/80">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>The People Behind the Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-human font-bold text-stone-900 tracking-tight">
            Meet the humans who will <br />
            <span className="italic font-normal text-stone-500 font-human">care for your project.</span>
          </h2>
        </div>

        <p className="max-w-md text-stone-600 text-sm leading-relaxed">
          No account managers or disappearing contractors. You work directly with the craftspeople who draw every pixel and write every line of code.
        </p>
      </div>

      {/* Human Cards Grid (Click to flip for personal handwritten note) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {humans.map((person, i) => {
          const isFlipped = flipped[i];
          return (
            <div
              key={person.name}
              onClick={() => toggleFlip(i)}
              className="clay-card rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all hover:shadow-lg group bg-white relative min-h-[380px]"
            >
              {!isFlipped ? (
                /* Front Side */
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Warm Portrait */}
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 mb-4 relative">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-xs text-stone-600 shadow-xs">
                        <RotateCw className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="font-human font-bold text-lg text-stone-900 leading-tight">
                      {person.name}
                    </h3>
                    <p className="text-xs font-medium text-amber-800 mb-2">
                      {person.role}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {person.frontBio}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="truncate">☕ {person.favoriteThing}</span>
                    <span className="font-handwriting text-amber-800 text-sm font-bold shrink-0">
                      tap to flip ↻
                    </span>
                  </div>
                </div>
              ) : (
                /* Back Side (Personal Handwritten Sticky Note) */
                <div className="flex flex-col h-full justify-between bg-amber-50/70 p-4 rounded-xl border border-amber-200/80">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                        Personal Desk Note
                      </span>
                      <span className="text-xs">✏️</span>
                    </div>

                    <h4 className="font-human font-bold text-stone-900 text-base mb-2">
                      From {person.name}:
                    </h4>

                    <p className="font-handwriting text-stone-800 text-xl leading-snug">
                      "{person.backNote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-200/60 text-center">
                    <span className="font-handwriting text-stone-600 text-sm">
                      (tap anywhere to flip back)
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Barnaby the Studio Dog Feature Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200/60 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white">
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80"
            alt="Barnaby the golden retriever dog"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-human font-bold text-stone-900 text-base">
              And of course, Barnaby the Studio Dog 🐾
            </h4>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-medium">
              Chief Wellbeing Officer
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
            He joins every afternoon design sprint, snores gently during client alignment calls, and reminds us that behind every website, there are real people who deserve kindness and warmth.
          </p>
        </div>
      </div>

    </section>
  );
}
