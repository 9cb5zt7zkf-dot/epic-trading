import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Deep, warm dark-green scale — primary brand surface.
        forest: {
          950: "#081d16",
          900: "#0b2b22",
          800: "#123626",
          700: "#1a4732",
          600: "#245a3f",
          500: "#2f7250",
        },
        // Gold accent — matched to the logo's globe gradient.
        gold: {
          100: "#f6ecc9",
          200: "#f0e0a8",
          300: "#e7c869",
          400: "#d9b545",
          500: "#c9a227",
          600: "#a9861f",
          700: "#8a6d1a",
        },
        // Warm neutrals — cream/stone, matched to the logo's own background.
        sand: {
          50: "#fbf9f4",
          100: "#f7f3ea",
          200: "#ede7da",
          300: "#ded5c0",
          400: "#c7b99a",
        },
        ink: {
          900: "#0e1a15",
          700: "#233d33",
          500: "#4a6357",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5.5vw, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.12" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,43,34,0.06), 0 12px 32px -12px rgba(11,43,34,0.18)",
        "gold-glow": "0 12px 40px -10px rgba(201,162,39,0.35)",
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
      },
      transitionTimingFunction: {
        epic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
