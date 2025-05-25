/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
      },
      animation: {
        'liquid': 'liquid 8s ease-in-out infinite',
      },
      keyframes: {
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 40%/40% 30% 70% 60%' },
          '75%': { borderRadius: '40% 60% 70% 30%/60% 40% 30% 70%' },
        },
      },
    },
  },
  plugins: [],
};