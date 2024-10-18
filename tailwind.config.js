/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gabarito', 'sans-serif'],
      serif: ['Gabarito', 'serif'],
      body: ['Gabarito', 'sans-serif'],
    },
  },
  plugins: [],
});
