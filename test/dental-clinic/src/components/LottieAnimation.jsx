import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function LottieAnimation({ 
  src = "https://lottie.host/80dc6810-72c0-42d4-a7fc-ee0d11fa89fe/J1N95aA6xH.lottie",
  type = "tooth-sparkle",
  className = "w-28 h-28" 
}) {
  const [hasError, setHasError] = useState(false);

  // If DotLottie cannot load or user has restricted network, render crisp procedural animated SVG
  if (hasError) {
    if (type === "verified") {
      return (
        <motion.div 
          className={`flex items-center justify-center text-teal-600 bg-teal-50 rounded-2xl p-4 ${className}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <CheckCircle2 className="w-12 h-12 text-teal-600 animate-pulse" />
        </motion.div>
      );
    }
    
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <motion.div 
          className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-60"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0], y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 p-3 bg-white rounded-2xl shadow-md border border-teal-100 text-teal-600"
        >
          <Sparkles className="w-8 h-8 text-teal-500" />
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

export function PulseBadge({ icon: Icon = Sparkles, label = "Certified Excellence", pulseColor = "bg-teal-500" }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700">
      <span className="relative flex h-2.5 w-2.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColor} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${pulseColor}`}></span>
      </span>
      <Icon className="w-3.5 h-3.5 text-teal-600" />
      <span>{label}</span>
    </div>
  );
}
