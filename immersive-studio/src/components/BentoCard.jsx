import React from 'react';
import { motion } from 'framer-motion';

export const BentoCard = ({ children, className = '', colSpan = 'col-span-12 md:col-span-6', onClick, glow = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`relative rounded-3xl bg-canvas-card/85 backdrop-blur-md border border-border-subtle shadow-inner-bevel p-8 md:p-10 overflow-hidden group hover:border-border-focus transition-all duration-500 ${glow ? 'hover:shadow-glow-salient/20' : ''} ${colSpan} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent pointer-events-none" />
      {/* Dynamic corner specular flare */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/[0.04] rounded-full blur-2xl pointer-events-none group-hover:bg-accent-primary/[0.09] transition-colors duration-700" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
