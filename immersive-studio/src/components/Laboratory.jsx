import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Play, RotateCcw, Volume2, Sparkles, Layers, Sliders } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const Laboratory = () => {
  const [activeExp, setActiveExp] = useState('chromatic');
  const [aberrationAmount, setAberrationAmount] = useState(8);
  const [meshDensity, setMeshDensity] = useState(24);
  const canvasRef = useRef(null);

  // Canvas visualizer for Vector Field
  useEffect(() => {
    if (activeExp !== 'field') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let t = 0;

    const renderField = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = meshDensity;
      const rows = 12;
      const spacingX = canvas.width / cols;
      const spacingY = canvas.height / rows;

      ctx.strokeStyle = '#00F0FF';
      ctx.lineWidth = 1;

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = x * spacingX + spacingX / 2;
          const posY = y * spacingY + spacingY / 2;
          const angle = Math.sin(x * 0.3 + t) * Math.cos(y * 0.3 + t) * Math.PI;

          ctx.save();
          ctx.translate(posX, posY);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(-10, 0);
          ctx.lineTo(10, 0);
          ctx.stroke();
          ctx.restore();
        }
      }

      t += 0.03;
      animId = requestAnimationFrame(renderField);
    };

    renderField();
    return () => cancelAnimationFrame(animId);
  }, [activeExp, meshDensity]);

  const handleTestAudioSynth = (freq) => {
    sound.playTactile(freq, 0.15);
  };

  return (
    <section id="lab" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>05 // R&D PROTOYPES</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            The Experimental Lab
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          Where unreleased graphics shaders, audio nodes, and spatial physics are synthesized before entering production builds.
        </p>
      </div>

      {/* Lab Container */}
      <div className="rounded-3xl bg-canvas-card border border-border-subtle overflow-hidden shadow-card-elevated">
        {/* Lab Nav Tabs */}
        <div className="flex border-b border-border-subtle bg-canvas-surface/80 p-2 overflow-x-auto">
          <button
            onClick={() => { sound.playTactile(500, 0.03); setActiveExp('chromatic'); }}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
              activeExp === 'chromatic'
                ? 'bg-canvas-card border border-accent-primary/40 text-accent-primary font-bold shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" /> Exp 01: Chromatic RGB Aberration
          </button>
          <button
            onClick={() => { sound.playTactile(600, 0.03); setActiveExp('field'); }}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
              activeExp === 'field'
                ? 'bg-canvas-card border border-accent-cyan/40 text-accent-cyan font-bold shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Exp 02: Mathematical Vector Field
          </button>
          <button
            onClick={() => { sound.playTactile(700, 0.03); setActiveExp('audio'); }}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
              activeExp === 'audio'
                ? 'bg-canvas-card border border-accent-violet/40 text-accent-violet font-bold shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Exp 03: Web Audio Synth Harmonics
          </button>
        </div>

        {/* Experiment Interactive Canvas / Sandbox */}
        <div className="p-8 md:p-12 min-h-[380px] flex flex-col justify-center items-center relative overflow-hidden bg-canvas-base/50">
          {activeExp === 'chromatic' && (
            <div className="w-full max-w-xl text-center space-y-8">
              <div className="relative inline-block select-none">
                <span
                  className="type-display font-display font-black tracking-tight uppercase"
                  style={{
                    textShadow: `${aberrationAmount}px 0 rgba(255, 0, 85, 0.7), -${aberrationAmount}px 0 rgba(0, 240, 255, 0.7)`
                  }}
                >
                  IMMERSIVE
                </span>
                <div className="text-xs font-mono text-text-muted mt-2">
                  Simulating Fragment Shader Lens Aberration
                </div>
              </div>

              <div className="bg-canvas-card p-6 rounded-2xl border border-border-subtle space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-text-muted">RGB Aberration Offset</span>
                  <span className="text-accent-primary font-bold">{aberrationAmount}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="28"
                  value={aberrationAmount}
                  onChange={(e) => {
                    sound.playHover();
                    setAberrationAmount(Number(e.target.value));
                  }}
                  className="w-full accent-accent-primary cursor-pointer"
                />
              </div>
            </div>
          )}

          {activeExp === 'field' && (
            <div className="w-full max-w-2xl text-center space-y-6">
              <canvas
                ref={canvasRef}
                width={600}
                height={220}
                className="w-full rounded-2xl bg-canvas-card border border-border-subtle"
              />
              <div className="flex items-center justify-between text-xs font-mono bg-canvas-card p-4 rounded-xl border border-border-subtle">
                <span className="text-text-muted">Vector Mesh Res: {meshDensity} Nodes</span>
                <input
                  type="range"
                  min="12"
                  max="40"
                  value={meshDensity}
                  onChange={(e) => setMeshDensity(Number(e.target.value))}
                  className="w-48 accent-accent-cyan cursor-pointer"
                />
              </div>
            </div>
          )}

          {activeExp === 'audio' && (
            <div className="w-full max-w-xl text-center space-y-6">
              <div className="text-sm font-mono text-text-secondary">
                Web Audio API Harmonic Resonator Matrix
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Sub 55Hz', freq: 55 },
                  { label: 'Harmonic 220Hz', freq: 220 },
                  { label: 'Prism 440Hz', freq: 440 },
                  { label: 'Crystal 880Hz', freq: 880 },
                ].map((note) => (
                  <button
                    key={note.label}
                    onClick={() => handleTestAudioSynth(note.freq)}
                    className="p-4 rounded-xl bg-canvas-card border border-border-subtle hover:border-accent-violet hover:text-accent-violet text-xs font-mono transition-all text-text-primary"
                  >
                    <div>{note.label}</div>
                    <div className="text-[10px] text-text-muted mt-1">Trigger Oscillator</div>
                  </button>
                ))}
              </div>
              <p className="text-xs font-mono text-text-muted">
                Synthesized dynamically via browser AudioContext oscillator nodes with exponential decay envelopes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
