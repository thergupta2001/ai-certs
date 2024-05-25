/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 10px rgba(0, 0, 0, 0.3)', // Customize the shadow color and intensity as needed
      }
    },
  },
  plugins: [],
}