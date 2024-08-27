/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        'kaushan': ['Kaushan Script', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'Salmon-Red': '#FC5056',
        'Gray-2' : '#A9AFBB',
      }
    },
  },
  plugins: [],
}

