/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        sbg: "#F0F0F0",

        primary: {
          main: "#3E1D0F",
          light1: "#AC562A",
          light2: "#FFDB9D",
          light3: "#722F0D",
          lightest: "#FFFBF2",
        },

        black: {
          dark: "#101828",
          DEFAULT: "#000",
        },
      },
    },
  },
  plugins: [],
};
