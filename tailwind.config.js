// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0f172a', // Fondo principal
        'space-blue': '#1e293b', // Color para los paneles
        'accent-cyan': '#22d3ee', // Acentos y highlights
        'accent-light': '#94a3b8', // Texto secundario
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Tipografía moderna
      }
    },
  },
  plugins: [],
}