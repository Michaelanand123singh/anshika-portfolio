/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#C1E8FF', // Lightest blue (#C1E8FF from image)
          200: '#7DA0CA', // Light blue (#7DA0CA from image)
          300: '#5483B3', // Medium-light blue (#5483B3 from image)
          400: '#336699', // Medium blue (added for completeness)
          500: '#052659', // Medium-dark blue (#052659 from image)
          700: '#021024', // Dark blue (#021024 from image)
          800: '#010C1C', // Darker blue (slightly darker than #021024)
          900: '#010A18', // Darkest blue (slightly darker than #010C1C)
        },
        // Keep the previous color schemes for compatibility
        primary: {
          DEFAULT: '#5483B3', // Using the medium-light blue as primary
          light: '#7DA0CA',
          dark: '#052659',
        },
        secondary: {
          DEFAULT: '#C1E8FF', // Using the lightest blue as secondary
          light: '#FFFFFF',
          dark: '#7DA0CA',
        },
        dark: {
          DEFAULT: '#021024', // Using the dark blue as dark background
          lighter: '#052659', // Using medium-dark blue as lighter dark
          lightest: '#336699', // Medium blue for hover states
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(1, 10, 24, 0.2), 0 4px 6px -2px rgba(1, 10, 24, 0.1)',
        'xl': '0 20px 25px -5px rgba(1, 10, 24, 0.2), 0 10px 10px -5px rgba(1, 10, 24, 0.1)',
      },
      borderRadius: {
        'pill': '9999px',
      },
      gradientColorStops: {
        'blue-gradient-start': '#021024',
        'blue-gradient-end': '#C1E8FF',
      },
    },
  },
  plugins: [],
};