import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor({ cursorText = "", cursorVariant = "default" }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(-100, { stiffness: 500, damping: 28 });
  const springY = useSpring(-100, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, springX, springY]);

  // Disable on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Follower Dot */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`rounded-full transition-all duration-200 flex items-center justify-center ${
          cursorText
            ? "w-20 h-20 bg-white text-black font-mono-tag text-[10px] font-bold tracking-widest uppercase scale-100 shadow-2xl backdrop-blur-sm"
            : cursorVariant === "pointer"
            ? "w-10 h-10 bg-white/20 border border-white/60 backdrop-blur-xs scale-125"
            : "w-3 h-3 bg-white"
        }`}
      >
        {cursorText && (
          <span className="animate-pulse">{cursorText}</span>
        )}
      </motion.div>
    </div>
  );
}
