/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: "#FAF9F6",       // Warm archival gallery bone
          surface: "#FFFFFF",    // Crisp museum white
          card: "#FFFFFF",
          muted: "#F3F2EC",      // Tactile off-white
          subtle: "rgba(0, 0, 0, 0.02)",
          highlight: "rgba(0, 0, 0, 0.04)",
        },
        border: {
          subtle: "rgba(0, 0, 0, 0.08)",
          muted: "rgba(0, 0, 0, 0.14)",
          focus: "rgba(0, 0, 0, 0.35)",
        },
        accent: {
          ink: "#0D0D11",        // Deep Obsidian Typography & Primary CTA
          electric: "#0055FF",   // International Klein Blue
          vermillion: "#E63B2E", // Editorial Vermillion
          amber: "#D97706",
          lime: "#65A30D",
        },
        text: {
          primary: "#111114",    // Rich Charcoal Ink
          secondary: "#4E4E56",  // Editorial Muted
          muted: "#888892",      // Micro-caption & metadata
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Bodoni Moda', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
        eyebrow: '0.22em',
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'luxury-md': '0 12px 32px -8px rgba(0, 0, 0, 0.07)',
        'luxury-lg': '0 24px 60px -12px rgba(0, 0, 0, 0.09)',
        'inner-light': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
