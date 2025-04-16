/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E83E8C', // The pink color used in headers and buttons
          light: '#FF74B1',
        },
        secondary: {
          DEFAULT: '#4ECDC4', // The blue accent color
          light: '#7BE0DA',
        },
        dark: {
          DEFAULT: '#0D1117', // The dark background
          lighter: '#1E2A3A', // Slightly lighter dark for cards
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};