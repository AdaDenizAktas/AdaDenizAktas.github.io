/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00ffff',
        neonBlue: '#2266ff',
        darkBg: '#0a0a0a',
        slateGlass: 'rgba(30, 41, 59, 0.4)', // optional glass background
      },
      boxShadow: {
        glass: '0 0 25px rgba(30, 58, 138, 0.15)', // proper named shadow
      },
    },
  },
  plugins: [],
}
