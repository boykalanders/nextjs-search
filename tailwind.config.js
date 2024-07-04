/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'berkshire': ['Berkshire Swash', 'cursive'],
      },
      fontSize: {
        'xxs': '0.65rem',
        'xxl': '2rem',
        'xxxl': '3rem',
      },
      fontWeight: {
        'extra-light': 200,
        'semi-bold': 600,
        'extra-bold': 800,
      },
    },
  },
};
