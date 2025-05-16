/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#121212',
        'red': {
          700: '#C41E3A',
          800: '#A01A30',
          900: '#7D1425',
        },
        'gold': '#D4AF37',
        'brown': {
          800: '#5D4037',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(212, 175, 55, 0.5)',
      },
    },
  },
  plugins: [],
};