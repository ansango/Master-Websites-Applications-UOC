const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Permanent Marker", "cursive"],
      mono: ["Fira Code", "monospace"],
    },
    colors: {
      primary: "#fd3075",
      white: colors.white,
      gray: colors.gray[300],
      black: colors.black,
    },
    minHeight: {
      0: "0",
      custom: "500px",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
