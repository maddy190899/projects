import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Music, Play, Pause, Coffee, Heart } from 'lucide-react';

const diaryPhotos = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    caption: "Sun pouring into the studio this morning ☼",
    date: "Tuesday, 8:45 AM",
    rotate: "-1.5deg"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "Brainstorming navigation menus over herbal tea",
    date: "Wednesday, 2:30 PM",
    rotate: "2deg"
  },
  {
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    caption: "The coffee machine is officially our 6th team member ☕",
    date: "Thursday, 11:00 AM",
    rotate: "-1deg"
  }
];

export default function StudioDiary() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Warm Morning Acoustic & Vinyl Crackle");

  return (
    <section id="scrapbook" className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-200/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Behind the Scenes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-human font-bold text-stone-900 tracking-tight">
            A peek inside <br />
            <span className="italic font-normal text-stone-500 font-human">our daily studio life.</span>
          </h2>
        </div>

        {/* Interactive Studio Music Player */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer shadow-xs"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>
          <div>
            <span className="text-[10px] font-mono uppercase text-amber-900 font-bold block">
              {isPlaying ? "♪ PLAYING IN THE STUDIO RIGHT NOW" : "PAUSED • STUDIO RADIO"}
            </span>
            <span className="text-xs font-medium text-stone-800">
              {currentTrack}
            </span>
          </div>
        </div>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {diaryPhotos.map((photo, i) => (
          <div
            key={i}
            className="polaroid-frame relative"
            style={{ transform: `rotate(${photo.rotate})` }}
          >
            <div className="washi-tape" />
            <div className="aspect-[4/3] rounded-xs overflow-hidden bg-stone-100 mb-3">
              <img
                src={photo.image}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-handwriting text-stone-800 text-xl leading-snug text-center mb-1">
              "{photo.caption}"
            </p>
            <span className="block text-[11px] text-stone-400 text-center font-mono">
              {photo.date}
            </span>
          </div>
        ))}
      </div>

      {/* Warm Advice for Founders card */}
      <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs">
        <h3 className="font-human font-bold text-lg text-stone-900 mb-2 flex items-center gap-2">
          <span>💡</span>
          <span>A friendly thought from our team:</span>
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed font-normal">
          "Don't let anyone convince you that a website needs to look like a Silicon Valley SaaS platform to be successful. If your business has warmth, heart, and personality, your website should celebrate that proudly. People don't fall in love with corporations; they fall in love with other humans."
        </p>
        <span className="block font-handwriting text-amber-800 text-lg mt-3">
          — Julian, Maya & the studio team
        </span>
      </div>

    </section>
  );
}
