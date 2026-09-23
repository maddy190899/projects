import React from 'react';
import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
