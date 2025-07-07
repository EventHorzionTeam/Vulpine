/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // amber: {
        //   50: "#5a7480",
        //   100: "#3c5665",
        //   200: "#FDE68A",
        //   300: "#FCD34D",
        //   400: "#FBBF24",
        //   500: "#F59E0B",
        //   600: "#D97706",
        //   700: "#B45309",
        //   800: "#4E7574",
        //   900: "#265153",
        //   950: "#303531",
        // },
        amber: {
          50: "#0e1214", // Deep charcoal (background base)
          100: "#c1a875", // Gold accent (headings/buttons)
          200: "#e2d3b5", // Soft cream (subheadings)
          300: "#3f4a41", // Muted olive (details)
          400: "#7e7e7e", // Soft grey (body text)
          500: "#5e4736", // Warm brown (imagery tone)

          // Extended tones:
          600: "#a57c53", // Muted copper – natural warm midtone
          700: "#7b5c3a", // Earthy brown – balances 500 & 900
          800: "#57432c", // Rich wood – darker version of 500
          900: "#33271f", // Dark brown – for footer/shadows
          950: "#1D1616", // Almost black brown – intense shadows
        },
        // amber: {
        //   50: "#0e1214",
        //   100: "#c1a875",
        //   200: "#e2d3b5",
        //   300: "#3f4a41",
        //   400: "#7e7e7e",
        //   500: "#5e4736",
        //   600: "#D97706",
        //   700: "#B45309",
        //   800: "#4E7574",
        //   900: "#265153",
        //   950: "#303531",
        // },
      },
      animation: {
        liquid: "liquid 8s ease-in-out infinite",
      },
      keyframes: {
        liquid: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 40%/40% 30% 70% 60%" },
          "75%": { borderRadius: "40% 60% 70% 30%/60% 40% 30% 70%" },
        },
      },
    },
  },
  plugins: [],
};
