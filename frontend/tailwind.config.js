/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uw-dark': '#0A0F1E',
        'uw-navy': '#0D1B3E',
        'uw-blue': '#1A3A6B',
        'uw-accent': '#2563EB',
        'uw-light': '#E8F0FE',
        'uw-white': '#F8FAFF',
        'uw-gray': '#64748B',
      }
    },
  },
  plugins: [],
}