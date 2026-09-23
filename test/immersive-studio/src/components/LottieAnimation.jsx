import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Cpu, Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function LottieAnimation({ 
  src = "https://lottie.host/80dc6810-72c0-42d4-a7fc-ee0d11fa89fe/J1N95aA6xH.lottie",
  type = "tech-glow",
  className = "w-28 h-28" 
}) {
  const [hasError, setHasError] = useState(false);

  // If DotLottie takes time, network is restricted, or errors, render high-fidelity procedural animated SVG
  if (hasError) {
    if (type === "code") {
      return (
        <motion.div 
          className={`flex items-center justify-center text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-2xl p-4 shadow-lg shadow-cyan-950/50 ${className}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
          </motion.div>
        </motion.div>
      );
    }

    if (type === "performance") {
      return (
        <motion.div 
          className={`relative flex items-center justify-center text-purple-400 bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 ${className}`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <Zap className="w-10 h-10 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
        </motion.div>
      );
    }

    if (type === "rocket") {
      return (
        <motion.div 
          className={`relative flex items-center justify-center text-indigo-400 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4 ${className}`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
        </motion.div>
      );
    }

    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <motion.div 
          className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="relative z-10 p-3 bg-slate-900/90 rounded-2xl shadow-xl border border-cyan-500/30 text-cyan-400"
        >
          <Cpu className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <DotLottieReact
        src={src}
        loop
        autoplay
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function LiveBadge({ label = "Active 60FPS Pipeline", color = "cyan" }) {
  const colorMap = {
    cyan: "bg-cyan-500 text-cyan-400 border-cyan-500/30 shadow-cyan-950/40",
    purple: "bg-purple-500 text-purple-400 border-purple-500/30 shadow-purple-950/40",
    emerald: "bg-emerald-500 text-emerald-400 border-emerald-500/30 shadow-emerald-950/40",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border text-xs font-medium ${colorMap[color] || colorMap.cyan}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
      </span>
      <span>{label}</span>
    </div>
  );
}
