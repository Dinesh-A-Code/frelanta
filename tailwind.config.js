/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#111111',
          800: '#181818',
          700: '#262626',
          400: '#888888',
          300: '#AAAAAA',
          200: '#CCCCCC',
          100: '#EEEEEE',
          white: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#E8702A',
          hover: '#D2611F',
          subtle: '#E8702A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}
