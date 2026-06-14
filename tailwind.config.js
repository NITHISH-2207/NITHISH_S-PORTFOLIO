/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#F5F0E6',         // Page background (Warm Ivory)
          bgSec: '#EAE4D6',      // Secondary Background (Soft Beige)
          card: '#F5F0E6',       // Card / Panel Background (Same as page bg)
          textPri: '#152849',    // "NITHISH S" heading + button fill (Navy)
          textSec: '#5C5448',    // Body paragraph text (Charcoal Brown)
          mono: '#3D3830',       // Monospace label ("I am a")
          navy: '#152849',       // Button bg + heading accent (Navy)
          navyHover: '#1E3A5F',  // Hover Navy
          gold: {
            DEFAULT: '#B8962E',  // "PORTFOLIO" tag + "MERN Stack" text (Champagne Gold)
            light: '#B8962E',
            dark: '#A67C52',     // Bronze Silk
          },
          border: '#DDD6C4',     // Card outer border
          borderHover: '#B8962E',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],      // replaces Inter
        heading: ['Fraunces', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 45s linear infinite',
      },
    },
  },
  plugins: [],
}
