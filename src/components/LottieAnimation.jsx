import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const DynamicMotionGraphic = ({
  src = "https://assets5.lottiefiles.com/packages/lf20_5njp3vgg.json",
  data,
  className = "w-full h-full",
  loop = true,
  autoplay = true,
  variant = "clinical"
}) => {
  const [dotLottie, setDotLottie] = useState(null);
  const [hasError, setHasError] = useState(false);

  // Self-contained compact Lottie JSON fixture for guaranteed offline fallback
  const fallbackLottie = {
    v: "5.5.7",
    fr: 60,
    ip: 0,
    op: 120,
    w: 400,
    h: 400,
    nm: "DentalPulseCore",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "AuraWaveform",
        sr: 1,
        ks: {
          o: { k: 100 },
          r: {
            k: [
              { t: 0, s: [0] },
              { t: 120, s: [360] }
            ]
          },
          p: { k: [200, 200, 0] },
          a: { k: [0, 0, 0] },
          s: { k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                p: { k: [0, 0] },
                s: { k: [160, 160] }
              },
              {
                ty: "st",
                c: { k: [0.05, 0.65, 0.91, 1] }, // Cyan blue
                o: { k: 90 },
                w: { k: 2.5 },
                lc: 2,
                lj: 2
              },
              {
                ty: "tr",
                p: { k: [0, 0] },
                a: { k: [0, 0] },
                s: { k: [100, 100] },
                r: { k: 0 },
                o: { k: 100 }
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      onMouseEnter={() => dotLottie?.play?.()}
      onMouseLeave={() => dotLottie?.pause?.()}
    >
      <DotLottieReact
        src={hasError ? undefined : src}
        data={data ? JSON.stringify(data) : (hasError ? JSON.stringify(fallbackLottie) : undefined)}
        autoplay={autoplay}
        loop={loop}
        renderConfig={{
          devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
          autoResize: true,
        }}
        dotLottieRefCallback={(ref) => {
          setDotLottie(ref);
          if (ref?.addEventListener) {
            ref.addEventListener('loadError', () => setHasError(true));
          }
        }}
      />
    </div>
  );
};

export default DynamicMotionGraphic;
