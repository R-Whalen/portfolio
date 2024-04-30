/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['roboto', 'helvetica', 'sans-serif']
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
