import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Coffee, Sparkles, Smile, ArrowDown, Send, MessageCircle } from 'lucide-react';

export default function InteractiveHero({ onOpenChat }) {
  const [stickers, setStickers] = useState([
    { id: 1, text: "Your work made me smile! — Sarah, London", color: "bg-amber-100 border-amber-300 text-stone-800", x: 20, y: 15, rotate: -3 },
    { id: 2, text: "Can't wait to work together on our project — Leo", color: "bg-rose-100 border-rose-300 text-stone-800", x: 65, y: 35, rotate: 2 },
    { id: 3, text: "Warm greetings from Seattle! ☕", color: "bg-emerald-100 border-emerald-300 text-stone-800", x: 30, y: 70, rotate: -1 },
  ]);

  const [newNote, setNewNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const addSticker = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const colors = [
      "bg-amber-100 border-amber-300 text-stone-800",
      "bg-sky-100 border-sky-300 text-stone-800",
      "bg-purple-100 border-purple-300 text-stone-800",
      "bg-emerald-100 border-emerald-300 text-stone-800"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = (Math.random() * 6) - 3;
    const randomX = Math.floor(Math.random() * 60) + 15;
    const randomY = Math.floor(Math.random() * 60) + 15;

    setStickers(prev => [
      ...prev,
      {
        id: Date.now(),
        text: newNote,
        color: randomColor,
        x: randomX,
        y: randomY,
        rotate: randomRotate
      }
    ]);
    setNewNote('');
    setShowNoteInput(false);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 max-w-6xl mx-auto">
      
      {/* Friendly Human Welcome Tag */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-700 mb-6"
        >
          <span className="text-amber-600">☕</span>
          <span>A friendly, human-first digital design & code studio</span>
          <span className="font-handwriting text-stone-500 text-sm">(est. 2019)</span>
        </motion.div>

        {/* Heartfelt Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-human font-bold text-stone-900 leading-[1.1] tracking-tight mb-6"
        >
          We build websites with <br />
          <span className="italic font-normal text-[#E05A47] font-human">warmth, care & craft</span> <br />
          for people doing good work.
        </motion.h1>

        {/* Honest, Grounded Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-10"
        >
          We're a small, tight-knit group of five makers who love the web. We don't do cold corporate templates or generic AI assembly lines. Every layout, illustration, and transition is crafted by real hands that genuinely care about your story.
        </motion.p>

        {/* Action Triggers with Friendly Rationale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-4"
        >
          <button
            onClick={onOpenChat}
            className="btn-warm-primary px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
          >
            <Coffee className="w-4 h-4" />
            <span>Tell Us What You're Building</span>
          </button>

          <a
            href="#work"
            className="px-8 py-4 rounded-full font-semibold text-sm text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>See Our Real Work</span>
            <ArrowDown className="w-4 h-4 text-stone-400" />
          </a>
        </motion.div>

        {/* Hand-drawn reassurance */}
        <p className="font-handwriting text-stone-500 text-base mt-2 flex items-center gap-1.5">
          <span>✓</span>
          <span>Yes, real humans answer your email within a few hours.</span>
        </p>

      </div>

      {/* Tactile Polaroid Story Collage (Real Photos, Real Humans) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        
        {/* Polaroid 1: Team Sketching & Coffee */}
        <motion.div
          whileHover={{ y: -8, rotate: -2 }}
          className="polaroid-frame relative rotate-[-2deg]"
        >
          <div className="washi-tape" />
          <div className="aspect-[4/3] overflow-hidden bg-stone-100 rounded-xs mb-3">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Immersive Studio team sketching on paper over morning coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-handwriting text-stone-700 text-lg leading-snug text-center">
            Morning coffee & pencil sketches for Bloom Bakery ☕
          </p>
          <span className="block text-[11px] text-stone-400 text-center font-mono">Friday 10:15 AM</span>
        </motion.div>

        {/* Polaroid 2: Working on Code in the Sun */}
        <motion.div
          whileHover={{ y: -8, rotate: 1 }}
          className="polaroid-frame relative rotate-[2deg] md:-translate-y-4"
        >
          <div className="washi-tape" />
          <div className="aspect-[4/3] overflow-hidden bg-stone-100 rounded-xs mb-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Crafting clean, responsive code in a warm sunny studio"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-handwriting text-stone-700 text-lg leading-snug text-center">
            Sweating the micro-details so it feels effortless ☼
          </p>
          <span className="block text-[11px] text-stone-400 text-center font-mono">React 19 & Smooth CSS</span>
        </motion.div>

        {/* Polaroid 3: Barnaby the Studio Dog */}
        <motion.div
          whileHover={{ y: -8, rotate: -1 }}
          className="polaroid-frame relative rotate-[-1deg]"
        >
          <div className="washi-tape" />
          <div className="aspect-[4/3] overflow-hidden bg-stone-100 rounded-xs mb-3">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
              alt="Barnaby the golden retriever resting in the studio"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-handwriting text-stone-700 text-lg leading-snug text-center">
            Barnaby reminding us to take afternoon park walks 🐾
          </p>
          <span className="block text-[11px] text-stone-400 text-center font-mono">Chief Morale Officer</span>
        </motion.div>

      </div>

      {/* Interactive Digital Corkboard: "Leave a Friendly Note" */}
      <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/70 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <div>
              <h3 className="font-human font-bold text-stone-900 text-base">
                The Studio Corkboard
              </h3>
              <p className="font-handwriting text-stone-500 text-base">
                Little notes left by friends, visitors, and past collaborators.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowNoteInput(!showNoteInput)}
            className="px-4 py-2 rounded-full bg-white border border-amber-200 text-stone-800 text-xs font-semibold hover:bg-amber-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs self-start sm:self-auto"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Pin a Note on the Board</span>
          </button>
        </div>

        {/* Input form if open */}
        {showNoteInput && (
          <form onSubmit={addSticker} className="mb-6 flex gap-2">
            <input
              type="text"
              required
              maxLength={80}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Say hello, share your city, or leave a friendly word..."
              className="px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-stone-800 text-sm flex-1 focus:outline-none focus:border-stone-800 font-handwriting text-lg"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Pin it! 📌
            </button>
          </form>
        )}

        {/* Pinned Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stickers.map((note) => (
            <motion.div
              key={note.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-4 rounded-xl border shadow-xs ${note.color} transition-transform hover:scale-102`}
              style={{ transform: `rotate(${note.rotate}deg)` }}
            >
              <div className="w-2 h-2 rounded-full bg-stone-400 mx-auto -mt-2 mb-2" />
              <p className="font-handwriting text-stone-800 text-lg leading-snug">
                "{note.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
