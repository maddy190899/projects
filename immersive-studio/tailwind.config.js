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
          base: "#08080A",
          surface: "#101114",
          card: "#14161B",
          subtle: "rgba(255, 255, 255, 0.02)",
          highlight: "rgba(255, 255, 255, 0.05)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          muted: "rgba(255, 255, 255, 0.14)",
          focus: "rgba(255, 255, 255, 0.3)",
        },
        accent: {
          volt: "#D2FF00",
          voltHover: "#B8E000",
          glow: "rgba(210, 255, 0, 0.25)",
          cyan: "#00F2FE",
          purple: "#7928CA",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#A1A1A6",
          muted: "#636366",
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.2em',
      },
      boxShadow: {
        'inner-bevel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-volt': '0 0 35px -5px rgba(210, 255, 0, 0.35)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
