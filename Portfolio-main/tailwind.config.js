/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- ça prend TOUS tes composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
