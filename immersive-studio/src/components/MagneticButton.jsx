import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '../lib/utils';

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  ariaLabel
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 170, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (disabled || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      'bg-accent-ink text-white font-medium hover:bg-black shadow-luxury-md border border-black/80',
    secondary:
      'bg-canvas-surface text-text-primary border border-border-muted hover:border-text-primary hover:bg-canvas-muted shadow-luxury-sm',
    electric:
      'bg-accent-electric text-white font-medium hover:brightness-110 shadow-luxury-md border border-accent-electric',
    outline:
      'bg-transparent text-text-primary border border-border-muted hover:border-text-primary hover:bg-black/[0.03]',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-black/[0.03]',
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all duration-300 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2',
        variantStyles[variant] || variantStyles.primary,
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      {/* Invisible expanded hit-target for Fitts's Law ergonomics (>=12px padding around clickable element) */}
      <span className="absolute -inset-3 block" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
