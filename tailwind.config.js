/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        'kaushan': ['Kaushan Script', 'cursive'],
      },
      colors: {
        'Salmon-Red': '#FF4D4D',
      }
    },
  },
  plugins: [],
}

