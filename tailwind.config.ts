/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ['Expletus Sans', 'helvetica', 'sans-serif']
    },
    screens: {
      'xs': '380px',
      'sm': '540px',
      'md': '720px',
      'lg': '920px',
      'xl': '1040px'
    },
  },
  plugins: [],
};
