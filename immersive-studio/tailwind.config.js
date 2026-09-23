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
          base: "#060709",
          surface: "#0D0F13",
          card: "#12151B",
          cardElevated: "#181C24",
          highlight: "rgba(255, 255, 255, 0.035)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          focus: "rgba(210, 255, 0, 0.4)",
          glow: "rgba(0, 240, 255, 0.35)",
        },
        accent: {
          primary: "#D2FF00", // Electric Volt
          cyan: "#00F0FF",    // Cyber Cyan
          violet: "#9D4EDD",  // Deep Prism
          glow: "rgba(210, 255, 0, 0.28)",
          muted: "#A1B56C",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#9E9EA7",
          muted: "#666672",
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        eyebrow: '0.22em',
      },
      boxShadow: {
        'inner-bevel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-salient': '0 0 35px -5px rgba(210, 255, 0, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.35)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      transitionTimingFunction: {
        'quintic-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
