/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main_color":"#e2e8f0",
        "secondary_color":"#e3e3e3"
      }
    },
  },
  plugins: [],
}

