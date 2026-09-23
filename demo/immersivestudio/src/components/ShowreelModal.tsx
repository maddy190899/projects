import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Layers,
  ChevronRight,
  Disc,
} from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectForBrief: (title: string) => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectForBrief,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28); // percentage
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const chapters = [
    {
      time: '00:00',
      title: 'Aetheria OS: Spatial Interface',
      tag: 'WebGPU 60FPS',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    },
    {
      time: '00:28',
      title: 'Kroma Financial: High-Frequency Terminal',
      tag: 'Rust / Wasm',
      image:
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80',
    },
    {
      time: '00:54',
      title: 'Vanguard Atelier: Photorealistic 3D Horlogerie',
      tag: 'Draco PBR',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    },
    {
      time: '01:18',
      title: 'Neural Matrix: Generative Canvas Intelligence',
      tag: 'GLSL Core',
      image:
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  // Auto-advance progress when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        const next = prev + 0.5;
        // switch chapters based on progress
        if (next < 27) setActiveChapterIndex(0);
        else if (next < 54) setActiveChapterIndex(1);
        else if (next < 78) setActiveChapterIndex(2);
        else setActiveChapterIndex(3);
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const currentChapter = chapters[activeChapterIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative z-10 w-full max-w-5xl bg-[#0b0d14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,240,255,0.2)] flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#0f121a]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-display font-bold text-sm text-white tracking-wide">
                immersivestudio // Showreel 2026
              </span>
              <span className="hidden sm:inline text-xs font-mono text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                4K HDR · Spatial Audio
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Viewport */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            {/* Showreel frame image */}
            <motion.img
              key={currentChapter.image}
              initial={{ opacity: 0.6, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={currentChapter.image}
              alt={currentChapter.title}
              className="w-full h-full object-cover"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-black/40" />

            {/* Ambient Animated HUD Elements */}
            <div className="absolute top-6 left-6 flex items-center gap-3 font-mono text-xs text-cyan-300 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30">
              <Disc className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
              <span>CHAPTER {activeChapterIndex + 1} OF 4</span>
              <span className="text-slate-500">|</span>
              <span className="text-white font-bold">{currentChapter.tag}</span>
            </div>

            {/* Center Big Play Button when paused */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-cyan-400/90 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.8)] hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 ml-1" />
              </button>
            )}

            {/* Bottom In-Reel HUD Details */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Now Showing:
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {currentChapter.title}
              </h4>
            </div>
          </div>

          {/* Interactive Player Controls */}
          <div className="p-4 sm:p-6 bg-[#0f121a] space-y-4">
            {/* Timeline Scrub Bar */}
            <div className="relative">
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                  setProgress(newProgress);
                }}
                className="w-full h-2 bg-slate-800 rounded-full overflow-hidden cursor-pointer group"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Chapter ticks */}
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>00:00 (Aetheria)</span>
                <span>00:28 (Kroma)</span>
                <span>00:54 (Vanguard)</span>
                <span>01:18 (Neural)</span>
                <span>01:42</span>
              </div>
            </div>

            {/* Button Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-xs text-slate-400 ml-2">
                  {Math.floor((progress * 1.02) / 60)
                    .toString()
                    .padStart(2, '0')}
                  :
                  {Math.floor((progress * 1.02) % 60)
                    .toString()
                    .padStart(2, '0')}{' '}
                  / 01:42
                </span>
              </div>

              {/* Chapters Quick Select */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveChapterIndex(idx);
                      setProgress(idx * 28);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap border transition-all ${
                      activeChapterIndex === idx
                        ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    0{idx + 1} {ch.tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
