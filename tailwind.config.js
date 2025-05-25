/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          dark: '#B38F2A',
          light: '#E5C158',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 