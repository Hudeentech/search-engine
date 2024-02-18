/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: {
          bg: '#28282b',
          subText: 'Gray-300',
          heading: 'blue-500',
          subHeading: 'Gray-800',
          hover: 'Gray-500',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'dark'],
    },
  },
  plugins: [],
}

