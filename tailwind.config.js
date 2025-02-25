/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'miriam-libre': ['Miriam Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
