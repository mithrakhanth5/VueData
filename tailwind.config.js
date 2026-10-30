/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#071426",
          darkSec: "#0C1D35",
          blue: "#2864FF",
          cyan: "#00C2E8",
          violet: "#7657F6",
          light: "#F4F7FB",
          textPrimary: "#101828",
          textSecondary: "#667085",
          borderDark: "#152642",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #2864FF 0%, #00C2E8 50%, #7657F6 100%)",
        "gradient-card-dark": "linear-gradient(180deg, rgba(12,29,53,0.85) 0%, rgba(7,20,38,0.95) 100%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #2864FF 0deg, #00C2E8 120deg, #7657F6 240deg, #2864FF 360deg)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(40, 100, 255, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(0, 194, 232, 0.4)",
        "glow-violet": "0 0 25px -5px rgba(118, 87, 246, 0.35)",
        card: "0 10px 30px -10px rgba(7, 20, 38, 0.08)",
        cardDark: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
