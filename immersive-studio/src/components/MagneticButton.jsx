import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onHoverSound
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 160, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current || disabled) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseEnter = () => {
    if (onHoverSound) onHoverSound();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-[11px]',
    md: 'px-7 py-3.5 text-xs',
    lg: 'px-9 py-4 text-sm font-bold',
  }[size] || 'px-7 py-3.5 text-xs';

  const baseStyles = {
    primary: 'bg-accent-primary text-black font-semibold shadow-glow-salient hover:brightness-110 border border-accent-primary/80',
    secondary: 'bg-canvas-card text-text-primary border border-border-subtle hover:border-border-focus hover:bg-canvas-cardElevated',
    outline: 'bg-transparent text-text-primary border border-border-medium hover:border-accent-primary hover:text-accent-primary',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]',
    cyan: 'bg-accent-cyan text-black font-semibold shadow-glow-cyan hover:brightness-110 border border-accent-cyan/80'
  }[variant] || 'bg-accent-primary text-black font-semibold shadow-glow-salient';

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:opacity-50 disabled:pointer-events-none group select-none font-mono ${sizeStyles} ${baseStyles} ${className}`}
    >
      {/* Expanded Fitts's Law Hitbox (≥ 12px) */}
      <span className="absolute -inset-3" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2.5 transition-transform duration-200 group-hover:scale-[1.02]">
        {children}
      </span>
    </motion.button>
  );
};
